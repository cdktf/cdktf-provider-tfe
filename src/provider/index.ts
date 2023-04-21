// https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TfeProviderConfig {
  /**
  * The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs#hostname TfeProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * The organization to apply to a resource if one is not defined on
the resource itself
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs#organization TfeProvider#organization}
  */
  readonly organization?: string;
  /**
  * Whether or not to skip certificate verifications.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs#ssl_skip_verify TfeProvider#ssl_skip_verify}
  */
  readonly sslSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The token used to authenticate with Terraform Enterprise. We recommend omitting
the token which can be set as credentials in the CLI config file.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs#token TfeProvider#token}
  */
  readonly token?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs#alias TfeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs tfe}
*/
export class TfeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.44.0/docs tfe} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TfeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TfeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.44.0',
        providerVersionConstraint: '~> 0.33'
      },
      terraformProviderSource: 'hashicorp/tfe'
    });
    this._hostname = config.hostname;
    this._organization = config.organization;
    this._sslSkipVerify = config.sslSkipVerify;
    this._token = config.token;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // organization - computed: false, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this._organization;
  }
  public set organization(value: string | undefined) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // ssl_skip_verify - computed: false, optional: true, required: false
  private _sslSkipVerify?: boolean | cdktf.IResolvable; 
  public get sslSkipVerify() {
    return this._sslSkipVerify;
  }
  public set sslSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._sslSkipVerify = value;
  }
  public resetSslSkipVerify() {
    this._sslSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSkipVerifyInput() {
    return this._sslSkipVerify;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      hostname: cdktf.stringToTerraform(this._hostname),
      organization: cdktf.stringToTerraform(this._organization),
      ssl_skip_verify: cdktf.booleanToTerraform(this._sslSkipVerify),
      token: cdktf.stringToTerraform(this._token),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
