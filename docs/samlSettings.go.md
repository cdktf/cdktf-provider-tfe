# `samlSettings` Submodule <a name="`samlSettings` Submodule" id="@cdktf/provider-tfe.samlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlSettings <a name="SamlSettings" id="@cdktf/provider-tfe.samlSettings.SamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/samlsettings"

samlsettings.NewSamlSettings(scope Construct, id *string, config SamlSettingsConfig) SamlSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig">SamlSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig">SamlSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups">ResetAttrGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin">ResetAttrSiteAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername">ResetAttrUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned">ResetAuthnRequestsSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate">ResetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug">ResetDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod">ResetSignatureDigestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod">ResetSignatureSigningMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole">ResetSiteAdminRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout">ResetSsoApiTokenSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled">ResetTeamManagementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned">ResetWantAssertionsSigned</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAttrGroups` <a name="ResetAttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups"></a>

```go
func ResetAttrGroups()
```

##### `ResetAttrSiteAdmin` <a name="ResetAttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin"></a>

```go
func ResetAttrSiteAdmin()
```

##### `ResetAttrUsername` <a name="ResetAttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername"></a>

```go
func ResetAttrUsername()
```

##### `ResetAuthnRequestsSigned` <a name="ResetAuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned"></a>

```go
func ResetAuthnRequestsSigned()
```

##### `ResetCertificate` <a name="ResetCertificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate"></a>

```go
func ResetCertificate()
```

##### `ResetDebug` <a name="ResetDebug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug"></a>

```go
func ResetDebug()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetSignatureDigestMethod` <a name="ResetSignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod"></a>

```go
func ResetSignatureDigestMethod()
```

##### `ResetSignatureSigningMethod` <a name="ResetSignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod"></a>

```go
func ResetSignatureSigningMethod()
```

##### `ResetSiteAdminRole` <a name="ResetSiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole"></a>

```go
func ResetSiteAdminRole()
```

##### `ResetSsoApiTokenSessionTimeout` <a name="ResetSsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout"></a>

```go
func ResetSsoApiTokenSessionTimeout()
```

##### `ResetTeamManagementEnabled` <a name="ResetTeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled"></a>

```go
func ResetTeamManagementEnabled()
```

##### `ResetWantAssertionsSigned` <a name="ResetWantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned"></a>

```go
func ResetWantAssertionsSigned()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/samlsettings"

samlsettings.SamlSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/samlsettings"

samlsettings.SamlSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/samlsettings"

samlsettings.SamlSettings_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/samlsettings"

samlsettings.SamlSettings_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SamlSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SamlSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SamlSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl">AcsConsumerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl">MetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert">OldIdpCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput">AttrGroupsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput">AttrSiteAdminInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput">AttrUsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput">AuthnRequestsSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput">CertificateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput">DebugInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput">IdpCertInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput">SignatureDigestMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput">SignatureSigningMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput">SiteAdminRoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput">SloEndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput">SsoApiTokenSessionTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput">SsoEndpointUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput">TeamManagementEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput">WantAssertionsSignedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups">AttrGroups</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin">AttrSiteAdmin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername">AttrUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned">AuthnRequestsSigned</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug">Debug</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert">IdpCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod">SignatureDigestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod">SignatureSigningMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole">SiteAdminRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl">SloEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout">SsoApiTokenSessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl">SsoEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled">TeamManagementEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned">WantAssertionsSigned</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcsConsumerUrl`<sup>Required</sup> <a name="AcsConsumerUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl"></a>

```go
func AcsConsumerUrl() *string
```

- *Type:* *string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl"></a>

```go
func MetadataUrl() *string
```

- *Type:* *string

---

##### `OldIdpCert`<sup>Required</sup> <a name="OldIdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert"></a>

```go
func OldIdpCert() *string
```

- *Type:* *string

---

##### `AttrGroupsInput`<sup>Optional</sup> <a name="AttrGroupsInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput"></a>

```go
func AttrGroupsInput() *string
```

- *Type:* *string

---

##### `AttrSiteAdminInput`<sup>Optional</sup> <a name="AttrSiteAdminInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput"></a>

```go
func AttrSiteAdminInput() *string
```

- *Type:* *string

---

##### `AttrUsernameInput`<sup>Optional</sup> <a name="AttrUsernameInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput"></a>

```go
func AttrUsernameInput() *string
```

- *Type:* *string

---

##### `AuthnRequestsSignedInput`<sup>Optional</sup> <a name="AuthnRequestsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput"></a>

```go
func AuthnRequestsSignedInput() interface{}
```

- *Type:* interface{}

---

##### `CertificateInput`<sup>Optional</sup> <a name="CertificateInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput"></a>

```go
func CertificateInput() *string
```

- *Type:* *string

---

##### `DebugInput`<sup>Optional</sup> <a name="DebugInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput"></a>

```go
func DebugInput() interface{}
```

- *Type:* interface{}

---

##### `IdpCertInput`<sup>Optional</sup> <a name="IdpCertInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput"></a>

```go
func IdpCertInput() *string
```

- *Type:* *string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `SignatureDigestMethodInput`<sup>Optional</sup> <a name="SignatureDigestMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput"></a>

```go
func SignatureDigestMethodInput() *string
```

- *Type:* *string

---

##### `SignatureSigningMethodInput`<sup>Optional</sup> <a name="SignatureSigningMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput"></a>

```go
func SignatureSigningMethodInput() *string
```

- *Type:* *string

---

##### `SiteAdminRoleInput`<sup>Optional</sup> <a name="SiteAdminRoleInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput"></a>

```go
func SiteAdminRoleInput() *string
```

- *Type:* *string

---

##### `SloEndpointUrlInput`<sup>Optional</sup> <a name="SloEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput"></a>

```go
func SloEndpointUrlInput() *string
```

- *Type:* *string

---

##### `SsoApiTokenSessionTimeoutInput`<sup>Optional</sup> <a name="SsoApiTokenSessionTimeoutInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput"></a>

```go
func SsoApiTokenSessionTimeoutInput() *f64
```

- *Type:* *f64

---

##### `SsoEndpointUrlInput`<sup>Optional</sup> <a name="SsoEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput"></a>

```go
func SsoEndpointUrlInput() *string
```

- *Type:* *string

---

##### `TeamManagementEnabledInput`<sup>Optional</sup> <a name="TeamManagementEnabledInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput"></a>

```go
func TeamManagementEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `WantAssertionsSignedInput`<sup>Optional</sup> <a name="WantAssertionsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput"></a>

