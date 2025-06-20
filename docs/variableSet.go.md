# `variableSet` Submodule <a name="`variableSet` Submodule" id="@cdktf/provider-tfe.variableSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VariableSet <a name="VariableSet" id="@cdktf/provider-tfe.variableSet.VariableSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set tfe_variable_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.variableSet.VariableSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/variableset"

variableset.NewVariableSet(scope Construct, id *string, config VariableSetConfig) VariableSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig">VariableSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.variableSet.VariableSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variableSet.VariableSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.variableSet.VariableSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig">VariableSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetGlobal">ResetGlobal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetParentProjectId">ResetParentProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.resetWorkspaceIds">ResetWorkspaceIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.variableSet.VariableSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.variableSet.VariableSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.variableSet.VariableSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.variableSet.VariableSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.variableSet.VariableSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.variableSet.VariableSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.variableSet.VariableSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.variableSet.VariableSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.variableSet.VariableSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.variableSet.VariableSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.variableSet.VariableSet.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.variableSet.VariableSet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.variableSet.VariableSet.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.variableSet.VariableSet.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variableSet.VariableSet.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.variableSet.VariableSet.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.variableSet.VariableSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.variableSet.VariableSet.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variableSet.VariableSet.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.variableSet.VariableSet.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.variableSet.VariableSet.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.variableSet.VariableSet.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.variableSet.VariableSet.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.variableSet.VariableSet.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.variableSet.VariableSet.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGlobal` <a name="ResetGlobal" id="@cdktf/provider-tfe.variableSet.VariableSet.resetGlobal"></a>

```go
func ResetGlobal()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.variableSet.VariableSet.resetId"></a>

```go
func ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.variableSet.VariableSet.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetParentProjectId` <a name="ResetParentProjectId" id="@cdktf/provider-tfe.variableSet.VariableSet.resetParentProjectId"></a>

```go
func ResetParentProjectId()
```

##### `ResetPriority` <a name="ResetPriority" id="@cdktf/provider-tfe.variableSet.VariableSet.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetWorkspaceIds` <a name="ResetWorkspaceIds" id="@cdktf/provider-tfe.variableSet.VariableSet.resetWorkspaceIds"></a>

```go
func ResetWorkspaceIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VariableSet resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.variableSet.VariableSet.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/variableset"

variableset.VariableSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.variableSet.VariableSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.variableSet.VariableSet.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/variableset"

variableset.VariableSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.variableSet.VariableSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.variableSet.VariableSet.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/variableset"

variableset.VariableSet_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.variableSet.VariableSet.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.variableSet.VariableSet.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/variableset"

variableset.VariableSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VariableSet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.variableSet.VariableSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.variableSet.VariableSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VariableSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.variableSet.VariableSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VariableSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.variableSet.VariableSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VariableSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.globalInput">GlobalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.parentProjectIdInput">ParentProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.priorityInput">PriorityInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.workspaceIdsInput">WorkspaceIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.global">Global</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.parentProjectId">ParentProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.priority">Priority</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.variableSet.VariableSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.variableSet.VariableSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.variableSet.VariableSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.variableSet.VariableSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.variableSet.VariableSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.variableSet.VariableSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.variableSet.VariableSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.variableSet.VariableSet.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.variableSet.VariableSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.variableSet.VariableSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.variableSet.VariableSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.variableSet.VariableSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.variableSet.VariableSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.variableSet.VariableSet.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GlobalInput`<sup>Optional</sup> <a name="GlobalInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.globalInput"></a>

```go
func GlobalInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `ParentProjectIdInput`<sup>Optional</sup> <a name="ParentProjectIdInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.parentProjectIdInput"></a>

```go
func ParentProjectIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.priorityInput"></a>

```go
func PriorityInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdsInput`<sup>Optional</sup> <a name="WorkspaceIdsInput" id="@cdktf/provider-tfe.variableSet.VariableSet.property.workspaceIdsInput"></a>

```go
func WorkspaceIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.variableSet.VariableSet.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Global`<sup>Required</sup> <a name="Global" id="@cdktf/provider-tfe.variableSet.VariableSet.property.global"></a>

```go
func Global() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.variableSet.VariableSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.variableSet.VariableSet.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.variableSet.VariableSet.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `ParentProjectId`<sup>Required</sup> <a name="ParentProjectId" id="@cdktf/provider-tfe.variableSet.VariableSet.property.parentProjectId"></a>

```go
func ParentProjectId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-tfe.variableSet.VariableSet.property.priority"></a>

```go
func Priority() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIds`<sup>Required</sup> <a name="WorkspaceIds" id="@cdktf/provider-tfe.variableSet.VariableSet.property.workspaceIds"></a>

```go
func WorkspaceIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.variableSet.VariableSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VariableSetConfig <a name="VariableSetConfig" id="@cdktf/provider-tfe.variableSet.VariableSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/variableset"

&variableset.VariableSetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Global: interface{},
	Id: *string,
	Organization: *string,
	ParentProjectId: *string,
	Priority: interface{},
	WorkspaceIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#name VariableSet#name}. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#description VariableSet#description}. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.global">Global</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#global VariableSet#global}. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#id VariableSet#id}. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#organization VariableSet#organization}. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.parentProjectId">ParentProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#parent_project_id VariableSet#parent_project_id}. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.priority">Priority</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#priority VariableSet#priority}. |
| <code><a href="#@cdktf/provider-tfe.variableSet.VariableSetConfig.property.workspaceIds">WorkspaceIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#workspace_ids VariableSet#workspace_ids}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#name VariableSet#name}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#description VariableSet#description}.

---

##### `Global`<sup>Optional</sup> <a name="Global" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.global"></a>

```go
Global interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#global VariableSet#global}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#id VariableSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#organization VariableSet#organization}.

---

##### `ParentProjectId`<sup>Optional</sup> <a name="ParentProjectId" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.parentProjectId"></a>

```go
ParentProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#parent_project_id VariableSet#parent_project_id}.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.priority"></a>

```go
Priority interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#priority VariableSet#priority}.

---

##### `WorkspaceIds`<sup>Optional</sup> <a name="WorkspaceIds" id="@cdktf/provider-tfe.variableSet.VariableSetConfig.property.workspaceIds"></a>

```go
WorkspaceIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.67.0/docs/resources/variable_set#workspace_ids VariableSet#workspace_ids}.

---



