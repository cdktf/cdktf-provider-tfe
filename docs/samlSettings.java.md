# `samlSettings` Submodule <a name="`samlSettings` Submodule" id="@cdktf/provider-tfe.samlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlSettings <a name="SamlSettings" id="@cdktf/provider-tfe.samlSettings.SamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.saml_settings.SamlSettings;

SamlSettings.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .idpCert(java.lang.String)
    .sloEndpointUrl(java.lang.String)
    .ssoEndpointUrl(java.lang.String)
//  .attrGroups(java.lang.String)
//  .attrSiteAdmin(java.lang.String)
//  .attrUsername(java.lang.String)
//  .authnRequestsSigned(java.lang.Boolean)
//  .authnRequestsSigned(IResolvable)
//  .certificate(java.lang.String)
//  .debug(java.lang.Boolean)
//  .debug(IResolvable)
//  .privateKey(java.lang.String)
//  .signatureDigestMethod(java.lang.String)
//  .signatureSigningMethod(java.lang.String)
//  .siteAdminRole(java.lang.String)
//  .ssoApiTokenSessionTimeout(java.lang.Number)
//  .teamManagementEnabled(java.lang.Boolean)
//  .teamManagementEnabled(IResolvable)
//  .wantAssertionsSigned(java.lang.Boolean)
//  .wantAssertionsSigned(IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.idpCert">idpCert</a></code> | <code>java.lang.String</code> | Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.sloEndpointUrl">sloEndpointUrl</a></code> | <code>java.lang.String</code> | Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoEndpointUrl">ssoEndpointUrl</a></code> | <code>java.lang.String</code> | Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrGroups">attrGroups</a></code> | <code>java.lang.String</code> | Team Attribute Name specifies the name of the SAML attribute that determines team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrSiteAdmin">attrSiteAdmin</a></code> | <code>java.lang.String</code> | Specifies the role for site admin access. Overrides the "Site Admin Role" method. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrUsername">attrUsername</a></code> | <code>java.lang.String</code> | Username Attribute Name specifies the name of the SAML attribute that determines the user's username. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.authnRequestsSigned">authnRequestsSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ensure that <samlp:AuthnRequest> messages are signed. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | The certificate used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.debug">debug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The private key used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureDigestMethod">signatureDigestMethod</a></code> | <code>java.lang.String</code> | Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureSigningMethod">signatureSigningMethod</a></code> | <code>java.lang.String</code> | Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.siteAdminRole">siteAdminRole</a></code> | <code>java.lang.String</code> | Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoApiTokenSessionTimeout">ssoApiTokenSessionTimeout</a></code> | <code>java.lang.Number</code> | Specifies the Single Sign On session timeout in seconds. Defaults to 14 days. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.teamManagementEnabled">teamManagementEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set it to false if you would rather use Terraform Enterprise to manage team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.wantAssertionsSigned">wantAssertionsSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ensure that <saml:Assertion> elements are signed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.idpCert"></a>

- *Type:* java.lang.String

Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}

---

##### `sloEndpointUrl`<sup>Required</sup> <a name="sloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.sloEndpointUrl"></a>

- *Type:* java.lang.String

Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}

---

##### `ssoEndpointUrl`<sup>Required</sup> <a name="ssoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoEndpointUrl"></a>

- *Type:* java.lang.String

Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}

---

##### `attrGroups`<sup>Optional</sup> <a name="attrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrGroups"></a>

- *Type:* java.lang.String

Team Attribute Name specifies the name of the SAML attribute that determines team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}

---

##### `attrSiteAdmin`<sup>Optional</sup> <a name="attrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrSiteAdmin"></a>

- *Type:* java.lang.String

Specifies the role for site admin access. Overrides the "Site Admin Role" method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}

---

##### `attrUsername`<sup>Optional</sup> <a name="attrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrUsername"></a>

- *Type:* java.lang.String

Username Attribute Name specifies the name of the SAML attribute that determines the user's username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_username SamlSettings#attr_username}

---

##### `authnRequestsSigned`<sup>Optional</sup> <a name="authnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.authnRequestsSigned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ensure that <samlp:AuthnRequest> messages are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

The certificate used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#certificate SamlSettings#certificate}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.debug"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#debug SamlSettings#debug}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

The private key used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#private_key SamlSettings#private_key}

---

##### `signatureDigestMethod`<sup>Optional</sup> <a name="signatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureDigestMethod"></a>

- *Type:* java.lang.String

Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}

---

##### `signatureSigningMethod`<sup>Optional</sup> <a name="signatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureSigningMethod"></a>

- *Type:* java.lang.String

Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}

---

##### `siteAdminRole`<sup>Optional</sup> <a name="siteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.siteAdminRole"></a>

- *Type:* java.lang.String

Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}

---

