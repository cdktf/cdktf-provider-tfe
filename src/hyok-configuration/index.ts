/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HyokConfigurationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the agent-pool to associate with the HYOK configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#agent_pool_id HyokConfiguration#agent_pool_id}
  */
  readonly agentPoolId: string;
  /**
  * Refers to the name of your key encryption key stored in your key management service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kek_id HyokConfiguration#kek_id}
  */
  readonly kekId: string;
  /**
  * Label for the HYOK configuration to be used within HCP Terraform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#name HyokConfiguration#name}
  */
  readonly name: string;
  /**
  * The ID of the TFE OIDC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_id HyokConfiguration#oidc_configuration_id}
  */
  readonly oidcConfigurationId: string;
  /**
  * The type of the TFE OIDC configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#oidc_configuration_type HyokConfiguration#oidc_configuration_type}
  */
  readonly oidcConfigurationType: string;
  /**
  * Name of the organization to which the TFE HYOK configuration belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#organization HyokConfiguration#organization}
  */
  readonly organization?: string;
  /**
  * kms_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#kms_options HyokConfiguration#kms_options}
  */
  readonly kmsOptions?: HyokConfigurationKmsOptions;
}
export interface HyokConfigurationKmsOptions {
  /**
  * The location in which the GCP key ring exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_location HyokConfiguration#key_location}
  */
  readonly keyLocation?: string;
  /**
  * The AWS region where your key is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_region HyokConfiguration#key_region}
  */
  readonly keyRegion?: string;
  /**
  * The root resource for Google Cloud KMS keys and key versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#key_ring_id HyokConfiguration#key_ring_id}
  */
  readonly keyRingId?: string;
}

export function hyokConfigurationKmsOptionsToTerraform(struct?: HyokConfigurationKmsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_location: cdktf.stringToTerraform(struct!.keyLocation),
    key_region: cdktf.stringToTerraform(struct!.keyRegion),
    key_ring_id: cdktf.stringToTerraform(struct!.keyRingId),
  }
}


export function hyokConfigurationKmsOptionsToHclTerraform(struct?: HyokConfigurationKmsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_location: {
      value: cdktf.stringToHclTerraform(struct!.keyLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_region: {
      value: cdktf.stringToHclTerraform(struct!.keyRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_ring_id: {
      value: cdktf.stringToHclTerraform(struct!.keyRingId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HyokConfigurationKmsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HyokConfigurationKmsOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyLocation = this._keyLocation;
    }
    if (this._keyRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRegion = this._keyRegion;
    }
    if (this._keyRingId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyRingId = this._keyRingId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HyokConfigurationKmsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyLocation = undefined;
      this._keyRegion = undefined;
      this._keyRingId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyLocation = value.keyLocation;
      this._keyRegion = value.keyRegion;
      this._keyRingId = value.keyRingId;
    }
  }

  // key_location - computed: true, optional: true, required: false
  private _keyLocation?: string; 
  public get keyLocation() {
    return this.getStringAttribute('key_location');
  }
  public set keyLocation(value: string) {
    this._keyLocation = value;
  }
  public resetKeyLocation() {
    this._keyLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyLocationInput() {
    return this._keyLocation;
  }

  // key_region - computed: true, optional: true, required: false
  private _keyRegion?: string; 
  public get keyRegion() {
    return this.getStringAttribute('key_region');
  }
  public set keyRegion(value: string) {
    this._keyRegion = value;
  }
  public resetKeyRegion() {
    this._keyRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRegionInput() {
    return this._keyRegion;
  }

  // key_ring_id - computed: true, optional: true, required: false
  private _keyRingId?: string; 
  public get keyRingId() {
    return this.getStringAttribute('key_ring_id');
  }
  public set keyRingId(value: string) {
    this._keyRingId = value;
  }
  public resetKeyRingId() {
    this._keyRingId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyRingIdInput() {
    return this._keyRingId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration tfe_hyok_configuration}
*/
export class HyokConfiguration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_hyok_configuration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HyokConfiguration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HyokConfiguration to import
  * @param importFromId The id of the existing HyokConfiguration that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HyokConfiguration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_hyok_configuration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/hyok_configuration tfe_hyok_configuration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HyokConfigurationConfig
  */
  public constructor(scope: Construct, id: string, config: HyokConfigurationConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_hyok_configuration',
      terraformGeneratorMetadata: {
        providerName: 'tfe',
        providerVersion: '0.71.0',
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
    this._agentPoolId = config.agentPoolId;
    this._kekId = config.kekId;
    this._name = config.name;
    this._oidcConfigurationId = config.oidcConfigurationId;
    this._oidcConfigurationType = config.oidcConfigurationType;
    this._organization = config.organization;
    this._kmsOptions.internalValue = config.kmsOptions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_pool_id - computed: false, optional: false, required: true
  private _agentPoolId?: string; 
  public get agentPoolId() {
    return this.getStringAttribute('agent_pool_id');
  }
  public set agentPoolId(value: string) {
    this._agentPoolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPoolIdInput() {
    return this._agentPoolId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kek_id - computed: false, optional: false, required: true
  private _kekId?: string; 
  public get kekId() {
    return this.getStringAttribute('kek_id');
  }
  public set kekId(value: string) {
    this._kekId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kekIdInput() {
    return this._kekId;
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

  // oidc_configuration_id - computed: false, optional: false, required: true
  private _oidcConfigurationId?: string; 
  public get oidcConfigurationId() {
    return this.getStringAttribute('oidc_configuration_id');
  }
  public set oidcConfigurationId(value: string) {
    this._oidcConfigurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigurationIdInput() {
    return this._oidcConfigurationId;
  }

  // oidc_configuration_type - computed: false, optional: false, required: true
  private _oidcConfigurationType?: string; 
  public get oidcConfigurationType() {
    return this.getStringAttribute('oidc_configuration_type');
  }
  public set oidcConfigurationType(value: string) {
    this._oidcConfigurationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcConfigurationTypeInput() {
    return this._oidcConfigurationType;
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

  // kms_options - computed: false, optional: true, required: false
  private _kmsOptions = new HyokConfigurationKmsOptionsOutputReference(this, "kms_options");
  public get kmsOptions() {
    return this._kmsOptions;
  }
  public putKmsOptions(value: HyokConfigurationKmsOptions) {
    this._kmsOptions.internalValue = value;
  }
  public resetKmsOptions() {
    this._kmsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsOptionsInput() {
    return this._kmsOptions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_pool_id: cdktf.stringToTerraform(this._agentPoolId),
      kek_id: cdktf.stringToTerraform(this._kekId),
      name: cdktf.stringToTerraform(this._name),
      oidc_configuration_id: cdktf.stringToTerraform(this._oidcConfigurationId),
      oidc_configuration_type: cdktf.stringToTerraform(this._oidcConfigurationType),
      organization: cdktf.stringToTerraform(this._organization),
      kms_options: hyokConfigurationKmsOptionsToTerraform(this._kmsOptions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_pool_id: {
        value: cdktf.stringToHclTerraform(this._agentPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kek_id: {
        value: cdktf.stringToHclTerraform(this._kekId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_configuration_id: {
        value: cdktf.stringToHclTerraform(this._oidcConfigurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_configuration_type: {
        value: cdktf.stringToHclTerraform(this._oidcConfigurationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_options: {
        value: hyokConfigurationKmsOptionsToHclTerraform(this._kmsOptions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HyokConfigurationKmsOptions",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
