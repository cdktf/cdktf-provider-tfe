// https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeGithubAppInstallationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}
  */
  readonly installationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation tfe_github_app_installation}
*/
export class DataTfeGithubAppInstallation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_github_app_installation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTfeGithubAppInstallation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTfeGithubAppInstallation to import
  * @param importFromId The id of the existing DataTfeGithubAppInstallation that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTfeGithubAppInstallation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_github_app_installation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/github_app_installation tfe_github_app_installation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeGithubAppInstallationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeGithubAppInstallationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_github_app_installation',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.64.0',
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
    this._installationId = config.installationId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // installation_id - computed: false, optional: true, required: false
  private _installationId?: number; 
  public get installationId() {
    return this.getNumberAttribute('installation_id');
  }
  public set installationId(value: number) {
    this._installationId = value;
  }
  public resetInstallationId() {
    this._installationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationIdInput() {
    return this._installationId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      installation_id: cdktf.numberToTerraform(this._installationId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      installation_id: {
        value: cdktf.numberToHclTerraform(this._installationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
