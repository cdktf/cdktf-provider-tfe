# `tfe_team`

Refer to the Terraform Registory for docs: [`tfe_team`](https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team).

# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-tfe.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-tfe.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team tfe_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.Team.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/team"

team.NewTeam(scope Construct, id *string, config TeamConfig) Team
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamConfig">TeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamConfig">TeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.team.Team.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.team.Team.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.putOrganizationAccess">PutOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganizationAccess">ResetOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetSsoTeamId">ResetSsoTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetVisibility">ResetVisibility</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.team.Team.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.team.Team.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.team.Team.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.team.Team.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.team.Team.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.team.Team.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.team.Team.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutOrganizationAccess` <a name="PutOrganizationAccess" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess"></a>

```go
func PutOrganizationAccess(value TeamOrganizationAccess)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.team.Team.resetId"></a>

```go
func ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.team.Team.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetOrganizationAccess` <a name="ResetOrganizationAccess" id="@cdktf/provider-tfe.team.Team.resetOrganizationAccess"></a>

```go
func ResetOrganizationAccess()
```

##### `ResetSsoTeamId` <a name="ResetSsoTeamId" id="@cdktf/provider-tfe.team.Team.resetSsoTeamId"></a>

```go
func ResetSsoTeamId()
```

##### `ResetVisibility` <a name="ResetVisibility" id="@cdktf/provider-tfe.team.Team.resetVisibility"></a>

```go
func ResetVisibility()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.team.Team.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/team"

team.Team_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.team.Team.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/team"

team.Team_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.team.Team.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/team"

team.Team_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccess">OrganizationAccess</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccessInput">OrganizationAccessInput</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput">SsoTeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibilityInput">VisibilityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamId">SsoTeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibility">Visibility</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.team.Team.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.team.Team.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.team.Team.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.team.Team.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.team.Team.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.team.Team.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.team.Team.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.team.Team.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.team.Team.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.team.Team.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.team.Team.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.team.Team.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.team.Team.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationAccess`<sup>Required</sup> <a name="OrganizationAccess" id="@cdktf/provider-tfe.team.Team.property.organizationAccess"></a>

```go
func OrganizationAccess() TeamOrganizationAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.team.Team.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.team.Team.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationAccessInput`<sup>Optional</sup> <a name="OrganizationAccessInput" id="@cdktf/provider-tfe.team.Team.property.organizationAccessInput"></a>

```go
func OrganizationAccessInput() TeamOrganizationAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.team.Team.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `SsoTeamIdInput`<sup>Optional</sup> <a name="SsoTeamIdInput" id="@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput"></a>

```go
func SsoTeamIdInput() *string
```

- *Type:* *string

---

##### `VisibilityInput`<sup>Optional</sup> <a name="VisibilityInput" id="@cdktf/provider-tfe.team.Team.property.visibilityInput"></a>

```go
func VisibilityInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.team.Team.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.team.Team.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.team.Team.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `SsoTeamId`<sup>Required</sup> <a name="SsoTeamId" id="@cdktf/provider-tfe.team.Team.property.ssoTeamId"></a>

```go
func SsoTeamId() *string
```

- *Type:* *string

---

##### `Visibility`<sup>Required</sup> <a name="Visibility" id="@cdktf/provider-tfe.team.Team.property.visibility"></a>

```go
func Visibility() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.team.Team.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-tfe.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/team"

&team.TeamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
	Organization: *string,
	OrganizationAccess: github.com/cdktf/cdktf-provider-tfe-go/tfe.team.TeamOrganizationAccess,
	SsoTeamId: *string,
	Visibility: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#name Team#name}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#organization Team#organization}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess">OrganizationAccess</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | organization_access block. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId">SsoTeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#sso_team_id Team#sso_team_id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.visibility">Visibility</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#visibility Team#visibility}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.team.TeamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.team.TeamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.team.TeamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.team.TeamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.team.TeamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.team.TeamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.team.TeamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.team.TeamConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#name Team#name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.team.TeamConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.team.TeamConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#organization Team#organization}.

---

##### `OrganizationAccess`<sup>Optional</sup> <a name="OrganizationAccess" id="@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess"></a>

```go
OrganizationAccess TeamOrganizationAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

organization_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#organization_access Team#organization_access}

---

##### `SsoTeamId`<sup>Optional</sup> <a name="SsoTeamId" id="@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId"></a>

```go
SsoTeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#sso_team_id Team#sso_team_id}.

---

##### `Visibility`<sup>Optional</sup> <a name="Visibility" id="@cdktf/provider-tfe.team.TeamConfig.property.visibility"></a>

```go
Visibility *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#visibility Team#visibility}.

---

