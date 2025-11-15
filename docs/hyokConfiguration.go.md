# `hyokConfiguration` Submodule <a name="`hyokConfiguration` Submodule" id="@cdktf/provider-tfe.hyokConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyokConfiguration <a name="HyokConfiguration" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration tfe_hyok_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

hyokconfiguration.NewHyokConfiguration(scope Construct, id *string, config HyokConfigurationConfig) HyokConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig">HyokConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig">HyokConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions">PutKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions">ResetKmsOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization">ResetOrganization</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutKmsOptions` <a name="PutKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions"></a>

```go
func PutKmsOptions(value HyokConfigurationKmsOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.putKmsOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

---

##### `ResetKmsOptions` <a name="ResetKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetKmsOptions"></a>

```go
func ResetKmsOptions()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.resetOrganization"></a>

```go
func ResetOrganization()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

hyokconfiguration.HyokConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

hyokconfiguration.HyokConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

hyokconfiguration.HyokConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

hyokconfiguration.HyokConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the HyokConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing HyokConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the HyokConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions">KmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput">AgentPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput">KekIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput">KmsOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput">OidcConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput">OidcConfigurationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId">AgentPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId">KekId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId">OidcConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType">OidcConfigurationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsOptions`<sup>Required</sup> <a name="KmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptions"></a>

```go
func KmsOptions() HyokConfigurationKmsOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference">HyokConfigurationKmsOptionsOutputReference</a>

---

##### `AgentPoolIdInput`<sup>Optional</sup> <a name="AgentPoolIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolIdInput"></a>

```go
func AgentPoolIdInput() *string
```

- *Type:* *string

---

##### `KekIdInput`<sup>Optional</sup> <a name="KekIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekIdInput"></a>

```go
func KekIdInput() *string
```

- *Type:* *string

---

##### `KmsOptionsInput`<sup>Optional</sup> <a name="KmsOptionsInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kmsOptionsInput"></a>

```go
func KmsOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OidcConfigurationIdInput`<sup>Optional</sup> <a name="OidcConfigurationIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationIdInput"></a>

```go
func OidcConfigurationIdInput() *string
```

- *Type:* *string

---

##### `OidcConfigurationTypeInput`<sup>Optional</sup> <a name="OidcConfigurationTypeInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationTypeInput"></a>

```go
func OidcConfigurationTypeInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.agentPoolId"></a>

```go
func AgentPoolId() *string
```

- *Type:* *string

---

##### `KekId`<sup>Required</sup> <a name="KekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.kekId"></a>

```go
func KekId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OidcConfigurationId`<sup>Required</sup> <a name="OidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationId"></a>

```go
func OidcConfigurationId() *string
```

- *Type:* *string

---

##### `OidcConfigurationType`<sup>Required</sup> <a name="OidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.oidcConfigurationType"></a>

```go
func OidcConfigurationType() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HyokConfigurationConfig <a name="HyokConfigurationConfig" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

&hyokconfiguration.HyokConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AgentPoolId: *string,
	KekId: *string,
	Name: *string,
	OidcConfigurationId: *string,
	OidcConfigurationType: *string,
	KmsOptions: github.com/cdktf/cdktf-provider-tfe-go/tfe/v12.hyokConfiguration.HyokConfigurationKmsOptions,
	Organization: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId">AgentPoolId</a></code> | <code>*string</code> | The ID of the agent-pool to associate with the HYOK configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId">KekId</a></code> | <code>*string</code> | Refers to the name of your key encryption key stored in your key management service. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name">Name</a></code> | <code>*string</code> | Label for the HYOK configuration to be used within HCP Terraform. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId">OidcConfigurationId</a></code> | <code>*string</code> | The ID of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType">OidcConfigurationType</a></code> | <code>*string</code> | The type of the TFE OIDC configuration. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions">KmsOptions</a></code> | <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a></code> | kms_options block. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization">Organization</a></code> | <code>*string</code> | Name of the organization to which the TFE HYOK configuration belongs. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentPoolId`<sup>Required</sup> <a name="AgentPoolId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.agentPoolId"></a>

```go
AgentPoolId *string
```

- *Type:* *string

The ID of the agent-pool to associate with the HYOK configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}

