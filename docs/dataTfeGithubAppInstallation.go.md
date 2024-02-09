# `dataTfeGithubAppInstallation` Submodule <a name="`dataTfeGithubAppInstallation` Submodule" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeGithubAppInstallation <a name="DataTfeGithubAppInstallation" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/data-sources/github_app_installation tfe_github_app_installation}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfegithubappinstallation"

datatfegithubappinstallation.NewDataTfeGithubAppInstallation(scope Construct, id *string, config DataTfeGithubAppInstallationConfig) DataTfeGithubAppInstallation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig">DataTfeGithubAppInstallationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig">DataTfeGithubAppInstallationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetInstallationId">ResetInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetInstallationId` <a name="ResetInstallationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetInstallationId"></a>

```go
func ResetInstallationId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeGithubAppInstallation resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfegithubappinstallation"

datatfegithubappinstallation.DataTfeGithubAppInstallation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfegithubappinstallation"

datatfegithubappinstallation.DataTfeGithubAppInstallation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfegithubappinstallation"

datatfegithubappinstallation.DataTfeGithubAppInstallation_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfegithubappinstallation"

datatfegithubappinstallation.DataTfeGithubAppInstallation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataTfeGithubAppInstallation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataTfeGithubAppInstallation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataTfeGithubAppInstallation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/data-sources/github_app_installation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeGithubAppInstallation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationIdInput">InstallationIdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationId">InstallationId</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstallationIdInput`<sup>Optional</sup> <a name="InstallationIdInput" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationIdInput"></a>

```go
func InstallationIdInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `InstallationId`<sup>Required</sup> <a name="InstallationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.installationId"></a>

```go
func InstallationId() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeGithubAppInstallationConfig <a name="DataTfeGithubAppInstallationConfig" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfegithubappinstallation"

&datatfegithubappinstallation.DataTfeGithubAppInstallationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	InstallationId: *f64,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.installationId">InstallationId</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}. |
| <code><a href="#@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InstallationId`<sup>Optional</sup> <a name="InstallationId" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.installationId"></a>

```go
InstallationId *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeGithubAppInstallation.DataTfeGithubAppInstallationConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.52.0/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}.

---



