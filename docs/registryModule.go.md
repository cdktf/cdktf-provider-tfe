# `registryModule` Submodule <a name="`registryModule` Submodule" id="@cdktf/provider-tfe.registryModule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RegistryModule <a name="RegistryModule" id="@cdktf/provider-tfe.registryModule.RegistryModule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module tfe_registry_module}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.NewRegistryModule(scope Construct, id *string, config RegistryModuleConfig) RegistryModule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig">RegistryModuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.registryModule.RegistryModule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig">RegistryModuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig">PutTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo">PutVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetInitialVersion">ResetInitialVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetModuleProvider">ResetModuleProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetNoCode">ResetNoCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetTestConfig">ResetTestConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.resetVcsRepo">ResetVcsRepo</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.registryModule.RegistryModule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.registryModule.RegistryModule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.registryModule.RegistryModule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.registryModule.RegistryModule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.registryModule.RegistryModule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.registryModule.RegistryModule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.registryModule.RegistryModule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.registryModule.RegistryModule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTestConfig` <a name="PutTestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig"></a>

```go
func PutTestConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.putTestConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutVcsRepo` <a name="PutVcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo"></a>

```go
func PutVcsRepo(value RegistryModuleVcsRepo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.registryModule.RegistryModule.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialVersion` <a name="ResetInitialVersion" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetInitialVersion"></a>

```go
func ResetInitialVersion()
```

##### `ResetModuleProvider` <a name="ResetModuleProvider" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetModuleProvider"></a>

```go
func ResetModuleProvider()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetName"></a>

```go
func ResetName()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetNamespace"></a>

```go
func ResetNamespace()
```

##### `ResetNoCode` <a name="ResetNoCode" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetNoCode"></a>

```go
func ResetNoCode()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetRegistryName"></a>

```go
func ResetRegistryName()
```

##### `ResetTestConfig` <a name="ResetTestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetTestConfig"></a>

```go
func ResetTestConfig()
```

##### `ResetVcsRepo` <a name="ResetVcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModule.resetVcsRepo"></a>

```go
func ResetVcsRepo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a RegistryModule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.RegistryModule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.RegistryModule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.RegistryModule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.registryModule.RegistryModule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.RegistryModule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a RegistryModule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RegistryModule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RegistryModule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the RegistryModule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.publishingMechanism">PublishingMechanism</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfig">TestConfig</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList">RegistryModuleTestConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference">RegistryModuleVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersionInput">InitialVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProviderInput">ModuleProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.namespaceInput">NamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.noCodeInput">NoCodeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.registryNameInput">RegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfigInput">TestConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepoInput">VcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersion">InitialVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProvider">ModuleProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.noCode">NoCode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PublishingMechanism`<sup>Required</sup> <a name="PublishingMechanism" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.publishingMechanism"></a>

```go
func PublishingMechanism() *string
```

- *Type:* *string

---

##### `TestConfig`<sup>Required</sup> <a name="TestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfig"></a>

```go
func TestConfig() RegistryModuleTestConfigList
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList">RegistryModuleTestConfigList</a>

---

##### `VcsRepo`<sup>Required</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepo"></a>

```go
func VcsRepo() RegistryModuleVcsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference">RegistryModuleVcsRepoOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialVersionInput`<sup>Optional</sup> <a name="InitialVersionInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersionInput"></a>

```go
func InitialVersionInput() *string
```

- *Type:* *string

---

##### `ModuleProviderInput`<sup>Optional</sup> <a name="ModuleProviderInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProviderInput"></a>

