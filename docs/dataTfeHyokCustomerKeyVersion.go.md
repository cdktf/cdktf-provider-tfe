# `dataTfeHyokCustomerKeyVersion` Submodule <a name="`dataTfeHyokCustomerKeyVersion` Submodule" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeHyokCustomerKeyVersion <a name="DataTfeHyokCustomerKeyVersion" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version tfe_hyok_customer_key_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/datatfehyokcustomerkeyversion"

datatfehyokcustomerkeyversion.NewDataTfeHyokCustomerKeyVersion(scope Construct, id *string, config DataTfeHyokCustomerKeyVersionConfig) DataTfeHyokCustomerKeyVersion
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig">DataTfeHyokCustomerKeyVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig">DataTfeHyokCustomerKeyVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeHyokCustomerKeyVersion resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/datatfehyokcustomerkeyversion"

datatfehyokcustomerkeyversion.DataTfeHyokCustomerKeyVersion_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/datatfehyokcustomerkeyversion"

datatfehyokcustomerkeyversion.DataTfeHyokCustomerKeyVersion_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/datatfehyokcustomerkeyversion"

datatfehyokcustomerkeyversion.DataTfeHyokCustomerKeyVersion_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/datatfehyokcustomerkeyversion"

datatfehyokcustomerkeyversion.DataTfeHyokCustomerKeyVersion_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataTfeHyokCustomerKeyVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataTfeHyokCustomerKeyVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataTfeHyokCustomerKeyVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeHyokCustomerKeyVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.error">Error</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.keyVersion">KeyVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.workspacesSecured">WorkspacesSecured</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Error`<sup>Required</sup> <a name="Error" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.error"></a>

```go
func Error() *string
```

- *Type:* *string

---

##### `KeyVersion`<sup>Required</sup> <a name="KeyVersion" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.keyVersion"></a>

```go
func KeyVersion() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `WorkspacesSecured`<sup>Required</sup> <a name="WorkspacesSecured" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.workspacesSecured"></a>

```go
func WorkspacesSecured() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersion.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeHyokCustomerKeyVersionConfig <a name="DataTfeHyokCustomerKeyVersionConfig" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v12/datatfehyokcustomerkeyversion"

&datatfehyokcustomerkeyversion.DataTfeHyokCustomerKeyVersionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.id">Id</a></code> | <code>*string</code> | The ID of the HYOK customer key version. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeHyokCustomerKeyVersion.DataTfeHyokCustomerKeyVersionConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the HYOK customer key version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/data-sources/hyok_customer_key_version#id DataTfeHyokCustomerKeyVersion#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



