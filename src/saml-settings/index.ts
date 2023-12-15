/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Team Attribute Name specifies the name of the SAML attribute that determines team membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}
  */
  readonly attrGroups?: string;
  /**
  * Specifies the role for site admin access. Overrides the "Site Admin Role" method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}
  */
  readonly attrSiteAdmin?: string;
  /**
  * Username Attribute Name specifies the name of the SAML attribute that determines the user's username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#attr_username SamlSettings#attr_username}
  */
  readonly attrUsername?: string;
  /**
  * Ensure that <samlp:AuthnRequest> messages are signed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}
  */
  readonly authnRequestsSigned?: boolean | cdktf.IResolvable;
  /**
  * The certificate used for request and assertion signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#certificate SamlSettings#certificate}
  */
  readonly certificate?: string;
  /**
  * When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#debug SamlSettings#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}
  */
  readonly idpCert: string;
  /**
  * The private key used for request and assertion signing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#private_key SamlSettings#private_key}
  */
  readonly privateKey?: string;
  /**
  * Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}
  */
  readonly signatureDigestMethod?: string;
  /**
  * Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}
  */
  readonly signatureSigningMethod?: string;
  /**
  * Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}
  */
  readonly siteAdminRole?: string;
  /**
  * Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. This value is provided by the IdP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}
  */
  readonly sloEndpointUrl: string;
  /**
  * Specifies the Single Sign On session timeout in seconds. Defaults to 14 days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}
  */
  readonly ssoApiTokenSessionTimeout?: number;
  /**
  * Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. This value is provided by the IdP configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}
  */
  readonly ssoEndpointUrl: string;
  /**
  * Set it to false if you would rather use Terraform Enterprise to manage team membership
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}
  */
  readonly teamManagementEnabled?: boolean | cdktf.IResolvable;
  /**
  * Ensure that <saml:Assertion> elements are signed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}
  */
  readonly wantAssertionsSigned?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings tfe_saml_settings}