### TeamOrganizationAccess <a name="TeamOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/team"

&team.TeamOrganizationAccess {
	ManageMembership: interface{},
	ManageModules: interface{},
	ManagePolicies: interface{},
	ManagePolicyOverrides: interface{},
	ManageProjects: interface{},
	ManageProviders: interface{},
	ManageRunTasks: interface{},
	ManageVcsSettings: interface{},
	ManageWorkspaces: interface{},
	ReadProjects: interface{},
	ReadWorkspaces: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership">ManageMembership</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_membership Team#manage_membership}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules">ManageModules</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_modules Team#manage_modules}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies">ManagePolicies</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_policies Team#manage_policies}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides">ManagePolicyOverrides</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects">ManageProjects</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_projects Team#manage_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders">ManageProviders</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_providers Team#manage_providers}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks">ManageRunTasks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_run_tasks Team#manage_run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings">ManageVcsSettings</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces">ManageWorkspaces</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_workspaces Team#manage_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects">ReadProjects</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#read_projects Team#read_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces">ReadWorkspaces</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#read_workspaces Team#read_workspaces}. |

---

##### `ManageMembership`<sup>Optional</sup> <a name="ManageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership"></a>

```go
ManageMembership interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_membership Team#manage_membership}.

---

##### `ManageModules`<sup>Optional</sup> <a name="ManageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules"></a>

```go
ManageModules interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_modules Team#manage_modules}.

---

##### `ManagePolicies`<sup>Optional</sup> <a name="ManagePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies"></a>

```go
ManagePolicies interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_policies Team#manage_policies}.

---

##### `ManagePolicyOverrides`<sup>Optional</sup> <a name="ManagePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides"></a>

```go
ManagePolicyOverrides interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}.

---

##### `ManageProjects`<sup>Optional</sup> <a name="ManageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects"></a>

```go
ManageProjects interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_projects Team#manage_projects}.

---

##### `ManageProviders`<sup>Optional</sup> <a name="ManageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders"></a>

```go
ManageProviders interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_providers Team#manage_providers}.

---

##### `ManageRunTasks`<sup>Optional</sup> <a name="ManageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks"></a>

```go
ManageRunTasks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_run_tasks Team#manage_run_tasks}.

---

##### `ManageVcsSettings`<sup>Optional</sup> <a name="ManageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings"></a>

```go
ManageVcsSettings interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}.

---

##### `ManageWorkspaces`<sup>Optional</sup> <a name="ManageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces"></a>

```go
ManageWorkspaces interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#manage_workspaces Team#manage_workspaces}.

---

##### `ReadProjects`<sup>Optional</sup> <a name="ReadProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects"></a>

```go
ReadProjects interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#read_projects Team#read_projects}.

---

##### `ReadWorkspaces`<sup>Optional</sup> <a name="ReadWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces"></a>

```go
ReadWorkspaces interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/team#read_workspaces Team#read_workspaces}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamOrganizationAccessOutputReference <a name="TeamOrganizationAccessOutputReference" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/team"

team.NewTeamOrganizationAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) TeamOrganizationAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership">ResetManageMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules">ResetManageModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies">ResetManagePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides">ResetManagePolicyOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects">ResetManageProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders">ResetManageProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks">ResetManageRunTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings">ResetManageVcsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces">ResetManageWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects">ResetReadProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces">ResetReadWorkspaces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetManageMembership` <a name="ResetManageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership"></a>

```go
func ResetManageMembership()
```

##### `ResetManageModules` <a name="ResetManageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules"></a>

```go
func ResetManageModules()
```

##### `ResetManagePolicies` <a name="ResetManagePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies"></a>

```go
func ResetManagePolicies()
```

##### `ResetManagePolicyOverrides` <a name="ResetManagePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides"></a>

```go
func ResetManagePolicyOverrides()
```

##### `ResetManageProjects` <a name="ResetManageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects"></a>

```go
func ResetManageProjects()
```

##### `ResetManageProviders` <a name="ResetManageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders"></a>

```go
func ResetManageProviders()
```

##### `ResetManageRunTasks` <a name="ResetManageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks"></a>

```go
func ResetManageRunTasks()
```

##### `ResetManageVcsSettings` <a name="ResetManageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings"></a>

```go
func ResetManageVcsSettings()
```

##### `ResetManageWorkspaces` <a name="ResetManageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces"></a>

```go
func ResetManageWorkspaces()
```

##### `ResetReadProjects` <a name="ResetReadProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects"></a>

```go
func ResetReadProjects()
```

##### `ResetReadWorkspaces` <a name="ResetReadWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces"></a>

