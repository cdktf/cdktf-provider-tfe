# `tfe_workspace_run`

Refer to the Terraform Registory for docs: [`tfe_workspace_run`](https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run).

# `workspaceRun` Submodule <a name="`workspaceRun` Submodule" id="@cdktf/provider-tfe.workspaceRun"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRun <a name="WorkspaceRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run tfe_workspace_run}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

workspacerun.NewWorkspaceRun(scope Construct, id *string, config WorkspaceRunConfig) WorkspaceRun
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig">WorkspaceRunConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig">WorkspaceRunConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply">PutApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy">PutDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply">ResetApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy">ResetDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutApply` <a name="PutApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply"></a>

```go
func PutApply(value WorkspaceRunApply)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putApply.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `PutDestroy` <a name="PutDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy"></a>

```go
func PutDestroy(value WorkspaceRunDestroy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.putDestroy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `ResetApply` <a name="ResetApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetApply"></a>

```go
func ResetApply()
```

##### `ResetDestroy` <a name="ResetDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetDestroy"></a>

```go
func ResetDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

workspacerun.WorkspaceRun_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

workspacerun.WorkspaceRun_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

workspacerun.WorkspaceRun_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply">Apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy">Destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput">ApplyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput">DestroyInput</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Apply`<sup>Required</sup> <a name="Apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.apply"></a>

```go
func Apply() WorkspaceRunApplyOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference">WorkspaceRunApplyOutputReference</a>

---

##### `Destroy`<sup>Required</sup> <a name="Destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroy"></a>

```go
func Destroy() WorkspaceRunDestroyOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference">WorkspaceRunDestroyOutputReference</a>

---

##### `ApplyInput`<sup>Optional</sup> <a name="ApplyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.applyInput"></a>

```go
func ApplyInput() WorkspaceRunApply
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---

##### `DestroyInput`<sup>Optional</sup> <a name="DestroyInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.destroyInput"></a>

```go
func DestroyInput() WorkspaceRunDestroy
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRun.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunApply <a name="WorkspaceRunApply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

&workspacerun.WorkspaceRunApply {
	ManualConfirm: interface{},
	Retry: interface{},
	RetryAttempts: *f64,
	RetryBackoffMax: *f64,
	RetryBackoffMin: *f64,
	WaitForRun: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm">ManualConfirm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry">Retry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun">WaitForRun</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.manualConfirm"></a>

```go
ManualConfirm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retry"></a>

```go
Retry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `RetryAttempts`<sup>Optional</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryAttempts"></a>

```go
RetryAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `RetryBackoffMax`<sup>Optional</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMax"></a>

```go
RetryBackoffMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `RetryBackoffMin`<sup>Optional</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.retryBackoffMin"></a>

```go
RetryBackoffMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `WaitForRun`<sup>Optional</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply.property.waitForRun"></a>

```go
WaitForRun interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

### WorkspaceRunConfig <a name="WorkspaceRunConfig" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

&workspacerun.WorkspaceRunConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkspaceId: *string,
	Apply: github.com/cdktf/cdktf-provider-tfe-go/tfe/v10.workspaceRun.WorkspaceRunApply,
	Destroy: github.com/cdktf/cdktf-provider-tfe-go/tfe/v10.workspaceRun.WorkspaceRunDestroy,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply">Apply</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | apply block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy">Destroy</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | destroy block. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#id WorkspaceRun#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}.

---

##### `Apply`<sup>Optional</sup> <a name="Apply" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.apply"></a>

```go
Apply WorkspaceRunApply
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

apply block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#apply WorkspaceRun#apply}

---

##### `Destroy`<sup>Optional</sup> <a name="Destroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.destroy"></a>

```go
Destroy WorkspaceRunDestroy
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

destroy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#destroy WorkspaceRun#destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#id WorkspaceRun#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkspaceRunDestroy <a name="WorkspaceRunDestroy" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

&workspacerun.WorkspaceRunDestroy {
	ManualConfirm: interface{},
	Retry: interface{},
	RetryAttempts: *f64,
	RetryBackoffMax: *f64,
	RetryBackoffMin: *f64,
	WaitForRun: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm">ManualConfirm</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry">Retry</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry WorkspaceRun#retry}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun">WaitForRun</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}. |

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.manualConfirm"></a>

```go
ManualConfirm interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}.

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retry"></a>

```go
Retry interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry WorkspaceRun#retry}.

---

##### `RetryAttempts`<sup>Optional</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryAttempts"></a>

```go
RetryAttempts *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}.

---

##### `RetryBackoffMax`<sup>Optional</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMax"></a>

```go
RetryBackoffMax *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}.

---

##### `RetryBackoffMin`<sup>Optional</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.retryBackoffMin"></a>

```go
RetryBackoffMin *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}.

---

##### `WaitForRun`<sup>Optional</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy.property.waitForRun"></a>

```go
WaitForRun interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.49.2/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceRunApplyOutputReference <a name="WorkspaceRunApplyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

workspacerun.NewWorkspaceRunApplyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceRunApplyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts">ResetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax">ResetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin">ResetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun">ResetWaitForRun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetRetryAttempts` <a name="ResetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryAttempts"></a>

```go
func ResetRetryAttempts()
```

##### `ResetRetryBackoffMax` <a name="ResetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMax"></a>

