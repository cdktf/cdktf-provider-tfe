# `data_tfe_team_project_access`

Refer to the Terraform Registory for docs: [`data_tfe_team_project_access`](https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access).

# `dataTfeTeamProjectAccess` Submodule <a name="`dataTfeTeamProjectAccess` Submodule" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeTeamProjectAccess <a name="DataTfeTeamProjectAccess" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access tfe_team_project_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.NewDataTfeTeamProjectAccess(scope Construct, id *string, config DataTfeTeamProjectAccessConfig) DataTfeTeamProjectAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig">DataTfeTeamProjectAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig">DataTfeTeamProjectAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.DataTfeTeamProjectAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.DataTfeTeamProjectAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.DataTfeTeamProjectAccess_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.projectAccess">ProjectAccess</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList">DataTfeTeamProjectAccessProjectAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.workspaceAccess">WorkspaceAccess</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList">DataTfeTeamProjectAccessWorkspaceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `ProjectAccess`<sup>Required</sup> <a name="ProjectAccess" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.projectAccess"></a>

```go
func ProjectAccess() DataTfeTeamProjectAccessProjectAccessList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList">DataTfeTeamProjectAccessProjectAccessList</a>

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.workspaceAccess"></a>

```go
func WorkspaceAccess() DataTfeTeamProjectAccessWorkspaceAccessList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList">DataTfeTeamProjectAccessWorkspaceAccessList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeTeamProjectAccessConfig <a name="DataTfeTeamProjectAccessConfig" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

&datatfeteamprojectaccess.DataTfeTeamProjectAccessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	TeamId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access#project_id DataTfeTeamProjectAccess#project_id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access#team_id DataTfeTeamProjectAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access#id DataTfeTeamProjectAccess#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access#project_id DataTfeTeamProjectAccess#project_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access#team_id DataTfeTeamProjectAccess#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.1/docs/data-sources/team_project_access#id DataTfeTeamProjectAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeTeamProjectAccessProjectAccess <a name="DataTfeTeamProjectAccessProjectAccess" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

&datatfeteamprojectaccess.DataTfeTeamProjectAccessProjectAccess {

}
```


### DataTfeTeamProjectAccessWorkspaceAccess <a name="DataTfeTeamProjectAccessWorkspaceAccess" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

&datatfeteamprojectaccess.DataTfeTeamProjectAccessWorkspaceAccess {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeTeamProjectAccessProjectAccessList <a name="DataTfeTeamProjectAccessProjectAccessList" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.NewDataTfeTeamProjectAccessProjectAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataTfeTeamProjectAccessProjectAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.get"></a>

```go
func Get(index *f64) DataTfeTeamProjectAccessProjectAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataTfeTeamProjectAccessProjectAccessOutputReference <a name="DataTfeTeamProjectAccessProjectAccessOutputReference" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.NewDataTfeTeamProjectAccessProjectAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataTfeTeamProjectAccessProjectAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.settings">Settings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.teams">Teams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccess">DataTfeTeamProjectAccessProjectAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.settings"></a>

```go
func Settings() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.teams"></a>

```go
func Teams() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataTfeTeamProjectAccessProjectAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessProjectAccess">DataTfeTeamProjectAccessProjectAccess</a>

---


### DataTfeTeamProjectAccessWorkspaceAccessList <a name="DataTfeTeamProjectAccessWorkspaceAccessList" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.NewDataTfeTeamProjectAccessWorkspaceAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataTfeTeamProjectAccessWorkspaceAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.get"></a>

```go
func Get(index *f64) DataTfeTeamProjectAccessWorkspaceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataTfeTeamProjectAccessWorkspaceAccessOutputReference <a name="DataTfeTeamProjectAccessWorkspaceAccessOutputReference" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfeteamprojectaccess"

datatfeteamprojectaccess.NewDataTfeTeamProjectAccessWorkspaceAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataTfeTeamProjectAccessWorkspaceAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.create">Create</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.delete">Delete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.locking">Locking</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.move">Move</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.runs">Runs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.runTasks">RunTasks</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks">SentinelMocks</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions">StateVersions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.variables">Variables</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccess">DataTfeTeamProjectAccessWorkspaceAccess</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.create"></a>

```go
func Create() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.delete"></a>

```go
func Delete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Locking`<sup>Required</sup> <a name="Locking" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.locking"></a>

```go
func Locking() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Move`<sup>Required</sup> <a name="Move" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.move"></a>

```go
func Move() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Runs`<sup>Required</sup> <a name="Runs" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.runs"></a>

```go
func Runs() *string
```

- *Type:* *string

---

##### `RunTasks`<sup>Required</sup> <a name="RunTasks" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.runTasks"></a>

```go
func RunTasks() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `SentinelMocks`<sup>Required</sup> <a name="SentinelMocks" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks"></a>

```go
func SentinelMocks() *string
```

- *Type:* *string

---

##### `StateVersions`<sup>Required</sup> <a name="StateVersions" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions"></a>

```go
func StateVersions() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.variables"></a>

```go
func Variables() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() DataTfeTeamProjectAccessWorkspaceAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeTeamProjectAccess.DataTfeTeamProjectAccessWorkspaceAccess">DataTfeTeamProjectAccessWorkspaceAccess</a>

---