```go
func ResetReadWorkspaces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput">ManageMembershipInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput">ManageModulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput">ManagePoliciesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput">ManagePolicyOverridesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput">ManageProjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput">ManageProvidersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput">ManageRunTasksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput">ManageVcsSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput">ManageWorkspacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput">ReadProjectsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput">ReadWorkspacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership">ManageMembership</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules">ManageModules</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies">ManagePolicies</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides">ManagePolicyOverrides</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects">ManageProjects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders">ManageProviders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks">ManageRunTasks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings">ManageVcsSettings</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces">ManageWorkspaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects">ReadProjects</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces">ReadWorkspaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManageMembershipInput`<sup>Optional</sup> <a name="ManageMembershipInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput"></a>

```go
func ManageMembershipInput() interface{}
```

- *Type:* interface{}

---

##### `ManageModulesInput`<sup>Optional</sup> <a name="ManageModulesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput"></a>

```go
func ManageModulesInput() interface{}
```

- *Type:* interface{}

---

##### `ManagePoliciesInput`<sup>Optional</sup> <a name="ManagePoliciesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput"></a>

```go
func ManagePoliciesInput() interface{}
```

- *Type:* interface{}

---

##### `ManagePolicyOverridesInput`<sup>Optional</sup> <a name="ManagePolicyOverridesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput"></a>

```go
func ManagePolicyOverridesInput() interface{}
```

- *Type:* interface{}

---

##### `ManageProjectsInput`<sup>Optional</sup> <a name="ManageProjectsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput"></a>

```go
func ManageProjectsInput() interface{}
```

- *Type:* interface{}

---

##### `ManageProvidersInput`<sup>Optional</sup> <a name="ManageProvidersInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput"></a>

```go
func ManageProvidersInput() interface{}
```

- *Type:* interface{}

---

##### `ManageRunTasksInput`<sup>Optional</sup> <a name="ManageRunTasksInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput"></a>

```go
func ManageRunTasksInput() interface{}
```

- *Type:* interface{}

---

##### `ManageVcsSettingsInput`<sup>Optional</sup> <a name="ManageVcsSettingsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput"></a>

```go
func ManageVcsSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ManageWorkspacesInput`<sup>Optional</sup> <a name="ManageWorkspacesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput"></a>

```go
func ManageWorkspacesInput() interface{}
```

- *Type:* interface{}

---

##### `ReadProjectsInput`<sup>Optional</sup> <a name="ReadProjectsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput"></a>

```go
func ReadProjectsInput() interface{}
```

- *Type:* interface{}

---

##### `ReadWorkspacesInput`<sup>Optional</sup> <a name="ReadWorkspacesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput"></a>

```go
func ReadWorkspacesInput() interface{}
```

- *Type:* interface{}

---

##### `ManageMembership`<sup>Required</sup> <a name="ManageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership"></a>

```go
func ManageMembership() interface{}
```

- *Type:* interface{}

---

##### `ManageModules`<sup>Required</sup> <a name="ManageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules"></a>

```go
func ManageModules() interface{}
```

- *Type:* interface{}

---

##### `ManagePolicies`<sup>Required</sup> <a name="ManagePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies"></a>

```go
func ManagePolicies() interface{}
```

- *Type:* interface{}

---

##### `ManagePolicyOverrides`<sup>Required</sup> <a name="ManagePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides"></a>

```go
func ManagePolicyOverrides() interface{}
```

- *Type:* interface{}

---

##### `ManageProjects`<sup>Required</sup> <a name="ManageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects"></a>

```go
func ManageProjects() interface{}
```

- *Type:* interface{}

---

##### `ManageProviders`<sup>Required</sup> <a name="ManageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders"></a>

```go
func ManageProviders() interface{}
```

- *Type:* interface{}

---

##### `ManageRunTasks`<sup>Required</sup> <a name="ManageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks"></a>

```go
func ManageRunTasks() interface{}
```

- *Type:* interface{}

---

##### `ManageVcsSettings`<sup>Required</sup> <a name="ManageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings"></a>

```go
func ManageVcsSettings() interface{}
```

- *Type:* interface{}

---

##### `ManageWorkspaces`<sup>Required</sup> <a name="ManageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces"></a>

```go
func ManageWorkspaces() interface{}
```

- *Type:* interface{}

---

##### `ReadProjects`<sup>Required</sup> <a name="ReadProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects"></a>

```go
func ReadProjects() interface{}
```

- *Type:* interface{}

---

##### `ReadWorkspaces`<sup>Required</sup> <a name="ReadWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces"></a>

```go
func ReadWorkspaces() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() TeamOrganizationAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---



