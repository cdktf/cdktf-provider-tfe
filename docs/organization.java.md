# `organization` Submodule <a name="`organization` Submodule" id="@cdktf/provider-tfe.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@cdktf/provider-tfe.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization tfe_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organization.Organization.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.organization.Organization;

Organization.Builder.create(Construct scope, java.lang.String id)
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
    .email(java.lang.String)
    .name(java.lang.String)
//  .aggregatedCommitStatusEnabled(java.lang.Boolean)
//  .aggregatedCommitStatusEnabled(IResolvable)
//  .allowForceDeleteWorkspaces(java.lang.Boolean)
//  .allowForceDeleteWorkspaces(IResolvable)
//  .assessmentsEnforced(java.lang.Boolean)
//  .assessmentsEnforced(IResolvable)
//  .collaboratorAuthPolicy(java.lang.String)
//  .costEstimationEnabled(java.lang.Boolean)
//  .costEstimationEnabled(IResolvable)
//  .id(java.lang.String)
//  .ownersTeamSamlRoleId(java.lang.String)
//  .sendPassingStatusesForUntriggeredSpeculativePlans(java.lang.Boolean)
//  .sendPassingStatusesForUntriggeredSpeculativePlans(IResolvable)
//  .sessionRememberMinutes(java.lang.Number)
//  .sessionTimeoutMinutes(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#email Organization#email}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.aggregatedCommitStatusEnabled">aggregatedCommitStatusEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.allowForceDeleteWorkspaces">allowForceDeleteWorkspaces</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.assessmentsEnforced">assessmentsEnforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#assessments_enforced Organization#assessments_enforced}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.collaboratorAuthPolicy">collaboratorAuthPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.costEstimationEnabled">costEstimationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.ownersTeamSamlRoleId">ownersTeamSamlRoleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sendPassingStatusesForUntriggeredSpeculativePlans">sendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionRememberMinutes">sessionRememberMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.email"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#email Organization#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#name Organization#name}.

---

##### `aggregatedCommitStatusEnabled`<sup>Optional</sup> <a name="aggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.aggregatedCommitStatusEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}.

---

##### `allowForceDeleteWorkspaces`<sup>Optional</sup> <a name="allowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.allowForceDeleteWorkspaces"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}.

---

##### `assessmentsEnforced`<sup>Optional</sup> <a name="assessmentsEnforced" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.assessmentsEnforced"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#assessments_enforced Organization#assessments_enforced}.

---

##### `collaboratorAuthPolicy`<sup>Optional</sup> <a name="collaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.collaboratorAuthPolicy"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}.

---

##### `costEstimationEnabled`<sup>Optional</sup> <a name="costEstimationEnabled" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.costEstimationEnabled"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownersTeamSamlRoleId`<sup>Optional</sup> <a name="ownersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.ownersTeamSamlRoleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}.

---

##### `sendPassingStatusesForUntriggeredSpeculativePlans`<sup>Optional</sup> <a name="sendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}.

---

##### `sessionRememberMinutes`<sup>Optional</sup> <a name="sessionRememberMinutes" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionRememberMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}.

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionTimeoutMinutes"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled">resetAggregatedCommitStatusEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces">resetAllowForceDeleteWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced">resetAssessmentsEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy">resetCollaboratorAuthPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled">resetCostEstimationEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId">resetOwnersTeamSamlRoleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans">resetSendPassingStatusesForUntriggeredSpeculativePlans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes">resetSessionRememberMinutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes">resetSessionTimeoutMinutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.organization.Organization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.organization.Organization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.organization.Organization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.organization.Organization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.organization.Organization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.organization.Organization.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.organization.Organization.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.organization.Organization.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.organization.Organization.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.organization.Organization.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAggregatedCommitStatusEnabled` <a name="resetAggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled"></a>

```java
public void resetAggregatedCommitStatusEnabled()
```

##### `resetAllowForceDeleteWorkspaces` <a name="resetAllowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces"></a>

```java
public void resetAllowForceDeleteWorkspaces()
```

##### `resetAssessmentsEnforced` <a name="resetAssessmentsEnforced" id="@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced"></a>

```java
public void resetAssessmentsEnforced()
```

##### `resetCollaboratorAuthPolicy` <a name="resetCollaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy"></a>

```java
public void resetCollaboratorAuthPolicy()
```

##### `resetCostEstimationEnabled` <a name="resetCostEstimationEnabled" id="@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled"></a>

```java
public void resetCostEstimationEnabled()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.organization.Organization.resetId"></a>

