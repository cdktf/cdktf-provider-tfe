# `teamNotificationConfiguration` Submodule <a name="`teamNotificationConfiguration` Submodule" id="@cdktf/provider-tfe.teamNotificationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TeamNotificationConfiguration <a name="TeamNotificationConfiguration" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration tfe_team_notification_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamnotificationconfiguration"

teamnotificationconfiguration.NewTeamNotificationConfiguration(scope Construct, id *string, config TeamNotificationConfigurationConfig) TeamNotificationConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig">TeamNotificationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig">TeamNotificationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses">ResetEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds">ResetEmailUserIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers">ResetTriggers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEmailAddresses` <a name="ResetEmailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailAddresses"></a>

```go
func ResetEmailAddresses()
```

##### `ResetEmailUserIds` <a name="ResetEmailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEmailUserIds"></a>

```go
func ResetEmailUserIds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetToken"></a>

```go
func ResetToken()
```

##### `ResetTriggers` <a name="ResetTriggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetTriggers"></a>

```go
func ResetTriggers()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.resetUrl"></a>

```go
func ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamnotificationconfiguration"

teamnotificationconfiguration.TeamNotificationConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamnotificationconfiguration"

teamnotificationconfiguration.TeamNotificationConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamnotificationconfiguration"

teamnotificationconfiguration.TeamNotificationConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamnotificationconfiguration"

teamnotificationconfiguration.TeamNotificationConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TeamNotificationConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TeamNotificationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TeamNotificationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TeamNotificationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput">DestinationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput">EmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput">EmailUserIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput">TeamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput">TriggersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType">DestinationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds">EmailUserIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId">TeamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers">Triggers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DestinationTypeInput`<sup>Optional</sup> <a name="DestinationTypeInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationTypeInput"></a>

```go
func DestinationTypeInput() *string
```

- *Type:* *string

---

##### `EmailAddressesInput`<sup>Optional</sup> <a name="EmailAddressesInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddressesInput"></a>

```go
func EmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EmailUserIdsInput`<sup>Optional</sup> <a name="EmailUserIdsInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIdsInput"></a>

```go
func EmailUserIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TeamIdInput`<sup>Optional</sup> <a name="TeamIdInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamIdInput"></a>

```go
func TeamIdInput() *string
```

- *Type:* *string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `TriggersInput`<sup>Optional</sup> <a name="TriggersInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggersInput"></a>

```go
func TriggersInput() *[]*string
```

- *Type:* *[]*string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.destinationType"></a>

```go
func DestinationType() *string
```

- *Type:* *string

---

##### `EmailAddresses`<sup>Required</sup> <a name="EmailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailAddresses"></a>

```go
func EmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `EmailUserIds`<sup>Required</sup> <a name="EmailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.emailUserIds"></a>

```go
func EmailUserIds() *[]*string
```

- *Type:* *[]*string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.teamId"></a>

```go
func TeamId() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `Triggers`<sup>Required</sup> <a name="Triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.triggers"></a>

```go
func Triggers() *[]*string
```

- *Type:* *[]*string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamNotificationConfigurationConfig <a name="TeamNotificationConfigurationConfig" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/teamnotificationconfiguration"

&teamnotificationconfiguration.TeamNotificationConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationType: *string,
	Name: *string,
	TeamId: *string,
	EmailAddresses: *[]*string,
	EmailUserIds: *[]*string,
	Enabled: interface{},
	Token: *string,
	Triggers: *[]*string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType">DestinationType</a></code> | <code>*string</code> | The type of notification configuration payload to send. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Name of the team notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId">TeamId</a></code> | <code>*string</code> | The ID of the team that owns the notification configuration. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses">EmailAddresses</a></code> | <code>*[]*string</code> | A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds">EmailUserIds</a></code> | <code>*[]*string</code> | A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the team notification configuration should be enabled or not. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token">Token</a></code> | <code>*string</code> | A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers">Triggers</a></code> | <code>*[]*string</code> | The array of triggers for which this team notification configuration will send notifications. |
| <code><a href="#@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url">Url</a></code> | <code>*string</code> | The HTTP or HTTPS URL where notification requests will be made. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationType`<sup>Required</sup> <a name="DestinationType" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.destinationType"></a>

```go
DestinationType *string
```

- *Type:* *string

The type of notification configuration payload to send.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#destination_type TeamNotificationConfiguration#destination_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the team notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#name TeamNotificationConfiguration#name}

---

##### `TeamId`<sup>Required</sup> <a name="TeamId" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.teamId"></a>

```go
TeamId *string
```

- *Type:* *string

The ID of the team that owns the notification configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#team_id TeamNotificationConfiguration#team_id}

---

##### `EmailAddresses`<sup>Optional</sup> <a name="EmailAddresses" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailAddresses"></a>

```go
EmailAddresses *[]*string
```

- *Type:* *[]*string

A list of email addresses. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#email_addresses TeamNotificationConfiguration#email_addresses}

---

##### `EmailUserIds`<sup>Optional</sup> <a name="EmailUserIds" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.emailUserIds"></a>

```go
EmailUserIds *[]*string
```

- *Type:* *[]*string

A list of user IDs. This value must not be provided if `destination_type` is `generic`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#email_user_ids TeamNotificationConfiguration#email_user_ids}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the team notification configuration should be enabled or not.

Disabled configurations will not send any notifications. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#enabled TeamNotificationConfiguration#enabled}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

A write-only secure token for the notification configuration, which can be used by the receiving server to verify request authenticity when configured for notification configurations with a destination type of `generic`.

Defaults to `null`. This value *must not* be provided if `destination_type` is `email`, `microsoft-teams`, or `slack`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#token TeamNotificationConfiguration#token}

---

##### `Triggers`<sup>Optional</sup> <a name="Triggers" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.triggers"></a>

```go
Triggers *[]*string
```

- *Type:* *[]*string

The array of triggers for which this team notification configuration will send notifications.

If omitted, no notification triggers are configured.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#triggers TeamNotificationConfiguration#triggers}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-tfe.teamNotificationConfiguration.TeamNotificationConfigurationConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

The HTTP or HTTPS URL where notification requests will be made.

This value must not be provided if `email_addresses` or `email_user_ids` is present, or if `destination_type` is `email`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/team_notification_configuration#url TeamNotificationConfiguration#url}

---



