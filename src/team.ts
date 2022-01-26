// https://www.terraform.io/docs/providers/tfe/r/team
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#name Team#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#organization Team#organization}
  */
  readonly organization: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#visibility Team#visibility}
  */
  readonly visibility?: string;
  /**
  * organization_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#organization_access Team#organization_access}
  */
  readonly organizationAccess?: TeamOrganizationAccess;
}
export interface TeamOrganizationAccess {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_policies Team#manage_policies}
  */
  readonly managePolicies?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_policy_overrides Team#manage_policy_overrides}
  */
  readonly managePolicyOverrides?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_vcs_settings Team#manage_vcs_settings}
  */
  readonly manageVcsSettings?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_workspaces Team#manage_workspaces}
  */
  readonly manageWorkspaces?: boolean | cdktf.IResolvable;
}

export function teamOrganizationAccessToTerraform(struct?: TeamOrganizationAccessOutputReference | TeamOrganizationAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manage_policies: cdktf.booleanToTerraform(struct!.managePolicies),
    manage_policy_overrides: cdktf.booleanToTerraform(struct!.managePolicyOverrides),
    manage_vcs_settings: cdktf.booleanToTerraform(struct!.manageVcsSettings),
    manage_workspaces: cdktf.booleanToTerraform(struct!.manageWorkspaces),
  }
}

export class TeamOrganizationAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): TeamOrganizationAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._managePolicies !== undefined) {
      hasAnyValues = true;
      internalValueResult.managePolicies = this._managePolicies;
    }
    if (this._managePolicyOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.managePolicyOverrides = this._managePolicyOverrides;
    }
    if (this._manageVcsSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageVcsSettings = this._manageVcsSettings;
    }
    if (this._manageWorkspaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageWorkspaces = this._manageWorkspaces;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamOrganizationAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._managePolicies = undefined;
      this._managePolicyOverrides = undefined;
      this._manageVcsSettings = undefined;
      this._manageWorkspaces = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._managePolicies = value.managePolicies;
      this._managePolicyOverrides = value.managePolicyOverrides;
      this._manageVcsSettings = value.manageVcsSettings;
      this._manageWorkspaces = value.manageWorkspaces;
    }
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team tfe_team}
*/
export class Team extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "tfe_team";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/tfe/r/team tfe_team} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamConfig
  */
  public constructor(scope: Construct, id: string, config: TeamConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_team',
      terraformGeneratorMetadata: {
        providerName: 'tfe'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._organization = config.organization;
    this._visibility = config.visibility;
    this._organizationAccess.internalValue = config.organizationAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
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
  private _organizationAccess = new TeamOrganizationAccessOutputReference(this, "organization_access", true);
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
      name: cdktf.stringToTerraform(this._name),
      organization: cdktf.stringToTerraform(this._organization),
      visibility: cdktf.stringToTerraform(this._visibility),
      organization_access: teamOrganizationAccessToTerraform(this._organizationAccess.internalValue),
    };
  }
}