##### `ssoApiTokenSessionTimeout`<sup>Optional</sup> <a name="ssoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoApiTokenSessionTimeout"></a>

- *Type:* java.lang.Number

Specifies the Single Sign On session timeout in seconds. Defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}

---

##### `teamManagementEnabled`<sup>Optional</sup> <a name="teamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.teamManagementEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set it to false if you would rather use Terraform Enterprise to manage team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}

---

##### `wantAssertionsSigned`<sup>Optional</sup> <a name="wantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.wantAssertionsSigned"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ensure that <saml:Assertion> elements are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups">resetAttrGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin">resetAttrSiteAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername">resetAttrUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned">resetAuthnRequestsSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug">resetDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod">resetSignatureDigestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod">resetSignatureSigningMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole">resetSiteAdminRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout">resetSsoApiTokenSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled">resetTeamManagementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned">resetWantAssertionsSigned</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAttrGroups` <a name="resetAttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups"></a>

```java
public void resetAttrGroups()
```

##### `resetAttrSiteAdmin` <a name="resetAttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin"></a>

```java
public void resetAttrSiteAdmin()
```

##### `resetAttrUsername` <a name="resetAttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername"></a>

```java
public void resetAttrUsername()
```

##### `resetAuthnRequestsSigned` <a name="resetAuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned"></a>

```java
public void resetAuthnRequestsSigned()
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate"></a>

```java
public void resetCertificate()
```

##### `resetDebug` <a name="resetDebug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug"></a>

```java
public void resetDebug()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetSignatureDigestMethod` <a name="resetSignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod"></a>

```java
public void resetSignatureDigestMethod()
```

##### `resetSignatureSigningMethod` <a name="resetSignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod"></a>

```java
public void resetSignatureSigningMethod()
```

##### `resetSiteAdminRole` <a name="resetSiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole"></a>

```java
public void resetSiteAdminRole()
```

##### `resetSsoApiTokenSessionTimeout` <a name="resetSsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout"></a>

```java
public void resetSsoApiTokenSessionTimeout()
```

##### `resetTeamManagementEnabled` <a name="resetTeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled"></a>

```java
public void resetTeamManagementEnabled()
```

##### `resetWantAssertionsSigned` <a name="resetWantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned"></a>

```java
public void resetWantAssertionsSigned()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.saml_settings.SamlSettings;

SamlSettings.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.saml_settings.SamlSettings;

SamlSettings.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.saml_settings.SamlSettings;

SamlSettings.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.saml_settings.SamlSettings;

SamlSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SamlSettings.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SamlSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SamlSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the SamlSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl">acsConsumerUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled">enabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl">metadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert">oldIdpCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput">attrGroupsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput">attrSiteAdminInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput">attrUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput">authnRequestsSignedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput">debugInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput">idpCertInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput">signatureDigestMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput">signatureSigningMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput">siteAdminRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput">sloEndpointUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput">ssoApiTokenSessionTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput">ssoEndpointUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput">teamManagementEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput">wantAssertionsSignedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups">attrGroups</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin">attrSiteAdmin</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername">attrUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned">authnRequestsSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug">debug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert">idpCert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod">signatureDigestMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod">signatureSigningMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole">siteAdminRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl">sloEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout">ssoApiTokenSessionTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl">ssoEndpointUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled">teamManagementEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned">wantAssertionsSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `acsConsumerUrl`<sup>Required</sup> <a name="acsConsumerUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl"></a>

```java
public java.lang.String getAcsConsumerUrl();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl"></a>

```java
public java.lang.String getMetadataUrl();
```

- *Type:* java.lang.String

---

##### `oldIdpCert`<sup>Required</sup> <a name="oldIdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert"></a>

```java
public java.lang.String getOldIdpCert();
```

- *Type:* java.lang.String

---

##### `attrGroupsInput`<sup>Optional</sup> <a name="attrGroupsInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput"></a>

```java
public java.lang.String getAttrGroupsInput();
```

- *Type:* java.lang.String

---

##### `attrSiteAdminInput`<sup>Optional</sup> <a name="attrSiteAdminInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput"></a>

```java
public java.lang.String getAttrSiteAdminInput();
```

- *Type:* java.lang.String

---

##### `attrUsernameInput`<sup>Optional</sup> <a name="attrUsernameInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput"></a>

```java
public java.lang.String getAttrUsernameInput();
```

- *Type:* java.lang.String

---

##### `authnRequestsSignedInput`<sup>Optional</sup> <a name="authnRequestsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput"></a>

```java
public java.lang.Object getAuthnRequestsSignedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `debugInput`<sup>Optional</sup> <a name="debugInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput"></a>

