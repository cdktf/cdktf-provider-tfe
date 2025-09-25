# `sentinelVersion` Submodule <a name="`sentinelVersion` Submodule" id="@cdktf/provider-tfe.sentinelVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SentinelVersion <a name="SentinelVersion" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version tfe_sentinel_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

sentinelversion.NewSentinelVersion(scope Construct, id *string, config SentinelVersionConfig) SentinelVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig">SentinelVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig">SentinelVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.putArchs">PutArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetArchs">ResetArchs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetBeta">ResetBeta</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecated">ResetDeprecated</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecatedReason">ResetDeprecatedReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial">ResetOfficial</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetSha">ResetSha</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutArchs` <a name="PutArchs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.putArchs"></a>

```go
func PutArchs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.putArchs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetArchs` <a name="ResetArchs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetArchs"></a>

```go
func ResetArchs()
```

##### `ResetBeta` <a name="ResetBeta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetBeta"></a>

```go
func ResetBeta()
```

##### `ResetDeprecated` <a name="ResetDeprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecated"></a>

```go
func ResetDeprecated()
```

##### `ResetDeprecatedReason` <a name="ResetDeprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetDeprecatedReason"></a>

```go
func ResetDeprecatedReason()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetOfficial` <a name="ResetOfficial" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetOfficial"></a>

```go
func ResetOfficial()
```

##### `ResetSha` <a name="ResetSha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetSha"></a>

```go
func ResetSha()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.resetUrl"></a>

```go
func ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SentinelVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

sentinelversion.SentinelVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

sentinelversion.SentinelVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

sentinelversion.SentinelVersion_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

sentinelversion.SentinelVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SentinelVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SentinelVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SentinelVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SentinelVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archs">Archs</a></code> | <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList">SentinelVersionArchsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archsInput">ArchsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.betaInput">BetaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedInput">DeprecatedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReasonInput">DeprecatedReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.officialInput">OfficialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.shaInput">ShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.beta">Beta</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecated">Deprecated</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReason">DeprecatedReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.official">Official</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.sha">Sha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Archs`<sup>Required</sup> <a name="Archs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archs"></a>

```go
func Archs() SentinelVersionArchsList
```

- *Type:* <a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList">SentinelVersionArchsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ArchsInput`<sup>Optional</sup> <a name="ArchsInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.archsInput"></a>

```go
func ArchsInput() interface{}
```

- *Type:* interface{}

---

##### `BetaInput`<sup>Optional</sup> <a name="BetaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.betaInput"></a>

```go
func BetaInput() interface{}
```

- *Type:* interface{}

---

##### `DeprecatedInput`<sup>Optional</sup> <a name="DeprecatedInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedInput"></a>

```go
func DeprecatedInput() interface{}
```

- *Type:* interface{}

---

##### `DeprecatedReasonInput`<sup>Optional</sup> <a name="DeprecatedReasonInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReasonInput"></a>

```go
func DeprecatedReasonInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OfficialInput`<sup>Optional</sup> <a name="OfficialInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.officialInput"></a>

```go
func OfficialInput() interface{}
```

- *Type:* interface{}

---

##### `ShaInput`<sup>Optional</sup> <a name="ShaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.shaInput"></a>

```go
func ShaInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Beta`<sup>Required</sup> <a name="Beta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.beta"></a>

```go
func Beta() interface{}
```

- *Type:* interface{}

---

##### `Deprecated`<sup>Required</sup> <a name="Deprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecated"></a>

```go
func Deprecated() interface{}
```

- *Type:* interface{}

---

##### `DeprecatedReason`<sup>Required</sup> <a name="DeprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.deprecatedReason"></a>

```go
func DeprecatedReason() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Official`<sup>Required</sup> <a name="Official" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.official"></a>

```go
func Official() interface{}
```

- *Type:* interface{}

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.sha"></a>

```go
func Sha() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SentinelVersionArchs <a name="SentinelVersionArchs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

&sentinelversion.SentinelVersionArchs {
	Arch: *string,
	Os: *string,
	Sha: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.arch">Arch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#arch SentinelVersion#arch}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.os">Os</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#os SentinelVersion#os}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.sha">Sha</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#sha SentinelVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#url SentinelVersion#url}. |

---

##### `Arch`<sup>Required</sup> <a name="Arch" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.arch"></a>

```go
Arch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#arch SentinelVersion#arch}.

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.os"></a>

```go
Os *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#os SentinelVersion#os}.

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.sha"></a>

```go
Sha *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#sha SentinelVersion#sha}.

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchs.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#url SentinelVersion#url}.

---

### SentinelVersionConfig <a name="SentinelVersionConfig" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

&sentinelversion.SentinelVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Version: *string,
	Archs: interface{},
	Beta: interface{},
	Deprecated: interface{},
	DeprecatedReason: *string,
	Enabled: interface{},
	Official: interface{},
	Sha: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#version SentinelVersion#version}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.archs">Archs</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#archs SentinelVersion#archs}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta">Beta</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#beta SentinelVersion#beta}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated">Deprecated</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason">DeprecatedReason</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official">Official</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#official SentinelVersion#official}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha">Sha</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#sha SentinelVersion#sha}. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#url SentinelVersion#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#version SentinelVersion#version}.

---

##### `Archs`<sup>Optional</sup> <a name="Archs" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.archs"></a>

```go
Archs interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#archs SentinelVersion#archs}.

---

##### `Beta`<sup>Optional</sup> <a name="Beta" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.beta"></a>

```go
Beta interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#beta SentinelVersion#beta}.

---

##### `Deprecated`<sup>Optional</sup> <a name="Deprecated" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecated"></a>

```go
Deprecated interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}.

---

##### `DeprecatedReason`<sup>Optional</sup> <a name="DeprecatedReason" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.deprecatedReason"></a>

```go
DeprecatedReason *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}.

---

##### `Official`<sup>Optional</sup> <a name="Official" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.official"></a>

```go
Official interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#official SentinelVersion#official}.

---

##### `Sha`<sup>Optional</sup> <a name="Sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.sha"></a>

```go
Sha *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#sha SentinelVersion#sha}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/sentinel_version#url SentinelVersion#url}.

---

## Classes <a name="Classes" id="Classes"></a>

### SentinelVersionArchsList <a name="SentinelVersionArchsList" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

sentinelversion.NewSentinelVersionArchsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SentinelVersionArchsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.get"></a>

```go
func Get(index *f64) SentinelVersionArchsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SentinelVersionArchsOutputReference <a name="SentinelVersionArchsOutputReference" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/sentinelversion"

sentinelversion.NewSentinelVersionArchsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SentinelVersionArchsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.archInput">ArchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.osInput">OsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.shaInput">ShaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.arch">Arch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.os">Os</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.sha">Sha</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.url">Url</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArchInput`<sup>Optional</sup> <a name="ArchInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.archInput"></a>

```go
func ArchInput() *string
```

- *Type:* *string

---

##### `OsInput`<sup>Optional</sup> <a name="OsInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.osInput"></a>

```go
func OsInput() *string
```

- *Type:* *string

---

##### `ShaInput`<sup>Optional</sup> <a name="ShaInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.shaInput"></a>

```go
func ShaInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Arch`<sup>Required</sup> <a name="Arch" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.arch"></a>

```go
func Arch() *string
```

- *Type:* *string

---

##### `Os`<sup>Required</sup> <a name="Os" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.os"></a>

```go
func Os() *string
```

- *Type:* *string

---

##### `Sha`<sup>Required</sup> <a name="Sha" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.sha"></a>

```go
func Sha() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.sentinelVersion.SentinelVersionArchsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



