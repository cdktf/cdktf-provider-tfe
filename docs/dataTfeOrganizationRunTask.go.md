# `dataTfeOrganizationRunTask` Submodule <a name="`dataTfeOrganizationRunTask` Submodule" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeOrganizationRunTask <a name="DataTfeOrganizationRunTask" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task tfe_organization_run_task}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntask"

datatfeorganizationruntask.NewDataTfeOrganizationRunTask(scope Construct, id *string, config DataTfeOrganizationRunTaskConfig) DataTfeOrganizationRunTask
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig">DataTfeOrganizationRunTaskConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig">DataTfeOrganizationRunTaskConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetId"></a>

```go
func ResetId()
```

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.resetUrl"></a>

```go
func ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeOrganizationRunTask resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntask"

datatfeorganizationruntask.DataTfeOrganizationRunTask_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntask"

datatfeorganizationruntask.DataTfeOrganizationRunTask_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntask"

datatfeorganizationruntask.DataTfeOrganizationRunTask_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntask"

datatfeorganizationruntask.DataTfeOrganizationRunTask_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataTfeOrganizationRunTask resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataTfeOrganizationRunTask to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataTfeOrganizationRunTask that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeOrganizationRunTask to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.urlInput">UrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.url">Url</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.urlInput"></a>

```go
func UrlInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.url"></a>

```go
func Url() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTask.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeOrganizationRunTaskConfig <a name="DataTfeOrganizationRunTaskConfig" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntask"

&datatfeorganizationruntask.DataTfeOrganizationRunTaskConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Category: *string,
	Description: *string,
	Enabled: interface{},
	Id: *string,
	Organization: *string,
	Url: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#name DataTfeOrganizationRunTask#name}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.category">Category</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#category DataTfeOrganizationRunTask#category}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#description DataTfeOrganizationRunTask#description}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#enabled DataTfeOrganizationRunTask#enabled}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#id DataTfeOrganizationRunTask#id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.organization">Organization</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#organization DataTfeOrganizationRunTask#organization}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.url">Url</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#url DataTfeOrganizationRunTask#url}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#name DataTfeOrganizationRunTask#name}.

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#category DataTfeOrganizationRunTask#category}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#description DataTfeOrganizationRunTask#description}.

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#enabled DataTfeOrganizationRunTask#enabled}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#id DataTfeOrganizationRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#organization DataTfeOrganizationRunTask#organization}.

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-tfe.dataTfeOrganizationRunTask.DataTfeOrganizationRunTaskConfig.property.url"></a>

```go
Url *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/data-sources/organization_run_task#url DataTfeOrganizationRunTask#url}.

---



