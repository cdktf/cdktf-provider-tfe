# `testVariable` Submodule <a name="`testVariable` Submodule" id="@cdktf/provider-tfe.testVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TestVariable <a name="TestVariable" id="@cdktf/provider-tfe.testVariable.TestVariable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable tfe_test_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/testvariable"

testvariable.NewTestVariable(scope Construct, id *string, config TestVariableConfig) TestVariable
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig">TestVariableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.testVariable.TestVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig">TestVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetHcl">ResetHcl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetSensitive">ResetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.testVariable.TestVariable.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.testVariable.TestVariable.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.testVariable.TestVariable.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.testVariable.TestVariable.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.testVariable.TestVariable.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.testVariable.TestVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.testVariable.TestVariable.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.testVariable.TestVariable.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.testVariable.TestVariable.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.testVariable.TestVariable.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.testVariable.TestVariable.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.testVariable.TestVariable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.testVariable.TestVariable.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.testVariable.TestVariable.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.testVariable.TestVariable.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.testVariable.TestVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.testVariable.TestVariable.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.testVariable.TestVariable.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.testVariable.TestVariable.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.testVariable.TestVariable.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.testVariable.TestVariable.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.testVariable.TestVariable.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.testVariable.TestVariable.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetHcl` <a name="ResetHcl" id="@cdktf/provider-tfe.testVariable.TestVariable.resetHcl"></a>

```go
func ResetHcl()
```

##### `ResetSensitive` <a name="ResetSensitive" id="@cdktf/provider-tfe.testVariable.TestVariable.resetSensitive"></a>

```go
func ResetSensitive()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-tfe.testVariable.TestVariable.resetValue"></a>

```go
func ResetValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a TestVariable resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.testVariable.TestVariable.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/testvariable"

testvariable.TestVariable_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.testVariable.TestVariable.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/testvariable"

testvariable.TestVariable_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/testvariable"

testvariable.TestVariable_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.testVariable.TestVariable.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/testvariable"

testvariable.TestVariable_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a TestVariable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the TestVariable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing TestVariable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.testVariable.TestVariable.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the TestVariable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.readableValue">ReadableValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.hclInput">HclInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleNameInput">ModuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProviderInput">ModuleProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.sensitiveInput">SensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.hcl">Hcl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleName">ModuleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProvider">ModuleProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.sensitive">Sensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.value">Value</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.testVariable.TestVariable.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.testVariable.TestVariable.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.testVariable.TestVariable.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.testVariable.TestVariable.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.testVariable.TestVariable.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.testVariable.TestVariable.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.testVariable.TestVariable.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.testVariable.TestVariable.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.testVariable.TestVariable.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.testVariable.TestVariable.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.testVariable.TestVariable.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.testVariable.TestVariable.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.testVariable.TestVariable.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.testVariable.TestVariable.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.testVariable.TestVariable.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ReadableValue`<sup>Required</sup> <a name="ReadableValue" id="@cdktf/provider-tfe.testVariable.TestVariable.property.readableValue"></a>

```go
func ReadableValue() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `HclInput`<sup>Optional</sup> <a name="HclInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.hclInput"></a>

```go
func HclInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ModuleNameInput`<sup>Optional</sup> <a name="ModuleNameInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleNameInput"></a>

```go
func ModuleNameInput() *string
```

- *Type:* *string

---

##### `ModuleProviderInput`<sup>Optional</sup> <a name="ModuleProviderInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProviderInput"></a>

```go
func ModuleProviderInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `SensitiveInput`<sup>Optional</sup> <a name="SensitiveInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.sensitiveInput"></a>

```go
func SensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-tfe.testVariable.TestVariable.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-tfe.testVariable.TestVariable.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.testVariable.TestVariable.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Hcl`<sup>Required</sup> <a name="Hcl" id="@cdktf/provider-tfe.testVariable.TestVariable.property.hcl"></a>

```go
func Hcl() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-tfe.testVariable.TestVariable.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleName"></a>

```go
func ModuleName() *string
```

- *Type:* *string

---

##### `ModuleProvider`<sup>Required</sup> <a name="ModuleProvider" id="@cdktf/provider-tfe.testVariable.TestVariable.property.moduleProvider"></a>

```go
func ModuleProvider() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.testVariable.TestVariable.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Sensitive`<sup>Required</sup> <a name="Sensitive" id="@cdktf/provider-tfe.testVariable.TestVariable.property.sensitive"></a>

```go
func Sensitive() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-tfe.testVariable.TestVariable.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariable.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.testVariable.TestVariable.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### TestVariableConfig <a name="TestVariableConfig" id="@cdktf/provider-tfe.testVariable.TestVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/testvariable"

&testvariable.TestVariableConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Category: *string,
	Key: *string,
	ModuleName: *string,
	ModuleProvider: *string,
	Organization: *string,
	Description: *string,
	Hcl: interface{},
	Sensitive: interface{},
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.category">Category</a></code> | <code>*string</code> | Whether this is a Terraform or environment variable. Valid values are "terraform" or "env". |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.key">Key</a></code> | <code>*string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleName">ModuleName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#module_name TestVariable#module_name}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleProvider">ModuleProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#module_provider TestVariable#module_provider}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#organization TestVariable#organization}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#description TestVariable#description}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.hcl">Hcl</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#hcl TestVariable#hcl}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.sensitive">Sensitive</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#sensitive TestVariable#sensitive}. |
| <code><a href="#@cdktf/provider-tfe.testVariable.TestVariableConfig.property.value">Value</a></code> | <code>*string</code> | Value of the variable. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Whether this is a Terraform or environment variable. Valid values are "terraform" or "env".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#category TestVariable#category}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.key"></a>

```go
Key *string
```

- *Type:* *string

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#key TestVariable#key}

---

##### `ModuleName`<sup>Required</sup> <a name="ModuleName" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleName"></a>

```go
ModuleName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#module_name TestVariable#module_name}.

---

##### `ModuleProvider`<sup>Required</sup> <a name="ModuleProvider" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.moduleProvider"></a>

```go
ModuleProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#module_provider TestVariable#module_provider}.

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#organization TestVariable#organization}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#description TestVariable#description}.

---

##### `Hcl`<sup>Optional</sup> <a name="Hcl" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.hcl"></a>

```go
Hcl interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#hcl TestVariable#hcl}.

---

##### `Sensitive`<sup>Optional</sup> <a name="Sensitive" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.sensitive"></a>

```go
Sensitive interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#sensitive TestVariable#sensitive}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-tfe.testVariable.TestVariableConfig.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.62.0/docs/resources/test_variable#value TestVariable#value}

---



