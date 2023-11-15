# `tfe_team`

Refer to the Terraform Registory for docs: [`tfe_team`](https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team).

# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-tfe.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-tfe.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team tfe_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.Team.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.Team(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  organization: str = None,
  organization_access: TeamOrganizationAccess = None,
  sso_team_id: str = None,
  visibility: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#name Team#name}. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#organization Team#organization}. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.organizationAccess">organization_access</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | organization_access block. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.ssoTeamId">sso_team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#sso_team_id Team#sso_team_id}. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#visibility Team#visibility}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#name Team#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#organization Team#organization}.

---

##### `organization_access`<sup>Optional</sup> <a name="organization_access" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.organizationAccess"></a>

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

organization_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#organization_access Team#organization_access}

---

##### `sso_team_id`<sup>Optional</sup> <a name="sso_team_id" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.ssoTeamId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#sso_team_id Team#sso_team_id}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.visibility"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#visibility Team#visibility}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.team.Team.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.team.Team.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.team.Team.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.team.Team.putOrganizationAccess">put_organization_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganizationAccess">reset_organization_access</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetSsoTeamId">reset_sso_team_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetVisibility">reset_visibility</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.team.Team.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.team.Team.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.team.Team.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.team.Team.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.team.Team.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.team.Team.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.team.Team.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.team.Team.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.team.Team.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.team.Team.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.Team.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.team.Team.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.team.Team.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.team.Team.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `put_organization_access` <a name="put_organization_access" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess"></a>

```python
def put_organization_access(
  manage_membership: typing.Union[bool, IResolvable] = None,
  manage_modules: typing.Union[bool, IResolvable] = None,
  manage_policies: typing.Union[bool, IResolvable] = None,
  manage_policy_overrides: typing.Union[bool, IResolvable] = None,
  manage_projects: typing.Union[bool, IResolvable] = None,
  manage_providers: typing.Union[bool, IResolvable] = None,
  manage_run_tasks: typing.Union[bool, IResolvable] = None,
  manage_vcs_settings: typing.Union[bool, IResolvable] = None,
  manage_workspaces: typing.Union[bool, IResolvable] = None,
  read_projects: typing.Union[bool, IResolvable] = None,
  read_workspaces: typing.Union[bool, IResolvable] = None
) -> None
```

###### `manage_membership`<sup>Optional</sup> <a name="manage_membership" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.manageMembership"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_membership Team#manage_membership}.

---

###### `manage_modules`<sup>Optional</sup> <a name="manage_modules" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.manageModules"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_modules Team#manage_modules}.

---

###### `manage_policies`<sup>Optional</sup> <a name="manage_policies" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.managePolicies"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_policies Team#manage_policies}.

---

###### `manage_policy_overrides`<sup>Optional</sup> <a name="manage_policy_overrides" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.managePolicyOverrides"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}.

---

###### `manage_projects`<sup>Optional</sup> <a name="manage_projects" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.manageProjects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_projects Team#manage_projects}.

---

###### `manage_providers`<sup>Optional</sup> <a name="manage_providers" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.manageProviders"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_providers Team#manage_providers}.

---

###### `manage_run_tasks`<sup>Optional</sup> <a name="manage_run_tasks" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.manageRunTasks"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_run_tasks Team#manage_run_tasks}.

---

###### `manage_vcs_settings`<sup>Optional</sup> <a name="manage_vcs_settings" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.manageVcsSettings"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}.

---

###### `manage_workspaces`<sup>Optional</sup> <a name="manage_workspaces" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.manageWorkspaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_workspaces Team#manage_workspaces}.

---

###### `read_projects`<sup>Optional</sup> <a name="read_projects" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.readProjects"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#read_projects Team#read_projects}.

---

###### `read_workspaces`<sup>Optional</sup> <a name="read_workspaces" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.readWorkspaces"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#read_workspaces Team#read_workspaces}.

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.team.Team.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.team.Team.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organization_access` <a name="reset_organization_access" id="@cdktf/provider-tfe.team.Team.resetOrganizationAccess"></a>

```python
def reset_organization_access() -> None
```

##### `reset_sso_team_id` <a name="reset_sso_team_id" id="@cdktf/provider-tfe.team.Team.resetSsoTeamId"></a>

```python
def reset_sso_team_id() -> None
```

##### `reset_visibility` <a name="reset_visibility" id="@cdktf/provider-tfe.team.Team.resetVisibility"></a>

```python
def reset_visibility() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.team.Team.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.Team.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.team.Team.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.Team.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.team.Team.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.Team.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.team.Team.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.Team.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Team to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Team that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Team to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccess">organization_access</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccessInput">organization_access_input</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput">sso_team_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibilityInput">visibility_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamId">sso_team_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibility">visibility</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.team.Team.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.team.Team.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.team.Team.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.team.Team.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.team.Team.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.team.Team.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.team.Team.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.team.Team.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.team.Team.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.team.Team.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.team.Team.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.Team.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.team.Team.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `organization_access`<sup>Required</sup> <a name="organization_access" id="@cdktf/provider-tfe.team.Team.property.organizationAccess"></a>

