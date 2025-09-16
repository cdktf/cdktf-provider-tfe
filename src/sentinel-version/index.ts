/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SentinelVersionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#archs SentinelVersion#archs}
  */
  readonly archs?: SentinelVersionArchs[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#beta SentinelVersion#beta}
  */
  readonly beta?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#deprecated SentinelVersion#deprecated}
  */
  readonly deprecated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#deprecated_reason SentinelVersion#deprecated_reason}
  */
  readonly deprecatedReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#enabled SentinelVersion#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#official SentinelVersion#official}
  */
  readonly official?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#sha SentinelVersion#sha}
  */
  readonly sha?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#url SentinelVersion#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#version SentinelVersion#version}
  */
  readonly version: string;
}
export interface SentinelVersionArchs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#arch SentinelVersion#arch}
  */
  readonly arch: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#os SentinelVersion#os}
  */
  readonly os: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#sha SentinelVersion#sha}
  */
  readonly sha: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#url SentinelVersion#url}
  */
  readonly url: string;
}

export function sentinelVersionArchsToTerraform(struct?: SentinelVersionArchs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arch: cdktf.stringToTerraform(struct!.arch),
    os: cdktf.stringToTerraform(struct!.os),
    sha: cdktf.stringToTerraform(struct!.sha),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function sentinelVersionArchsToHclTerraform(struct?: SentinelVersionArchs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arch: {
      value: cdktf.stringToHclTerraform(struct!.arch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os: {
      value: cdktf.stringToHclTerraform(struct!.os),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sha: {
      value: cdktf.stringToHclTerraform(struct!.sha),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SentinelVersionArchsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SentinelVersionArchs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arch !== undefined) {
      hasAnyValues = true;
      internalValueResult.arch = this._arch;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._sha !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha = this._sha;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SentinelVersionArchs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._arch = undefined;
      this._os = undefined;
      this._sha = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._arch = value.arch;
      this._os = value.os;
      this._sha = value.sha;
      this._url = value.url;
    }
  }

  // arch - computed: true, optional: false, required: true
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // os - computed: true, optional: false, required: true
  private _os?: string; 
  public get os() {
    return this.getStringAttribute('os');
  }
  public set os(value: string) {
    this._os = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // sha - computed: true, optional: false, required: true
  private _sha?: string; 
  public get sha() {
    return this.getStringAttribute('sha');
  }
  public set sha(value: string) {
    this._sha = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shaInput() {
    return this._sha;
  }

  // url - computed: true, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class SentinelVersionArchsList extends cdktf.ComplexList {
  public internalValue? : SentinelVersionArchs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SentinelVersionArchsOutputReference {
    return new SentinelVersionArchsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version tfe_sentinel_version}
*/
export class SentinelVersion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tfe_sentinel_version";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SentinelVersion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SentinelVersion to import
  * @param importFromId The id of the existing SentinelVersion that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SentinelVersion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tfe_sentinel_version", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/tfe/0.69.0/docs/resources/sentinel_version tfe_sentinel_version} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SentinelVersionConfig
  */
  public constructor(scope: Construct, id: string, config: SentinelVersionConfig) {
    super(scope, id, {
      terraformResourceType: 'tfe_sentinel_version',
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
    this._archs.internalValue = config.archs;
    this._beta = config.beta;
    this._deprecated = config.deprecated;
    this._deprecatedReason = config.deprecatedReason;
    this._enabled = config.enabled;
    this._official = config.official;
    this._sha = config.sha;
    this._url = config.url;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archs - computed: true, optional: true, required: false
  private _archs = new SentinelVersionArchsList(this, "archs", true);
  public get archs() {
    return this._archs;
  }
  public putArchs(value: SentinelVersionArchs[] | cdktf.IResolvable) {
    this._archs.internalValue = value;
  }
  public resetArchs() {
    this._archs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archsInput() {
    return this._archs.internalValue;
  }

  // beta - computed: true, optional: true, required: false
  private _beta?: boolean | cdktf.IResolvable; 
  public get beta() {
    return this.getBooleanAttribute('beta');
  }
  public set beta(value: boolean | cdktf.IResolvable) {
    this._beta = value;
  }
  public resetBeta() {
    this._beta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get betaInput() {
    return this._beta;
  }

  // deprecated - computed: true, optional: true, required: false
  private _deprecated?: boolean | cdktf.IResolvable; 
  public get deprecated() {
    return this.getBooleanAttribute('deprecated');
  }
  public set deprecated(value: boolean | cdktf.IResolvable) {
    this._deprecated = value;
  }
  public resetDeprecated() {
    this._deprecated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedInput() {
    return this._deprecated;
  }

  // deprecated_reason - computed: false, optional: true, required: false
  private _deprecatedReason?: string; 
  public get deprecatedReason() {
    return this.getStringAttribute('deprecated_reason');
  }
  public set deprecatedReason(value: string) {
    this._deprecatedReason = value;
  }
  public resetDeprecatedReason() {
    this._deprecatedReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedReasonInput() {
    return this._deprecatedReason;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // official - computed: true, optional: true, required: false
  private _official?: boolean | cdktf.IResolvable; 
  public get official() {
    return this.getBooleanAttribute('official');
  }
  public set official(value: boolean | cdktf.IResolvable) {
    this._official = value;
  }
  public resetOfficial() {
    this._official = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get officialInput() {
    return this._official;
  }

  // sha - computed: true, optional: true, required: false
  private _sha?: string; 
  public get sha() {
    return this.getStringAttribute('sha');
  }
  public set sha(value: string) {
    this._sha = value;
  }
  public resetSha() {
    this._sha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shaInput() {
    return this._sha;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archs: cdktf.listMapper(sentinelVersionArchsToTerraform, false)(this._archs.internalValue),
      beta: cdktf.booleanToTerraform(this._beta),
      deprecated: cdktf.booleanToTerraform(this._deprecated),
      deprecated_reason: cdktf.stringToTerraform(this._deprecatedReason),
      enabled: cdktf.booleanToTerraform(this._enabled),
      official: cdktf.booleanToTerraform(this._official),
      sha: cdktf.stringToTerraform(this._sha),
      url: cdktf.stringToTerraform(this._url),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archs: {
        value: cdktf.listMapperHcl(sentinelVersionArchsToHclTerraform, false)(this._archs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SentinelVersionArchsList",
      },
      beta: {
        value: cdktf.booleanToHclTerraform(this._beta),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deprecated: {
        value: cdktf.booleanToHclTerraform(this._deprecated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      deprecated_reason: {
        value: cdktf.stringToHclTerraform(this._deprecatedReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      official: {
        value: cdktf.booleanToHclTerraform(this._official),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sha: {
        value: cdktf.stringToHclTerraform(this._sha),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