```java
public java.lang.Object getDebugInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpCertInput`<sup>Optional</sup> <a name="idpCertInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput"></a>

```java
public java.lang.String getIdpCertInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `signatureDigestMethodInput`<sup>Optional</sup> <a name="signatureDigestMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput"></a>

```java
public java.lang.String getSignatureDigestMethodInput();
```

- *Type:* java.lang.String

---

##### `signatureSigningMethodInput`<sup>Optional</sup> <a name="signatureSigningMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput"></a>

```java
public java.lang.String getSignatureSigningMethodInput();
```

- *Type:* java.lang.String

---

##### `siteAdminRoleInput`<sup>Optional</sup> <a name="siteAdminRoleInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput"></a>

```java
public java.lang.String getSiteAdminRoleInput();
```

- *Type:* java.lang.String

---

##### `sloEndpointUrlInput`<sup>Optional</sup> <a name="sloEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput"></a>

```java
public java.lang.String getSloEndpointUrlInput();
```

- *Type:* java.lang.String

---

##### `ssoApiTokenSessionTimeoutInput`<sup>Optional</sup> <a name="ssoApiTokenSessionTimeoutInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput"></a>

```java
public java.lang.Number getSsoApiTokenSessionTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `ssoEndpointUrlInput`<sup>Optional</sup> <a name="ssoEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput"></a>

```java
public java.lang.String getSsoEndpointUrlInput();
```

- *Type:* java.lang.String

---

##### `teamManagementEnabledInput`<sup>Optional</sup> <a name="teamManagementEnabledInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput"></a>

```java
public java.lang.Object getTeamManagementEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `wantAssertionsSignedInput`<sup>Optional</sup> <a name="wantAssertionsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput"></a>

```java
public java.lang.Object getWantAssertionsSignedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `attrGroups`<sup>Required</sup> <a name="attrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups"></a>

```java
public java.lang.String getAttrGroups();
```

- *Type:* java.lang.String

---

##### `attrSiteAdmin`<sup>Required</sup> <a name="attrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin"></a>

```java
public java.lang.String getAttrSiteAdmin();
```

- *Type:* java.lang.String

---

##### `attrUsername`<sup>Required</sup> <a name="attrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername"></a>

```java
public java.lang.String getAttrUsername();
```

- *Type:* java.lang.String

---

##### `authnRequestsSigned`<sup>Required</sup> <a name="authnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned"></a>

```java
public java.lang.Object getAuthnRequestsSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `debug`<sup>Required</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug"></a>

```java
public java.lang.Object getDebug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert"></a>

```java
public java.lang.String getIdpCert();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `signatureDigestMethod`<sup>Required</sup> <a name="signatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod"></a>

```java
public java.lang.String getSignatureDigestMethod();
```

- *Type:* java.lang.String

---

##### `signatureSigningMethod`<sup>Required</sup> <a name="signatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod"></a>

```java
public java.lang.String getSignatureSigningMethod();
```

- *Type:* java.lang.String

---

##### `siteAdminRole`<sup>Required</sup> <a name="siteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole"></a>

```java
public java.lang.String getSiteAdminRole();
```

- *Type:* java.lang.String

---

##### `sloEndpointUrl`<sup>Required</sup> <a name="sloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl"></a>

```java
public java.lang.String getSloEndpointUrl();
```

- *Type:* java.lang.String

---

##### `ssoApiTokenSessionTimeout`<sup>Required</sup> <a name="ssoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout"></a>

```java
public java.lang.Number getSsoApiTokenSessionTimeout();
```

- *Type:* java.lang.Number

---

##### `ssoEndpointUrl`<sup>Required</sup> <a name="ssoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl"></a>

```java
public java.lang.String getSsoEndpointUrl();
```

- *Type:* java.lang.String

---

##### `teamManagementEnabled`<sup>Required</sup> <a name="teamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled"></a>

```java
public java.lang.Object getTeamManagementEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `wantAssertionsSigned`<sup>Required</sup> <a name="wantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned"></a>

