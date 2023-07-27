/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/github_app_installation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeGithubAppInstallationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/github_app_installation#installation_id DataTfeGithubAppInstallation#installation_id}
  */
  readonly installationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/github_app_installation#name DataTfeGithubAppInstallation#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/github_app_installation tfe_github_app_installation}
*/
export class DataTfeGithubAppInstallation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_github_app_installation";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.47.0/docs/data-sources/github_app_installation tfe_github_app_installation} Data Source
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
}
