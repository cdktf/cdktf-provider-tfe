# `tfe_agent_pool_allowed_workspaces`

Refer to the Terraform Registory for docs: [`tfe_agent_pool_allowed_workspaces`](https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces).

# `agentPoolAllowedWorkspaces` Submodule <a name="`agentPoolAllowedWorkspaces` Submodule" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AgentPoolAllowedWorkspaces <a name="AgentPoolAllowedWorkspaces" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces tfe_agent_pool_allowed_workspaces}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/agentpoolallowedworkspaces"

agentpoolallowedworkspaces.NewAgentPoolAllowedWorkspaces(scope Construct, id *string, config AgentPoolAllowedWorkspacesConfig) AgentPoolAllowedWorkspaces
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig">AgentPoolAllowedWorkspacesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig">AgentPoolAllowedWorkspacesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/agentpoolallowedworkspaces"

agentpoolallowedworkspaces.AgentPoolAllowedWorkspaces_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/agentpoolallowedworkspaces"

agentpoolallowedworkspaces.AgentPoolAllowedWorkspaces_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/agentpoolallowedworkspaces"

agentpoolallowedworkspaces.AgentPoolAllowedWorkspaces_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolIdInput">AgentPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIdsInput">AllowedWorkspaceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolId">AgentPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIds">AllowedWorkspaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentPoolIdInput`<sup>Optional</sup> <a name="AgentPoolIdInput" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolIdInput"></a>

```go
func AgentPoolIdInput() *string
```

- *Type:* *string

---

##### `AllowedWorkspaceIdsInput`<sup>Optional</sup> <a name="AllowedWorkspaceIdsInput" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIdsInput"></a>

```go
func AllowedWorkspaceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.agentPoolId"></a>

```go
func AgentPoolId() *string
```

- *Type:* *string

---

##### `AllowedWorkspaceIds`<sup>Required</sup> <a name="AllowedWorkspaceIds" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.allowedWorkspaceIds"></a>

```go
func AllowedWorkspaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspaces.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AgentPoolAllowedWorkspacesConfig <a name="AgentPoolAllowedWorkspacesConfig" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/agentpoolallowedworkspaces"

&agentpoolallowedworkspaces.AgentPoolAllowedWorkspacesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentPoolId: *string,
	AllowedWorkspaceIds: *[]*string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.agentPoolId">AgentPoolId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.allowedWorkspaceIds">AllowedWorkspaceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}. |
| <code><a href="#@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.agentPoolId"></a>

```go
AgentPoolId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces#agent_pool_id AgentPoolAllowedWorkspaces#agent_pool_id}.

---

##### `AllowedWorkspaceIds`<sup>Required</sup> <a name="AllowedWorkspaceIds" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.allowedWorkspaceIds"></a>

```go
AllowedWorkspaceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces#allowed_workspace_ids AgentPoolAllowedWorkspaces#allowed_workspace_ids}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.agentPoolAllowedWorkspaces.AgentPoolAllowedWorkspacesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/resources/agent_pool_allowed_workspaces#id AgentPoolAllowedWorkspaces#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



