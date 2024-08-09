# `policySet` Submodule <a name="`policySet` Submodule" id="@cdktf/provider-tfe.policySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySet <a name="PolicySet" id="@cdktf/provider-tfe.policySet.PolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set tfe_policy_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySet;

PolicySet.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .agentEnabled(java.lang.Boolean)
//  .agentEnabled(IResolvable)
//  .description(java.lang.String)
//  .global(java.lang.Boolean)
//  .global(IResolvable)
//  .id(java.lang.String)
//  .kind(java.lang.String)
//  .organization(java.lang.String)
//  .overridable(java.lang.Boolean)
//  .overridable(IResolvable)
//  .policiesPath(java.lang.String)
//  .policyIds(java.util.List<java.lang.String>)
//  .policyToolVersion(java.lang.String)
//  .slug(java.util.Map<java.lang.String, java.lang.String>)
//  .vcsRepo(PolicySetVcsRepo)
//  .workspaceIds(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#name PolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.agentEnabled">agentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#description PolicySet#description}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.global">global</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#global PolicySet#global}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#id PolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#kind PolicySet#kind}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#organization PolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.overridable">overridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#overridable PolicySet#overridable}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policiesPath">policiesPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policies_path PolicySet#policies_path}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policy_ids PolicySet#policy_ids}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyToolVersion">policyToolVersion</a></code> | <code>java.lang.String</code> | The policy tool version to run the policy evaluation against. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.slug">slug</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#slug PolicySet#slug}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.workspaceIds">workspaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#name PolicySet#name}.

---

##### `agentEnabled`<sup>Optional</sup> <a name="agentEnabled" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.agentEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#agent_enabled PolicySet#agent_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#description PolicySet#description}.

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.global"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#global PolicySet#global}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#id PolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.kind"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#kind PolicySet#kind}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.organization"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#organization PolicySet#organization}.

---

##### `overridable`<sup>Optional</sup> <a name="overridable" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.overridable"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#overridable PolicySet#overridable}.

---

##### `policiesPath`<sup>Optional</sup> <a name="policiesPath" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policiesPath"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policies_path PolicySet#policies_path}.

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policy_ids PolicySet#policy_ids}.

---

##### `policyToolVersion`<sup>Optional</sup> <a name="policyToolVersion" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyToolVersion"></a>

- *Type:* java.lang.String

The policy tool version to run the policy evaluation against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policy_tool_version PolicySet#policy_tool_version}

---

##### `slug`<sup>Optional</sup> <a name="slug" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.slug"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#slug PolicySet#slug}.

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.vcsRepo"></a>

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#vcs_repo PolicySet#vcs_repo}

---

##### `workspaceIds`<sup>Optional</sup> <a name="workspaceIds" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.workspaceIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo">putVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetAgentEnabled">resetAgentEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetGlobal">resetGlobal</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetKind">resetKind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOverridable">resetOverridable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPoliciesPath">resetPoliciesPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPolicyIds">resetPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPolicyToolVersion">resetPolicyToolVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetSlug">resetSlug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetVcsRepo">resetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetWorkspaceIds">resetWorkspaceIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.policySet.PolicySet.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.policySet.PolicySet.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.policySet.PolicySet.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.policySet.PolicySet.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.policySet.PolicySet.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.policySet.PolicySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.policySet.PolicySet.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.policySet.PolicySet.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.policySet.PolicySet.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.policySet.PolicySet.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.policySet.PolicySet.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.policySet.PolicySet.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.policySet.PolicySet.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putVcsRepo` <a name="putVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo"></a>

```java
public void putVcsRepo(PolicySetVcsRepo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---

##### `resetAgentEnabled` <a name="resetAgentEnabled" id="@cdktf/provider-tfe.policySet.PolicySet.resetAgentEnabled"></a>

```java
public void resetAgentEnabled()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-tfe.policySet.PolicySet.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGlobal` <a name="resetGlobal" id="@cdktf/provider-tfe.policySet.PolicySet.resetGlobal"></a>

```java
public void resetGlobal()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.policySet.PolicySet.resetId"></a>

