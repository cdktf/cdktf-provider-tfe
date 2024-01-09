// https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminOrganizationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings#access_beta_tools AdminOrganizationSettings#access_beta_tools}
  */
  readonly accessBetaTools?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings#global_module_sharing AdminOrganizationSettings#global_module_sharing}
  */
  readonly globalModuleSharing?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings#id AdminOrganizationSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings#module_sharing_consumer_organizations AdminOrganizationSettings#module_sharing_consumer_organizations}
  */
  readonly moduleSharingConsumerOrganizations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings#organization AdminOrganizationSettings#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings#workspace_limit AdminOrganizationSettings#workspace_limit}
  */
  readonly workspaceLimit?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings tfe_admin_organization_settings}
*/
export class AdminOrganizationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_admin_organization_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AdminOrganizationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AdminOrganizationSettings to import
  * @param importFromId The id of the existing AdminOrganizationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AdminOrganizationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_admin_organization_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.1/docs/resources/admin_organization_settings tfe_admin_organization_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminOrganizationSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AdminOrganizationSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_admin_organization_settings',
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
    this._accessBetaTools = config.accessBetaTools;
    this._globalModuleSharing = config.globalModuleSharing;
    this._id = config.id;
    this._moduleSharingConsumerOrganizations = config.moduleSharingConsumerOrganizations;
    this._organization = config.organization;
    this._workspaceLimit = config.workspaceLimit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_beta_tools - computed: false, optional: true, required: false
  private _accessBetaTools?: boolean | cdktf.IResolvable; 
  public get accessBetaTools() {
    return this.getBooleanAttribute('access_beta_tools');
  }
  public set accessBetaTools(value: boolean | cdktf.IResolvable) {
    this._accessBetaTools = value;
  }
  public resetAccessBetaTools() {
    this._accessBetaTools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessBetaToolsInput() {
    return this._accessBetaTools;
  }

  // global_module_sharing - computed: false, optional: true, required: false
  private _globalModuleSharing?: boolean | cdktf.IResolvable; 
  public get globalModuleSharing() {
    return this.getBooleanAttribute('global_module_sharing');
  }
  public set globalModuleSharing(value: boolean | cdktf.IResolvable) {
    this._globalModuleSharing = value;
  }
  public resetGlobalModuleSharing() {
    this._globalModuleSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalModuleSharingInput() {
    return this._globalModuleSharing;
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

  // module_sharing_consumer_organizations - computed: true, optional: true, required: false
  private _moduleSharingConsumerOrganizations?: string[]; 
  public get moduleSharingConsumerOrganizations() {
    return cdktf.Fn.tolist(this.getListAttribute('module_sharing_consumer_organizations'));
  }
  public set moduleSharingConsumerOrganizations(value: string[]) {
    this._moduleSharingConsumerOrganizations = value;
  }
  public resetModuleSharingConsumerOrganizations() {
    this._moduleSharingConsumerOrganizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleSharingConsumerOrganizationsInput() {
    return this._moduleSharingConsumerOrganizations;
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

  // sso_enabled - computed: true, optional: false, required: false
  public get ssoEnabled() {
    return this.getBooleanAttribute('sso_enabled');
  }

  // workspace_limit - computed: false, optional: true, required: false
  private _workspaceLimit?: number; 
  public get workspaceLimit() {
    return this.getNumberAttribute('workspace_limit');
  }
  public set workspaceLimit(value: number) {
    this._workspaceLimit = value;
  }
  public resetWorkspaceLimit() {
    this._workspaceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceLimitInput() {
    return this._workspaceLimit;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_beta_tools: cdktf.booleanToTerraform(this._accessBetaTools),
      global_module_sharing: cdktf.booleanToTerraform(this._globalModuleSharing),
      id: cdktf.stringToTerraform(this._id),
      module_sharing_consumer_organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._moduleSharingConsumerOrganizations),
      organization: cdktf.stringToTerraform(this._organization),
      workspace_limit: cdktf.numberToTerraform(this._workspaceLimit),
    };
  }
}
