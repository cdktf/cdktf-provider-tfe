/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpOidcConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the organization to which the TFE GCP OIDC configuration belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#organization GcpOidcConfiguration#organization}
  */
  readonly organization?: string;
  /**
  * The GCP Project containing the workload provider and service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#project_number GcpOidcConfiguration#project_number}
  */
  readonly projectNumber: string;
  /**
  * The email of your GCP service account, with permissions to encrypt and decrypt using a Cloud KMS key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#service_account_email GcpOidcConfiguration#service_account_email}
  */
  readonly serviceAccountEmail: string;
  /**
  * The fully qualified workload provider path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#workload_provider_name GcpOidcConfiguration#workload_provider_name}
  */
  readonly workloadProviderName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration tfe_gcp_oidc_configuration}
*/
export class GcpOidcConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_gcp_oidc_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpOidcConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpOidcConfiguration to import
  * @param importFromId The id of the existing GcpOidcConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpOidcConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_gcp_oidc_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/gcp_oidc_configuration tfe_gcp_oidc_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpOidcConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: GcpOidcConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_gcp_oidc_configuration',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.71.0',
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
    this._organization = config.organization;
    this._projectNumber = config.projectNumber;
    this._serviceAccountEmail = config.serviceAccountEmail;
    this._workloadProviderName = config.workloadProviderName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // project_number - computed: false, optional: false, required: true
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }

  // service_account_email - computed: false, optional: false, required: true
  private _serviceAccountEmail?: string; 
  public get serviceAccountEmail() {
    return this.getStringAttribute('service_account_email');
  }
  public set serviceAccountEmail(value: string) {
    this._serviceAccountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountEmailInput() {
    return this._serviceAccountEmail;
  }

  // workload_provider_name - computed: false, optional: false, required: true
  private _workloadProviderName?: string; 
  public get workloadProviderName() {
    return this.getStringAttribute('workload_provider_name');
  }
  public set workloadProviderName(value: string) {
    this._workloadProviderName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadProviderNameInput() {
    return this._workloadProviderName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization: cdktf.stringToTerraform(this._organization),
      project_number: cdktf.stringToTerraform(this._projectNumber),
      service_account_email: cdktf.stringToTerraform(this._serviceAccountEmail),
      workload_provider_name: cdktf.stringToTerraform(this._workloadProviderName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_number: {
        value: cdktf.stringToHclTerraform(this._projectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_email: {
        value: cdktf.stringToHclTerraform(this._serviceAccountEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workload_provider_name: {
        value: cdktf.stringToHclTerraform(this._workloadProviderName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
