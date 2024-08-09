# `organization` Submodule <a name="`organization` Submodule" id="@cdktf/provider-tfe.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@cdktf/provider-tfe.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization tfe_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organization.Organization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/organization"

organization.NewOrganization(scope Construct, id *string, config OrganizationConfig) Organization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig">OrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.organization.OrganizationConfig">OrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled">ResetAggregatedCommitStatusEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces">ResetAllowForceDeleteWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced">ResetAssessmentsEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy">ResetCollaboratorAuthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled">ResetCostEstimationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId">ResetOwnersTeamSamlRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans">ResetSendPassingStatusesForUntriggeredSpeculativePlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes">ResetSessionRememberMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes">ResetSessionTimeoutMinutes</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.organization.Organization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.organization.Organization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.organization.Organization.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.organization.Organization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.organization.Organization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.organization.Organization.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.organization.Organization.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.organization.Organization.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.organization.Organization.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.organization.Organization.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAggregatedCommitStatusEnabled` <a name="ResetAggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled"></a>

```go
func ResetAggregatedCommitStatusEnabled()
```

##### `ResetAllowForceDeleteWorkspaces` <a name="ResetAllowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces"></a>

```go
func ResetAllowForceDeleteWorkspaces()
```

##### `ResetAssessmentsEnforced` <a name="ResetAssessmentsEnforced" id="@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced"></a>

```go
func ResetAssessmentsEnforced()
```

##### `ResetCollaboratorAuthPolicy` <a name="ResetCollaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy"></a>

```go
func ResetCollaboratorAuthPolicy()
```

##### `ResetCostEstimationEnabled` <a name="ResetCostEstimationEnabled" id="@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled"></a>

```go
func ResetCostEstimationEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.organization.Organization.resetId"></a>

```go
func ResetId()
```

##### `ResetOwnersTeamSamlRoleId` <a name="ResetOwnersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId"></a>

```go
func ResetOwnersTeamSamlRoleId()
```

##### `ResetSendPassingStatusesForUntriggeredSpeculativePlans` <a name="ResetSendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans"></a>

```go
func ResetSendPassingStatusesForUntriggeredSpeculativePlans()
```

##### `ResetSessionRememberMinutes` <a name="ResetSessionRememberMinutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes"></a>

```go
func ResetSessionRememberMinutes()
```

##### `ResetSessionTimeoutMinutes` <a name="ResetSessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes"></a>

```go
func ResetSessionTimeoutMinutes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.organization.Organization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/organization"

organization.Organization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/organization"

organization.Organization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/organization"

organization.Organization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/organization"

organization.Organization_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Organization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Organization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the Organization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.defaultProjectId">DefaultProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput">AggregatedCommitStatusEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput">AllowForceDeleteWorkspacesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput">AssessmentsEnforcedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput">CollaboratorAuthPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput">CostEstimationEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.emailInput">EmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput">OwnersTeamSamlRoleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput">SendPassingStatusesForUntriggeredSpeculativePlansInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput">SessionRememberMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput">SessionTimeoutMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled">AggregatedCommitStatusEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces">AllowForceDeleteWorkspaces</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced">AssessmentsEnforced</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy">CollaboratorAuthPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled">CostEstimationEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId">OwnersTeamSamlRoleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans">SendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes">SessionRememberMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.organization.Organization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.organization.Organization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.organization.Organization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.organization.Organization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organization.Organization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organization.Organization.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organization.Organization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organization.Organization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organization.Organization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organization.Organization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organization.Organization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultProjectId`<sup>Required</sup> <a name="DefaultProjectId" id="@cdktf/provider-tfe.organization.Organization.property.defaultProjectId"></a>

```go
func DefaultProjectId() *string
```

- *Type:* *string

---

##### `AggregatedCommitStatusEnabledInput`<sup>Optional</sup> <a name="AggregatedCommitStatusEnabledInput" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput"></a>

```go
func AggregatedCommitStatusEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `AllowForceDeleteWorkspacesInput`<sup>Optional</sup> <a name="AllowForceDeleteWorkspacesInput" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput"></a>

```go
func AllowForceDeleteWorkspacesInput() interface{}
```

- *Type:* interface{}

---

##### `AssessmentsEnforcedInput`<sup>Optional</sup> <a name="AssessmentsEnforcedInput" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput"></a>

```go
func AssessmentsEnforcedInput() interface{}
```

- *Type:* interface{}

---

##### `CollaboratorAuthPolicyInput`<sup>Optional</sup> <a name="CollaboratorAuthPolicyInput" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput"></a>

```go
func CollaboratorAuthPolicyInput() *string
```

- *Type:* *string

---

##### `CostEstimationEnabledInput`<sup>Optional</sup> <a name="CostEstimationEnabledInput" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput"></a>

```go
func CostEstimationEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-tfe.organization.Organization.property.emailInput"></a>

```go
func EmailInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.organization.Organization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.organization.Organization.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OwnersTeamSamlRoleIdInput`<sup>Optional</sup> <a name="OwnersTeamSamlRoleIdInput" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput"></a>

```go
func OwnersTeamSamlRoleIdInput() *string
```

- *Type:* *string

---

