# `dataTfeRegistryProviders` Submodule <a name="`dataTfeRegistryProviders` Submodule" id="@cdktf/provider-tfe.dataTfeRegistryProviders"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeRegistryProviders <a name="DataTfeRegistryProviders" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/registry_providers tfe_registry_providers}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

datatferegistryproviders.NewDataTfeRegistryProviders(scope Construct, id *string, config DataTfeRegistryProvidersConfig) DataTfeRegistryProviders
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig">DataTfeRegistryProvidersConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig">DataTfeRegistryProvidersConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOrganization">ResetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetRegistryName">ResetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetSearch">ResetSearch</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetOrganization` <a name="ResetOrganization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetOrganization"></a>

```go
func ResetOrganization()
```

##### `ResetRegistryName` <a name="ResetRegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetRegistryName"></a>

```go
func ResetRegistryName()
```

##### `ResetSearch` <a name="ResetSearch" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.resetSearch"></a>

```go
func ResetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeRegistryProviders resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

datatferegistryproviders.DataTfeRegistryProviders_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

datatferegistryproviders.DataTfeRegistryProviders_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

datatferegistryproviders.DataTfeRegistryProviders_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

datatferegistryproviders.DataTfeRegistryProviders_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataTfeRegistryProviders resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataTfeRegistryProviders to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataTfeRegistryProviders that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/registry_providers#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeRegistryProviders to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.providers">Providers</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList">DataTfeRegistryProvidersProvidersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organizationInput">OrganizationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryNameInput">RegistryNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.searchInput">SearchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.search">Search</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Providers`<sup>Required</sup> <a name="Providers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.providers"></a>

```go
func Providers() DataTfeRegistryProvidersProvidersList
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList">DataTfeRegistryProvidersProvidersList</a>

---

##### `OrganizationInput`<sup>Optional</sup> <a name="OrganizationInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organizationInput"></a>

```go
func OrganizationInput() *string
```

- *Type:* *string

---

##### `RegistryNameInput`<sup>Optional</sup> <a name="RegistryNameInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryNameInput"></a>

```go
func RegistryNameInput() *string
```

- *Type:* *string

---

##### `SearchInput`<sup>Optional</sup> <a name="SearchInput" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.searchInput"></a>

```go
func SearchInput() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

##### `Search`<sup>Required</sup> <a name="Search" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.search"></a>

```go
func Search() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProviders.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeRegistryProvidersConfig <a name="DataTfeRegistryProvidersConfig" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

&datatferegistryproviders.DataTfeRegistryProvidersConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Organization: *string,
	RegistryName: *string,
	Search: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.organization">Organization</a></code> | <code>*string</code> | Name of the organization. If omitted, organization must be defined in the provider config. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.registryName">RegistryName</a></code> | <code>*string</code> | Whether to list only public or private providers. Must be either `public` or `private`. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.search">Search</a></code> | <code>*string</code> | A query string to do a fuzzy search on provider name and namespace. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Organization`<sup>Optional</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.organization"></a>

```go
Organization *string
```

- *Type:* *string

Name of the organization. If omitted, organization must be defined in the provider config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/registry_providers#organization DataTfeRegistryProviders#organization}

---

##### `RegistryName`<sup>Optional</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.registryName"></a>

```go
RegistryName *string
```

- *Type:* *string

Whether to list only public or private providers. Must be either `public` or `private`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/registry_providers#registry_name DataTfeRegistryProviders#registry_name}

---

##### `Search`<sup>Optional</sup> <a name="Search" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersConfig.property.search"></a>

```go
Search *string
```

- *Type:* *string

A query string to do a fuzzy search on provider name and namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.61.0/docs/data-sources/registry_providers#search DataTfeRegistryProviders#search}

---

### DataTfeRegistryProvidersProviders <a name="DataTfeRegistryProvidersProviders" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

&datatferegistryproviders.DataTfeRegistryProvidersProviders {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataTfeRegistryProvidersProvidersList <a name="DataTfeRegistryProvidersProvidersList" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

datatferegistryproviders.NewDataTfeRegistryProvidersProvidersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataTfeRegistryProvidersProvidersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get"></a>

```go
func Get(index *f64) DataTfeRegistryProvidersProvidersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataTfeRegistryProvidersProvidersOutputReference <a name="DataTfeRegistryProvidersProvidersOutputReference" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatferegistryproviders"

datatferegistryproviders.NewDataTfeRegistryProvidersProvidersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataTfeRegistryProvidersProvidersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.organization">Organization</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.registryName">RegistryName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders">DataTfeRegistryProvidersProviders</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Organization`<sup>Required</sup> <a name="Organization" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.organization"></a>

```go
func Organization() *string
```

- *Type:* *string

---

##### `RegistryName`<sup>Required</sup> <a name="RegistryName" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.registryName"></a>

```go
func RegistryName() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProvidersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataTfeRegistryProvidersProviders
```

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeRegistryProviders.DataTfeRegistryProvidersProviders">DataTfeRegistryProvidersProviders</a>

---