```java
public void resetId()
```

##### `resetOwnersTeamSamlRoleId` <a name="resetOwnersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId"></a>

```java
public void resetOwnersTeamSamlRoleId()
```

##### `resetSendPassingStatusesForUntriggeredSpeculativePlans` <a name="resetSendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans"></a>

```java
public void resetSendPassingStatusesForUntriggeredSpeculativePlans()
```

##### `resetSessionRememberMinutes` <a name="resetSessionRememberMinutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes"></a>

```java
public void resetSessionRememberMinutes()
```

##### `resetSessionTimeoutMinutes` <a name="resetSessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes"></a>

```java
public void resetSessionTimeoutMinutes()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.organization.Organization.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.organization.Organization;

Organization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.organization.Organization;

Organization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.organization.Organization;

Organization.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.organization.Organization;

Organization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Organization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Organization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Organization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the Organization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.defaultProjectId">defaultProjectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput">aggregatedCommitStatusEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput">allowForceDeleteWorkspacesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput">assessmentsEnforcedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput">collaboratorAuthPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput">costEstimationEnabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput">ownersTeamSamlRoleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput">sendPassingStatusesForUntriggeredSpeculativePlansInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput">sessionRememberMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput">sessionTimeoutMinutesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled">aggregatedCommitStatusEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces">allowForceDeleteWorkspaces</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced">assessmentsEnforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy">collaboratorAuthPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled">costEstimationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId">ownersTeamSamlRoleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans">sendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes">sessionRememberMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.organization.Organization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.organization.Organization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.organization.Organization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.organization.Organization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organization.Organization.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organization.Organization.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.organization.Organization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.organization.Organization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organization.Organization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organization.Organization.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultProjectId`<sup>Required</sup> <a name="defaultProjectId" id="@cdktf/provider-tfe.organization.Organization.property.defaultProjectId"></a>

```java
public java.lang.String getDefaultProjectId();
```

- *Type:* java.lang.String

---

##### `aggregatedCommitStatusEnabledInput`<sup>Optional</sup> <a name="aggregatedCommitStatusEnabledInput" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput"></a>

```java
public java.lang.Object getAggregatedCommitStatusEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowForceDeleteWorkspacesInput`<sup>Optional</sup> <a name="allowForceDeleteWorkspacesInput" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput"></a>

```java
public java.lang.Object getAllowForceDeleteWorkspacesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assessmentsEnforcedInput`<sup>Optional</sup> <a name="assessmentsEnforcedInput" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput"></a>

```java
public java.lang.Object getAssessmentsEnforcedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collaboratorAuthPolicyInput`<sup>Optional</sup> <a name="collaboratorAuthPolicyInput" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput"></a>

```java
public java.lang.String getCollaboratorAuthPolicyInput();
```

- *Type:* java.lang.String

---

##### `costEstimationEnabledInput`<sup>Optional</sup> <a name="costEstimationEnabledInput" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput"></a>

```java
public java.lang.Object getCostEstimationEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktf/provider-tfe.organization.Organization.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.organization.Organization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.organization.Organization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ownersTeamSamlRoleIdInput`<sup>Optional</sup> <a name="ownersTeamSamlRoleIdInput" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput"></a>

```java
public java.lang.String getOwnersTeamSamlRoleIdInput();
```

- *Type:* java.lang.String

---

##### `sendPassingStatusesForUntriggeredSpeculativePlansInput`<sup>Optional</sup> <a name="sendPassingStatusesForUntriggeredSpeculativePlansInput" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput"></a>

```java
public java.lang.Object getSendPassingStatusesForUntriggeredSpeculativePlansInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionRememberMinutesInput`<sup>Optional</sup> <a name="sessionRememberMinutesInput" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput"></a>

```java
public java.lang.Number getSessionRememberMinutesInput();
```

- *Type:* java.lang.Number

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="sessionTimeoutMinutesInput" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput"></a>

```java
public java.lang.Number getSessionTimeoutMinutesInput();
```

- *Type:* java.lang.Number

---

##### `aggregatedCommitStatusEnabled`<sup>Required</sup> <a name="aggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled"></a>

```java
public java.lang.Object getAggregatedCommitStatusEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowForceDeleteWorkspaces`<sup>Required</sup> <a name="allowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces"></a>

```java
public java.lang.Object getAllowForceDeleteWorkspaces();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `assessmentsEnforced`<sup>Required</sup> <a name="assessmentsEnforced" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced"></a>

```java
public java.lang.Object getAssessmentsEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `collaboratorAuthPolicy`<sup>Required</sup> <a name="collaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy"></a>

