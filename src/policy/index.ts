// https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Text describing the policy's purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#description Policy#description}
  */
  readonly description?: string;
  /**
  * The enforcement configuration of the policy. For Sentinel, valid values are `hard-mandatory`, `soft-mandatory` and `advisory`. For OPA, Valid values are ``mandatory` and `advisory``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#enforce_mode Policy#enforce_mode}
  */
  readonly enforceMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#id Policy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The policy-as-code framework for the policy. Valid values are sentinel and opa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#kind Policy#kind}
  */
  readonly kind?: string;
  /**
  * The name of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#name Policy#name}
  */
  readonly name: string;
  /**
  * Name of the organization that this policy belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#organization Policy#organization}
  */
  readonly organization?: string;
  /**
  * Text of a valid Sentinel or OPA policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#policy Policy#policy}
  */
  readonly policy: string;
  /**
  * The OPA query to run. Required for OPA policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy#query Policy#query}
  */
  readonly query?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy tfe_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/resources/policy tfe_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_policy',
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
    this._description = config.description;
    this._enforceMode = config.enforceMode;
    this._id = config.id;
    this._kind = config.kind;
    this._name = config.name;
    this._organization = config.organization;
    this._policy = config.policy;
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enforce_mode - computed: true, optional: true, required: false
  private _enforceMode?: string; 
  public get enforceMode() {
    return this.getStringAttribute('enforce_mode');
  }
  public set enforceMode(value: string) {
    this._enforceMode = value;
  }
  public resetEnforceMode() {
    this._enforceMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceModeInput() {
    return this._enforceMode;
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

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enforce_mode: cdktf.stringToTerraform(this._enforceMode),
      id: cdktf.stringToTerraform(this._id),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      policy: cdktf.stringToTerraform(this._policy),
      query: cdktf.stringToTerraform(this._query),
    };
  }
}