```python
organization_access: TeamOrganizationAccessOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.team.Team.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.team.Team.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_access_input`<sup>Optional</sup> <a name="organization_access_input" id="@cdktf/provider-tfe.team.Team.property.organizationAccessInput"></a>

```python
organization_access_input: TeamOrganizationAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.team.Team.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `sso_team_id_input`<sup>Optional</sup> <a name="sso_team_id_input" id="@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput"></a>

```python
sso_team_id_input: str
```

- *Type:* str

---

##### `visibility_input`<sup>Optional</sup> <a name="visibility_input" id="@cdktf/provider-tfe.team.Team.property.visibilityInput"></a>

```python
visibility_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.team.Team.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.team.Team.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `sso_team_id`<sup>Required</sup> <a name="sso_team_id" id="@cdktf/provider-tfe.team.Team.property.ssoTeamId"></a>

```python
sso_team_id: str
```

- *Type:* str

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-tfe.team.Team.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.team.Team.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-tfe.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.TeamConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  id: str = None,
  organization: str = None,
  organization_access: TeamOrganizationAccess = None,
  sso_team_id: str = None,
  visibility: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#name Team#name}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#organization Team#organization}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess">organization_access</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | organization_access block. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId">sso_team_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#sso_team_id Team#sso_team_id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.visibility">visibility</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#visibility Team#visibility}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.team.TeamConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.team.TeamConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.team.TeamConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.team.TeamConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.team.TeamConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.TeamConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.team.TeamConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.team.TeamConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#name Team#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.team.TeamConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.team.TeamConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#organization Team#organization}.

---

##### `organization_access`<sup>Optional</sup> <a name="organization_access" id="@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess"></a>

```python
organization_access: TeamOrganizationAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

organization_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#organization_access Team#organization_access}

---

##### `sso_team_id`<sup>Optional</sup> <a name="sso_team_id" id="@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId"></a>

```python
sso_team_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#sso_team_id Team#sso_team_id}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-tfe.team.TeamConfig.property.visibility"></a>

```python
visibility: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#visibility Team#visibility}.

---

### TeamOrganizationAccess <a name="TeamOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.TeamOrganizationAccess(
  manage_membership: typing.Union[bool, IResolvable] = None,
  manage_modules: typing.Union[bool, IResolvable] = None,
  manage_policies: typing.Union[bool, IResolvable] = None,
  manage_policy_overrides: typing.Union[bool, IResolvable] = None,
  manage_projects: typing.Union[bool, IResolvable] = None,
  manage_providers: typing.Union[bool, IResolvable] = None,
  manage_run_tasks: typing.Union[bool, IResolvable] = None,
  manage_vcs_settings: typing.Union[bool, IResolvable] = None,
  manage_workspaces: typing.Union[bool, IResolvable] = None,
  read_projects: typing.Union[bool, IResolvable] = None,
  read_workspaces: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership">manage_membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_membership Team#manage_membership}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules">manage_modules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_modules Team#manage_modules}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies">manage_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_policies Team#manage_policies}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides">manage_policy_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects">manage_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_projects Team#manage_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders">manage_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_providers Team#manage_providers}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks">manage_run_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_run_tasks Team#manage_run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings">manage_vcs_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces">manage_workspaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_workspaces Team#manage_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects">read_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#read_projects Team#read_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces">read_workspaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#read_workspaces Team#read_workspaces}. |

---

##### `manage_membership`<sup>Optional</sup> <a name="manage_membership" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership"></a>

```python
manage_membership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_membership Team#manage_membership}.

---

##### `manage_modules`<sup>Optional</sup> <a name="manage_modules" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules"></a>

```python
manage_modules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_modules Team#manage_modules}.

---

##### `manage_policies`<sup>Optional</sup> <a name="manage_policies" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies"></a>

```python
manage_policies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_policies Team#manage_policies}.

---

##### `manage_policy_overrides`<sup>Optional</sup> <a name="manage_policy_overrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides"></a>

```python
manage_policy_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}.

---

##### `manage_projects`<sup>Optional</sup> <a name="manage_projects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects"></a>

```python
manage_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_projects Team#manage_projects}.

---

##### `manage_providers`<sup>Optional</sup> <a name="manage_providers" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders"></a>

```python
manage_providers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_providers Team#manage_providers}.

---

##### `manage_run_tasks`<sup>Optional</sup> <a name="manage_run_tasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks"></a>

```python
manage_run_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_run_tasks Team#manage_run_tasks}.

---

##### `manage_vcs_settings`<sup>Optional</sup> <a name="manage_vcs_settings" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings"></a>

```python
manage_vcs_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}.

---

##### `manage_workspaces`<sup>Optional</sup> <a name="manage_workspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces"></a>

```python
manage_workspaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#manage_workspaces Team#manage_workspaces}.

---

##### `read_projects`<sup>Optional</sup> <a name="read_projects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects"></a>

```python
read_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#read_projects Team#read_projects}.

---

##### `read_workspaces`<sup>Optional</sup> <a name="read_workspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces"></a>

```python
read_workspaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.50.0/docs/resources/team#read_workspaces Team#read_workspaces}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamOrganizationAccessOutputReference <a name="TeamOrganizationAccessOutputReference" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import team