*/
export class SamlSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_saml_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlSettings to import
  * @param importFromId The id of the existing SamlSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_saml_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/saml_settings tfe_saml_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: SamlSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_saml_settings',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.51.0',
        providerVersionConstraint: '~> 0.33'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attrGroups = config.attrGroups;
    this._attrSiteAdmin = config.attrSiteAdmin;
    this._attrUsername = config.attrUsername;
    this._authnRequestsSigned = config.authnRequestsSigned;
    this._certificate = config.certificate;
    this._debug = config.debug;
    this._idpCert = config.idpCert;
    this._privateKey = config.privateKey;
    this._signatureDigestMethod = config.signatureDigestMethod;
    this._signatureSigningMethod = config.signatureSigningMethod;
    this._siteAdminRole = config.siteAdminRole;
    this._sloEndpointUrl = config.sloEndpointUrl;
    this._ssoApiTokenSessionTimeout = config.ssoApiTokenSessionTimeout;
    this._ssoEndpointUrl = config.ssoEndpointUrl;
    this._teamManagementEnabled = config.teamManagementEnabled;
    this._wantAssertionsSigned = config.wantAssertionsSigned;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_consumer_url - computed: true, optional: false, required: false
  public get acsConsumerUrl() {
    return this.getStringAttribute('acs_consumer_url');
  }

  // attr_groups - computed: true, optional: true, required: false
  private _attrGroups?: string; 
  public get attrGroups() {
    return this.getStringAttribute('attr_groups');
  }
  public set attrGroups(value: string) {
    this._attrGroups = value;
  }
  public resetAttrGroups() {
    this._attrGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrGroupsInput() {
    return this._attrGroups;
  }

  // attr_site_admin - computed: true, optional: true, required: false
  private _attrSiteAdmin?: string; 
  public get attrSiteAdmin() {
    return this.getStringAttribute('attr_site_admin');
  }
  public set attrSiteAdmin(value: string) {
    this._attrSiteAdmin = value;
  }
  public resetAttrSiteAdmin() {
    this._attrSiteAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrSiteAdminInput() {
    return this._attrSiteAdmin;
  }

  // attr_username - computed: true, optional: true, required: false
  private _attrUsername?: string; 
  public get attrUsername() {
    return this.getStringAttribute('attr_username');
  }
  public set attrUsername(value: string) {
    this._attrUsername = value;
  }
  public resetAttrUsername() {
    this._attrUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrUsernameInput() {
    return this._attrUsername;
  }

  // authn_requests_signed - computed: true, optional: true, required: false
  private _authnRequestsSigned?: boolean | cdktf.IResolvable; 
  public get authnRequestsSigned() {
    return this.getBooleanAttribute('authn_requests_signed');
  }
  public set authnRequestsSigned(value: boolean | cdktf.IResolvable) {
    this._authnRequestsSigned = value;
  }
  public resetAuthnRequestsSigned() {
    this._authnRequestsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnRequestsSignedInput() {
    return this._authnRequestsSigned;
  }

  // certificate - computed: true, optional: true, required: false
  private _certificate?: string; 
  public get certificate() {
    return this.getStringAttribute('certificate');
  }
  public set certificate(value: string) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_cert - computed: false, optional: false, required: true
  private _idpCert?: string; 
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }
  public set idpCert(value: string) {
    this._idpCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertInput() {
    return this._idpCert;
  }

  // metadata_url - computed: true, optional: false, required: false
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }

  // old_idp_cert - computed: true, optional: false, required: false
  public get oldIdpCert() {
    return this.getStringAttribute('old_idp_cert');
  }

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // signature_digest_method - computed: true, optional: true, required: false
  private _signatureDigestMethod?: string; 
  public get signatureDigestMethod() {
    return this.getStringAttribute('signature_digest_method');
  }
  public set signatureDigestMethod(value: string) {
    this._signatureDigestMethod = value;
  }
  public resetSignatureDigestMethod() {
    this._signatureDigestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureDigestMethodInput() {
    return this._signatureDigestMethod;
  }

  // signature_signing_method - computed: true, optional: true, required: false
  private _signatureSigningMethod?: string; 
  public get signatureSigningMethod() {
    return this.getStringAttribute('signature_signing_method');
  }
  public set signatureSigningMethod(value: string) {
    this._signatureSigningMethod = value;
  }
  public resetSignatureSigningMethod() {
    this._signatureSigningMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureSigningMethodInput() {
    return this._signatureSigningMethod;
  }

  // site_admin_role - computed: true, optional: true, required: false
  private _siteAdminRole?: string; 
  public get siteAdminRole() {
    return this.getStringAttribute('site_admin_role');
  }
  public set siteAdminRole(value: string) {
    this._siteAdminRole = value;
  }
  public resetSiteAdminRole() {
    this._siteAdminRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteAdminRoleInput() {
    return this._siteAdminRole;
  }

  // slo_endpoint_url - computed: false, optional: false, required: true
  private _sloEndpointUrl?: string; 
  public get sloEndpointUrl() {
    return this.getStringAttribute('slo_endpoint_url');
  }
  public set sloEndpointUrl(value: string) {
    this._sloEndpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloEndpointUrlInput() {
    return this._sloEndpointUrl;
  }

  // sso_api_token_session_timeout - computed: true, optional: true, required: false
  private _ssoApiTokenSessionTimeout?: number; 
  public get ssoApiTokenSessionTimeout() {
    return this.getNumberAttribute('sso_api_token_session_timeout');
  }
  public set ssoApiTokenSessionTimeout(value: number) {
    this._ssoApiTokenSessionTimeout = value;
  }
  public resetSsoApiTokenSessionTimeout() {
    this._ssoApiTokenSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoApiTokenSessionTimeoutInput() {
    return this._ssoApiTokenSessionTimeout;
  }

  // sso_endpoint_url - computed: false, optional: false, required: true
  private _ssoEndpointUrl?: string; 
  public get ssoEndpointUrl() {
    return this.getStringAttribute('sso_endpoint_url');
  }
  public set ssoEndpointUrl(value: string) {
    this._ssoEndpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoEndpointUrlInput() {
    return this._ssoEndpointUrl;
  }

  // team_management_enabled - computed: true, optional: true, required: false
  private _teamManagementEnabled?: boolean | cdktf.IResolvable; 
  public get teamManagementEnabled() {
    return this.getBooleanAttribute('team_management_enabled');
  }
  public set teamManagementEnabled(value: boolean | cdktf.IResolvable) {
    this._teamManagementEnabled = value;
  }
  public resetTeamManagementEnabled() {
    this._teamManagementEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamManagementEnabledInput() {
    return this._teamManagementEnabled;
  }

  // want_assertions_signed - computed: true, optional: true, required: false
  private _wantAssertionsSigned?: boolean | cdktf.IResolvable; 
  public get wantAssertionsSigned() {
    return this.getBooleanAttribute('want_assertions_signed');
  }
  public set wantAssertionsSigned(value: boolean | cdktf.IResolvable) {
    this._wantAssertionsSigned = value;
  }
  public resetWantAssertionsSigned() {
    this._wantAssertionsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantAssertionsSignedInput() {
    return this._wantAssertionsSigned;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attr_groups: cdktf.stringToTerraform(this._attrGroups),
      attr_site_admin: cdktf.stringToTerraform(this._attrSiteAdmin),
      attr_username: cdktf.stringToTerraform(this._attrUsername),
      authn_requests_signed: cdktf.booleanToTerraform(this._authnRequestsSigned),
      certificate: cdktf.stringToTerraform(this._certificate),
      debug: cdktf.booleanToTerraform(this._debug),
      idp_cert: cdktf.stringToTerraform(this._idpCert),
      private_key: cdktf.stringToTerraform(this._privateKey),
      signature_digest_method: cdktf.stringToTerraform(this._signatureDigestMethod),
      signature_signing_method: cdktf.stringToTerraform(this._signatureSigningMethod),
      site_admin_role: cdktf.stringToTerraform(this._siteAdminRole),
      slo_endpoint_url: cdktf.stringToTerraform(this._sloEndpointUrl),
      sso_api_token_session_timeout: cdktf.numberToTerraform(this._ssoApiTokenSessionTimeout),
      sso_endpoint_url: cdktf.stringToTerraform(this._ssoEndpointUrl),
      team_management_enabled: cdktf.booleanToTerraform(this._teamManagementEnabled),
      want_assertions_signed: cdktf.booleanToTerraform(this._wantAssertionsSigned),
    };
  }
}