---

##### `KekId`<sup>Required</sup> <a name="KekId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kekId"></a>

```go
KekId *string
```

- *Type:* *string

Refers to the name of your key encryption key stored in your key management service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Label for the HYOK configuration to be used within HCP Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}

---

##### `OidcConfigurationId`<sup>Required</sup> <a name="OidcConfigurationId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationId"></a>

```go
OidcConfigurationId *string
```

- *Type:* *string

The ID of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}

---

##### `OidcConfigurationType`<sup>Required</sup> <a name="OidcConfigurationType" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.oidcConfigurationType"></a>

```go
OidcConfigurationType *string
```

- *Type:* *string

The type of the TFE OIDC configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}

---

##### `KmsOptions`<sup>Optional</sup> <a name="KmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.kmsOptions"></a>

```go
KmsOptions HyokConfigurationKmsOptions
```

- *Type:* <a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions">HyokConfigurationKmsOptions</a>

kms_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Name of the organization to which the TFE HYOK configuration belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}

---

### HyokConfigurationKmsOptions <a name="HyokConfigurationKmsOptions" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

&hyokconfiguration.HyokConfigurationKmsOptions {
	KeyLocation: *string,
	KeyRegion: *string,
	KeyRingId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation">KeyLocation</a></code> | <code>*string</code> | The location in which the GCP key ring exists. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion">KeyRegion</a></code> | <code>*string</code> | The AWS region where your key is located. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId">KeyRingId</a></code> | <code>*string</code> | The root resource for Google Cloud KMS keys and key versions. |

---

##### `KeyLocation`<sup>Optional</sup> <a name="KeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyLocation"></a>

```go
KeyLocation *string
```

- *Type:* *string

The location in which the GCP key ring exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_location HyokConfiguration#key_location}

---

##### `KeyRegion`<sup>Optional</sup> <a name="KeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRegion"></a>

```go
KeyRegion *string
```

- *Type:* *string

The AWS region where your key is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_region HyokConfiguration#key_region}

---

##### `KeyRingId`<sup>Optional</sup> <a name="KeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptions.property.keyRingId"></a>

```go
KeyRingId *string
```

- *Type:* *string

The root resource for Google Cloud KMS keys and key versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_ring_id HyokConfiguration#key_ring_id}

---

## Classes <a name="Classes" id="Classes"></a>

### HyokConfigurationKmsOptionsOutputReference <a name="HyokConfigurationKmsOptionsOutputReference" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/hyokconfiguration"

hyokconfiguration.NewHyokConfigurationKmsOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HyokConfigurationKmsOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation">ResetKeyLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion">ResetKeyRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId">ResetKeyRingId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKeyLocation` <a name="ResetKeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyLocation"></a>

```go
func ResetKeyLocation()
```

##### `ResetKeyRegion` <a name="ResetKeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRegion"></a>

```go
func ResetKeyRegion()
```

##### `ResetKeyRingId` <a name="ResetKeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.resetKeyRingId"></a>

```go
func ResetKeyRingId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput">KeyLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput">KeyRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput">KeyRingIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation">KeyLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion">KeyRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId">KeyRingId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyLocationInput`<sup>Optional</sup> <a name="KeyLocationInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocationInput"></a>

```go
func KeyLocationInput() *string
```

- *Type:* *string

---

##### `KeyRegionInput`<sup>Optional</sup> <a name="KeyRegionInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegionInput"></a>

```go
func KeyRegionInput() *string
```

- *Type:* *string

---

##### `KeyRingIdInput`<sup>Optional</sup> <a name="KeyRingIdInput" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingIdInput"></a>

```go
func KeyRingIdInput() *string
```

- *Type:* *string

---

##### `KeyLocation`<sup>Required</sup> <a name="KeyLocation" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyLocation"></a>

```go
func KeyLocation() *string
```

- *Type:* *string

---

##### `KeyRegion`<sup>Required</sup> <a name="KeyRegion" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRegion"></a>

```go
func KeyRegion() *string
```

- *Type:* *string

---

##### `KeyRingId`<sup>Required</sup> <a name="KeyRingId" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.keyRingId"></a>

```go
func KeyRingId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.hyokConfiguration.HyokConfigurationKmsOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