```java
public java.lang.String getCollaboratorAuthPolicy();
```

- *Type:* java.lang.String

---

##### `costEstimationEnabled`<sup>Required</sup> <a name="costEstimationEnabled" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled"></a>

```java
public java.lang.Object getCostEstimationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-tfe.organization.Organization.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organization.Organization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ownersTeamSamlRoleId`<sup>Required</sup> <a name="ownersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId"></a>

```java
public java.lang.String getOwnersTeamSamlRoleId();
```

- *Type:* java.lang.String

---

##### `sendPassingStatusesForUntriggeredSpeculativePlans`<sup>Required</sup> <a name="sendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```java
public java.lang.Object getSendPassingStatusesForUntriggeredSpeculativePlans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sessionRememberMinutes`<sup>Required</sup> <a name="sessionRememberMinutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes"></a>

```java
public java.lang.Number getSessionRememberMinutes();
```

- *Type:* java.lang.Number

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.organization.Organization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="@cdktf/provider-tfe.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organization.OrganizationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.organization.OrganizationConfig;

OrganizationConfig.builder()
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
    .email(java.lang.String)
    .name(java.lang.String)
//  .aggregatedCommitStatusEnabled(java.lang.Boolean)
//  .aggregatedCommitStatusEnabled(IResolvable)
//  .allowForceDeleteWorkspaces(java.lang.Boolean)
//  .allowForceDeleteWorkspaces(IResolvable)
//  .assessmentsEnforced(java.lang.Boolean)
//  .assessmentsEnforced(IResolvable)
//  .collaboratorAuthPolicy(java.lang.String)
//  .costEstimationEnabled(java.lang.Boolean)
//  .costEstimationEnabled(IResolvable)
//  .id(java.lang.String)
//  .ownersTeamSamlRoleId(java.lang.String)
//  .sendPassingStatusesForUntriggeredSpeculativePlans(java.lang.Boolean)
//  .sendPassingStatusesForUntriggeredSpeculativePlans(IResolvable)
//  .sessionRememberMinutes(java.lang.Number)
//  .sessionTimeoutMinutes(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.email">email</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#email Organization#email}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled">aggregatedCommitStatusEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces">allowForceDeleteWorkspaces</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced">assessmentsEnforced</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#assessments_enforced Organization#assessments_enforced}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy">collaboratorAuthPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled">costEstimationEnabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId">ownersTeamSamlRoleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans">sendPassingStatusesForUntriggeredSpeculativePlans</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes">sessionRememberMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes">sessionTimeoutMinutes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#email Organization#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#name Organization#name}.

---

##### `aggregatedCommitStatusEnabled`<sup>Optional</sup> <a name="aggregatedCommitStatusEnabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled"></a>

```java
public java.lang.Object getAggregatedCommitStatusEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}.

---

##### `allowForceDeleteWorkspaces`<sup>Optional</sup> <a name="allowForceDeleteWorkspaces" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces"></a>

```java
public java.lang.Object getAllowForceDeleteWorkspaces();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}.

---

##### `assessmentsEnforced`<sup>Optional</sup> <a name="assessmentsEnforced" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced"></a>

```java
public java.lang.Object getAssessmentsEnforced();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#assessments_enforced Organization#assessments_enforced}.

---

##### `collaboratorAuthPolicy`<sup>Optional</sup> <a name="collaboratorAuthPolicy" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy"></a>

```java
public java.lang.String getCollaboratorAuthPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}.

---

##### `costEstimationEnabled`<sup>Optional</sup> <a name="costEstimationEnabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled"></a>

```java
public java.lang.Object getCostEstimationEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownersTeamSamlRoleId`<sup>Optional</sup> <a name="ownersTeamSamlRoleId" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId"></a>

```java
public java.lang.String getOwnersTeamSamlRoleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}.

---

##### `sendPassingStatusesForUntriggeredSpeculativePlans`<sup>Optional</sup> <a name="sendPassingStatusesForUntriggeredSpeculativePlans" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```java
public java.lang.Object getSendPassingStatusesForUntriggeredSpeculativePlans();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}.

---

##### `sessionRememberMinutes`<sup>Optional</sup> <a name="sessionRememberMinutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes"></a>

```java
public java.lang.Number getSessionRememberMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}.

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="sessionTimeoutMinutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes"></a>

```java
public java.lang.Number getSessionTimeoutMinutes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.59.0/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}.

---