```go
func ModuleProviderInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.namespaceInput"></a>

```go
func NamespaceInput() *string
```

- *Type:* *string

---

##### `NoCodeInput`<sup>Optional</sup> <a name="NoCodeInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.noCodeInput"></a>

```go
func NoCodeInput() interface{}
```

- *Type:* interface{}

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.registryNameInput"></a>

```go
func RegistryNameInput() *string
```

- *Type:* *string

---

##### `TestConfigInput`<sup>Optional</sup> <a name="TestConfigInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.testConfigInput"></a>

```go
func TestConfigInput() interface{}
```

- *Type:* interface{}

---

##### `VcsRepoInput`<sup>Optional</sup> <a name="VcsRepoInput" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.vcsRepoInput"></a>

```go
func VcsRepoInput() RegistryModuleVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialVersion`<sup>Required</sup> <a name="InitialVersion" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.initialVersion"></a>

```go
func InitialVersion() *string
```

- *Type:* *string

---

##### `ModuleProvider`<sup>Required</sup> <a name="ModuleProvider" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.moduleProvider"></a>

```go
func ModuleProvider() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `NoCode`<sup>Required</sup> <a name="NoCode" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.noCode"></a>

```go
func NoCode() interface{}
```

- *Type:* interface{}

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.registryModule.RegistryModule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RegistryModuleConfig <a name="RegistryModuleConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

&registrymodule.RegistryModuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	InitialVersion: *string,
	ModuleProvider: *string,
	Name: *string,
	Namespace: *string,
	NoCode: interface{},
	Organization: *string,
	RegistryName: *string,
	TestConfig: interface{},
	VcsRepo: github.com/cdktf/cdktf-provider-tfe-go/tfe.registryModule.RegistryModuleVcsRepo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#id RegistryModule#id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.initialVersion">InitialVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#initial_version RegistryModule#initial_version}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.moduleProvider">ModuleProvider</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#name RegistryModule#name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.namespace">Namespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#namespace RegistryModule#namespace}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.noCode">NoCode</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#no_code RegistryModule#no_code}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#organization RegistryModule#organization}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.registryName">RegistryName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.testConfig">TestConfig</a></code> | <code>interface{}</code> | test_config block. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.vcsRepo">VcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | vcs_repo block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#id RegistryModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialVersion`<sup>Optional</sup> <a name="InitialVersion" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.initialVersion"></a>

```go
InitialVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#initial_version RegistryModule#initial_version}.

---

##### `ModuleProvider`<sup>Optional</sup> <a name="ModuleProvider" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.moduleProvider"></a>

```go
ModuleProvider *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#module_provider RegistryModule#module_provider}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#name RegistryModule#name}.

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.namespace"></a>

```go
Namespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#namespace RegistryModule#namespace}.

---

##### `NoCode`<sup>Optional</sup> <a name="NoCode" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.noCode"></a>

```go
NoCode interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#no_code RegistryModule#no_code}.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#organization RegistryModule#organization}.

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.registryName"></a>

```go
RegistryName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#registry_name RegistryModule#registry_name}.

---

##### `TestConfig`<sup>Optional</sup> <a name="TestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.testConfig"></a>

```go
TestConfig interface{}
```

- *Type:* interface{}

test_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#test_config RegistryModule#test_config}

---

##### `VcsRepo`<sup>Optional</sup> <a name="VcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModuleConfig.property.vcsRepo"></a>

```go
VcsRepo RegistryModuleVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#vcs_repo RegistryModule#vcs_repo}

---

### RegistryModuleTestConfig <a name="RegistryModuleTestConfig" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

