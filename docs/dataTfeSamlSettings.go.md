# `data_tfe_saml_settings`

Refer to the Terraform Registory for docs: [`data_tfe_saml_settings`](https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/data-sources/saml_settings).

# `dataTfeSamlSettings` Submodule <a name="`dataTfeSamlSettings` Submodule" id="@cdktf/provider-tfe.dataTfeSamlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeSamlSettings <a name="DataTfeSamlSettings" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.48.0/docs/data-sources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfesamlsettings"

datatfesamlsettings.NewDataTfeSamlSettings(scope Construct, id *string, config DataTfeSamlSettingsConfig) DataTfeSamlSettings
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig">DataTfeSamlSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig">DataTfeSamlSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfesamlsettings"

datatfesamlsettings.DataTfeSamlSettings_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfesamlsettings"

datatfesamlsettings.DataTfeSamlSettings_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfesamlsettings"

datatfesamlsettings.DataTfeSamlSettings_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.acsConsumerUrl">AcsConsumerUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrGroups">AttrGroups</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrSiteAdmin">AttrSiteAdmin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrUsername">AttrUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.authnRequestsSigned">AuthnRequestsSigned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.certificate">Certificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.debug">Debug</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.enabled">Enabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.idpCert">IdpCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.metadataUrl">MetadataUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.oldIdpCert">OldIdpCert</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureDigestMethod">SignatureDigestMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureSigningMethod">SignatureSigningMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.siteAdminRole">SiteAdminRole</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.sloEndpointUrl">SloEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoApiTokenSessionTimeout">SsoApiTokenSessionTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoEndpointUrl">SsoEndpointUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.teamManagementEnabled">TeamManagementEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.wantAssertionsSigned">WantAssertionsSigned</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AcsConsumerUrl`<sup>Required</sup> <a name="AcsConsumerUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.acsConsumerUrl"></a>

```go
func AcsConsumerUrl() *string
```

- *Type:* *string

---

##### `AttrGroups`<sup>Required</sup> <a name="AttrGroups" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrGroups"></a>

```go
func AttrGroups() *string
```

- *Type:* *string

---

##### `AttrSiteAdmin`<sup>Required</sup> <a name="AttrSiteAdmin" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrSiteAdmin"></a>

```go
func AttrSiteAdmin() *string
```

- *Type:* *string

---

##### `AttrUsername`<sup>Required</sup> <a name="AttrUsername" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrUsername"></a>

```go
func AttrUsername() *string
```

- *Type:* *string

---

##### `AuthnRequestsSigned`<sup>Required</sup> <a name="AuthnRequestsSigned" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.authnRequestsSigned"></a>

```go
func AuthnRequestsSigned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Certificate`<sup>Required</sup> <a name="Certificate" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.certificate"></a>

```go
func Certificate() *string
```

- *Type:* *string

---

##### `Debug`<sup>Required</sup> <a name="Debug" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.debug"></a>

```go
func Debug() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.enabled"></a>

```go
func Enabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IdpCert`<sup>Required</sup> <a name="IdpCert" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.idpCert"></a>

```go
func IdpCert() *string
```

- *Type:* *string

---

##### `MetadataUrl`<sup>Required</sup> <a name="MetadataUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.metadataUrl"></a>

```go
func MetadataUrl() *string
```

- *Type:* *string

---

##### `OldIdpCert`<sup>Required</sup> <a name="OldIdpCert" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.oldIdpCert"></a>

```go
func OldIdpCert() *string
```

- *Type:* *string

---

##### `PrivateKey`<sup>Required</sup> <a name="PrivateKey" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `SignatureDigestMethod`<sup>Required</sup> <a name="SignatureDigestMethod" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureDigestMethod"></a>

```go
func SignatureDigestMethod() *string
```

- *Type:* *string

---

##### `SignatureSigningMethod`<sup>Required</sup> <a name="SignatureSigningMethod" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureSigningMethod"></a>

```go
func SignatureSigningMethod() *string
```

- *Type:* *string

---

##### `SiteAdminRole`<sup>Required</sup> <a name="SiteAdminRole" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.siteAdminRole"></a>

```go
func SiteAdminRole() *string
```

- *Type:* *string

---

##### `SloEndpointUrl`<sup>Required</sup> <a name="SloEndpointUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.sloEndpointUrl"></a>

```go
func SloEndpointUrl() *string
```

- *Type:* *string

---

##### `SsoApiTokenSessionTimeout`<sup>Required</sup> <a name="SsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoApiTokenSessionTimeout"></a>

```go
func SsoApiTokenSessionTimeout() *f64
```

- *Type:* *f64

---

##### `SsoEndpointUrl`<sup>Required</sup> <a name="SsoEndpointUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoEndpointUrl"></a>

```go
func SsoEndpointUrl() *string
```

- *Type:* *string

---

##### `TeamManagementEnabled`<sup>Required</sup> <a name="TeamManagementEnabled" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.teamManagementEnabled"></a>

```go
func TeamManagementEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `WantAssertionsSigned`<sup>Required</sup> <a name="WantAssertionsSigned" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.wantAssertionsSigned"></a>

```go
func WantAssertionsSigned() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeSamlSettingsConfig <a name="DataTfeSamlSettingsConfig" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-tfe-go/tfe/datatfesamlsettings"

&datatfesamlsettings.DataTfeSamlSettingsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---