```java
public void resetId()
```

##### `resetKind` <a name="resetKind" id="@cdktf/provider-tfe.policySet.PolicySet.resetKind"></a>

```java
public void resetKind()
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.policySet.PolicySet.resetOrganization"></a>

```java
public void resetOrganization()
```

##### `resetOverridable` <a name="resetOverridable" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverridable"></a>

```java
public void resetOverridable()
```

##### `resetPoliciesPath` <a name="resetPoliciesPath" id="@cdktf/provider-tfe.policySet.PolicySet.resetPoliciesPath"></a>

```java
public void resetPoliciesPath()
```

##### `resetPolicyIds` <a name="resetPolicyIds" id="@cdktf/provider-tfe.policySet.PolicySet.resetPolicyIds"></a>

```java
public void resetPolicyIds()
```

##### `resetPolicyToolVersion` <a name="resetPolicyToolVersion" id="@cdktf/provider-tfe.policySet.PolicySet.resetPolicyToolVersion"></a>

```java
public void resetPolicyToolVersion()
```

##### `resetSlug` <a name="resetSlug" id="@cdktf/provider-tfe.policySet.PolicySet.resetSlug"></a>

```java
public void resetSlug()
```

##### `resetVcsRepo` <a name="resetVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.resetVcsRepo"></a>

```java
public void resetVcsRepo()
```

##### `resetWorkspaceIds` <a name="resetWorkspaceIds" id="@cdktf/provider-tfe.policySet.PolicySet.resetWorkspaceIds"></a>

```java
public void resetWorkspaceIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicySet resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySet;

PolicySet.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySet;

PolicySet.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySet;

PolicySet.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySet;

PolicySet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicySet.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicySet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabledInput">agentEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.globalInput">globalInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kindInput">kindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput">organizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput">overridableInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput">policiesPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput">policyIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersionInput">policyToolVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slugInput">slugInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput">vcsRepoInput</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput">workspaceIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabled">agentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.global">global</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kind">kind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organization">organization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridable">overridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath">policiesPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersion">policyToolVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slug">slug</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds">workspaceIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.policySet.PolicySet.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.policySet.PolicySet.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySet.PolicySet.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySet.PolicySet.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.policySet.PolicySet.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySet.PolicySet.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `vcsRepo`<sup>Required</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo"></a>

```java
public PolicySetVcsRepoOutputReference getVcsRepo();
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a>

---

##### `agentEnabledInput`<sup>Optional</sup> <a name="agentEnabledInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabledInput"></a>

```java
public java.lang.Object getAgentEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `globalInput`<sup>Optional</sup> <a name="globalInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.globalInput"></a>

```java
public java.lang.Object getGlobalInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kindInput`<sup>Optional</sup> <a name="kindInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.kindInput"></a>

```java
public java.lang.String getKindInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput"></a>

```java
public java.lang.String getOrganizationInput();
```

- *Type:* java.lang.String

---

##### `overridableInput`<sup>Optional</sup> <a name="overridableInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput"></a>

```java
public java.lang.Object getOverridableInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policiesPathInput`<sup>Optional</sup> <a name="policiesPathInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput"></a>

```java
public java.lang.String getPoliciesPathInput();
```

- *Type:* java.lang.String

---

##### `policyIdsInput`<sup>Optional</sup> <a name="policyIdsInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput"></a>

```java
public java.util.List<java.lang.String> getPolicyIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyToolVersionInput`<sup>Optional</sup> <a name="policyToolVersionInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersionInput"></a>

```java
public java.lang.String getPolicyToolVersionInput();
```

- *Type:* java.lang.String

---

##### `slugInput`<sup>Optional</sup> <a name="slugInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.slugInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSlugInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="vcsRepoInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput"></a>

```java
public PolicySetVcsRepo getVcsRepoInput();
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---

