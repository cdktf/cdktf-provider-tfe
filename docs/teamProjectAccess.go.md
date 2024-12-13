# `teamProjectAccess` Submodule <a name="`teamProjectAccess` Submodule" id="@cdktf/provider-tfe.teamProjectAccess"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamProjectAccess <a name="TeamProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access tfe_team_project_access}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.NewTeamProjectAccess(scope Construct, id *string, config TeamProjectAccessConfig) TeamProjectAccess
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig">TeamProjectAccessConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig">TeamProjectAccessConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess">PutProjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess">PutWorkspaceAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess">ResetProjectAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess">ResetWorkspaceAccess</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProjectAccess` <a name="PutProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess"></a>

```go
func PutProjectAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putProjectAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `PutWorkspaceAccess` <a name="PutWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess"></a>

```go
func PutWorkspaceAccess(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.putWorkspaceAccess.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectAccess` <a name="ResetProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetProjectAccess"></a>

```go
func ResetProjectAccess()
```

##### `ResetWorkspaceAccess` <a name="ResetWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.resetWorkspaceAccess"></a>

```go
func ResetWorkspaceAccess()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.TeamProjectAccess_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.TeamProjectAccess_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.TeamProjectAccess_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.TeamProjectAccess_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TeamProjectAccess resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TeamProjectAccess to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TeamProjectAccess that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TeamProjectAccess to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess">ProjectAccess</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess">WorkspaceAccess</a></code> | <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput">AccessInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput">ProjectAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput">WorkspaceAccessInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access">Access</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectAccess`<sup>Required</sup> <a name="ProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccess"></a>

```go
func ProjectAccess() TeamProjectAccessProjectAccessList
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList">TeamProjectAccessProjectAccessList</a>

---

##### `WorkspaceAccess`<sup>Required</sup> <a name="WorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccess"></a>

```go
func WorkspaceAccess() TeamProjectAccessWorkspaceAccessList
```

- *Type:* <a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList">TeamProjectAccessWorkspaceAccessList</a>

---

##### `AccessInput`<sup>Optional</sup> <a name="AccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.accessInput"></a>

```go
func AccessInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectAccessInput`<sup>Optional</sup> <a name="ProjectAccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectAccessInput"></a>

```go
func ProjectAccessInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceAccessInput`<sup>Optional</sup> <a name="WorkspaceAccessInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.workspaceAccessInput"></a>

```go
func WorkspaceAccessInput() interface{}
```

- *Type:* interface{}

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.access"></a>

```go
func Access() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccess.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamProjectAccessConfig <a name="TeamProjectAccessConfig" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

&teamprojectaccess.TeamProjectAccessConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Access: *string,
	ProjectId: *string,
	TeamId: *string,
	Id: *string,
	ProjectAccess: interface{},
	WorkspaceAccess: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access">Access</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#access TeamProjectAccess#access}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#id TeamProjectAccess#id}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess">ProjectAccess</a></code> | <code>interface{}</code> | project_access block. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess">WorkspaceAccess</a></code> | <code>interface{}</code> | workspace_access block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Access`<sup>Required</sup> <a name="Access" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.access"></a>

```go
Access *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#access TeamProjectAccess#access}.

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#project_id TeamProjectAccess#project_id}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#team_id TeamProjectAccess#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#id TeamProjectAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectAccess`<sup>Optional</sup> <a name="ProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.projectAccess"></a>

```go
ProjectAccess interface{}
```

- *Type:* interface{}

project_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#project_access TeamProjectAccess#project_access}

---

##### `WorkspaceAccess`<sup>Optional</sup> <a name="WorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessConfig.property.workspaceAccess"></a>

```go
WorkspaceAccess interface{}
```

- *Type:* interface{}

workspace_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#workspace_access TeamProjectAccess#workspace_access}

---

### TeamProjectAccessProjectAccess <a name="TeamProjectAccessProjectAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

&teamprojectaccess.TeamProjectAccessProjectAccess {
	Settings: *string,
	Teams: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings">Settings</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams">Teams</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}. |

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.settings"></a>

