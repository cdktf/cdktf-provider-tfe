// https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#id Team#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#name Team#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#organization Team#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#sso_team_id Team#sso_team_id}
  */
  readonly ssoTeamId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#visibility Team#visibility}
  */
  readonly visibility?: string;
  /**
  * organization_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#organization_access Team#organization_access}
  */
  readonly organizationAccess?: TeamOrganizationAccess;
}
export interface TeamOrganizationAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_membership Team#manage_membership}
  */
  readonly manageMembership?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_modules Team#manage_modules}
  */
  readonly manageModules?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_policies Team#manage_policies}
  */
  readonly managePolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}
  */
  readonly managePolicyOverrides?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_projects Team#manage_projects}
  */
  readonly manageProjects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_providers Team#manage_providers}
  */
  readonly manageProviders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_run_tasks Team#manage_run_tasks}
  */
  readonly manageRunTasks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}
  */
  readonly manageVcsSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#manage_workspaces Team#manage_workspaces}
  */
  readonly manageWorkspaces?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#read_projects Team#read_projects}
  */
  readonly readProjects?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#read_workspaces Team#read_workspaces}
  */
  readonly readWorkspaces?: boolean | cdktf.IResolvable;
}

export function teamOrganizationAccessToTerraform(struct?: TeamOrganizationAccessOutputReference | TeamOrganizationAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manage_membership: cdktf.booleanToTerraform(struct!.manageMembership),
    manage_modules: cdktf.booleanToTerraform(struct!.manageModules),
    manage_policies: cdktf.booleanToTerraform(struct!.managePolicies),
    manage_policy_overrides: cdktf.booleanToTerraform(struct!.managePolicyOverrides),
    manage_projects: cdktf.booleanToTerraform(struct!.manageProjects),
    manage_providers: cdktf.booleanToTerraform(struct!.manageProviders),
    manage_run_tasks: cdktf.booleanToTerraform(struct!.manageRunTasks),
    manage_vcs_settings: cdktf.booleanToTerraform(struct!.manageVcsSettings),
    manage_workspaces: cdktf.booleanToTerraform(struct!.manageWorkspaces),
    read_projects: cdktf.booleanToTerraform(struct!.readProjects),
    read_workspaces: cdktf.booleanToTerraform(struct!.readWorkspaces),
  }
}