```go
func ResetRetryBackoffMax()
```

##### `ResetRetryBackoffMin` <a name="ResetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetRetryBackoffMin"></a>

```go
func ResetRetryBackoffMin()
```

##### `ResetWaitForRun` <a name="ResetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.resetWaitForRun"></a>

```go
func ResetWaitForRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput">ManualConfirmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput">RetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput">RetryBackoffMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput">RetryBackoffMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput">WaitForRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm">ManualConfirm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry">Retry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun">WaitForRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualConfirmInput`<sup>Optional</sup> <a name="ManualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirmInput"></a>

```go
func ManualConfirmInput() interface{}
```

- *Type:* interface{}

---

##### `RetryAttemptsInput`<sup>Optional</sup> <a name="RetryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttemptsInput"></a>

```go
func RetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMaxInput`<sup>Optional</sup> <a name="RetryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMaxInput"></a>

```go
func RetryBackoffMaxInput() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMinInput`<sup>Optional</sup> <a name="RetryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMinInput"></a>

```go
func RetryBackoffMinInput() *f64
```

- *Type:* *f64

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForRunInput`<sup>Optional</sup> <a name="WaitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRunInput"></a>

```go
func WaitForRunInput() interface{}
```

- *Type:* interface{}

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.manualConfirm"></a>

```go
func ManualConfirm() interface{}
```

- *Type:* interface{}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retry"></a>

```go
func Retry() interface{}
```

- *Type:* interface{}

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryAttempts"></a>

```go
func RetryAttempts() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMax`<sup>Required</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMax"></a>

```go
func RetryBackoffMax() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMin`<sup>Required</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.retryBackoffMin"></a>

```go
func RetryBackoffMin() *f64
```

- *Type:* *f64

---

##### `WaitForRun`<sup>Required</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.waitForRun"></a>

```go
func WaitForRun() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunApplyOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspaceRunApply
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunApply">WorkspaceRunApply</a>

---


### WorkspaceRunDestroyOutputReference <a name="WorkspaceRunDestroyOutputReference" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/workspacerun"

workspacerun.NewWorkspaceRunDestroyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WorkspaceRunDestroyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts">ResetRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax">ResetRetryBackoffMax</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin">ResetRetryBackoffMin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun">ResetWaitForRun</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetry"></a>

```go
func ResetRetry()
```

##### `ResetRetryAttempts` <a name="ResetRetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryAttempts"></a>

```go
func ResetRetryAttempts()
```

##### `ResetRetryBackoffMax` <a name="ResetRetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMax"></a>

```go
func ResetRetryBackoffMax()
```

##### `ResetRetryBackoffMin` <a name="ResetRetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetRetryBackoffMin"></a>

```go
func ResetRetryBackoffMin()
```

##### `ResetWaitForRun` <a name="ResetWaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.resetWaitForRun"></a>

```go
func ResetWaitForRun()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput">ManualConfirmInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput">RetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput">RetryBackoffMaxInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput">RetryBackoffMinInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput">RetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput">WaitForRunInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm">ManualConfirm</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry">Retry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts">RetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax">RetryBackoffMax</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin">RetryBackoffMin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun">WaitForRun</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ManualConfirmInput`<sup>Optional</sup> <a name="ManualConfirmInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirmInput"></a>

```go
func ManualConfirmInput() interface{}
```

- *Type:* interface{}

---

##### `RetryAttemptsInput`<sup>Optional</sup> <a name="RetryAttemptsInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttemptsInput"></a>

```go
func RetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMaxInput`<sup>Optional</sup> <a name="RetryBackoffMaxInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMaxInput"></a>

```go
func RetryBackoffMaxInput() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMinInput`<sup>Optional</sup> <a name="RetryBackoffMinInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMinInput"></a>

```go
func RetryBackoffMinInput() *f64
```

- *Type:* *f64

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryInput"></a>

```go
func RetryInput() interface{}
```

- *Type:* interface{}

---

##### `WaitForRunInput`<sup>Optional</sup> <a name="WaitForRunInput" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRunInput"></a>

```go
func WaitForRunInput() interface{}
```

- *Type:* interface{}

---

##### `ManualConfirm`<sup>Required</sup> <a name="ManualConfirm" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.manualConfirm"></a>

```go
func ManualConfirm() interface{}
```

- *Type:* interface{}

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retry"></a>

```go
func Retry() interface{}
```

- *Type:* interface{}

---

##### `RetryAttempts`<sup>Required</sup> <a name="RetryAttempts" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryAttempts"></a>

```go
func RetryAttempts() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMax`<sup>Required</sup> <a name="RetryBackoffMax" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMax"></a>

```go
func RetryBackoffMax() *f64
```

- *Type:* *f64

---

##### `RetryBackoffMin`<sup>Required</sup> <a name="RetryBackoffMin" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.retryBackoffMin"></a>

```go
func RetryBackoffMin() *f64
```

- *Type:* *f64

---

##### `WaitForRun`<sup>Required</sup> <a name="WaitForRun" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.waitForRun"></a>

```go
func WaitForRun() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroyOutputReference.property.internalValue"></a>

```go
func InternalValue() WorkspaceRunDestroy
```

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRun.WorkspaceRunDestroy">WorkspaceRunDestroy</a>

---



