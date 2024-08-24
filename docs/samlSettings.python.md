# `samlSettings` Submodule <a name="`samlSettings` Submodule" id="@cdktf/provider-tfe.samlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlSettings <a name="SamlSettings" id="@cdktf/provider-tfe.samlSettings.SamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import saml_settings

samlSettings.SamlSettings(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idp_cert: str,
  slo_endpoint_url: str,
  sso_endpoint_url: str,
  attr_groups: str = None,
  attr_site_admin: str = None,
  attr_username: str = None,
  authn_requests_signed: typing.Union[bool, IResolvable] = None,
  certificate: str = None,
  debug: typing.Union[bool, IResolvable] = None,
  private_key: str = None,
  signature_digest_method: str = None,
  signature_signing_method: str = None,
  site_admin_role: str = None,
  sso_api_token_session_timeout: typing.Union[int, float] = None,
  team_management_enabled: typing.Union[bool, IResolvable] = None,
  want_assertions_signed: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.idpCert">idp_cert</a></code> | <code>str</code> | Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.sloEndpointUrl">slo_endpoint_url</a></code> | <code>str</code> | Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoEndpointUrl">sso_endpoint_url</a></code> | <code>str</code> | Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrGroups">attr_groups</a></code> | <code>str</code> | Team Attribute Name specifies the name of the SAML attribute that determines team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrSiteAdmin">attr_site_admin</a></code> | <code>str</code> | Specifies the role for site admin access. Overrides the "Site Admin Role" method. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrUsername">attr_username</a></code> | <code>str</code> | Username Attribute Name specifies the name of the SAML attribute that determines the user's username. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.authnRequestsSigned">authn_requests_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ensure that <samlp:AuthnRequest> messages are signed. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.certificate">certificate</a></code> | <code>str</code> | The certificate used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.debug">debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | The private key used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureDigestMethod">signature_digest_method</a></code> | <code>str</code> | Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureSigningMethod">signature_signing_method</a></code> | <code>str</code> | Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.siteAdminRole">site_admin_role</a></code> | <code>str</code> | Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoApiTokenSessionTimeout">sso_api_token_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Specifies the Single Sign On session timeout in seconds. Defaults to 14 days. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.teamManagementEnabled">team_management_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set it to false if you would rather use Terraform Enterprise to manage team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.wantAssertionsSigned">want_assertions_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ensure that <saml:Assertion> elements are signed. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idp_cert`<sup>Required</sup> <a name="idp_cert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.idpCert"></a>

- *Type:* str

Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}

---

##### `slo_endpoint_url`<sup>Required</sup> <a name="slo_endpoint_url" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.sloEndpointUrl"></a>

- *Type:* str

Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}

---

##### `sso_endpoint_url`<sup>Required</sup> <a name="sso_endpoint_url" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoEndpointUrl"></a>

- *Type:* str

Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}

---

##### `attr_groups`<sup>Optional</sup> <a name="attr_groups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrGroups"></a>

- *Type:* str

Team Attribute Name specifies the name of the SAML attribute that determines team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}

---

##### `attr_site_admin`<sup>Optional</sup> <a name="attr_site_admin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrSiteAdmin"></a>

- *Type:* str

Specifies the role for site admin access. Overrides the "Site Admin Role" method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}

---

##### `attr_username`<sup>Optional</sup> <a name="attr_username" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.attrUsername"></a>

- *Type:* str

Username Attribute Name specifies the name of the SAML attribute that determines the user's username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#attr_username SamlSettings#attr_username}

---

##### `authn_requests_signed`<sup>Optional</sup> <a name="authn_requests_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.authnRequestsSigned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ensure that <samlp:AuthnRequest> messages are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.certificate"></a>

- *Type:* str

The certificate used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#certificate SamlSettings#certificate}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.debug"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#debug SamlSettings#debug}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.privateKey"></a>

- *Type:* str

The private key used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#private_key SamlSettings#private_key}

---

##### `signature_digest_method`<sup>Optional</sup> <a name="signature_digest_method" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureDigestMethod"></a>

- *Type:* str

Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}

---

##### `signature_signing_method`<sup>Optional</sup> <a name="signature_signing_method" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.signatureSigningMethod"></a>

- *Type:* str

Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}

---

##### `site_admin_role`<sup>Optional</sup> <a name="site_admin_role" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.siteAdminRole"></a>

- *Type:* str

Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}

---