```java
public java.lang.Object getWantAssertionsSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SamlSettingsConfig <a name="SamlSettingsConfig" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.saml_settings.SamlSettingsConfig;

SamlSettingsConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .idpCert(java.lang.String)
    .sloEndpointUrl(java.lang.String)
    .ssoEndpointUrl(java.lang.String)
//  .attrGroups(java.lang.String)
//  .attrSiteAdmin(java.lang.String)
//  .attrUsername(java.lang.String)
//  .authnRequestsSigned(java.lang.Boolean)
//  .authnRequestsSigned(IResolvable)
//  .certificate(java.lang.String)
//  .debug(java.lang.Boolean)
//  .debug(IResolvable)
//  .privateKey(java.lang.String)
//  .signatureDigestMethod(java.lang.String)
//  .signatureSigningMethod(java.lang.String)
//  .siteAdminRole(java.lang.String)
//  .ssoApiTokenSessionTimeout(java.lang.Number)
//  .teamManagementEnabled(java.lang.Boolean)
//  .teamManagementEnabled(IResolvable)
//  .wantAssertionsSigned(java.lang.Boolean)
//  .wantAssertionsSigned(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert">idpCert</a></code> | <code>java.lang.String</code> | Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl">sloEndpointUrl</a></code> | <code>java.lang.String</code> | Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl">ssoEndpointUrl</a></code> | <code>java.lang.String</code> | Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups">attrGroups</a></code> | <code>java.lang.String</code> | Team Attribute Name specifies the name of the SAML attribute that determines team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin">attrSiteAdmin</a></code> | <code>java.lang.String</code> | Specifies the role for site admin access. Overrides the "Site Admin Role" method. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername">attrUsername</a></code> | <code>java.lang.String</code> | Username Attribute Name specifies the name of the SAML attribute that determines the user's username. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned">authnRequestsSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ensure that <samlp:AuthnRequest> messages are signed. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | The certificate used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug">debug</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The private key used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod">signatureDigestMethod</a></code> | <code>java.lang.String</code> | Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod">signatureSigningMethod</a></code> | <code>java.lang.String</code> | Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole">siteAdminRole</a></code> | <code>java.lang.String</code> | Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout">ssoApiTokenSessionTimeout</a></code> | <code>java.lang.Number</code> | Specifies the Single Sign On session timeout in seconds. Defaults to 14 days. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled">teamManagementEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set it to false if you would rather use Terraform Enterprise to manage team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned">wantAssertionsSigned</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Ensure that <saml:Assertion> elements are signed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert"></a>

```java
public java.lang.String getIdpCert();
```

- *Type:* java.lang.String

Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}

---

##### `sloEndpointUrl`<sup>Required</sup> <a name="sloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl"></a>

```java
public java.lang.String getSloEndpointUrl();
```

- *Type:* java.lang.String

Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}

---

##### `ssoEndpointUrl`<sup>Required</sup> <a name="ssoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl"></a>

```java
public java.lang.String getSsoEndpointUrl();
```

- *Type:* java.lang.String

Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}

---

##### `attrGroups`<sup>Optional</sup> <a name="attrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups"></a>

```java
public java.lang.String getAttrGroups();
```

- *Type:* java.lang.String

Team Attribute Name specifies the name of the SAML attribute that determines team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}

---

##### `attrSiteAdmin`<sup>Optional</sup> <a name="attrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin"></a>

```java
public java.lang.String getAttrSiteAdmin();
```

- *Type:* java.lang.String

Specifies the role for site admin access. Overrides the "Site Admin Role" method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}

---

##### `attrUsername`<sup>Optional</sup> <a name="attrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername"></a>

```java
public java.lang.String getAttrUsername();
```

- *Type:* java.lang.String

Username Attribute Name specifies the name of the SAML attribute that determines the user's username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#attr_username SamlSettings#attr_username}

---

##### `authnRequestsSigned`<sup>Optional</sup> <a name="authnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned"></a>

```java
public java.lang.Object getAuthnRequestsSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ensure that <samlp:AuthnRequest> messages are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

The certificate used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#certificate SamlSettings#certificate}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug"></a>

```java
public java.lang.Object getDebug();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#debug SamlSettings#debug}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The private key used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#private_key SamlSettings#private_key}

---

##### `signatureDigestMethod`<sup>Optional</sup> <a name="signatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod"></a>

```java
public java.lang.String getSignatureDigestMethod();
```

- *Type:* java.lang.String

Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}

---

##### `signatureSigningMethod`<sup>Optional</sup> <a name="signatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod"></a>

```java
public java.lang.String getSignatureSigningMethod();
```

- *Type:* java.lang.String

Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}

---

##### `siteAdminRole`<sup>Optional</sup> <a name="siteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole"></a>

```java
public java.lang.String getSiteAdminRole();
```

- *Type:* java.lang.String

Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}

---

##### `ssoApiTokenSessionTimeout`<sup>Optional</sup> <a name="ssoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout"></a>

```java
public java.lang.Number getSsoApiTokenSessionTimeout();
```

- *Type:* java.lang.Number

Specifies the Single Sign On session timeout in seconds. Defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}

---

##### `teamManagementEnabled`<sup>Optional</sup> <a name="teamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled"></a>

```java
public java.lang.Object getTeamManagementEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set it to false if you would rather use Terraform Enterprise to manage team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}

---

##### `wantAssertionsSigned`<sup>Optional</sup> <a name="wantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned"></a>

```java
public java.lang.Object getWantAssertionsSigned();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Ensure that <saml:Assertion> elements are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}

---



