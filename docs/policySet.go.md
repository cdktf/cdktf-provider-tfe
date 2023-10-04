# `tfe_policy_set`

Refer to the Terraform Registory for docs: [`tfe_policy_set`](https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set).

# `policySet` Submodule <a name="`policySet` Submodule" id="@cdktf/provider-tfe.policySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySet <a name="PolicySet" id="@cdktf/provider-tfe.policySet.PolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set tfe_policy_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/policyset"

policyset.NewPolicySet(scope Construct, id *string, config PolicySetConfig) PolicySet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig">PolicySetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.config"></a>

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

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.policySet.PolicySet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.policySet.PolicySet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutVcsRepo` <a name="PutVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo"></a>

```go
func PutVcsRepo(value PolicySetVcsRepo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.policySet.PolicySet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGlobal` <a name="ResetGlobal" id="@cdktf/provider-tfe.policySet.PolicySet.resetGlobal"></a>

```go
func ResetGlobal()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.policySet.PolicySet.resetId"></a>

```go
func ResetId()
```

##### `ResetKind` <a name="ResetKind" id="@cdktf/provider-tfe.policySet.PolicySet.resetKind"></a>

```go
func ResetKind()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.policySet.PolicySet.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOverridable` <a name="ResetOverridable" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverridable"></a>

```go
func ResetOverridable()
```

##### `ResetPoliciesPath` <a name="ResetPoliciesPath" id="@cdktf/provider-tfe.policySet.PolicySet.resetPoliciesPath"></a>

```go
func ResetPoliciesPath()
```

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktf/provider-tfe.policySet.PolicySet.resetPolicyIds"></a>

```go
func ResetPolicyIds()
```

##### `ResetSlug` <a name="ResetSlug" id="@cdktf/provider-tfe.policySet.PolicySet.resetSlug"></a>

```go
func ResetSlug()
```

##### `ResetVcsRepo` <a name="ResetVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.resetVcsRepo"></a>

```go
func ResetVcsRepo()
```

##### `ResetWorkspaceIds` <a name="ResetWorkspaceIds" id="@cdktf/provider-tfe.policySet.PolicySet.resetWorkspaceIds"></a>

```go
func ResetWorkspaceIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/policyset"

policyset.PolicySet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/policyset"

policyset.PolicySet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/policyset"

policyset.PolicySet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.globalInput">GlobalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput">OverridableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput">PoliciesPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput">PolicyIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slugInput">SlugInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput">VcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput">WorkspaceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.global">Global</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridable">Overridable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath">PoliciesPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIds">PolicyIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slug">Slug</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.policySet.PolicySet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.policySet.PolicySet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.policySet.PolicySet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.policySet.PolicySet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.policySet.PolicySet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.policySet.PolicySet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.policySet.PolicySet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VcsRepo`<sup>Required</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo"></a>

```go
func VcsRepo() PolicySetVcsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalInput`<sup>Optional</sup> <a name="GlobalInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.globalInput"></a>

```go
func GlobalInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `OverridableInput`<sup>Optional</sup> <a name="OverridableInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput"></a>

```go
func OverridableInput() interface{}
```

- *Type:* interface{}

---

##### `PoliciesPathInput`<sup>Optional</sup> <a name="PoliciesPathInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput"></a>

```go
func PoliciesPathInput() *string
```

- *Type:* *string

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput"></a>

```go
func PolicyIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SlugInput`<sup>Optional</sup> <a name="SlugInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.slugInput"></a>

```go
func SlugInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `VcsRepoInput`<sup>Optional</sup> <a name="VcsRepoInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput"></a>

```go
func VcsRepoInput() PolicySetVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---

##### `WorkspaceIdsInput`<sup>Optional</sup> <a name="WorkspaceIdsInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput"></a>

```go
func WorkspaceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.policySet.PolicySet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Global`<sup>Required</sup> <a name="Global" id="@cdktf/provider-tfe.policySet.PolicySet.property.global"></a>

```go
func Global() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.policySet.PolicySet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="@cdktf/provider-tfe.policySet.PolicySet.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.policySet.PolicySet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.policySet.PolicySet.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Overridable`<sup>Required</sup> <a name="Overridable" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridable"></a>

```go
func Overridable() interface{}
```

- *Type:* interface{}

---

##### `PoliciesPath`<sup>Required</sup> <a name="PoliciesPath" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath"></a>

```go
func PoliciesPath() *string
```

- *Type:* *string

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIds"></a>

```go
func PolicyIds() *[]*string
```

- *Type:* *[]*string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-tfe.policySet.PolicySet.property.slug"></a>

```go
func Slug() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds"></a>

```go
func WorkspaceIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetConfig <a name="PolicySetConfig" id="@cdktf/provider-tfe.policySet.PolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/policyset"

&policyset.PolicySetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Global: interface{},
	Id: *string,
	Kind: *string,
	Organization: *string,
	Overridable: interface{},
	PoliciesPath: *string,
	PolicyIds: *[]*string,
	Slug: *map[string]*string,
	VcsRepo: github.com/cdktf/cdktf-provider-tfe-go/tfe.policySet.PolicySetVcsRepo,
	WorkspaceIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#name PolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#description PolicySet#description}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.global">Global</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#global PolicySet#global}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#id PolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#kind PolicySet#kind}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#organization PolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable">Overridable</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#overridable PolicySet#overridable}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath">PoliciesPath</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#policies_path PolicySet#policies_path}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds">PolicyIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#policy_ids PolicySet#policy_ids}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug">Slug</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#slug PolicySet#slug}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#name PolicySet#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#description PolicySet#description}.

---

##### `Global`<sup>Optional</sup> <a name="Global" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.global"></a>

```go
Global interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#global PolicySet#global}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#id PolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Kind`<sup>Optional</sup> <a name="Kind" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#kind PolicySet#kind}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#organization PolicySet#organization}.

---

##### `Overridable`<sup>Optional</sup> <a name="Overridable" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable"></a>

```go
Overridable interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#overridable PolicySet#overridable}.

---

##### `PoliciesPath`<sup>Optional</sup> <a name="PoliciesPath" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath"></a>

```go
PoliciesPath *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#policies_path PolicySet#policies_path}.

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds"></a>

```go
PolicyIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#policy_ids PolicySet#policy_ids}.

---

##### `Slug`<sup>Optional</sup> <a name="Slug" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug"></a>

```go
Slug *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#slug PolicySet#slug}.

---

##### `VcsRepo`<sup>Optional</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo"></a>

```go
VcsRepo PolicySetVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#vcs_repo PolicySet#vcs_repo}

---

##### `WorkspaceIds`<sup>Optional</sup> <a name="WorkspaceIds" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds"></a>

```go
WorkspaceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}.