team.TeamOrganizationAccessOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership">reset_manage_membership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules">reset_manage_modules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies">reset_manage_policies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides">reset_manage_policy_overrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects">reset_manage_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders">reset_manage_providers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks">reset_manage_run_tasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings">reset_manage_vcs_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces">reset_manage_workspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects">reset_read_projects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces">reset_read_workspaces</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_manage_membership` <a name="reset_manage_membership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership"></a>

```python
def reset_manage_membership() -> None
```

##### `reset_manage_modules` <a name="reset_manage_modules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules"></a>

```python
def reset_manage_modules() -> None
```

##### `reset_manage_policies` <a name="reset_manage_policies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies"></a>

```python
def reset_manage_policies() -> None
```

##### `reset_manage_policy_overrides` <a name="reset_manage_policy_overrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides"></a>

```python
def reset_manage_policy_overrides() -> None
```

##### `reset_manage_projects` <a name="reset_manage_projects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects"></a>

```python
def reset_manage_projects() -> None
```

##### `reset_manage_providers` <a name="reset_manage_providers" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders"></a>

```python
def reset_manage_providers() -> None
```

##### `reset_manage_run_tasks` <a name="reset_manage_run_tasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks"></a>

```python
def reset_manage_run_tasks() -> None
```

##### `reset_manage_vcs_settings` <a name="reset_manage_vcs_settings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings"></a>

```python
def reset_manage_vcs_settings() -> None
```

##### `reset_manage_workspaces` <a name="reset_manage_workspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces"></a>

```python
def reset_manage_workspaces() -> None
```

##### `reset_read_projects` <a name="reset_read_projects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects"></a>

```python
def reset_read_projects() -> None
```

##### `reset_read_workspaces` <a name="reset_read_workspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces"></a>

```python
def reset_read_workspaces() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput">manage_membership_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput">manage_modules_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput">manage_policies_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput">manage_policy_overrides_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput">manage_projects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput">manage_providers_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput">manage_run_tasks_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput">manage_vcs_settings_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput">manage_workspaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput">read_projects_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput">read_workspaces_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership">manage_membership</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules">manage_modules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies">manage_policies</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides">manage_policy_overrides</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects">manage_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders">manage_providers</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks">manage_run_tasks</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings">manage_vcs_settings</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces">manage_workspaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects">read_projects</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces">read_workspaces</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `manage_membership_input`<sup>Optional</sup> <a name="manage_membership_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput"></a>

```python
manage_membership_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_modules_input`<sup>Optional</sup> <a name="manage_modules_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput"></a>

```python
manage_modules_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_policies_input`<sup>Optional</sup> <a name="manage_policies_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput"></a>

```python
manage_policies_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_policy_overrides_input`<sup>Optional</sup> <a name="manage_policy_overrides_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput"></a>

```python
manage_policy_overrides_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_projects_input`<sup>Optional</sup> <a name="manage_projects_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput"></a>

```python
manage_projects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_providers_input`<sup>Optional</sup> <a name="manage_providers_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput"></a>

```python
manage_providers_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_run_tasks_input`<sup>Optional</sup> <a name="manage_run_tasks_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput"></a>

```python
manage_run_tasks_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_vcs_settings_input`<sup>Optional</sup> <a name="manage_vcs_settings_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput"></a>

```python
manage_vcs_settings_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_workspaces_input`<sup>Optional</sup> <a name="manage_workspaces_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput"></a>

```python
manage_workspaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_projects_input`<sup>Optional</sup> <a name="read_projects_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput"></a>

```python
read_projects_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_workspaces_input`<sup>Optional</sup> <a name="read_workspaces_input" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput"></a>

```python
read_workspaces_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_membership`<sup>Required</sup> <a name="manage_membership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership"></a>

```python
manage_membership: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_modules`<sup>Required</sup> <a name="manage_modules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules"></a>

```python
manage_modules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_policies`<sup>Required</sup> <a name="manage_policies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies"></a>

```python
manage_policies: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_policy_overrides`<sup>Required</sup> <a name="manage_policy_overrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides"></a>

```python
manage_policy_overrides: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_projects`<sup>Required</sup> <a name="manage_projects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects"></a>

```python
manage_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_providers`<sup>Required</sup> <a name="manage_providers" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders"></a>

```python
manage_providers: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_run_tasks`<sup>Required</sup> <a name="manage_run_tasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks"></a>

```python
manage_run_tasks: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_vcs_settings`<sup>Required</sup> <a name="manage_vcs_settings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings"></a>

```python
manage_vcs_settings: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `manage_workspaces`<sup>Required</sup> <a name="manage_workspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces"></a>

```python
manage_workspaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_projects`<sup>Required</sup> <a name="read_projects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects"></a>

```python
read_projects: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `read_workspaces`<sup>Required</sup> <a name="read_workspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces"></a>

```python
read_workspaces: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue"></a>

```python
internal_value: TeamOrganizationAccess
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---