##### `workspaceIdsInput`<sup>Optional</sup> <a name="workspaceIdsInput" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput"></a>

```java
public java.util.List<java.lang.String> getWorkspaceIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `agentEnabled`<sup>Required</sup> <a name="agentEnabled" id="@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabled"></a>

```java
public java.lang.Object getAgentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.policySet.PolicySet.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-tfe.policySet.PolicySet.property.global"></a>

```java
public java.lang.Object getGlobal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-tfe.policySet.PolicySet.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.policySet.PolicySet.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.policySet.PolicySet.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

---

##### `overridable`<sup>Required</sup> <a name="overridable" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridable"></a>

```java
public java.lang.Object getOverridable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policiesPath`<sup>Required</sup> <a name="policiesPath" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath"></a>

```java
public java.lang.String getPoliciesPath();
```

- *Type:* java.lang.String

---

##### `policyIds`<sup>Required</sup> <a name="policyIds" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIds"></a>

```java
public java.util.List<java.lang.String> getPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `policyToolVersion`<sup>Required</sup> <a name="policyToolVersion" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersion"></a>

```java
public java.lang.String getPolicyToolVersion();
```

- *Type:* java.lang.String

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-tfe.policySet.PolicySet.property.slug"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSlug();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `workspaceIds`<sup>Required</sup> <a name="workspaceIds" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds"></a>

```java
public java.util.List<java.lang.String> getWorkspaceIds();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetConfig <a name="PolicySetConfig" id="@cdktf/provider-tfe.policySet.PolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySetConfig;

PolicySetConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .agentEnabled(java.lang.Boolean)
//  .agentEnabled(IResolvable)
//  .description(java.lang.String)
//  .global(java.lang.Boolean)
//  .global(IResolvable)
//  .id(java.lang.String)
//  .kind(java.lang.String)
//  .organization(java.lang.String)
//  .overridable(java.lang.Boolean)
//  .overridable(IResolvable)
//  .policiesPath(java.lang.String)
//  .policyIds(java.util.List<java.lang.String>)
//  .policyToolVersion(java.lang.String)
//  .slug(java.util.Map<java.lang.String, java.lang.String>)
//  .vcsRepo(PolicySetVcsRepo)
//  .workspaceIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#name PolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.agentEnabled">agentEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#description PolicySet#description}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.global">global</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#global PolicySet#global}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#id PolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind">kind</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#kind PolicySet#kind}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization">organization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#organization PolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable">overridable</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#overridable PolicySet#overridable}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath">policiesPath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policies_path PolicySet#policies_path}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds">policyIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policy_ids PolicySet#policy_ids}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyToolVersion">policyToolVersion</a></code> | <code>java.lang.String</code> | The policy tool version to run the policy evaluation against. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug">slug</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#slug PolicySet#slug}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo">vcsRepo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds">workspaceIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#name PolicySet#name}.

---

##### `agentEnabled`<sup>Optional</sup> <a name="agentEnabled" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.agentEnabled"></a>

```java
public java.lang.Object getAgentEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#agent_enabled PolicySet#agent_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#description PolicySet#description}.

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.global"></a>

```java
public java.lang.Object getGlobal();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#global PolicySet#global}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#id PolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind"></a>

```java
public java.lang.String getKind();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#kind PolicySet#kind}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization"></a>

```java
public java.lang.String getOrganization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#organization PolicySet#organization}.

---

##### `overridable`<sup>Optional</sup> <a name="overridable" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable"></a>

```java
public java.lang.Object getOverridable();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#overridable PolicySet#overridable}.

---

##### `policiesPath`<sup>Optional</sup> <a name="policiesPath" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath"></a>