&registrymodule.RegistryModuleTestConfig {
	TestsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.property.testsEnabled">TestsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#tests_enabled RegistryModule#tests_enabled}. |

---

##### `TestsEnabled`<sup>Optional</sup> <a name="TestsEnabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfig.property.testsEnabled"></a>

```go
TestsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#tests_enabled RegistryModule#tests_enabled}.

---

### RegistryModuleVcsRepo <a name="RegistryModuleVcsRepo" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

&registrymodule.RegistryModuleVcsRepo {
	DisplayIdentifier: *string,
	Identifier: *string,
	Branch: *string,
	GithubAppInstallationId: *string,
	OauthTokenId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.displayIdentifier">DisplayIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.identifier">Identifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#identifier RegistryModule#identifier}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#branch RegistryModule#branch}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.oauthTokenId">OauthTokenId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#tags RegistryModule#tags}. |

---

##### `DisplayIdentifier`<sup>Required</sup> <a name="DisplayIdentifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.displayIdentifier"></a>

```go
DisplayIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#display_identifier RegistryModule#display_identifier}.

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.identifier"></a>

```go
Identifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#identifier RegistryModule#identifier}.

---

##### `Branch`<sup>Optional</sup> <a name="Branch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#branch RegistryModule#branch}.

---

##### `GithubAppInstallationId`<sup>Optional</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.githubAppInstallationId"></a>

```go
GithubAppInstallationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#github_app_installation_id RegistryModule#github_app_installation_id}.

---

##### `OauthTokenId`<sup>Optional</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.oauthTokenId"></a>

```go
OauthTokenId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#oauth_token_id RegistryModule#oauth_token_id}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.57.0/docs/resources/registry_module#tags RegistryModule#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### RegistryModuleTestConfigList <a name="RegistryModuleTestConfigList" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.NewRegistryModuleTestConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RegistryModuleTestConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get"></a>

```go
func Get(index *f64) RegistryModuleTestConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RegistryModuleTestConfigOutputReference <a name="RegistryModuleTestConfigOutputReference" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.NewRegistryModuleTestConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RegistryModuleTestConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resetTestsEnabled">ResetTestsEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTestsEnabled` <a name="ResetTestsEnabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.resetTestsEnabled"></a>

```go
func ResetTestsEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabledInput">TestsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabled">TestsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TestsEnabledInput`<sup>Optional</sup> <a name="TestsEnabledInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabledInput"></a>

```go
func TestsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `TestsEnabled`<sup>Required</sup> <a name="TestsEnabled" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.testsEnabled"></a>

```go
func TestsEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.registryModule.RegistryModuleTestConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RegistryModuleVcsRepoOutputReference <a name="RegistryModuleVcsRepoOutputReference" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/registrymodule"

registrymodule.NewRegistryModuleVcsRepoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RegistryModuleVcsRepoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetBranch">ResetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetGithubAppInstallationId">ResetGithubAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetOauthTokenId">ResetOauthTokenId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBranch` <a name="ResetBranch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetBranch"></a>

```go
func ResetBranch()
```

##### `ResetGithubAppInstallationId` <a name="ResetGithubAppInstallationId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```go
func ResetGithubAppInstallationId()
```

##### `ResetOauthTokenId` <a name="ResetOauthTokenId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetOauthTokenId"></a>

```go
func ResetOauthTokenId()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifierInput">DisplayIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationIdInput">GithubAppInstallationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifierInput">IdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenIdInput">OauthTokenIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifier">DisplayIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationId">GithubAppInstallationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenId">OauthTokenId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tags">Tags</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `DisplayIdentifierInput`<sup>Optional</sup> <a name="DisplayIdentifierInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifierInput"></a>

```go
func DisplayIdentifierInput() *string
```

- *Type:* *string

---

##### `GithubAppInstallationIdInput`<sup>Optional</sup> <a name="GithubAppInstallationIdInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```go
func GithubAppInstallationIdInput() *string
```

- *Type:* *string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifierInput"></a>

```go
func IdentifierInput() *string
```

- *Type:* *string

---

##### `OauthTokenIdInput`<sup>Optional</sup> <a name="OauthTokenIdInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```go
func OauthTokenIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `DisplayIdentifier`<sup>Required</sup> <a name="DisplayIdentifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.displayIdentifier"></a>

```go
func DisplayIdentifier() *string
```

- *Type:* *string

---

##### `GithubAppInstallationId`<sup>Required</sup> <a name="GithubAppInstallationId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.githubAppInstallationId"></a>

```go
func GithubAppInstallationId() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `OauthTokenId`<sup>Required</sup> <a name="OauthTokenId" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.oauthTokenId"></a>

```go
func OauthTokenId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.tags"></a>

```go
func Tags() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepoOutputReference.property.internalValue"></a>

```go
func InternalValue() RegistryModuleVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.registryModule.RegistryModuleVcsRepo">RegistryModuleVcsRepo</a>

---



