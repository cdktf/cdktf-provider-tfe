# `teamOrganizationMembers` Submodule <a name="`teamOrganizationMembers` Submodule" id="@cdktf/provider-tfe.teamOrganizationMembers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamOrganizationMembers <a name="TeamOrganizationMembers" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members tfe_team_organization_members}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/teamorganizationmembers"

teamorganizationmembers.NewTeamOrganizationMembers(scope Construct, id *string, config TeamOrganizationMembersConfig) TeamOrganizationMembers
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig">TeamOrganizationMembersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig">TeamOrganizationMembersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TeamOrganizationMembers resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/teamorganizationmembers"

teamorganizationmembers.TeamOrganizationMembers_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/teamorganizationmembers"

teamorganizationmembers.TeamOrganizationMembers_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/teamorganizationmembers"

teamorganizationmembers.TeamOrganizationMembers_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/teamorganizationmembers"

teamorganizationmembers.TeamOrganizationMembers_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TeamOrganizationMembers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TeamOrganizationMembers to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TeamOrganizationMembers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TeamOrganizationMembers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.organizationMembershipIdsInput">OrganizationMembershipIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.organizationMembershipIds">OrganizationMembershipIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `OrganizationMembershipIdsInput`<sup>Optional</sup> <a name="OrganizationMembershipIdsInput" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.organizationMembershipIdsInput"></a>

```go
func OrganizationMembershipIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `OrganizationMembershipIds`<sup>Required</sup> <a name="OrganizationMembershipIds" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.organizationMembershipIds"></a>

```go
func OrganizationMembershipIds() *[]*string
```

- *Type:* *[]*string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembers.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamOrganizationMembersConfig <a name="TeamOrganizationMembersConfig" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/teamorganizationmembers"

&teamorganizationmembers.TeamOrganizationMembersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	OrganizationMembershipIds: *[]*string,
	TeamId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.organizationMembershipIds">OrganizationMembershipIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members#organization_membership_ids TeamOrganizationMembers#organization_membership_ids}. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.teamId">TeamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members#team_id TeamOrganizationMembers#team_id}. |
| <code><a href="#@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members#id TeamOrganizationMembers#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `OrganizationMembershipIds`<sup>Required</sup> <a name="OrganizationMembershipIds" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.organizationMembershipIds"></a>

```go
OrganizationMembershipIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members#organization_membership_ids TeamOrganizationMembers#organization_membership_ids}.

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members#team_id TeamOrganizationMembers#team_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.teamOrganizationMembers.TeamOrganizationMembersConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/team_organization_members#id TeamOrganizationMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