```go
Settings *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#settings TeamProjectAccess#settings}.

---

##### `Teams`<sup>Optional</sup> <a name="Teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccess.property.teams"></a>

```go
Teams *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#teams TeamProjectAccess#teams}.

---

### TeamProjectAccessWorkspaceAccess <a name="TeamProjectAccessWorkspaceAccess" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

&teamprojectaccess.TeamProjectAccessWorkspaceAccess {
	Create: interface{},
	Delete: interface{},
	Locking: interface{},
	Move: interface{},
	Runs: *string,
	RunTasks: interface{},
	SentinelMocks: *string,
	StateVersions: *string,
	Variables: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create">Create</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#create TeamProjectAccess#create}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete">Delete</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking">Locking</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move">Move</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#move TeamProjectAccess#move}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs">Runs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks">RunTasks</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks">SentinelMocks</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions">StateVersions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables">Variables</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.create"></a>

```go
Create interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#create TeamProjectAccess#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.delete"></a>

```go
Delete interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#delete TeamProjectAccess#delete}.

---

##### `Locking`<sup>Optional</sup> <a name="Locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.locking"></a>

```go
Locking interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#locking TeamProjectAccess#locking}.

---

##### `Move`<sup>Optional</sup> <a name="Move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.move"></a>

```go
Move interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#move TeamProjectAccess#move}.

---

##### `Runs`<sup>Optional</sup> <a name="Runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runs"></a>

```go
Runs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#runs TeamProjectAccess#runs}.

---

##### `RunTasks`<sup>Optional</sup> <a name="RunTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.runTasks"></a>

```go
RunTasks interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#run_tasks TeamProjectAccess#run_tasks}.

---

##### `SentinelMocks`<sup>Optional</sup> <a name="SentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.sentinelMocks"></a>

```go
SentinelMocks *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#sentinel_mocks TeamProjectAccess#sentinel_mocks}.

---

##### `StateVersions`<sup>Optional</sup> <a name="StateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.stateVersions"></a>

```go
StateVersions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#state_versions TeamProjectAccess#state_versions}.

---

##### `Variables`<sup>Optional</sup> <a name="Variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccess.property.variables"></a>

```go
Variables *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/resources/team_project_access#variables TeamProjectAccess#variables}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamProjectAccessProjectAccessList <a name="TeamProjectAccessProjectAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.NewTeamProjectAccessProjectAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TeamProjectAccessProjectAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get"></a>

```go
func Get(index *f64) TeamProjectAccessProjectAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamProjectAccessProjectAccessOutputReference <a name="TeamProjectAccessProjectAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.NewTeamProjectAccessProjectAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TeamProjectAccessProjectAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings">ResetSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams">ResetTeams</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSettings` <a name="ResetSettings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetSettings"></a>

```go
func ResetSettings()
```

##### `ResetTeams` <a name="ResetTeams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.resetTeams"></a>

```go
func ResetTeams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput">SettingsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput">TeamsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings">Settings</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams">Teams</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settingsInput"></a>

```go
func SettingsInput() *string
```

- *Type:* *string

---

##### `TeamsInput`<sup>Optional</sup> <a name="TeamsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teamsInput"></a>

```go
func TeamsInput() *string
```

- *Type:* *string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.settings"></a>

```go
func Settings() *string
```

- *Type:* *string

---

##### `Teams`<sup>Required</sup> <a name="Teams" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.teams"></a>

```go
func Teams() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessProjectAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamProjectAccessWorkspaceAccessList <a name="TeamProjectAccessWorkspaceAccessList" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.NewTeamProjectAccessWorkspaceAccessList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) TeamProjectAccessWorkspaceAccessList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get"></a>

```go
func Get(index *f64) TeamProjectAccessWorkspaceAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### TeamProjectAccessWorkspaceAccessOutputReference <a name="TeamProjectAccessWorkspaceAccessOutputReference" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamprojectaccess"

teamprojectaccess.NewTeamProjectAccessWorkspaceAccessOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) TeamProjectAccessWorkspaceAccessOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking">ResetLocking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove">ResetMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns">ResetRuns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks">ResetRunTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks">ResetSentinelMocks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions">ResetStateVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables">ResetVariables</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetLocking` <a name="ResetLocking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetLocking"></a>