##### `sso_api_token_session_timeout`<sup>Optional</sup> <a name="sso_api_token_session_timeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.ssoApiTokenSessionTimeout"></a>

- *Type:* typing.Union[int, float]

Specifies the Single Sign On session timeout in seconds. Defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}

---

##### `team_management_enabled`<sup>Optional</sup> <a name="team_management_enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.teamManagementEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set it to false if you would rather use Terraform Enterprise to manage team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}

---

##### `want_assertions_signed`<sup>Optional</sup> <a name="want_assertions_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.wantAssertionsSigned"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ensure that <saml:Assertion> elements are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups">reset_attr_groups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin">reset_attr_site_admin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername">reset_attr_username</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned">reset_authn_requests_signed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate">reset_certificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug">reset_debug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod">reset_signature_digest_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod">reset_signature_signing_method</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole">reset_site_admin_role</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout">reset_sso_api_token_session_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled">reset_team_management_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned">reset_want_assertions_signed</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_attr_groups` <a name="reset_attr_groups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups"></a>

```python
def reset_attr_groups() -> None
```

##### `reset_attr_site_admin` <a name="reset_attr_site_admin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin"></a>

```python
def reset_attr_site_admin() -> None
```

##### `reset_attr_username` <a name="reset_attr_username" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername"></a>

```python
def reset_attr_username() -> None
```

##### `reset_authn_requests_signed` <a name="reset_authn_requests_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned"></a>

```python
def reset_authn_requests_signed() -> None
```

##### `reset_certificate` <a name="reset_certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate"></a>

```python
def reset_certificate() -> None
```

##### `reset_debug` <a name="reset_debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug"></a>

```python
def reset_debug() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_signature_digest_method` <a name="reset_signature_digest_method" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod"></a>

```python
def reset_signature_digest_method() -> None
```

##### `reset_signature_signing_method` <a name="reset_signature_signing_method" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod"></a>

```python
def reset_signature_signing_method() -> None
```

##### `reset_site_admin_role` <a name="reset_site_admin_role" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole"></a>

```python
def reset_site_admin_role() -> None
```

##### `reset_sso_api_token_session_timeout` <a name="reset_sso_api_token_session_timeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout"></a>

```python
def reset_sso_api_token_session_timeout() -> None
```

##### `reset_team_management_enabled` <a name="reset_team_management_enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled"></a>

```python
def reset_team_management_enabled() -> None
```

##### `reset_want_assertions_signed` <a name="reset_want_assertions_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned"></a>

```python
def reset_want_assertions_signed() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import saml_settings

samlSettings.SamlSettings.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import saml_settings

samlSettings.SamlSettings.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import saml_settings

samlSettings.SamlSettings.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import saml_settings

samlSettings.SamlSettings.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the SamlSettings to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing SamlSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SamlSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl">acs_consumer_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl">metadata_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert">old_idp_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput">attr_groups_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput">attr_site_admin_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput">attr_username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput">authn_requests_signed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput">certificate_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput">debug_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput">idp_cert_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput">signature_digest_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput">signature_signing_method_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput">site_admin_role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput">slo_endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput">sso_api_token_session_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput">sso_endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput">team_management_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput">want_assertions_signed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups">attr_groups</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin">attr_site_admin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername">attr_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned">authn_requests_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate">certificate</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug">debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert">idp_cert</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod">signature_digest_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod">signature_signing_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole">site_admin_role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl">slo_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout">sso_api_token_session_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl">sso_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled">team_management_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned">want_assertions_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `acs_consumer_url`<sup>Required</sup> <a name="acs_consumer_url" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl"></a>

```python
acs_consumer_url: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled"></a>

```python
enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata_url`<sup>Required</sup> <a name="metadata_url" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl"></a>

```python
metadata_url: str
```

- *Type:* str

---

##### `old_idp_cert`<sup>Required</sup> <a name="old_idp_cert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert"></a>

```python
old_idp_cert: str
```

- *Type:* str

---

##### `attr_groups_input`<sup>Optional</sup> <a name="attr_groups_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput"></a>

```python
attr_groups_input: str
```

- *Type:* str

---

##### `attr_site_admin_input`<sup>Optional</sup> <a name="attr_site_admin_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput"></a>

```python
attr_site_admin_input: str
```

- *Type:* str

---

##### `attr_username_input`<sup>Optional</sup> <a name="attr_username_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput"></a>

