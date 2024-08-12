# `dataRetentionPolicy` Submodule <a name="`dataRetentionPolicy` Submodule" id="@cdktf/provider-tfe.dataRetentionPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataRetentionPolicy <a name="DataRetentionPolicy" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/data_retention_policy tfe_data_retention_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

dataretentionpolicy.NewDataRetentionPolicy(scope Construct, id *string, config DataRetentionPolicyConfig) DataRetentionPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig">DataRetentionPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig">DataRetentionPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan">PutDeleteOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete">PutDontDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetDeleteOlderThan">ResetDeleteOlderThan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeleteOlderThan` <a name="PutDeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan"></a>

```go
func PutDeleteOlderThan(value DataRetentionPolicyDeleteOlderThan)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDeleteOlderThan.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

---

##### `PutDontDelete` <a name="PutDontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete"></a>

```go
func PutDontDelete(value DataRetentionPolicyDontDelete)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.putDontDelete.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

---

##### `ResetDeleteOlderThan` <a name="ResetDeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetDeleteOlderThan"></a>

```go
func ResetDeleteOlderThan()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataRetentionPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

dataretentionpolicy.DataRetentionPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

dataretentionpolicy.DataRetentionPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

dataretentionpolicy.DataRetentionPolicy_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

dataretentionpolicy.DataRetentionPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataRetentionPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataRetentionPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataRetentionPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/data_retention_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataRetentionPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThan">DeleteOlderThan</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference">DataRetentionPolicyDeleteOlderThanOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDelete">DontDelete</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference">DataRetentionPolicyDontDeleteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThanInput">DeleteOlderThanInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDeleteInput">DontDeleteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeleteOlderThan`<sup>Required</sup> <a name="DeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThan"></a>

```go
func DeleteOlderThan() DataRetentionPolicyDeleteOlderThanOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference">DataRetentionPolicyDeleteOlderThanOutputReference</a>

---

##### `DontDelete`<sup>Required</sup> <a name="DontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDelete"></a>

```go
func DontDelete() DataRetentionPolicyDontDeleteOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference">DataRetentionPolicyDontDeleteOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `DeleteOlderThanInput`<sup>Optional</sup> <a name="DeleteOlderThanInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.deleteOlderThanInput"></a>

```go
func DeleteOlderThanInput() interface{}
```

- *Type:* interface{}

---

##### `DontDeleteInput`<sup>Optional</sup> <a name="DontDeleteInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.dontDeleteInput"></a>

```go
func DontDeleteInput() interface{}
```

- *Type:* interface{}

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataRetentionPolicyConfig <a name="DataRetentionPolicyConfig" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

&dataretentionpolicy.DataRetentionPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DeleteOlderThan: github.com/cdktf/cdktf-provider-tfe-go/tfe/v11.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan,
	DontDelete: github.com/cdktf/cdktf-provider-tfe-go/tfe/v11.dataRetentionPolicy.DataRetentionPolicyDontDelete,
	Organization: *string,
	WorkspaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.deleteOlderThan">DeleteOlderThan</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a></code> | delete_older_than block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dontDelete">DontDelete</a></code> | <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a></code> | dont_delete block. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.organization">Organization</a></code> | <code>*string</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | ID of the workspace that the data retention policy should apply to. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeleteOlderThan`<sup>Optional</sup> <a name="DeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.deleteOlderThan"></a>

```go
DeleteOlderThan DataRetentionPolicyDeleteOlderThan
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan">DataRetentionPolicyDeleteOlderThan</a>

delete_older_than block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/data_retention_policy#delete_older_than DataRetentionPolicy#delete_older_than}

---

##### `DontDelete`<sup>Optional</sup> <a name="DontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.dontDelete"></a>

```go
DontDelete DataRetentionPolicyDontDelete
```

- *Type:* <a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete">DataRetentionPolicyDontDelete</a>

dont_delete block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/data_retention_policy#dont_delete DataRetentionPolicy#dont_delete}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/data_retention_policy#organization DataRetentionPolicy#organization}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

ID of the workspace that the data retention policy should apply to.

If omitted, the data retention policy will apply to the entire organization.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/data_retention_policy#workspace_id DataRetentionPolicy#workspace_id}

---

### DataRetentionPolicyDeleteOlderThan <a name="DataRetentionPolicyDeleteOlderThan" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

&dataretentionpolicy.DataRetentionPolicyDeleteOlderThan {
	Days: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.property.days">Days</a></code> | <code>*f64</code> | Number of days. |

---

##### `Days`<sup>Optional</sup> <a name="Days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThan.property.days"></a>

```go
Days *f64
```

- *Type:* *f64

Number of days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/data_retention_policy#days DataRetentionPolicy#days}

---

### DataRetentionPolicyDontDelete <a name="DataRetentionPolicyDontDelete" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDelete.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

&dataretentionpolicy.DataRetentionPolicyDontDelete {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataRetentionPolicyDeleteOlderThanOutputReference <a name="DataRetentionPolicyDeleteOlderThanOutputReference" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

dataretentionpolicy.NewDataRetentionPolicyDeleteOlderThanOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataRetentionPolicyDeleteOlderThanOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resetDays">ResetDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDays` <a name="ResetDays" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.resetDays"></a>

```go
func ResetDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.daysInput">DaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.days">Days</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DaysInput`<sup>Optional</sup> <a name="DaysInput" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.daysInput"></a>

```go
func DaysInput() *f64
```

- *Type:* *f64

---

##### `Days`<sup>Required</sup> <a name="Days" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.days"></a>

```go
func Days() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDeleteOlderThanOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataRetentionPolicyDontDeleteOutputReference <a name="DataRetentionPolicyDontDeleteOutputReference" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/dataretentionpolicy"

dataretentionpolicy.NewDataRetentionPolicyDontDeleteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataRetentionPolicyDontDeleteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataRetentionPolicy.DataRetentionPolicyDontDeleteOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