```go
func WantAssertionsSignedInput() interface{}
```

- *Type:* interface{}

---

##### `AttrGroups`<sup>Required</sup> <a name="AttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups"></a>

```go
func AttrGroups() *string
```

- *Type:* *string

---

##### `AttrSiteAdmin`<sup>Required</sup> <a name="AttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin"></a>

```go
func AttrSiteAdmin() *string
```

- *Type:* *string

---

##### `AttrUsername`<sup>Required</sup> <a name="AttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername"></a>

```go
func AttrUsername() *string
```

- *Type:* *string

---

##### `AuthnRequestsSigned`<sup>Required</sup> <a name="AuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned"></a>

```go
func AuthnRequestsSigned() interface{}
```

- *Type:* interface{}

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Debug`<sup>Required</sup> <a name="Debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug"></a>

```go
func Debug() interface{}
```

- *Type:* interface{}

---

##### `IdpCert`<sup>Required</sup> <a name="IdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert"></a>

```go
func IdpCert() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `SignatureDigestMethod`<sup>Required</sup> <a name="SignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod"></a>

```go
func SignatureDigestMethod() *string
```

- *Type:* *string

---

##### `SignatureSigningMethod`<sup>Required</sup> <a name="SignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod"></a>

```go
func SignatureSigningMethod() *string
```

- *Type:* *string

---

##### `SiteAdminRole`<sup>Required</sup> <a name="SiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole"></a>

```go
func SiteAdminRole() *string
```

- *Type:* *string

---

##### `SloEndpointUrl`<sup>Required</sup> <a name="SloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl"></a>

```go
func SloEndpointUrl() *string
```

- *Type:* *string

---

##### `SsoApiTokenSessionTimeout`<sup>Required</sup> <a name="SsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout"></a>

```go
func SsoApiTokenSessionTimeout() *f64
```

- *Type:* *f64

---

##### `SsoEndpointUrl`<sup>Required</sup> <a name="SsoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl"></a>

```go
func SsoEndpointUrl() *string
```

- *Type:* *string

---

##### `TeamManagementEnabled`<sup>Required</sup> <a name="TeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled"></a>

```go
func TeamManagementEnabled() interface{}
```

- *Type:* interface{}

---

##### `WantAssertionsSigned`<sup>Required</sup> <a name="WantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned"></a>

