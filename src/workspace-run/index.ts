/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceRunConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#id WorkspaceRun#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#workspace_id WorkspaceRun#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * apply block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#apply WorkspaceRun#apply}
  */
  readonly apply?: WorkspaceRunApply;
  /**
  * destroy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#destroy WorkspaceRun#destroy}
  */
  readonly destroy?: WorkspaceRunDestroy;
}
export interface WorkspaceRunApply {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}
  */
  readonly manualConfirm: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry WorkspaceRun#retry}
  */
  readonly retry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}
  */
  readonly retryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}
  */
  readonly retryBackoffMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}
  */
  readonly retryBackoffMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}
  */
  readonly waitForRun?: boolean | cdktf.IResolvable;
}

export function workspaceRunApplyToTerraform(struct?: WorkspaceRunApplyOutputReference | WorkspaceRunApply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_confirm: cdktf.booleanToTerraform(struct!.manualConfirm),
    retry: cdktf.booleanToTerraform(struct!.retry),
    retry_attempts: cdktf.numberToTerraform(struct!.retryAttempts),
    retry_backoff_max: cdktf.numberToTerraform(struct!.retryBackoffMax),
    retry_backoff_min: cdktf.numberToTerraform(struct!.retryBackoffMin),
    wait_for_run: cdktf.booleanToTerraform(struct!.waitForRun),
  }
}