```java
public java.lang.String getPoliciesPath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policies_path PolicySet#policies_path}.

---

##### `policyIds`<sup>Optional</sup> <a name="policyIds" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds"></a>

```java
public java.util.List<java.lang.String> getPolicyIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policy_ids PolicySet#policy_ids}.

---

##### `policyToolVersion`<sup>Optional</sup> <a name="policyToolVersion" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyToolVersion"></a>

```java
public java.lang.String getPolicyToolVersion();
```

- *Type:* java.lang.String

The policy tool version to run the policy evaluation against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#policy_tool_version PolicySet#policy_tool_version}

---

##### `slug`<sup>Optional</sup> <a name="slug" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSlug();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#slug PolicySet#slug}.

---

##### `vcsRepo`<sup>Optional</sup> <a name="vcsRepo" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo"></a>

```java
public PolicySetVcsRepo getVcsRepo();
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#vcs_repo PolicySet#vcs_repo}

---

##### `workspaceIds`<sup>Optional</sup> <a name="workspaceIds" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds"></a>

```java
public java.util.List<java.lang.String> getWorkspaceIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}.

---

### PolicySetVcsRepo <a name="PolicySetVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySetVcsRepo;

PolicySetVcsRepo.builder()
    .identifier(java.lang.String)
//  .branch(java.lang.String)
//  .githubAppInstallationId(java.lang.String)
//  .ingressSubmodules(java.lang.Boolean)
//  .ingressSubmodules(IResolvable)
//  .oauthTokenId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier">identifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#identifier PolicySet#identifier}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch">branch</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#branch PolicySet#branch}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules">ingressSubmodules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId">oauthTokenId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#identifier PolicySet#identifier}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#branch PolicySet#branch}.

---

##### `githubAppInstallationId`<sup>Optional</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId"></a>

```java
public java.lang.String getGithubAppInstallationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}.

---

##### `ingressSubmodules`<sup>Optional</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules"></a>

```java
public java.lang.Object getIngressSubmodules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}.

---

##### `oauthTokenId`<sup>Optional</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId"></a>

```java
public java.lang.String getOauthTokenId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.58.0/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetVcsRepoOutputReference <a name="PolicySetVcsRepoOutputReference" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set.PolicySetVcsRepoOutputReference;

new PolicySetVcsRepoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetGithubAppInstallationId">resetGithubAppInstallationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetIngressSubmodules">resetIngressSubmodules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetOauthTokenId">resetOauthTokenId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetGithubAppInstallationId` <a name="resetGithubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```java
public void resetGithubAppInstallationId()
```

##### `resetIngressSubmodules` <a name="resetIngressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetIngressSubmodules"></a>

```java
public void resetIngressSubmodules()
```

##### `resetOauthTokenId` <a name="resetOauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetOauthTokenId"></a>

```java
public void resetOauthTokenId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput">githubAppInstallationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput">ingressSubmodulesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput">oauthTokenIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId">githubAppInstallationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules">ingressSubmodules</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId">oauthTokenId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `githubAppInstallationIdInput`<sup>Optional</sup> <a name="githubAppInstallationIdInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```java
public java.lang.String getGithubAppInstallationIdInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `ingressSubmodulesInput`<sup>Optional</sup> <a name="ingressSubmodulesInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```java
public java.lang.Object getIngressSubmodulesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauthTokenIdInput`<sup>Optional</sup> <a name="oauthTokenIdInput" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```java
public java.lang.String getOauthTokenIdInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `githubAppInstallationId`<sup>Required</sup> <a name="githubAppInstallationId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId"></a>

```java
public java.lang.String getGithubAppInstallationId();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `ingressSubmodules`<sup>Required</sup> <a name="ingressSubmodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules"></a>

```java
public java.lang.Object getIngressSubmodules();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauthTokenId`<sup>Required</sup> <a name="oauthTokenId" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId"></a>

```java
public java.lang.String getOauthTokenId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue"></a>

```java
public PolicySetVcsRepo getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---



