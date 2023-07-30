/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/saml_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeSamlSettingsConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/saml_settings tfe_saml_settings}
*/
export class DataTfeSamlSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_saml_settings";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/saml_settings tfe_saml_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeSamlSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeSamlSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_saml_settings',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.47.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_consumer_url - computed: true, optional: false, required: false
  public get acsConsumerUrl() {
    return this.getStringAttribute('acs_consumer_url');
  }

  // attr_groups - computed: true, optional: false, required: false
  public get attrGroups() {
    return this.getStringAttribute('attr_groups');
  }

  // attr_site_admin - computed: true, optional: false, required: false
  public get attrSiteAdmin() {
    return this.getStringAttribute('attr_site_admin');
  }

  // attr_username - computed: true, optional: false, required: false
  public get attrUsername() {
    return this.getStringAttribute('attr_username');
  }

  // authn_requests_signed - computed: true, optional: false, required: false
  public get authnRequestsSigned() {
    return this.getBooleanAttribute('authn_requests_signed');
  }

  // certificate - computed: true, optional: false, required: false
  public get certificate() {
    return this.getStringAttribute('certificate');
  }

  // debug - computed: true, optional: false, required: false
  public get debug() {
    return this.getBooleanAttribute('debug');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_cert - computed: true, optional: false, required: false
  public get idpCert() {
    return this.getStringAttribute('idp_cert');
  }

  // metadata_url - computed: true, optional: false, required: false
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }

  // old_idp_cert - computed: true, optional: false, required: false
  public get oldIdpCert() {
    return this.getStringAttribute('old_idp_cert');
  }

  // site_admin_role - computed: true, optional: false, required: false
  public get siteAdminRole() {
    return this.getStringAttribute('site_admin_role');
  }

  // slo_endpoint_url - computed: true, optional: false, required: false
  public get sloEndpointUrl() {
    return this.getStringAttribute('slo_endpoint_url');
  }

  // sso_api_token_session_timeout - computed: true, optional: false, required: false
  public get ssoApiTokenSessionTimeout() {
    return this.getNumberAttribute('sso_api_token_session_timeout');
  }

  // sso_endpoint_url - computed: true, optional: false, required: false
  public get ssoEndpointUrl() {
    return this.getStringAttribute('sso_endpoint_url');
  }

  // team_management_enabled - computed: true, optional: false, required: false
  public get teamManagementEnabled() {
    return this.getBooleanAttribute('team_management_enabled');
  }

  // want_assertions_signed - computed: true, optional: false, required: false
  public get wantAssertionsSigned() {
    return this.getBooleanAttribute('want_assertions_signed');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}