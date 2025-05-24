# `dataTfeOrganizationRunTaskGlobalSettings` Submodule <a name="`dataTfeOrganizationRunTaskGlobalSettings` Submodule" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeOrganizationRunTaskGlobalSettings <a name="DataTfeOrganizationRunTaskGlobalSettings" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/organization_run_task_global_settings tfe_organization_run_task_global_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntaskglobalsettings"

datatfeorganizationruntaskglobalsettings.NewDataTfeOrganizationRunTaskGlobalSettings(scope Construct, id *string, config DataTfeOrganizationRunTaskGlobalSettingsConfig) DataTfeOrganizationRunTaskGlobalSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig">DataTfeOrganizationRunTaskGlobalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig">DataTfeOrganizationRunTaskGlobalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnforcementLevel">ResetEnforcementLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnabled"></a>

```go
func ResetEnabled()
```

##### `ResetEnforcementLevel` <a name="ResetEnforcementLevel" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnforcementLevel"></a>

```go
func ResetEnforcementLevel()
```

##### `ResetStages` <a name="ResetStages" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetStages"></a>

```go
func ResetStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeOrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntaskglobalsettings"

datatfeorganizationruntaskglobalsettings.DataTfeOrganizationRunTaskGlobalSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntaskglobalsettings"

datatfeorganizationruntaskglobalsettings.DataTfeOrganizationRunTaskGlobalSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntaskglobalsettings"

datatfeorganizationruntaskglobalsettings.DataTfeOrganizationRunTaskGlobalSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntaskglobalsettings"

datatfeorganizationruntaskglobalsettings.DataTfeOrganizationRunTaskGlobalSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataTfeOrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataTfeOrganizationRunTaskGlobalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataTfeOrganizationRunTaskGlobalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/organization_run_task_global_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeOrganizationRunTaskGlobalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevelInput">EnforcementLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stagesInput">StagesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskIdInput">TaskIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevel">EnforcementLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stages">Stages</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskId">TaskId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `EnforcementLevelInput`<sup>Optional</sup> <a name="EnforcementLevelInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevelInput"></a>

```go
func EnforcementLevelInput() *string
```

- *Type:* *string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stagesInput"></a>

```go
func StagesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TaskIdInput`<sup>Optional</sup> <a name="TaskIdInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskIdInput"></a>

```go
func TaskIdInput() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `EnforcementLevel`<sup>Required</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevel"></a>

```go
func EnforcementLevel() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stages"></a>

```go
func Stages() *[]*string
```

- *Type:* *[]*string

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskId"></a>

```go
func TaskId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeOrganizationRunTaskGlobalSettingsConfig <a name="DataTfeOrganizationRunTaskGlobalSettingsConfig" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v11/datatfeorganizationruntaskglobalsettings"

&datatfeorganizationruntaskglobalsettings.DataTfeOrganizationRunTaskGlobalSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TaskId: *string,
	Enabled: interface{},
	EnforcementLevel: *string,
	Stages: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.taskId">TaskId</a></code> | <code>*string</code> | The id of the run task. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Whether the run task will be applied globally. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel">EnforcementLevel</a></code> | <code>*string</code> | The enforcement level of the global task. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.stages">Stages</a></code> | <code>*[]*string</code> | Which stages the task will run in. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TaskId`<sup>Required</sup> <a name="TaskId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.taskId"></a>

```go
TaskId *string
```

- *Type:* *string

The id of the run task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/organization_run_task_global_settings#task_id DataTfeOrganizationRunTaskGlobalSettings#task_id}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Whether the run task will be applied globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/organization_run_task_global_settings#enabled DataTfeOrganizationRunTaskGlobalSettings#enabled}

---

##### `EnforcementLevel`<sup>Optional</sup> <a name="EnforcementLevel" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel"></a>

```go
EnforcementLevel *string
```

- *Type:* *string

The enforcement level of the global task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/organization_run_task_global_settings#enforcement_level DataTfeOrganizationRunTaskGlobalSettings#enforcement_level}

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.stages"></a>

```go
Stages *[]*string
```

- *Type:* *[]*string

Which stages the task will run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.66.0/docs/data-sources/organization_run_task_global_settings#stages DataTfeOrganizationRunTaskGlobalSettings#stages}

---



