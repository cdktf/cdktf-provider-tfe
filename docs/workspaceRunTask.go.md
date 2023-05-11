# `tfe_workspace_run_task`

Refer to the Terraform Registory for docs: [`tfe_workspace_run_task`](https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task).

# `workspaceRunTask` Submodule <a name="`workspaceRunTask` Submodule" id="@cdktf/provider-tfe.workspaceRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspaceRunTask <a name="WorkspaceRunTask" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task tfe_workspace_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/workspaceruntask"

workspaceruntask.NewWorkspaceRunTask(scope Construct, id *string, config WorkspaceRunTaskConfig) WorkspaceRunTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig">WorkspaceRunTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig">WorkspaceRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage">ResetStage</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetId"></a>

```go
func ResetId()
```

##### `ResetStage` <a name="ResetStage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.resetStage"></a>

```go
func ResetStage()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/workspaceruntask"

workspaceruntask.WorkspaceRunTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/workspaceruntask"

workspaceruntask.WorkspaceRunTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/workspaceruntask"

workspaceruntask.WorkspaceRunTask_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput">EnforcementLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput">StageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput">TaskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel">EnforcementLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage">Stage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId">TaskId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnforcementLevelInput`<sup>Optional</sup> <a name="EnforcementLevelInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevelInput"></a>

```go
func EnforcementLevelInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StageInput`<sup>Optional</sup> <a name="StageInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stageInput"></a>

```go
func StageInput() *string
```

- *Type:* *string

---

##### `TaskIdInput`<sup>Optional</sup> <a name="TaskIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskIdInput"></a>

```go
func TaskIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.enforcementLevel"></a>

```go
func EnforcementLevel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Stage`<sup>Required</sup> <a name="Stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.stage"></a>

```go
func Stage() *string
```

- *Type:* *string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.taskId"></a>

```go
func TaskId() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceRunTaskConfig <a name="WorkspaceRunTaskConfig" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/workspaceruntask"

&workspaceruntask.WorkspaceRunTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EnforcementLevel: *string,
	TaskId: *string,
	WorkspaceId: *string,
	Id: *string,
	Stage: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel">EnforcementLevel</a></code> | <code>*string</code> | The enforcement level of the task. Valid values are `advisory` and `mandatory`. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId">TaskId</a></code> | <code>*string</code> | The id of the Run task to associate to the Workspace. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | The id of the workspace to associate the Run task to. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task#id WorkspaceRunTask#id}. |
| <code><a href="#@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage">Stage</a></code> | <code>*string</code> | The stage to run the task in. Valid values are `pre_plan`, `post_plan` and `pre_apply`. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.enforcementLevel"></a>

```go
EnforcementLevel *string
```

- *Type:* *string

The enforcement level of the task. Valid values are `advisory` and `mandatory`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.taskId"></a>

```go
TaskId *string
```

- *Type:* *string

The id of the Run task to associate to the Workspace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task#task_id WorkspaceRunTask#task_id}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

The id of the workspace to associate the Run task to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task#id WorkspaceRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Stage`<sup>Optional</sup> <a name="Stage" id="@cdktf/provider-tfe.workspaceRunTask.WorkspaceRunTaskConfig.property.stage"></a>

```go
Stage *string
```

- *Type:* *string

The stage to run the task in. Valid values are `pre_plan`, `post_plan` and `pre_apply`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.1/docs/resources/workspace_run_task#stage WorkspaceRunTask#stage}

---



