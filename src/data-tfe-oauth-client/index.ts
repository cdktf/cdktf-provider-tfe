// https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeOauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client#id DataTfeOauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client#name DataTfeOauthClient#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client#oauth_client_id DataTfeOauthClient#oauth_client_id}
  */
  readonly oauthClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client#organization DataTfeOauthClient#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client#service_provider DataTfeOauthClient#service_provider}
  */
  readonly serviceProvider?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client tfe_oauth_client}
*/
export class DataTfeOauthClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_oauth_client";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.46.0/docs/data-sources/oauth_client tfe_oauth_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeOauthClientConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeOauthClientConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_oauth_client',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.46.0',
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
    this._id = config.id;
    this._name = config.name;
    this._oauthClientId = config.oauthClientId;
    this._organization = config.organization;
    this._serviceProvider = config.serviceProvider;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: true, optional: false, required: false
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }

  // callback_url - computed: true, optional: false, required: false
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // http_url - computed: true, optional: false, required: false
  public get httpUrl() {
    return this.getStringAttribute('http_url');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // oauth_client_id - computed: false, optional: true, required: false
  private _oauthClientId?: string; 
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }
  public set oauthClientId(value: string) {
    this._oauthClientId = value;
  }
  public resetOauthClientId() {
    this._oauthClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthClientIdInput() {
    return this._oauthClientId;
  }

  // oauth_token_id - computed: true, optional: false, required: false
  public get oauthTokenId() {
    return this.getStringAttribute('oauth_token_id');
  }

  // organization - computed: false, optional: true, required: false
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

  // service_provider - computed: false, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // service_provider_display_name - computed: true, optional: false, required: false
  public get serviceProviderDisplayName() {
    return this.getStringAttribute('service_provider_display_name');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oauth_client_id: cdktf.stringToTerraform(this._oauthClientId),
      organization: cdktf.stringToTerraform(this._organization),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
    };
  }
}