```python
attr_username_input: str
```

- *Type:* str

---

##### `authn_requests_signed_input`<sup>Optional</sup> <a name="authn_requests_signed_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput"></a>

```python
authn_requests_signed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate_input`<sup>Optional</sup> <a name="certificate_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput"></a>

```python
certificate_input: str
```

- *Type:* str

---

##### `debug_input`<sup>Optional</sup> <a name="debug_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput"></a>

```python
debug_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idp_cert_input`<sup>Optional</sup> <a name="idp_cert_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput"></a>

```python
idp_cert_input: str
```

- *Type:* str

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `signature_digest_method_input`<sup>Optional</sup> <a name="signature_digest_method_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput"></a>

```python
signature_digest_method_input: str
```

- *Type:* str

---

##### `signature_signing_method_input`<sup>Optional</sup> <a name="signature_signing_method_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput"></a>

```python
signature_signing_method_input: str
```

- *Type:* str

---

##### `site_admin_role_input`<sup>Optional</sup> <a name="site_admin_role_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput"></a>

```python
site_admin_role_input: str
```

- *Type:* str

---

##### `slo_endpoint_url_input`<sup>Optional</sup> <a name="slo_endpoint_url_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput"></a>

```python
slo_endpoint_url_input: str
```

- *Type:* str

---

##### `sso_api_token_session_timeout_input`<sup>Optional</sup> <a name="sso_api_token_session_timeout_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput"></a>

```python
sso_api_token_session_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sso_endpoint_url_input`<sup>Optional</sup> <a name="sso_endpoint_url_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput"></a>

```python
sso_endpoint_url_input: str
```

- *Type:* str

---

##### `team_management_enabled_input`<sup>Optional</sup> <a name="team_management_enabled_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput"></a>

```python
team_management_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `want_assertions_signed_input`<sup>Optional</sup> <a name="want_assertions_signed_input" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput"></a>

```python
want_assertions_signed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `attr_groups`<sup>Required</sup> <a name="attr_groups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups"></a>

```python
attr_groups: str
```

- *Type:* str

---

##### `attr_site_admin`<sup>Required</sup> <a name="attr_site_admin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin"></a>

```python
attr_site_admin: str
```

- *Type:* str

---

##### `attr_username`<sup>Required</sup> <a name="attr_username" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername"></a>

```python
attr_username: str
```

- *Type:* str

---

##### `authn_requests_signed`<sup>Required</sup> <a name="authn_requests_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned"></a>

```python
authn_requests_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

---

##### `debug`<sup>Required</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug"></a>

```python
debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `idp_cert`<sup>Required</sup> <a name="idp_cert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert"></a>

```python
idp_cert: str
```

- *Type:* str

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `signature_digest_method`<sup>Required</sup> <a name="signature_digest_method" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod"></a>

```python
signature_digest_method: str
```

- *Type:* str

---

##### `signature_signing_method`<sup>Required</sup> <a name="signature_signing_method" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod"></a>

```python
signature_signing_method: str
```

- *Type:* str

---

##### `site_admin_role`<sup>Required</sup> <a name="site_admin_role" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole"></a>

```python
site_admin_role: str
```

- *Type:* str

---

##### `slo_endpoint_url`<sup>Required</sup> <a name="slo_endpoint_url" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl"></a>

```python
slo_endpoint_url: str
```

- *Type:* str

---

##### `sso_api_token_session_timeout`<sup>Required</sup> <a name="sso_api_token_session_timeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout"></a>

```python
sso_api_token_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `sso_endpoint_url`<sup>Required</sup> <a name="sso_endpoint_url" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl"></a>

```python
sso_endpoint_url: str
```

- *Type:* str

---

##### `team_management_enabled`<sup>Required</sup> <a name="team_management_enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled"></a>

```python
team_management_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `want_assertions_signed`<sup>Required</sup> <a name="want_assertions_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned"></a>