---

### PolicySetVcsRepo <a name="PolicySetVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/policyset"

&policyset.PolicySetVcsRepo {
	Identifier: *string,
	Branch: *string,
	GithubAppInstallationId: *string,
	IngressSubmodules: interface{},
	OauthTokenId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#identifier PolicySet#identifier}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#branch PolicySet#branch}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules">IngressSubmodules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId">OauthTokenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}. |

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#identifier PolicySet#identifier}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#branch PolicySet#branch}.

---

##### `GithubAppInstallationId`<sup>Optional</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId"></a>

```go
GithubAppInstallationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}.

---

##### `IngressSubmodules`<sup>Optional</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules"></a>

```go
IngressSubmodules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}.

---

##### `OauthTokenId`<sup>Optional</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId"></a>

```go
OauthTokenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetVcsRepoOutputReference <a name="PolicySetVcsRepoOutputReference" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/policyset"

policyset.NewPolicySetVcsRepoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PolicySetVcsRepoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

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

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetGithubAppInstallationId` <a name="ResetGithubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```go
func ResetGithubAppInstallationId()
```

##### `ResetIngressSubmodules` <a name="ResetIngressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetIngressSubmodules"></a>

```go
func ResetIngressSubmodules()
```

##### `ResetOauthTokenId` <a name="ResetOauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetOauthTokenId"></a>

```go
func ResetOauthTokenId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput">GithubAppInstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput">IngressSubmodulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput">OauthTokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules">IngressSubmodules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId">OauthTokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `GithubAppInstallationIdInput`<sup>Optional</sup> <a name="GithubAppInstallationIdInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```go
func GithubAppInstallationIdInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `IngressSubmodulesInput`<sup>Optional</sup> <a name="IngressSubmodulesInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```go
func IngressSubmodulesInput() interface{}
```

- *Type:* interface{}

---

##### `OauthTokenIdInput`<sup>Optional</sup> <a name="OauthTokenIdInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```go
func OauthTokenIdInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `GithubAppInstallationId`<sup>Required</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId"></a>

```go
func GithubAppInstallationId() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `IngressSubmodules`<sup>Required</sup> <a name="IngressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules"></a>

```go
func IngressSubmodules() interface{}
```

- *Type:* interface{}

---

##### `OauthTokenId`<sup>Required</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId"></a>

```go
func OauthTokenId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue"></a>

```go
func InternalValue() PolicySetVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---