##### `SendPassingStatusesForUntriggeredSpeculativePlansInput`<sup>Optional</sup> <a name="SendPassingStatusesForUntriggeredSpeculativePlansInput" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput"></a>

```go
func SendPassingStatusesForUntriggeredSpeculativePlansInput() interface{}
```

- *Type:* interface{}

---

##### `SessionRememberMinutesInput`<sup>Optional</sup> <a name="SessionRememberMinutesInput" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput"></a>

```go
func SessionRememberMinutesInput() *f64
```

- *Type:* *f64

---

##### `SessionTimeoutMinutesInput`<sup>Optional</sup> <a name="SessionTimeoutMinutesInput" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput"></a>

```go
func SessionTimeoutMinutesInput() *f64
```

- *Type:* *f64

---

##### `AggregatedCommitStatusEnabled`<sup>Required</sup> <a name="AggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled"></a>

```go
func AggregatedCommitStatusEnabled() interface{}
```

- *Type:* interface{}

---

##### `AllowForceDeleteWorkspaces`<sup>Required</sup> <a name="AllowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces"></a>

```go
func AllowForceDeleteWorkspaces() interface{}
```

- *Type:* interface{}

---

##### `AssessmentsEnforced`<sup>Required</sup> <a name="AssessmentsEnforced" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced"></a>

```go
func AssessmentsEnforced() interface{}
```

- *Type:* interface{}

---

##### `CollaboratorAuthPolicy`<sup>Required</sup> <a name="CollaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy"></a>

```go
func CollaboratorAuthPolicy() *string
```

- *Type:* *string

---

##### `CostEstimationEnabled`<sup>Required</sup> <a name="CostEstimationEnabled" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled"></a>

```go
func CostEstimationEnabled() interface{}
```

- *Type:* interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-tfe.organization.Organization.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.organization.Organization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.organization.Organization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OwnersTeamSamlRoleId`<sup>Required</sup> <a name="OwnersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId"></a>

```go
func OwnersTeamSamlRoleId() *string
```

- *Type:* *string

---

##### `SendPassingStatusesForUntriggeredSpeculativePlans`<sup>Required</sup> <a name="SendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```go
func SendPassingStatusesForUntriggeredSpeculativePlans() interface{}
```

- *Type:* interface{}

---

##### `SessionRememberMinutes`<sup>Required</sup> <a name="SessionRememberMinutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes"></a>

```go
func SessionRememberMinutes() *f64
```

- *Type:* *f64

---

##### `SessionTimeoutMinutes`<sup>Required</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes"></a>

```go
func SessionTimeoutMinutes() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.organization.Organization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="@cdktf/provider-tfe.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organization.OrganizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/organization"

&organization.OrganizationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Email: *string,
	Name: *string,
	AggregatedCommitStatusEnabled: interface{},
	AllowForceDeleteWorkspaces: interface{},
	AssessmentsEnforced: interface{},
	CollaboratorAuthPolicy: *string,
	CostEstimationEnabled: interface{},
	Id: *string,
	OwnersTeamSamlRoleId: *string,
	SendPassingStatusesForUntriggeredSpeculativePlans: interface{},
	SessionRememberMinutes: *f64,
	SessionTimeoutMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.email">Email</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#email Organization#email}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled">AggregatedCommitStatusEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces">AllowForceDeleteWorkspaces</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced">AssessmentsEnforced</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#assessments_enforced Organization#assessments_enforced}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy">CollaboratorAuthPolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled">CostEstimationEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId">OwnersTeamSamlRoleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans">SendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes">SessionRememberMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes">SessionTimeoutMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.email"></a>

```go
Email *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#email Organization#email}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#name Organization#name}.

---

##### `AggregatedCommitStatusEnabled`<sup>Optional</sup> <a name="AggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled"></a>

```go
AggregatedCommitStatusEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}.

---

##### `AllowForceDeleteWorkspaces`<sup>Optional</sup> <a name="AllowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces"></a>

```go
AllowForceDeleteWorkspaces interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}.

---

##### `AssessmentsEnforced`<sup>Optional</sup> <a name="AssessmentsEnforced" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced"></a>

```go
AssessmentsEnforced interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#assessments_enforced Organization#assessments_enforced}.

---

##### `CollaboratorAuthPolicy`<sup>Optional</sup> <a name="CollaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy"></a>

```go
CollaboratorAuthPolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}.

---

##### `CostEstimationEnabled`<sup>Optional</sup> <a name="CostEstimationEnabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled"></a>

```go
CostEstimationEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `OwnersTeamSamlRoleId`<sup>Optional</sup> <a name="OwnersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId"></a>

```go
OwnersTeamSamlRoleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}.

---

##### `SendPassingStatusesForUntriggeredSpeculativePlans`<sup>Optional</sup> <a name="SendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```go
SendPassingStatusesForUntriggeredSpeculativePlans interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}.

---

##### `SessionRememberMinutes`<sup>Optional</sup> <a name="SessionRememberMinutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes"></a>

```go
SessionRememberMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}.

---

##### `SessionTimeoutMinutes`<sup>Optional</sup> <a name="SessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes"></a>

```go
SessionTimeoutMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}.

---