export function workspaceRunApplyToHclTerraform(struct?: WorkspaceRunApplyOutputReference | WorkspaceRunApply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_confirm: {
      value: cdktf.booleanToHclTerraform(struct!.manualConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry: {
      value: cdktf.booleanToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.retryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_backoff_max: {
      value: cdktf.numberToHclTerraform(struct!.retryBackoffMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_backoff_min: {
      value: cdktf.numberToHclTerraform(struct!.retryBackoffMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_run: {
      value: cdktf.booleanToHclTerraform(struct!.waitForRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceRunApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspaceRunApply | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualConfirm = this._manualConfirm;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._retryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAttempts = this._retryAttempts;
    }
    if (this._retryBackoffMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryBackoffMax = this._retryBackoffMax;
    }
    if (this._retryBackoffMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryBackoffMin = this._retryBackoffMin;
    }
    if (this._waitForRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForRun = this._waitForRun;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceRunApply | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualConfirm = undefined;
      this._retry = undefined;
      this._retryAttempts = undefined;
      this._retryBackoffMax = undefined;
      this._retryBackoffMin = undefined;
      this._waitForRun = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualConfirm = value.manualConfirm;
      this._retry = value.retry;
      this._retryAttempts = value.retryAttempts;
      this._retryBackoffMax = value.retryBackoffMax;
      this._retryBackoffMin = value.retryBackoffMin;
      this._waitForRun = value.waitForRun;
    }
  }

  // manual_confirm - computed: false, optional: false, required: true
  private _manualConfirm?: boolean | cdktf.IResolvable; 
  public get manualConfirm() {
    return this.getBooleanAttribute('manual_confirm');
  }
  public set manualConfirm(value: boolean | cdktf.IResolvable) {
    this._manualConfirm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manualConfirmInput() {
    return this._manualConfirm;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: boolean | cdktf.IResolvable; 
  public get retry() {
    return this.getBooleanAttribute('retry');
  }
  public set retry(value: boolean | cdktf.IResolvable) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_attempts - computed: false, optional: true, required: false
  private _retryAttempts?: number; 
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }
  public set retryAttempts(value: number) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // retry_backoff_max - computed: false, optional: true, required: false
  private _retryBackoffMax?: number; 
  public get retryBackoffMax() {
    return this.getNumberAttribute('retry_backoff_max');
  }
  public set retryBackoffMax(value: number) {
    this._retryBackoffMax = value;
  }
  public resetRetryBackoffMax() {
    this._retryBackoffMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryBackoffMaxInput() {
    return this._retryBackoffMax;
  }

  // retry_backoff_min - computed: false, optional: true, required: false
  private _retryBackoffMin?: number; 
  public get retryBackoffMin() {
    return this.getNumberAttribute('retry_backoff_min');
  }
  public set retryBackoffMin(value: number) {
    this._retryBackoffMin = value;
  }
  public resetRetryBackoffMin() {
    this._retryBackoffMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryBackoffMinInput() {
    return this._retryBackoffMin;
  }

  // wait_for_run - computed: false, optional: true, required: false
  private _waitForRun?: boolean | cdktf.IResolvable; 
  public get waitForRun() {
    return this.getBooleanAttribute('wait_for_run');
  }
  public set waitForRun(value: boolean | cdktf.IResolvable) {
    this._waitForRun = value;
  }
  public resetWaitForRun() {
    this._waitForRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRunInput() {
    return this._waitForRun;
  }
}
export interface WorkspaceRunDestroy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#manual_confirm WorkspaceRun#manual_confirm}
  */
  readonly manualConfirm: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry WorkspaceRun#retry}
  */
  readonly retry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry_attempts WorkspaceRun#retry_attempts}
  */
  readonly retryAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry_backoff_max WorkspaceRun#retry_backoff_max}
  */
  readonly retryBackoffMax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#retry_backoff_min WorkspaceRun#retry_backoff_min}
  */
  readonly retryBackoffMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#wait_for_run WorkspaceRun#wait_for_run}
  */
  readonly waitForRun?: boolean | cdktf.IResolvable;
}

export function workspaceRunDestroyToTerraform(struct?: WorkspaceRunDestroyOutputReference | WorkspaceRunDestroy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_confirm: cdktf.booleanToTerraform(struct!.manualConfirm),
    retry: cdktf.booleanToTerraform(struct!.retry),
    retry_attempts: cdktf.numberToTerraform(struct!.retryAttempts),
    retry_backoff_max: cdktf.numberToTerraform(struct!.retryBackoffMax),
    retry_backoff_min: cdktf.numberToTerraform(struct!.retryBackoffMin),
    wait_for_run: cdktf.booleanToTerraform(struct!.waitForRun),
  }
}


export function workspaceRunDestroyToHclTerraform(struct?: WorkspaceRunDestroyOutputReference | WorkspaceRunDestroy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_confirm: {
      value: cdktf.booleanToHclTerraform(struct!.manualConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry: {
      value: cdktf.booleanToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retry_attempts: {
      value: cdktf.numberToHclTerraform(struct!.retryAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_backoff_max: {
      value: cdktf.numberToHclTerraform(struct!.retryBackoffMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_backoff_min: {
      value: cdktf.numberToHclTerraform(struct!.retryBackoffMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_for_run: {
      value: cdktf.booleanToHclTerraform(struct!.waitForRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkspaceRunDestroyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WorkspaceRunDestroy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualConfirm = this._manualConfirm;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._retryAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAttempts = this._retryAttempts;
    }
    if (this._retryBackoffMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryBackoffMax = this._retryBackoffMax;
    }
    if (this._retryBackoffMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryBackoffMin = this._retryBackoffMin;
    }
    if (this._waitForRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForRun = this._waitForRun;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkspaceRunDestroy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualConfirm = undefined;
      this._retry = undefined;
      this._retryAttempts = undefined;
      this._retryBackoffMax = undefined;
      this._retryBackoffMin = undefined;
      this._waitForRun = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualConfirm = value.manualConfirm;
      this._retry = value.retry;
      this._retryAttempts = value.retryAttempts;
      this._retryBackoffMax = value.retryBackoffMax;
      this._retryBackoffMin = value.retryBackoffMin;
      this._waitForRun = value.waitForRun;
    }
  }

  // manual_confirm - computed: false, optional: false, required: true
  private _manualConfirm?: boolean | cdktf.IResolvable; 
  public get manualConfirm() {
    return this.getBooleanAttribute('manual_confirm');
  }
  public set manualConfirm(value: boolean | cdktf.IResolvable) {
    this._manualConfirm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manualConfirmInput() {
    return this._manualConfirm;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: boolean | cdktf.IResolvable; 
  public get retry() {
    return this.getBooleanAttribute('retry');
  }
  public set retry(value: boolean | cdktf.IResolvable) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_attempts - computed: false, optional: true, required: false
  private _retryAttempts?: number; 
  public get retryAttempts() {
    return this.getNumberAttribute('retry_attempts');
  }
  public set retryAttempts(value: number) {
    this._retryAttempts = value;
  }
  public resetRetryAttempts() {
    this._retryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAttemptsInput() {
    return this._retryAttempts;
  }

  // retry_backoff_max - computed: false, optional: true, required: false
  private _retryBackoffMax?: number; 
  public get retryBackoffMax() {
    return this.getNumberAttribute('retry_backoff_max');
  }
  public set retryBackoffMax(value: number) {
    this._retryBackoffMax = value;
  }
  public resetRetryBackoffMax() {
    this._retryBackoffMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryBackoffMaxInput() {
    return this._retryBackoffMax;
  }

  // retry_backoff_min - computed: false, optional: true, required: false
  private _retryBackoffMin?: number; 
  public get retryBackoffMin() {
    return this.getNumberAttribute('retry_backoff_min');
  }
  public set retryBackoffMin(value: number) {
    this._retryBackoffMin = value;
  }
  public resetRetryBackoffMin() {
    this._retryBackoffMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryBackoffMinInput() {
    return this._retryBackoffMin;
  }

  // wait_for_run - computed: false, optional: true, required: false
  private _waitForRun?: boolean | cdktf.IResolvable; 
  public get waitForRun() {
    return this.getBooleanAttribute('wait_for_run');
  }
  public set waitForRun(value: boolean | cdktf.IResolvable) {
    this._waitForRun = value;
  }
  public resetWaitForRun() {
    this._waitForRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForRunInput() {
    return this._waitForRun;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run tfe_workspace_run}
*/
export class WorkspaceRun extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_workspace_run";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceRun resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceRun to import
  * @param importFromId The id of the existing WorkspaceRun that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceRun to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_workspace_run", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/workspace_run tfe_workspace_run} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceRunConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceRunConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_workspace_run',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.69.0',
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
    this._workspaceId = config.workspaceId;
    this._apply.internalValue = config.apply;
    this._destroy.internalValue = config.destroy;
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

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // apply - computed: false, optional: true, required: false
  private _apply = new WorkspaceRunApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: WorkspaceRunApply) {
    this._apply.internalValue = value;
  }
  public resetApply() {
    this._apply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply.internalValue;
  }

  // destroy - computed: false, optional: true, required: false
  private _destroy = new WorkspaceRunDestroyOutputReference(this, "destroy");
  public get destroy() {
    return this._destroy;
  }
  public putDestroy(value: WorkspaceRunDestroy) {
    this._destroy.internalValue = value;
  }
  public resetDestroy() {
    this._destroy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destroyInput() {
    return this._destroy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      apply: workspaceRunApplyToTerraform(this._apply.internalValue),
      destroy: workspaceRunDestroyToTerraform(this._destroy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      apply: {
        value: workspaceRunApplyToHclTerraform(this._apply.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceRunApplyList",
      },
      destroy: {
        value: workspaceRunDestroyToHclTerraform(this._destroy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkspaceRunDestroyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
