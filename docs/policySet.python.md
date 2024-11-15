# `policySet` Submodule <a name="`policySet` Submodule" id="@cdktf/provider-tfe.policySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySet <a name="PolicySet" id="@cdktf/provider-tfe.policySet.PolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set tfe_policy_set}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySet(
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
  agent_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  global: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kind: str = None,
  organization: str = None,
  overridable: typing.Union[bool, IResolvable] = None,
  policies_path: str = None,
  policy_ids: typing.List[str] = None,
  policy_tool_version: str = None,
  slug: typing.Mapping[str] = None,
  vcs_repo: PolicySetVcsRepo = None,
  workspace_ids: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#name PolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.agentEnabled">agent_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#description PolicySet#description}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#global PolicySet#global}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#id PolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#kind PolicySet#kind}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#organization PolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.overridable">overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#overridable PolicySet#overridable}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policiesPath">policies_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policies_path PolicySet#policies_path}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyIds">policy_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policy_ids PolicySet#policy_ids}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyToolVersion">policy_tool_version</a></code> | <code>str</code> | The policy tool version to run the policy evaluation against. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.slug">slug</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#slug PolicySet#slug}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#name PolicySet#name}.

---

##### `agent_enabled`<sup>Optional</sup> <a name="agent_enabled" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.agentEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#agent_enabled PolicySet#agent_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#description PolicySet#description}.

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.global"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#global PolicySet#global}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#id PolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.kind"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#kind PolicySet#kind}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#organization PolicySet#organization}.

---

##### `overridable`<sup>Optional</sup> <a name="overridable" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.overridable"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#overridable PolicySet#overridable}.

---

##### `policies_path`<sup>Optional</sup> <a name="policies_path" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policiesPath"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policies_path PolicySet#policies_path}.

---

##### `policy_ids`<sup>Optional</sup> <a name="policy_ids" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policy_ids PolicySet#policy_ids}.

---

##### `policy_tool_version`<sup>Optional</sup> <a name="policy_tool_version" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.policyToolVersion"></a>

- *Type:* str

The policy tool version to run the policy evaluation against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policy_tool_version PolicySet#policy_tool_version}

---

##### `slug`<sup>Optional</sup> <a name="slug" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.slug"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#slug PolicySet#slug}.

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.vcsRepo"></a>

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#vcs_repo PolicySet#vcs_repo}

---

##### `workspace_ids`<sup>Optional</sup> <a name="workspace_ids" id="@cdktf/provider-tfe.policySet.PolicySet.Initializer.parameter.workspaceIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo">put_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetAgentEnabled">reset_agent_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetGlobal">reset_global</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetKind">reset_kind</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetOverridable">reset_overridable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPoliciesPath">reset_policies_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPolicyIds">reset_policy_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetPolicyToolVersion">reset_policy_tool_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetSlug">reset_slug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetVcsRepo">reset_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.resetWorkspaceIds">reset_workspace_ids</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.policySet.PolicySet.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.policySet.PolicySet.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.policySet.PolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.policySet.PolicySet.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.policySet.PolicySet.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.policySet.PolicySet.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.policySet.PolicySet.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.policySet.PolicySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.policySet.PolicySet.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.policySet.PolicySet.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.policySet.PolicySet.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.policySet.PolicySet.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.policySet.PolicySet.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.policySet.PolicySet.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.policySet.PolicySet.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vcs_repo` <a name="put_vcs_repo" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo"></a>