```go
func ResetLocking()
```

##### `ResetMove` <a name="ResetMove" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetMove"></a>

```go
func ResetMove()
```

##### `ResetRuns` <a name="ResetRuns" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRuns"></a>

```go
func ResetRuns()
```

##### `ResetRunTasks` <a name="ResetRunTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetRunTasks"></a>

```go
func ResetRunTasks()
```

##### `ResetSentinelMocks` <a name="ResetSentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetSentinelMocks"></a>

```go
func ResetSentinelMocks()
```

##### `ResetStateVersions` <a name="ResetStateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetStateVersions"></a>

```go
func ResetStateVersions()
```

##### `ResetVariables` <a name="ResetVariables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.resetVariables"></a>

```go
func ResetVariables()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput">CreateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput">DeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput">LockingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput">MoveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput">RunsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput">RunTasksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput">SentinelMocksInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput">StateVersionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput">VariablesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create">Create</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete">Delete</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking">Locking</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move">Move</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs">Runs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks">RunTasks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks">SentinelMocks</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions">StateVersions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables">Variables</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.createInput"></a>

```go
func CreateInput() interface{}
```

- *Type:* interface{}

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.deleteInput"></a>

```go
func DeleteInput() interface{}
```

- *Type:* interface{}

---

##### `LockingInput`<sup>Optional</sup> <a name="LockingInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.lockingInput"></a>

```go
func LockingInput() interface{}
```

- *Type:* interface{}

---

##### `MoveInput`<sup>Optional</sup> <a name="MoveInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.moveInput"></a>

```go
func MoveInput() interface{}
```

- *Type:* interface{}

---

##### `RunsInput`<sup>Optional</sup> <a name="RunsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runsInput"></a>

```go
func RunsInput() *string
```

- *Type:* *string

---

##### `RunTasksInput`<sup>Optional</sup> <a name="RunTasksInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasksInput"></a>

```go
func RunTasksInput() interface{}
```

- *Type:* interface{}

---

##### `SentinelMocksInput`<sup>Optional</sup> <a name="SentinelMocksInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocksInput"></a>

```go
func SentinelMocksInput() *string
```

- *Type:* *string

---

##### `StateVersionsInput`<sup>Optional</sup> <a name="StateVersionsInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersionsInput"></a>

```go
func StateVersionsInput() *string
```

- *Type:* *string

---

##### `VariablesInput`<sup>Optional</sup> <a name="VariablesInput" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variablesInput"></a>

```go
func VariablesInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.create"></a>

```go
func Create() interface{}
```

- *Type:* interface{}

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.delete"></a>

```go
func Delete() interface{}
```

- *Type:* interface{}

---

##### `Locking`<sup>Required</sup> <a name="Locking" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.locking"></a>

```go
func Locking() interface{}
```

- *Type:* interface{}

---

##### `Move`<sup>Required</sup> <a name="Move" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.move"></a>

```go
func Move() interface{}
```

- *Type:* interface{}

---

##### `Runs`<sup>Required</sup> <a name="Runs" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runs"></a>

```go
func Runs() *string
```

- *Type:* *string

---

##### `RunTasks`<sup>Required</sup> <a name="RunTasks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.runTasks"></a>

```go
func RunTasks() interface{}
```

- *Type:* interface{}

---

##### `SentinelMocks`<sup>Required</sup> <a name="SentinelMocks" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.sentinelMocks"></a>

```go
func SentinelMocks() *string
```

- *Type:* *string

---

##### `StateVersions`<sup>Required</sup> <a name="StateVersions" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.stateVersions"></a>

```go
func StateVersions() *string
```

- *Type:* *string

---

##### `Variables`<sup>Required</sup> <a name="Variables" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.variables"></a>

```go
func Variables() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.teamProjectAccess.TeamProjectAccessWorkspaceAccessOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



