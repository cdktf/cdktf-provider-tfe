// https://www.terraform.io/docs/providers/tfe/d/ip_ranges
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTfeIpRangesConfig extends cdktf.TerraformMetaArguments {
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges tfe_ip_ranges}
*/
export class DataTfeIpRanges extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_ip_ranges";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges tfe_ip_ranges} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTfeIpRangesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTfeIpRangesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_ip_ranges',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.26.1',
        providerVersionConstraint: '~> 0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api - computed: true, optional: false, required: false
  public get api() {
    return this.getListAttribute('api');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return this.getListAttribute('notifications');
  }

  // sentinel - computed: true, optional: false, required: false
  public get sentinel() {
    return this.getListAttribute('sentinel');
  }

  // vcs - computed: true, optional: false, required: false
  public get vcs() {
    return this.getListAttribute('vcs');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }
}