```python
def put_vcs_repo(
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  ingress_submodules: typing.Union[bool, IResolvable] = None,
  oauth_token_id: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#identifier PolicySet#identifier}.

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#branch PolicySet#branch}.

---

###### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.githubAppInstallationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}.

---

###### `ingress_submodules`<sup>Optional</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.ingressSubmodules"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}.

---

###### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.policySet.PolicySet.putVcsRepo.parameter.oauthTokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}.

---

##### `reset_agent_enabled` <a name="reset_agent_enabled" id="@cdktf/provider-tfe.policySet.PolicySet.resetAgentEnabled"></a>

```python
def reset_agent_enabled() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-tfe.policySet.PolicySet.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_global` <a name="reset_global" id="@cdktf/provider-tfe.policySet.PolicySet.resetGlobal"></a>

```python
def reset_global() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.policySet.PolicySet.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_kind` <a name="reset_kind" id="@cdktf/provider-tfe.policySet.PolicySet.resetKind"></a>

```python
def reset_kind() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.policySet.PolicySet.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_overridable` <a name="reset_overridable" id="@cdktf/provider-tfe.policySet.PolicySet.resetOverridable"></a>

```python
def reset_overridable() -> None
```

##### `reset_policies_path` <a name="reset_policies_path" id="@cdktf/provider-tfe.policySet.PolicySet.resetPoliciesPath"></a>

```python
def reset_policies_path() -> None
```

##### `reset_policy_ids` <a name="reset_policy_ids" id="@cdktf/provider-tfe.policySet.PolicySet.resetPolicyIds"></a>

```python
def reset_policy_ids() -> None
```

##### `reset_policy_tool_version` <a name="reset_policy_tool_version" id="@cdktf/provider-tfe.policySet.PolicySet.resetPolicyToolVersion"></a>

```python
def reset_policy_tool_version() -> None
```

##### `reset_slug` <a name="reset_slug" id="@cdktf/provider-tfe.policySet.PolicySet.resetSlug"></a>

```python
def reset_slug() -> None
```

##### `reset_vcs_repo` <a name="reset_vcs_repo" id="@cdktf/provider-tfe.policySet.PolicySet.resetVcsRepo"></a>

```python
def reset_vcs_repo() -> None
```

##### `reset_workspace_ids` <a name="reset_workspace_ids" id="@cdktf/provider-tfe.policySet.PolicySet.resetWorkspaceIds"></a>

```python
def reset_workspace_ids() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PolicySet resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySet.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySet.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySet.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySet.PolicySet.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySet.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PolicySet resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PolicySet to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabledInput">agent_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.globalInput">global_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kindInput">kind_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput">overridable_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput">policies_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput">policy_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersionInput">policy_tool_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slugInput">slug_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput">vcs_repo_input</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput">workspace_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabled">agent_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.overridable">overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath">policies_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyIds">policy_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersion">policy_tool_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.slug">slug</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.policySet.PolicySet.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.policySet.PolicySet.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.policySet.PolicySet.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.policySet.PolicySet.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.policySet.PolicySet.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySet.PolicySet.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySet.PolicySet.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.policySet.PolicySet.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.policySet.PolicySet.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySet.PolicySet.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySet.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySet.PolicySet.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `vcs_repo`<sup>Required</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepo"></a>

```python
vcs_repo: PolicySetVcsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference">PolicySetVcsRepoOutputReference</a>

---

##### `agent_enabled_input`<sup>Optional</sup> <a name="agent_enabled_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabledInput"></a>

```python
agent_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `global_input`<sup>Optional</sup> <a name="global_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.globalInput"></a>

```python
global_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `kind_input`<sup>Optional</sup> <a name="kind_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.kindInput"></a>

```python
kind_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `overridable_input`<sup>Optional</sup> <a name="overridable_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridableInput"></a>

```python
overridable_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policies_path_input`<sup>Optional</sup> <a name="policies_path_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPathInput"></a>

```python
policies_path_input: str
```

- *Type:* str

---

##### `policy_ids_input`<sup>Optional</sup> <a name="policy_ids_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIdsInput"></a>

```python
policy_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_tool_version_input`<sup>Optional</sup> <a name="policy_tool_version_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersionInput"></a>

```python
policy_tool_version_input: str
```

- *Type:* str

---

##### `slug_input`<sup>Optional</sup> <a name="slug_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.slugInput"></a>

```python
slug_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `vcs_repo_input`<sup>Optional</sup> <a name="vcs_repo_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.vcsRepoInput"></a>

```python
vcs_repo_input: PolicySetVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---

##### `workspace_ids_input`<sup>Optional</sup> <a name="workspace_ids_input" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIdsInput"></a>

```python
workspace_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `agent_enabled`<sup>Required</sup> <a name="agent_enabled" id="@cdktf/provider-tfe.policySet.PolicySet.property.agentEnabled"></a>

```python
agent_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.policySet.PolicySet.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `global`<sup>Required</sup> <a name="global" id="@cdktf/provider-tfe.policySet.PolicySet.property.global"></a>

```python
global: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySet.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktf/provider-tfe.policySet.PolicySet.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.policySet.PolicySet.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.policySet.PolicySet.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `overridable`<sup>Required</sup> <a name="overridable" id="@cdktf/provider-tfe.policySet.PolicySet.property.overridable"></a>

```python
overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policies_path`<sup>Required</sup> <a name="policies_path" id="@cdktf/provider-tfe.policySet.PolicySet.property.policiesPath"></a>

```python
policies_path: str
```

- *Type:* str

---

##### `policy_ids`<sup>Required</sup> <a name="policy_ids" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyIds"></a>

```python
policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `policy_tool_version`<sup>Required</sup> <a name="policy_tool_version" id="@cdktf/provider-tfe.policySet.PolicySet.property.policyToolVersion"></a>

```python
policy_tool_version: str
```

- *Type:* str

---

##### `slug`<sup>Required</sup> <a name="slug" id="@cdktf/provider-tfe.policySet.PolicySet.property.slug"></a>

