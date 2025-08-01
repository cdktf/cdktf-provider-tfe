# `organization` Submodule <a name="`organization` Submodule" id="@cdktf/provider-tfe.organization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Organization <a name="Organization" id="@cdktf/provider-tfe.organization.Organization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization tfe_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.organization.Organization.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization

organization.Organization(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  aggregated_commit_status_enabled: typing.Union[bool, IResolvable] = None,
  allow_force_delete_workspaces: typing.Union[bool, IResolvable] = None,
  assessments_enforced: typing.Union[bool, IResolvable] = None,
  collaborator_auth_policy: str = None,
  cost_estimation_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  owners_team_saml_role_id: str = None,
  send_passing_statuses_for_untriggered_speculative_plans: typing.Union[bool, IResolvable] = None,
  session_remember_minutes: typing.Union[int, float] = None,
  session_timeout_minutes: typing.Union[int, float] = None,
  speculative_plan_management_enabled: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#email Organization#email}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.aggregatedCommitStatusEnabled">aggregated_commit_status_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.allowForceDeleteWorkspaces">allow_force_delete_workspaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.assessmentsEnforced">assessments_enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#assessments_enforced Organization#assessments_enforced}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.collaboratorAuthPolicy">collaborator_auth_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.costEstimationEnabled">cost_estimation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.ownersTeamSamlRoleId">owners_team_saml_role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sendPassingStatusesForUntriggeredSpeculativePlans">send_passing_statuses_for_untriggered_speculative_plans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionRememberMinutes">session_remember_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.Initializer.parameter.speculativePlanManagementEnabled">speculative_plan_management_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#speculative_plan_management_enabled Organization#speculative_plan_management_enabled}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.email"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#email Organization#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#name Organization#name}.

---

##### `aggregated_commit_status_enabled`<sup>Optional</sup> <a name="aggregated_commit_status_enabled" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.aggregatedCommitStatusEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}.

---

##### `allow_force_delete_workspaces`<sup>Optional</sup> <a name="allow_force_delete_workspaces" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.allowForceDeleteWorkspaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}.

---

##### `assessments_enforced`<sup>Optional</sup> <a name="assessments_enforced" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.assessmentsEnforced"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#assessments_enforced Organization#assessments_enforced}.

---

##### `collaborator_auth_policy`<sup>Optional</sup> <a name="collaborator_auth_policy" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.collaboratorAuthPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}.

---

##### `cost_estimation_enabled`<sup>Optional</sup> <a name="cost_estimation_enabled" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.costEstimationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owners_team_saml_role_id`<sup>Optional</sup> <a name="owners_team_saml_role_id" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.ownersTeamSamlRoleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}.

---

##### `send_passing_statuses_for_untriggered_speculative_plans`<sup>Optional</sup> <a name="send_passing_statuses_for_untriggered_speculative_plans" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}.

---

##### `session_remember_minutes`<sup>Optional</sup> <a name="session_remember_minutes" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionRememberMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}.

---

##### `session_timeout_minutes`<sup>Optional</sup> <a name="session_timeout_minutes" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.sessionTimeoutMinutes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}.

---

##### `speculative_plan_management_enabled`<sup>Optional</sup> <a name="speculative_plan_management_enabled" id="@cdktf/provider-tfe.organization.Organization.Initializer.parameter.speculativePlanManagementEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#speculative_plan_management_enabled Organization#speculative_plan_management_enabled}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled">reset_aggregated_commit_status_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces">reset_allow_force_delete_workspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced">reset_assessments_enforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy">reset_collaborator_auth_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled">reset_cost_estimation_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId">reset_owners_team_saml_role_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans">reset_send_passing_statuses_for_untriggered_speculative_plans</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes">reset_session_remember_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes">reset_session_timeout_minutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.resetSpeculativePlanManagementEnabled">reset_speculative_plan_management_enabled</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.organization.Organization.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.organization.Organization.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.organization.Organization.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.organization.Organization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.organization.Organization.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.organization.Organization.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.organization.Organization.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.organization.Organization.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.organization.Organization.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.organization.Organization.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.organization.Organization.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.organization.Organization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.organization.Organization.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.organization.Organization.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.organization.Organization.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.organization.Organization.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_aggregated_commit_status_enabled` <a name="reset_aggregated_commit_status_enabled" id="@cdktf/provider-tfe.organization.Organization.resetAggregatedCommitStatusEnabled"></a>

```python
def reset_aggregated_commit_status_enabled() -> None
```

##### `reset_allow_force_delete_workspaces` <a name="reset_allow_force_delete_workspaces" id="@cdktf/provider-tfe.organization.Organization.resetAllowForceDeleteWorkspaces"></a>

```python
def reset_allow_force_delete_workspaces() -> None
```

##### `reset_assessments_enforced` <a name="reset_assessments_enforced" id="@cdktf/provider-tfe.organization.Organization.resetAssessmentsEnforced"></a>

```python
def reset_assessments_enforced() -> None
```

##### `reset_collaborator_auth_policy` <a name="reset_collaborator_auth_policy" id="@cdktf/provider-tfe.organization.Organization.resetCollaboratorAuthPolicy"></a>

```python
def reset_collaborator_auth_policy() -> None
```

##### `reset_cost_estimation_enabled` <a name="reset_cost_estimation_enabled" id="@cdktf/provider-tfe.organization.Organization.resetCostEstimationEnabled"></a>

```python
def reset_cost_estimation_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.organization.Organization.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_owners_team_saml_role_id` <a name="reset_owners_team_saml_role_id" id="@cdktf/provider-tfe.organization.Organization.resetOwnersTeamSamlRoleId"></a>

```python
def reset_owners_team_saml_role_id() -> None
```

##### `reset_send_passing_statuses_for_untriggered_speculative_plans` <a name="reset_send_passing_statuses_for_untriggered_speculative_plans" id="@cdktf/provider-tfe.organization.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans"></a>

```python
def reset_send_passing_statuses_for_untriggered_speculative_plans() -> None
```

##### `reset_session_remember_minutes` <a name="reset_session_remember_minutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionRememberMinutes"></a>

```python
def reset_session_remember_minutes() -> None
```

##### `reset_session_timeout_minutes` <a name="reset_session_timeout_minutes" id="@cdktf/provider-tfe.organization.Organization.resetSessionTimeoutMinutes"></a>

```python
def reset_session_timeout_minutes() -> None
```

##### `reset_speculative_plan_management_enabled` <a name="reset_speculative_plan_management_enabled" id="@cdktf/provider-tfe.organization.Organization.resetSpeculativePlanManagementEnabled"></a>

```python
def reset_speculative_plan_management_enabled() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.organization.Organization.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import organization

organization.Organization.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import organization

organization.Organization.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import organization

organization.Organization.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.organization.Organization.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import organization

organization.Organization.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Organization resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Organization to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Organization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Organization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.defaultProjectId">default_project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput">aggregated_commit_status_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput">allow_force_delete_workspaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput">assessments_enforced_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput">collaborator_auth_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput">cost_estimation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.emailInput">email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput">owners_team_saml_role_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput">send_passing_statuses_for_untriggered_speculative_plans_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput">session_remember_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput">session_timeout_minutes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.speculativePlanManagementEnabledInput">speculative_plan_management_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled">aggregated_commit_status_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces">allow_force_delete_workspaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced">assessments_enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy">collaborator_auth_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled">cost_estimation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId">owners_team_saml_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans">send_passing_statuses_for_untriggered_speculative_plans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes">session_remember_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.speculativePlanManagementEnabled">speculative_plan_management_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.organization.Organization.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.organization.Organization.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.organization.Organization.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.organization.Organization.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.organization.Organization.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.organization.Organization.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.organization.Organization.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organization.Organization.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organization.Organization.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organization.Organization.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organization.Organization.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organization.Organization.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.Organization.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organization.Organization.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `default_project_id`<sup>Required</sup> <a name="default_project_id" id="@cdktf/provider-tfe.organization.Organization.property.defaultProjectId"></a>

```python
default_project_id: str
```

- *Type:* str

---

##### `aggregated_commit_status_enabled_input`<sup>Optional</sup> <a name="aggregated_commit_status_enabled_input" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabledInput"></a>

```python
aggregated_commit_status_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_force_delete_workspaces_input`<sup>Optional</sup> <a name="allow_force_delete_workspaces_input" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspacesInput"></a>

```python
allow_force_delete_workspaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assessments_enforced_input`<sup>Optional</sup> <a name="assessments_enforced_input" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforcedInput"></a>

```python
assessments_enforced_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collaborator_auth_policy_input`<sup>Optional</sup> <a name="collaborator_auth_policy_input" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicyInput"></a>

```python
collaborator_auth_policy_input: str
```

- *Type:* str

---

##### `cost_estimation_enabled_input`<sup>Optional</sup> <a name="cost_estimation_enabled_input" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabledInput"></a>

```python
cost_estimation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_input`<sup>Optional</sup> <a name="email_input" id="@cdktf/provider-tfe.organization.Organization.property.emailInput"></a>

```python
email_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.organization.Organization.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.organization.Organization.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `owners_team_saml_role_id_input`<sup>Optional</sup> <a name="owners_team_saml_role_id_input" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleIdInput"></a>

```python
owners_team_saml_role_id_input: str
```

- *Type:* str

---

##### `send_passing_statuses_for_untriggered_speculative_plans_input`<sup>Optional</sup> <a name="send_passing_statuses_for_untriggered_speculative_plans_input" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput"></a>

```python
send_passing_statuses_for_untriggered_speculative_plans_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_remember_minutes_input`<sup>Optional</sup> <a name="session_remember_minutes_input" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutesInput"></a>

```python
session_remember_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_timeout_minutes_input`<sup>Optional</sup> <a name="session_timeout_minutes_input" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutesInput"></a>

```python
session_timeout_minutes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `speculative_plan_management_enabled_input`<sup>Optional</sup> <a name="speculative_plan_management_enabled_input" id="@cdktf/provider-tfe.organization.Organization.property.speculativePlanManagementEnabledInput"></a>

```python
speculative_plan_management_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `aggregated_commit_status_enabled`<sup>Required</sup> <a name="aggregated_commit_status_enabled" id="@cdktf/provider-tfe.organization.Organization.property.aggregatedCommitStatusEnabled"></a>

```python
aggregated_commit_status_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_force_delete_workspaces`<sup>Required</sup> <a name="allow_force_delete_workspaces" id="@cdktf/provider-tfe.organization.Organization.property.allowForceDeleteWorkspaces"></a>

```python
allow_force_delete_workspaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assessments_enforced`<sup>Required</sup> <a name="assessments_enforced" id="@cdktf/provider-tfe.organization.Organization.property.assessmentsEnforced"></a>

```python
assessments_enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `collaborator_auth_policy`<sup>Required</sup> <a name="collaborator_auth_policy" id="@cdktf/provider-tfe.organization.Organization.property.collaboratorAuthPolicy"></a>

```python
collaborator_auth_policy: str
```

- *Type:* str

---

##### `cost_estimation_enabled`<sup>Required</sup> <a name="cost_estimation_enabled" id="@cdktf/provider-tfe.organization.Organization.property.costEstimationEnabled"></a>

```python
cost_estimation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-tfe.organization.Organization.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.organization.Organization.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organization.Organization.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `owners_team_saml_role_id`<sup>Required</sup> <a name="owners_team_saml_role_id" id="@cdktf/provider-tfe.organization.Organization.property.ownersTeamSamlRoleId"></a>

```python
owners_team_saml_role_id: str
```

- *Type:* str

---

##### `send_passing_statuses_for_untriggered_speculative_plans`<sup>Required</sup> <a name="send_passing_statuses_for_untriggered_speculative_plans" id="@cdktf/provider-tfe.organization.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```python
send_passing_statuses_for_untriggered_speculative_plans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `session_remember_minutes`<sup>Required</sup> <a name="session_remember_minutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionRememberMinutes"></a>

```python
session_remember_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `session_timeout_minutes`<sup>Required</sup> <a name="session_timeout_minutes" id="@cdktf/provider-tfe.organization.Organization.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `speculative_plan_management_enabled`<sup>Required</sup> <a name="speculative_plan_management_enabled" id="@cdktf/provider-tfe.organization.Organization.property.speculativePlanManagementEnabled"></a>

```python
speculative_plan_management_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.Organization.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.organization.Organization.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationConfig <a name="OrganizationConfig" id="@cdktf/provider-tfe.organization.OrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.organization.OrganizationConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import organization

organization.OrganizationConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  email: str,
  name: str,
  aggregated_commit_status_enabled: typing.Union[bool, IResolvable] = None,
  allow_force_delete_workspaces: typing.Union[bool, IResolvable] = None,
  assessments_enforced: typing.Union[bool, IResolvable] = None,
  collaborator_auth_policy: str = None,
  cost_estimation_enabled: typing.Union[bool, IResolvable] = None,
  id: str = None,
  owners_team_saml_role_id: str = None,
  send_passing_statuses_for_untriggered_speculative_plans: typing.Union[bool, IResolvable] = None,
  session_remember_minutes: typing.Union[int, float] = None,
  session_timeout_minutes: typing.Union[int, float] = None,
  speculative_plan_management_enabled: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.email">email</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#email Organization#email}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#name Organization#name}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled">aggregated_commit_status_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces">allow_force_delete_workspaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced">assessments_enforced</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#assessments_enforced Organization#assessments_enforced}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy">collaborator_auth_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled">cost_estimation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#id Organization#id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId">owners_team_saml_role_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans">send_passing_statuses_for_untriggered_speculative_plans</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes">session_remember_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes">session_timeout_minutes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}. |
| <code><a href="#@cdktf/provider-tfe.organization.OrganizationConfig.property.speculativePlanManagementEnabled">speculative_plan_management_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#speculative_plan_management_enabled Organization#speculative_plan_management_enabled}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.email"></a>

```python
email: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#email Organization#email}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#name Organization#name}.

---

##### `aggregated_commit_status_enabled`<sup>Optional</sup> <a name="aggregated_commit_status_enabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.aggregatedCommitStatusEnabled"></a>

```python
aggregated_commit_status_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#aggregated_commit_status_enabled Organization#aggregated_commit_status_enabled}.

---

##### `allow_force_delete_workspaces`<sup>Optional</sup> <a name="allow_force_delete_workspaces" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.allowForceDeleteWorkspaces"></a>

```python
allow_force_delete_workspaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#allow_force_delete_workspaces Organization#allow_force_delete_workspaces}.

---

##### `assessments_enforced`<sup>Optional</sup> <a name="assessments_enforced" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.assessmentsEnforced"></a>

```python
assessments_enforced: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#assessments_enforced Organization#assessments_enforced}.

---

##### `collaborator_auth_policy`<sup>Optional</sup> <a name="collaborator_auth_policy" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.collaboratorAuthPolicy"></a>

```python
collaborator_auth_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#collaborator_auth_policy Organization#collaborator_auth_policy}.

---

##### `cost_estimation_enabled`<sup>Optional</sup> <a name="cost_estimation_enabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.costEstimationEnabled"></a>

```python
cost_estimation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#cost_estimation_enabled Organization#cost_estimation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `owners_team_saml_role_id`<sup>Optional</sup> <a name="owners_team_saml_role_id" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.ownersTeamSamlRoleId"></a>

```python
owners_team_saml_role_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}.

---

##### `send_passing_statuses_for_untriggered_speculative_plans`<sup>Optional</sup> <a name="send_passing_statuses_for_untriggered_speculative_plans" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans"></a>

```python
send_passing_statuses_for_untriggered_speculative_plans: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}.

---

##### `session_remember_minutes`<sup>Optional</sup> <a name="session_remember_minutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionRememberMinutes"></a>

```python
session_remember_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_remember_minutes Organization#session_remember_minutes}.

---

##### `session_timeout_minutes`<sup>Optional</sup> <a name="session_timeout_minutes" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.sessionTimeoutMinutes"></a>

```python
session_timeout_minutes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#session_timeout_minutes Organization#session_timeout_minutes}.

---

##### `speculative_plan_management_enabled`<sup>Optional</sup> <a name="speculative_plan_management_enabled" id="@cdktf/provider-tfe.organization.OrganizationConfig.property.speculativePlanManagementEnabled"></a>

```python
speculative_plan_management_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.68.2/docs/resources/organization#speculative_plan_management_enabled Organization#speculative_plan_management_enabled}.

---



