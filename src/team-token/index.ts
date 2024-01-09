// https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token#expired_at TeamToken#expired_at}
  */
  readonly expiredAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token#force_regenerate TeamToken#force_regenerate}
  */
  readonly forceRegenerate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token#id TeamToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token#team_id TeamToken#team_id}
  */
  readonly teamId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token tfe_team_token}
*/
export class TeamToken extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_team_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamToken to import
  * @param importFromId The id of the existing TeamToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_team_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/team_token tfe_team_token} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamTokenConfig
  */
  public constructor(scope: Construct, id: string, config: TeamTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team_token',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.51.1',
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
    this._expiredAt = config.expiredAt;
    this._forceRegenerate = config.forceRegenerate;
    this._id = config.id;
    this._teamId = config.teamId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expired_at - computed: false, optional: true, required: false
  private _expiredAt?: string; 
  public get expiredAt() {
    return this.getStringAttribute('expired_at');
  }
  public set expiredAt(value: string) {
    this._expiredAt = value;
  }
  public resetExpiredAt() {
    this._expiredAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredAtInput() {
    return this._expiredAt;
  }

  // force_regenerate - computed: false, optional: true, required: false
  private _forceRegenerate?: boolean | cdktf.IResolvable; 
  public get forceRegenerate() {
    return this.getBooleanAttribute('force_regenerate');
  }
  public set forceRegenerate(value: boolean | cdktf.IResolvable) {
    this._forceRegenerate = value;
  }
  public resetForceRegenerate() {
    this._forceRegenerate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRegenerateInput() {
    return this._forceRegenerate;
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

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // token - computed: true, optional: false, required: false
  public get token() {
    return this.getStringAttribute('token');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      expired_at: cdktf.stringToTerraform(this._expiredAt),
      force_regenerate: cdktf.booleanToTerraform(this._forceRegenerate),
      id: cdktf.stringToTerraform(this._id),
      team_id: cdktf.stringToTerraform(this._teamId),
    };
  }
}