```python
slug: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `workspace_ids`<sup>Required</sup> <a name="workspace_ids" id="@cdktf/provider-tfe.policySet.PolicySet.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.policySet.PolicySet.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetConfig <a name="PolicySetConfig" id="@cdktf/provider-tfe.policySet.PolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  agent_enabled: typing.Union[bool, IResolvable] = None,
  description: str = None,
  global: typing.Union[bool, IResolvable] = None,
  id: str = None,
  kind: str = None,
  organization: str = None,
  overridable: typing.Union[bool, IResolvable] = None,
  policies_path: str = None,
  policy_ids: typing.List[str] = None,
  policy_tool_version: str = None,
  slug: typing.Mapping[str] = None,
  vcs_repo: PolicySetVcsRepo = None,
  workspace_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#name PolicySet#name}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.agentEnabled">agent_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#description PolicySet#description}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.global">global</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#global PolicySet#global}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#id PolicySet#id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind">kind</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#kind PolicySet#kind}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#organization PolicySet#organization}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable">overridable</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#overridable PolicySet#overridable}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath">policies_path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policies_path PolicySet#policies_path}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds">policy_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policy_ids PolicySet#policy_ids}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyToolVersion">policy_tool_version</a></code> | <code>str</code> | The policy tool version to run the policy evaluation against. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug">slug</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#slug PolicySet#slug}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds">workspace_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#name PolicySet#name}.

---

##### `agent_enabled`<sup>Optional</sup> <a name="agent_enabled" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.agentEnabled"></a>

```python
agent_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Whether the policy set is executed in the HCP Terraform agent. True by default for OPA policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#agent_enabled PolicySet#agent_enabled}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#description PolicySet#description}.

---

##### `global`<sup>Optional</sup> <a name="global" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.global"></a>

```python
global: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#global PolicySet#global}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#id PolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kind`<sup>Optional</sup> <a name="kind" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.kind"></a>

```python
kind: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#kind PolicySet#kind}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#organization PolicySet#organization}.

---

##### `overridable`<sup>Optional</sup> <a name="overridable" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.overridable"></a>

```python
overridable: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#overridable PolicySet#overridable}.

---

##### `policies_path`<sup>Optional</sup> <a name="policies_path" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policiesPath"></a>

```python
policies_path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policies_path PolicySet#policies_path}.

---

##### `policy_ids`<sup>Optional</sup> <a name="policy_ids" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyIds"></a>

```python
policy_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policy_ids PolicySet#policy_ids}.

---

##### `policy_tool_version`<sup>Optional</sup> <a name="policy_tool_version" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.policyToolVersion"></a>

```python
policy_tool_version: str
```

- *Type:* str

The policy tool version to run the policy evaluation against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#policy_tool_version PolicySet#policy_tool_version}

---

##### `slug`<sup>Optional</sup> <a name="slug" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.slug"></a>

```python
slug: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#slug PolicySet#slug}.

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.vcsRepo"></a>

```python
vcs_repo: PolicySetVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#vcs_repo PolicySet#vcs_repo}

---

##### `workspace_ids`<sup>Optional</sup> <a name="workspace_ids" id="@cdktf/provider-tfe.policySet.PolicySetConfig.property.workspaceIds"></a>

```python
workspace_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#workspace_ids PolicySet#workspace_ids}.

---

### PolicySetVcsRepo <a name="PolicySetVcsRepo" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySetVcsRepo(
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  ingress_submodules: typing.Union[bool, IResolvable] = None,
  oauth_token_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#identifier PolicySet#identifier}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#branch PolicySet#branch}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules">ingress_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#identifier PolicySet#identifier}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#branch PolicySet#branch}.

---

##### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#github_app_installation_id PolicySet#github_app_installation_id}.

---

##### `ingress_submodules`<sup>Optional</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.ingressSubmodules"></a>

```python
ingress_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#ingress_submodules PolicySet#ingress_submodules}.

---

##### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepo.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.60.1/docs/resources/policy_set#oauth_token_id PolicySet#oauth_token_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### PolicySetVcsRepoOutputReference <a name="PolicySetVcsRepoOutputReference" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import policy_set

policySet.PolicySetVcsRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetGithubAppInstallationId">reset_github_app_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetIngressSubmodules">reset_ingress_submodules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetOauthTokenId">reset_oauth_token_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_github_app_installation_id` <a name="reset_github_app_installation_id" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```python
def reset_github_app_installation_id() -> None
```

##### `reset_ingress_submodules` <a name="reset_ingress_submodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetIngressSubmodules"></a>

```python
def reset_ingress_submodules() -> None
```

##### `reset_oauth_token_id` <a name="reset_oauth_token_id" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.resetOauthTokenId"></a>

```python
def reset_oauth_token_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput">github_app_installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput">ingress_submodules_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput">oauth_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules">ingress_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `github_app_installation_id_input`<sup>Optional</sup> <a name="github_app_installation_id_input" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```python
github_app_installation_id_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `ingress_submodules_input`<sup>Optional</sup> <a name="ingress_submodules_input" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```python
ingress_submodules_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_token_id_input`<sup>Optional</sup> <a name="oauth_token_id_input" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```python
oauth_token_id_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `github_app_installation_id`<sup>Required</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `ingress_submodules`<sup>Required</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.ingressSubmodules"></a>

```python
ingress_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.policySet.PolicySetVcsRepoOutputReference.property.internalValue"></a>

```python
internal_value: PolicySetVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.policySet.PolicySetVcsRepo">PolicySetVcsRepo</a>

---



