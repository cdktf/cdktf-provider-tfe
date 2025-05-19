// https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRetentionPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the organization. If omitted, organization must be defined in the provider config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy#organization DataRetentionPolicy#organization}
  */
  readonly organization?: string;
  /**
  * ID of the workspace that the data retention policy should apply to. If omitted, the data retention policy will apply to the entire organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy#workspace_id DataRetentionPolicy#workspace_id}
  */
  readonly workspaceId?: string;
  /**
  * delete_older_than block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy#delete_older_than DataRetentionPolicy#delete_older_than}
  */
  readonly deleteOlderThan?: DataRetentionPolicyDeleteOlderThan;
  /**
  * dont_delete block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy#dont_delete DataRetentionPolicy#dont_delete}
  */
  readonly dontDelete?: DataRetentionPolicyDontDelete;
}
export interface DataRetentionPolicyDeleteOlderThan {
  /**
  * Number of days
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy#days DataRetentionPolicy#days}
  */
  readonly days?: number;
}

export function dataRetentionPolicyDeleteOlderThanToTerraform(struct?: DataRetentionPolicyDeleteOlderThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
  }
}


export function dataRetentionPolicyDeleteOlderThanToHclTerraform(struct?: DataRetentionPolicyDeleteOlderThan | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRetentionPolicyDeleteOlderThanOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRetentionPolicyDeleteOlderThan | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRetentionPolicyDeleteOlderThan | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._days = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._days = value.days;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }
}
export interface DataRetentionPolicyDontDelete {
}

export function dataRetentionPolicyDontDeleteToTerraform(struct?: DataRetentionPolicyDontDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRetentionPolicyDontDeleteToHclTerraform(struct?: DataRetentionPolicyDontDelete | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRetentionPolicyDontDeleteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRetentionPolicyDontDelete | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRetentionPolicyDontDelete | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy tfe_data_retention_policy}
*/
export class DataRetentionPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_data_retention_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRetentionPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRetentionPolicy to import
  * @param importFromId The id of the existing DataRetentionPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRetentionPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_data_retention_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/data_retention_policy tfe_data_retention_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRetentionPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRetentionPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tfe_data_retention_policy',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.65.2',
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
    this._organization = config.organization;
    this._workspaceId = config.workspaceId;
    this._deleteOlderThan.internalValue = config.deleteOlderThan;
    this._dontDelete.internalValue = config.dontDelete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // delete_older_than - computed: false, optional: true, required: false
  private _deleteOlderThan = new DataRetentionPolicyDeleteOlderThanOutputReference(this, "delete_older_than");
  public get deleteOlderThan() {
    return this._deleteOlderThan;
  }
  public putDeleteOlderThan(value: DataRetentionPolicyDeleteOlderThan) {
    this._deleteOlderThan.internalValue = value;
  }
  public resetDeleteOlderThan() {
    this._deleteOlderThan.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOlderThanInput() {
    return this._deleteOlderThan.internalValue;
  }

  // dont_delete - computed: false, optional: true, required: true
  private _dontDelete = new DataRetentionPolicyDontDeleteOutputReference(this, "dont_delete");
  public get dontDelete() {
    return this._dontDelete;
  }
  public putDontDelete(value: DataRetentionPolicyDontDelete) {
    this._dontDelete.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dontDeleteInput() {
    return this._dontDelete.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      organization: cdktf.stringToTerraform(this._organization),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      delete_older_than: dataRetentionPolicyDeleteOlderThanToTerraform(this._deleteOlderThan.internalValue),
      dont_delete: dataRetentionPolicyDontDeleteToTerraform(this._dontDelete.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_older_than: {
        value: dataRetentionPolicyDeleteOlderThanToHclTerraform(this._deleteOlderThan.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRetentionPolicyDeleteOlderThan",
      },
      dont_delete: {
        value: dataRetentionPolicyDontDeleteToHclTerraform(this._dontDelete.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRetentionPolicyDontDelete",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