export class TeamOrganizationAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamOrganizationAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manageMembership !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageMembership = this._manageMembership;
    }
    if (this._manageModules !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageModules = this._manageModules;
    }
    if (this._managePolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.managePolicies = this._managePolicies;
    }
    if (this._managePolicyOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.managePolicyOverrides = this._managePolicyOverrides;
    }
    if (this._manageProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageProjects = this._manageProjects;
    }
    if (this._manageProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageProviders = this._manageProviders;
    }
    if (this._manageRunTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageRunTasks = this._manageRunTasks;
    }
    if (this._manageVcsSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageVcsSettings = this._manageVcsSettings;
    }
    if (this._manageWorkspaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageWorkspaces = this._manageWorkspaces;
    }
    if (this._readProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.readProjects = this._readProjects;
    }
    if (this._readWorkspaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.readWorkspaces = this._readWorkspaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamOrganizationAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manageMembership = undefined;
      this._manageModules = undefined;
      this._managePolicies = undefined;
      this._managePolicyOverrides = undefined;
      this._manageProjects = undefined;
      this._manageProviders = undefined;
      this._manageRunTasks = undefined;
      this._manageVcsSettings = undefined;
      this._manageWorkspaces = undefined;
      this._readProjects = undefined;
      this._readWorkspaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manageMembership = value.manageMembership;
      this._manageModules = value.manageModules;
      this._managePolicies = value.managePolicies;
      this._managePolicyOverrides = value.managePolicyOverrides;
      this._manageProjects = value.manageProjects;
      this._manageProviders = value.manageProviders;
      this._manageRunTasks = value.manageRunTasks;
      this._manageVcsSettings = value.manageVcsSettings;
      this._manageWorkspaces = value.manageWorkspaces;
      this._readProjects = value.readProjects;
      this._readWorkspaces = value.readWorkspaces;
    }
  }

  // manage_membership - computed: false, optional: true, required: false
  private _manageMembership?: boolean | cdktf.IResolvable; 
  public get manageMembership() {
    return this.getBooleanAttribute('manage_membership');
  }
  public set manageMembership(value: boolean | cdktf.IResolvable) {
    this._manageMembership = value;
  }
  public resetManageMembership() {
    this._manageMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMembershipInput() {
    return this._manageMembership;
  }

  // manage_modules - computed: false, optional: true, required: false
  private _manageModules?: boolean | cdktf.IResolvable; 
  public get manageModules() {
    return this.getBooleanAttribute('manage_modules');
  }
  public set manageModules(value: boolean | cdktf.IResolvable) {
    this._manageModules = value;
  }
  public resetManageModules() {
    this._manageModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageModulesInput() {
    return this._manageModules;
  }

  // manage_policies - computed: false, optional: true, required: false
  private _managePolicies?: boolean | cdktf.IResolvable; 
  public get managePolicies() {
    return this.getBooleanAttribute('manage_policies');
  }
  public set managePolicies(value: boolean | cdktf.IResolvable) {
    this._managePolicies = value;
  }
  public resetManagePolicies() {
    this._managePolicies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managePoliciesInput() {
    return this._managePolicies;
  }

  // manage_policy_overrides - computed: false, optional: true, required: false
  private _managePolicyOverrides?: boolean | cdktf.IResolvable; 
  public get managePolicyOverrides() {
    return this.getBooleanAttribute('manage_policy_overrides');
  }
  public set managePolicyOverrides(value: boolean | cdktf.IResolvable) {
    this._managePolicyOverrides = value;
  }
  public resetManagePolicyOverrides() {
    this._managePolicyOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managePolicyOverridesInput() {
    return this._managePolicyOverrides;
  }

  // manage_projects - computed: false, optional: true, required: false
  private _manageProjects?: boolean | cdktf.IResolvable; 
  public get manageProjects() {
    return this.getBooleanAttribute('manage_projects');
  }
  public set manageProjects(value: boolean | cdktf.IResolvable) {
    this._manageProjects = value;
  }
  public resetManageProjects() {
    this._manageProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageProjectsInput() {
    return this._manageProjects;
  }

  // manage_providers - computed: false, optional: true, required: false
  private _manageProviders?: boolean | cdktf.IResolvable; 
  public get manageProviders() {
    return this.getBooleanAttribute('manage_providers');
  }
  public set manageProviders(value: boolean | cdktf.IResolvable) {
    this._manageProviders = value;
  }
  public resetManageProviders() {
    this._manageProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageProvidersInput() {
    return this._manageProviders;
  }

  // manage_run_tasks - computed: false, optional: true, required: false
  private _manageRunTasks?: boolean | cdktf.IResolvable; 
  public get manageRunTasks() {
    return this.getBooleanAttribute('manage_run_tasks');
  }
  public set manageRunTasks(value: boolean | cdktf.IResolvable) {
    this._manageRunTasks = value;
  }
  public resetManageRunTasks() {
    this._manageRunTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageRunTasksInput() {
    return this._manageRunTasks;
  }

  // manage_vcs_settings - computed: false, optional: true, required: false
  private _manageVcsSettings?: boolean | cdktf.IResolvable; 
  public get manageVcsSettings() {
    return this.getBooleanAttribute('manage_vcs_settings');
  }
  public set manageVcsSettings(value: boolean | cdktf.IResolvable) {
    this._manageVcsSettings = value;
  }
  public resetManageVcsSettings() {
    this._manageVcsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageVcsSettingsInput() {
    return this._manageVcsSettings;
  }

  // manage_workspaces - computed: false, optional: true, required: false
  private _manageWorkspaces?: boolean | cdktf.IResolvable; 
  public get manageWorkspaces() {
    return this.getBooleanAttribute('manage_workspaces');
  }
  public set manageWorkspaces(value: boolean | cdktf.IResolvable) {
    this._manageWorkspaces = value;
  }
  public resetManageWorkspaces() {
    this._manageWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageWorkspacesInput() {
    return this._manageWorkspaces;
  }

  // read_projects - computed: false, optional: true, required: false
  private _readProjects?: boolean | cdktf.IResolvable; 
  public get readProjects() {
    return this.getBooleanAttribute('read_projects');
  }
  public set readProjects(value: boolean | cdktf.IResolvable) {
    this._readProjects = value;
  }
  public resetReadProjects() {
    this._readProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readProjectsInput() {
    return this._readProjects;
  }

  // read_workspaces - computed: false, optional: true, required: false
  private _readWorkspaces?: boolean | cdktf.IResolvable; 
  public get readWorkspaces() {
    return this.getBooleanAttribute('read_workspaces');
  }
  public set readWorkspaces(value: boolean | cdktf.IResolvable) {
    this._readWorkspaces = value;
  }
  public resetReadWorkspaces() {
    this._readWorkspaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWorkspacesInput() {
    return this._readWorkspaces;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team tfe_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_team";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Team to import
  * @param importFromId The id of the existing Team that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Team to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_team", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.51.0/docs/resources/team tfe_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.51.0',
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
    this._organization = config.organization;
    this._ssoTeamId = config.ssoTeamId;
    this._visibility = config.visibility;
    this._organizationAccess.internalValue = config.organizationAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sso_team_id - computed: false, optional: true, required: false
  private _ssoTeamId?: string; 
  public get ssoTeamId() {
    return this.getStringAttribute('sso_team_id');
  }
  public set ssoTeamId(value: string) {
    this._ssoTeamId = value;
  }
  public resetSsoTeamId() {
    this._ssoTeamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoTeamIdInput() {
    return this._ssoTeamId;
  }

  // visibility - computed: false, optional: true, required: false
  private _visibility?: string; 
  public get visibility() {
    return this.getStringAttribute('visibility');
  }
  public set visibility(value: string) {
    this._visibility = value;
  }
  public resetVisibility() {
    this._visibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibilityInput() {
    return this._visibility;
  }

  // organization_access - computed: false, optional: true, required: false
  private _organizationAccess = new TeamOrganizationAccessOutputReference(this, "organization_access");
  public get organizationAccess() {
    return this._organizationAccess;
  }
  public putOrganizationAccess(value: TeamOrganizationAccess) {
    this._organizationAccess.internalValue = value;
  }
  public resetOrganizationAccess() {
    this._organizationAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationAccessInput() {
    return this._organizationAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      sso_team_id: cdktf.stringToTerraform(this._ssoTeamId),
      visibility: cdktf.stringToTerraform(this._visibility),
      organization_access: teamOrganizationAccessToTerraform(this._organizationAccess.internalValue),
    };
  }
}