```python
want_assertions_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### SamlSettingsConfig <a name="SamlSettingsConfig" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import saml_settings

samlSettings.SamlSettingsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  idp_cert: str,
  slo_endpoint_url: str,
  sso_endpoint_url: str,
  attr_groups: str = None,
  attr_site_admin: str = None,
  attr_username: str = None,
  authn_requests_signed: typing.Union[bool, IResolvable] = None,
  certificate: str = None,
  debug: typing.Union[bool, IResolvable] = None,
  private_key: str = None,
  signature_digest_method: str = None,
  signature_signing_method: str = None,
  site_admin_role: str = None,
  sso_api_token_session_timeout: typing.Union[int, float] = None,
  team_management_enabled: typing.Union[bool, IResolvable] = None,
  want_assertions_signed: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert">idp_cert</a></code> | <code>str</code> | Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl">slo_endpoint_url</a></code> | <code>str</code> | Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl">sso_endpoint_url</a></code> | <code>str</code> | Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups">attr_groups</a></code> | <code>str</code> | Team Attribute Name specifies the name of the SAML attribute that determines team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin">attr_site_admin</a></code> | <code>str</code> | Specifies the role for site admin access. Overrides the "Site Admin Role" method. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername">attr_username</a></code> | <code>str</code> | Username Attribute Name specifies the name of the SAML attribute that determines the user's username. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned">authn_requests_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ensure that <samlp:AuthnRequest> messages are signed. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate">certificate</a></code> | <code>str</code> | The certificate used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug">debug</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey">private_key</a></code> | <code>str</code> | The private key used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod">signature_digest_method</a></code> | <code>str</code> | Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod">signature_signing_method</a></code> | <code>str</code> | Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole">site_admin_role</a></code> | <code>str</code> | Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout">sso_api_token_session_timeout</a></code> | <code>typing.Union[int, float]</code> | Specifies the Single Sign On session timeout in seconds. Defaults to 14 days. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled">team_management_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Set it to false if you would rather use Terraform Enterprise to manage team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned">want_assertions_signed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Ensure that <saml:Assertion> elements are signed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `idp_cert`<sup>Required</sup> <a name="idp_cert" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert"></a>

```python
idp_cert: str
```

- *Type:* str

Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}

---

##### `slo_endpoint_url`<sup>Required</sup> <a name="slo_endpoint_url" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl"></a>

```python
slo_endpoint_url: str
```

- *Type:* str

Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}

---

##### `sso_endpoint_url`<sup>Required</sup> <a name="sso_endpoint_url" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl"></a>

```python
sso_endpoint_url: str
```

- *Type:* str

Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}

---

##### `attr_groups`<sup>Optional</sup> <a name="attr_groups" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups"></a>

```python
attr_groups: str
```

- *Type:* str

Team Attribute Name specifies the name of the SAML attribute that determines team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}

---

##### `attr_site_admin`<sup>Optional</sup> <a name="attr_site_admin" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin"></a>

```python
attr_site_admin: str
```

- *Type:* str

Specifies the role for site admin access. Overrides the "Site Admin Role" method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}

---

##### `attr_username`<sup>Optional</sup> <a name="attr_username" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername"></a>

```python
attr_username: str
```

- *Type:* str

Username Attribute Name specifies the name of the SAML attribute that determines the user's username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#attr_username SamlSettings#attr_username}

---

##### `authn_requests_signed`<sup>Optional</sup> <a name="authn_requests_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned"></a>

```python
authn_requests_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ensure that <samlp:AuthnRequest> messages are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate"></a>

```python
certificate: str
```

- *Type:* str

The certificate used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#certificate SamlSettings#certificate}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug"></a>

```python
debug: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#debug SamlSettings#debug}

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

The private key used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#private_key SamlSettings#private_key}

---

##### `signature_digest_method`<sup>Optional</sup> <a name="signature_digest_method" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod"></a>

```python
signature_digest_method: str
```

- *Type:* str

Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}

---

##### `signature_signing_method`<sup>Optional</sup> <a name="signature_signing_method" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod"></a>

```python
signature_signing_method: str
```

- *Type:* str

Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}

---

##### `site_admin_role`<sup>Optional</sup> <a name="site_admin_role" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole"></a>

```python
site_admin_role: str
```

- *Type:* str

Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}

---

##### `sso_api_token_session_timeout`<sup>Optional</sup> <a name="sso_api_token_session_timeout" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout"></a>

```python
sso_api_token_session_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the Single Sign On session timeout in seconds. Defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}

---

##### `team_management_enabled`<sup>Optional</sup> <a name="team_management_enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled"></a>

```python
team_management_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Set it to false if you would rather use Terraform Enterprise to manage team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}

---

##### `want_assertions_signed`<sup>Optional</sup> <a name="want_assertions_signed" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned"></a>

```python
want_assertions_signed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Ensure that <saml:Assertion> elements are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.1/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}

---