```go
func WantAssertionsSigned() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlSettingsConfig <a name="SamlSettingsConfig" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/v10/samlsettings"

&samlsettings.SamlSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	IdpCert: *string,
	SloEndpointUrl: *string,
	SsoEndpointUrl: *string,
	AttrGroups: *string,
	AttrSiteAdmin: *string,
	AttrUsername: *string,
	AuthnRequestsSigned: interface{},
	Certificate: *string,
	Debug: interface{},
	PrivateKey: *string,
	SignatureDigestMethod: *string,
	SignatureSigningMethod: *string,
	SiteAdminRole: *string,
	SsoApiTokenSessionTimeout: *f64,
	TeamManagementEnabled: interface{},
	WantAssertionsSigned: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert">IdpCert</a></code> | <code>*string</code> | Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl">SloEndpointUrl</a></code> | <code>*string</code> | Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl">SsoEndpointUrl</a></code> | <code>*string</code> | Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups">AttrGroups</a></code> | <code>*string</code> | Team Attribute Name specifies the name of the SAML attribute that determines team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin">AttrSiteAdmin</a></code> | <code>*string</code> | Specifies the role for site admin access. Overrides the "Site Admin Role" method. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername">AttrUsername</a></code> | <code>*string</code> | Username Attribute Name specifies the name of the SAML attribute that determines the user's username. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned">AuthnRequestsSigned</a></code> | <code>interface{}</code> | Ensure that <samlp:AuthnRequest> messages are signed. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate">Certificate</a></code> | <code>*string</code> | The certificate used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug">Debug</a></code> | <code>interface{}</code> | When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | The private key used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod">SignatureDigestMethod</a></code> | <code>*string</code> | Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod">SignatureSigningMethod</a></code> | <code>*string</code> | Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole">SiteAdminRole</a></code> | <code>*string</code> | Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout">SsoApiTokenSessionTimeout</a></code> | <code>*f64</code> | Specifies the Single Sign On session timeout in seconds. Defaults to 14 days. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled">TeamManagementEnabled</a></code> | <code>interface{}</code> | Set it to false if you would rather use Terraform Enterprise to manage team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned">WantAssertionsSigned</a></code> | <code>interface{}</code> | Ensure that <saml:Assertion> elements are signed. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IdpCert`<sup>Required</sup> <a name="IdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert"></a>

```go
IdpCert *string
```

- *Type:* *string

Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}

---

##### `SloEndpointUrl`<sup>Required</sup> <a name="SloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl"></a>

```go
SloEndpointUrl *string
```

- *Type:* *string

Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}

---

##### `SsoEndpointUrl`<sup>Required</sup> <a name="SsoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl"></a>

```go
SsoEndpointUrl *string
```

- *Type:* *string

Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}

---

##### `AttrGroups`<sup>Optional</sup> <a name="AttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups"></a>

```go
AttrGroups *string
```

- *Type:* *string

Team Attribute Name specifies the name of the SAML attribute that determines team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}

---

##### `AttrSiteAdmin`<sup>Optional</sup> <a name="AttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin"></a>

```go
AttrSiteAdmin *string
```

- *Type:* *string

Specifies the role for site admin access. Overrides the "Site Admin Role" method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}

---

##### `AttrUsername`<sup>Optional</sup> <a name="AttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername"></a>

```go
AttrUsername *string
```

- *Type:* *string

Username Attribute Name specifies the name of the SAML attribute that determines the user's username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_username SamlSettings#attr_username}

---

##### `AuthnRequestsSigned`<sup>Optional</sup> <a name="AuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned"></a>

```go
AuthnRequestsSigned interface{}
```

- *Type:* interface{}

Ensure that <samlp:AuthnRequest> messages are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}

---

##### `Certificate`<sup>Optional</sup> <a name="Certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate"></a>

```go
Certificate *string
```

- *Type:* *string

The certificate used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#certificate SamlSettings#certificate}

---

##### `Debug`<sup>Optional</sup> <a name="Debug" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug"></a>

```go
Debug interface{}
```

- *Type:* interface{}

When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#debug SamlSettings#debug}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

The private key used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#private_key SamlSettings#private_key}

---

##### `SignatureDigestMethod`<sup>Optional</sup> <a name="SignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod"></a>

```go
SignatureDigestMethod *string
```

- *Type:* *string

Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}

---

##### `SignatureSigningMethod`<sup>Optional</sup> <a name="SignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod"></a>

```go
SignatureSigningMethod *string
```

- *Type:* *string

Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}

---

##### `SiteAdminRole`<sup>Optional</sup> <a name="SiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole"></a>

```go
SiteAdminRole *string
```

- *Type:* *string

Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}

---

##### `SsoApiTokenSessionTimeout`<sup>Optional</sup> <a name="SsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout"></a>

```go
SsoApiTokenSessionTimeout *f64
```

- *Type:* *f64

Specifies the Single Sign On session timeout in seconds. Defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}

---

##### `TeamManagementEnabled`<sup>Optional</sup> <a name="TeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled"></a>

```go
TeamManagementEnabled interface{}
```

- *Type:* interface{}

Set it to false if you would rather use Terraform Enterprise to manage team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}

---

##### `WantAssertionsSigned`<sup>Optional</sup> <a name="WantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned"></a>

```go
WantAssertionsSigned interface{}
```

- *Type:* interface{}

Ensure that <saml:Assertion> elements are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}

---



