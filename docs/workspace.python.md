# `workspace` Submodule <a name="`workspace` Submodule" id="@cdktf/provider-tfe.workspace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Workspace <a name="Workspace" id="@cdktf/provider-tfe.workspace.Workspace"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace tfe_workspace}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.Workspace.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.Workspace(
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
  agent_pool_id: str = None,
  allow_destroy_plan: typing.Union[bool, IResolvable] = None,
  assessments_enabled: typing.Union[bool, IResolvable] = None,
  auto_apply: typing.Union[bool, IResolvable] = None,
  auto_apply_run_trigger: typing.Union[bool, IResolvable] = None,
  auto_destroy_activity_duration: str = None,
  auto_destroy_at: str = None,
  description: str = None,
  execution_mode: str = None,
  file_triggers_enabled: typing.Union[bool, IResolvable] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  global_remote_state: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ignore_additional_tag_names: typing.Union[bool, IResolvable] = None,
  operations: typing.Union[bool, IResolvable] = None,
  organization: str = None,
  project_id: str = None,
  queue_all_runs: typing.Union[bool, IResolvable] = None,
  remote_state_consumer_ids: typing.List[str] = None,
  source_name: str = None,
  source_url: str = None,
  speculative_enabled: typing.Union[bool, IResolvable] = None,
  ssh_key_id: str = None,
  structured_run_output_enabled: typing.Union[bool, IResolvable] = None,
  tag_names: typing.List[str] = None,
  terraform_version: str = None,
  trigger_patterns: typing.List[str] = None,
  trigger_prefixes: typing.List[str] = None,
  vcs_repo: WorkspaceVcsRepo = None,
  working_directory: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#name Workspace#name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.allowDestroyPlan">allow_destroy_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.assessmentsEnabled">assessments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoApply">auto_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply Workspace#auto_apply}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoApplyRunTrigger">auto_apply_run_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoDestroyActivityDuration">auto_destroy_activity_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoDestroyAt">auto_destroy_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#description Workspace#description}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.executionMode">execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#execution_mode Workspace#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.fileTriggersEnabled">file_triggers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#force_delete Workspace#force_delete}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.globalRemoteState">global_remote_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#id Workspace#id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.ignoreAdditionalTagNames">ignore_additional_tag_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.operations">operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#operations Workspace#operations}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#organization Workspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#project_id Workspace#project_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.queueAllRuns">queue_all_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.remoteStateConsumerIds">remote_state_consumer_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_name Workspace#source_name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.sourceUrl">source_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_url Workspace#source_url}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.speculativeEnabled">speculative_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.sshKeyId">ssh_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.structuredRunOutputEnabled">structured_run_output_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.tagNames">tag_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#tag_names Workspace#tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.terraformVersion">terraform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#terraform_version Workspace#terraform_version}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.triggerPatterns">trigger_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.triggerPrefixes">trigger_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#working_directory Workspace#working_directory}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#name Workspace#name}.

---

##### `agent_pool_id`<sup>Optional</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.agentPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}.

---

##### `allow_destroy_plan`<sup>Optional</sup> <a name="allow_destroy_plan" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.allowDestroyPlan"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.

---

##### `assessments_enabled`<sup>Optional</sup> <a name="assessments_enabled" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.assessmentsEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}.

---

##### `auto_apply`<sup>Optional</sup> <a name="auto_apply" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoApply"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply Workspace#auto_apply}.

---

##### `auto_apply_run_trigger`<sup>Optional</sup> <a name="auto_apply_run_trigger" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoApplyRunTrigger"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}.

---

##### `auto_destroy_activity_duration`<sup>Optional</sup> <a name="auto_destroy_activity_duration" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoDestroyActivityDuration"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}.

---

##### `auto_destroy_at`<sup>Optional</sup> <a name="auto_destroy_at" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.autoDestroyAt"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#description Workspace#description}.

---

##### `execution_mode`<sup>Optional</sup> <a name="execution_mode" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.executionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#execution_mode Workspace#execution_mode}.

---

##### `file_triggers_enabled`<sup>Optional</sup> <a name="file_triggers_enabled" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.fileTriggersEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.forceDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#force_delete Workspace#force_delete}.

---

##### `global_remote_state`<sup>Optional</sup> <a name="global_remote_state" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.globalRemoteState"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#id Workspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_additional_tag_names`<sup>Optional</sup> <a name="ignore_additional_tag_names" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.ignoreAdditionalTagNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}.

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.operations"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#operations Workspace#operations}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#organization Workspace#organization}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.projectId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#project_id Workspace#project_id}.

---

##### `queue_all_runs`<sup>Optional</sup> <a name="queue_all_runs" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.queueAllRuns"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}.

---

##### `remote_state_consumer_ids`<sup>Optional</sup> <a name="remote_state_consumer_ids" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.remoteStateConsumerIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.sourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_name Workspace#source_name}.

---

##### `source_url`<sup>Optional</sup> <a name="source_url" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.sourceUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_url Workspace#source_url}.

---

##### `speculative_enabled`<sup>Optional</sup> <a name="speculative_enabled" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.speculativeEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}.

---

##### `ssh_key_id`<sup>Optional</sup> <a name="ssh_key_id" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.sshKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}.

---

##### `structured_run_output_enabled`<sup>Optional</sup> <a name="structured_run_output_enabled" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.structuredRunOutputEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.

---

##### `tag_names`<sup>Optional</sup> <a name="tag_names" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.tagNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#tag_names Workspace#tag_names}.

---

##### `terraform_version`<sup>Optional</sup> <a name="terraform_version" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.terraformVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#terraform_version Workspace#terraform_version}.

---

##### `trigger_patterns`<sup>Optional</sup> <a name="trigger_patterns" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.triggerPatterns"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}.

---

##### `trigger_prefixes`<sup>Optional</sup> <a name="trigger_prefixes" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.triggerPrefixes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}.

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.vcsRepo"></a>

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#vcs_repo Workspace#vcs_repo}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-tfe.workspace.Workspace.Initializer.parameter.workingDirectory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#working_directory Workspace#working_directory}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.putVcsRepo">put_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAgentPoolId">reset_agent_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAllowDestroyPlan">reset_allow_destroy_plan</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAssessmentsEnabled">reset_assessments_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoApply">reset_auto_apply</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoApplyRunTrigger">reset_auto_apply_run_trigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyActivityDuration">reset_auto_destroy_activity_duration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyAt">reset_auto_destroy_at</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetExecutionMode">reset_execution_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetFileTriggersEnabled">reset_file_triggers_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetForceDelete">reset_force_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetGlobalRemoteState">reset_global_remote_state</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTagNames">reset_ignore_additional_tag_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOperations">reset_operations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetProjectId">reset_project_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetQueueAllRuns">reset_queue_all_runs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetRemoteStateConsumerIds">reset_remote_state_consumer_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSourceName">reset_source_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSourceUrl">reset_source_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSpeculativeEnabled">reset_speculative_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetSshKeyId">reset_ssh_key_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetStructuredRunOutputEnabled">reset_structured_run_output_enabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTagNames">reset_tag_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTerraformVersion">reset_terraform_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTriggerPatterns">reset_trigger_patterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetTriggerPrefixes">reset_trigger_prefixes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetVcsRepo">reset_vcs_repo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.resetWorkingDirectory">reset_working_directory</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspace.Workspace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.workspace.Workspace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.workspace.Workspace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.workspace.Workspace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.workspace.Workspace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.workspace.Workspace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.workspace.Workspace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.workspace.Workspace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.workspace.Workspace.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.workspace.Workspace.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.workspace.Workspace.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.Workspace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.workspace.Workspace.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.workspace.Workspace.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.workspace.Workspace.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_vcs_repo` <a name="put_vcs_repo" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo"></a>

```python
def put_vcs_repo(
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  ingress_submodules: typing.Union[bool, IResolvable] = None,
  oauth_token_id: str = None,
  tags_regex: str = None
) -> None
```

###### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.identifier"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#identifier Workspace#identifier}.

---

###### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.branch"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#branch Workspace#branch}.

---

###### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.githubAppInstallationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}.

---

###### `ingress_submodules`<sup>Optional</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.ingressSubmodules"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}.

---

###### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.oauthTokenId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}.

---

###### `tags_regex`<sup>Optional</sup> <a name="tags_regex" id="@cdktf/provider-tfe.workspace.Workspace.putVcsRepo.parameter.tagsRegex"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#tags_regex Workspace#tags_regex}.

---

##### `reset_agent_pool_id` <a name="reset_agent_pool_id" id="@cdktf/provider-tfe.workspace.Workspace.resetAgentPoolId"></a>

```python
def reset_agent_pool_id() -> None
```

##### `reset_allow_destroy_plan` <a name="reset_allow_destroy_plan" id="@cdktf/provider-tfe.workspace.Workspace.resetAllowDestroyPlan"></a>

```python
def reset_allow_destroy_plan() -> None
```

##### `reset_assessments_enabled` <a name="reset_assessments_enabled" id="@cdktf/provider-tfe.workspace.Workspace.resetAssessmentsEnabled"></a>

```python
def reset_assessments_enabled() -> None
```

##### `reset_auto_apply` <a name="reset_auto_apply" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApply"></a>

```python
def reset_auto_apply() -> None
```

##### `reset_auto_apply_run_trigger` <a name="reset_auto_apply_run_trigger" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoApplyRunTrigger"></a>

```python
def reset_auto_apply_run_trigger() -> None
```

##### `reset_auto_destroy_activity_duration` <a name="reset_auto_destroy_activity_duration" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyActivityDuration"></a>

```python
def reset_auto_destroy_activity_duration() -> None
```

##### `reset_auto_destroy_at` <a name="reset_auto_destroy_at" id="@cdktf/provider-tfe.workspace.Workspace.resetAutoDestroyAt"></a>

```python
def reset_auto_destroy_at() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-tfe.workspace.Workspace.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_execution_mode` <a name="reset_execution_mode" id="@cdktf/provider-tfe.workspace.Workspace.resetExecutionMode"></a>

```python
def reset_execution_mode() -> None
```

##### `reset_file_triggers_enabled` <a name="reset_file_triggers_enabled" id="@cdktf/provider-tfe.workspace.Workspace.resetFileTriggersEnabled"></a>

```python
def reset_file_triggers_enabled() -> None
```

##### `reset_force_delete` <a name="reset_force_delete" id="@cdktf/provider-tfe.workspace.Workspace.resetForceDelete"></a>

```python
def reset_force_delete() -> None
```

##### `reset_global_remote_state` <a name="reset_global_remote_state" id="@cdktf/provider-tfe.workspace.Workspace.resetGlobalRemoteState"></a>

```python
def reset_global_remote_state() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.workspace.Workspace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_additional_tag_names` <a name="reset_ignore_additional_tag_names" id="@cdktf/provider-tfe.workspace.Workspace.resetIgnoreAdditionalTagNames"></a>

```python
def reset_ignore_additional_tag_names() -> None
```

##### `reset_operations` <a name="reset_operations" id="@cdktf/provider-tfe.workspace.Workspace.resetOperations"></a>

```python
def reset_operations() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.workspace.Workspace.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_project_id` <a name="reset_project_id" id="@cdktf/provider-tfe.workspace.Workspace.resetProjectId"></a>

```python
def reset_project_id() -> None
```

##### `reset_queue_all_runs` <a name="reset_queue_all_runs" id="@cdktf/provider-tfe.workspace.Workspace.resetQueueAllRuns"></a>

```python
def reset_queue_all_runs() -> None
```

##### `reset_remote_state_consumer_ids` <a name="reset_remote_state_consumer_ids" id="@cdktf/provider-tfe.workspace.Workspace.resetRemoteStateConsumerIds"></a>

```python
def reset_remote_state_consumer_ids() -> None
```

##### `reset_source_name` <a name="reset_source_name" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceName"></a>

```python
def reset_source_name() -> None
```

##### `reset_source_url` <a name="reset_source_url" id="@cdktf/provider-tfe.workspace.Workspace.resetSourceUrl"></a>

```python
def reset_source_url() -> None
```

##### `reset_speculative_enabled` <a name="reset_speculative_enabled" id="@cdktf/provider-tfe.workspace.Workspace.resetSpeculativeEnabled"></a>

```python
def reset_speculative_enabled() -> None
```

##### `reset_ssh_key_id` <a name="reset_ssh_key_id" id="@cdktf/provider-tfe.workspace.Workspace.resetSshKeyId"></a>

```python
def reset_ssh_key_id() -> None
```

##### `reset_structured_run_output_enabled` <a name="reset_structured_run_output_enabled" id="@cdktf/provider-tfe.workspace.Workspace.resetStructuredRunOutputEnabled"></a>

```python
def reset_structured_run_output_enabled() -> None
```

##### `reset_tag_names` <a name="reset_tag_names" id="@cdktf/provider-tfe.workspace.Workspace.resetTagNames"></a>

```python
def reset_tag_names() -> None
```

##### `reset_terraform_version` <a name="reset_terraform_version" id="@cdktf/provider-tfe.workspace.Workspace.resetTerraformVersion"></a>

```python
def reset_terraform_version() -> None
```

##### `reset_trigger_patterns` <a name="reset_trigger_patterns" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPatterns"></a>

```python
def reset_trigger_patterns() -> None
```

##### `reset_trigger_prefixes` <a name="reset_trigger_prefixes" id="@cdktf/provider-tfe.workspace.Workspace.resetTriggerPrefixes"></a>

```python
def reset_trigger_prefixes() -> None
```

##### `reset_vcs_repo` <a name="reset_vcs_repo" id="@cdktf/provider-tfe.workspace.Workspace.resetVcsRepo"></a>

```python
def reset_vcs_repo() -> None
```

##### `reset_working_directory` <a name="reset_working_directory" id="@cdktf/provider-tfe.workspace.Workspace.resetWorkingDirectory"></a>

```python
def reset_working_directory() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.workspace.Workspace.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.Workspace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.Workspace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.Workspace.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.workspace.Workspace.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.Workspace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a Workspace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the Workspace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing Workspace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Workspace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl">html_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.resourceCount">resource_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput">agent_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput">allow_destroy_plan_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput">assessments_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput">auto_apply_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput">auto_apply_run_trigger_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput">auto_destroy_activity_duration_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput">auto_destroy_at_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput">execution_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput">file_triggers_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput">force_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput">global_remote_state_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput">ignore_additional_tag_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operationsInput">operations_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput">project_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput">queue_all_runs_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput">remote_state_consumer_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput">source_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput">source_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput">speculative_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput">ssh_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput">structured_run_output_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput">tag_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput">terraform_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput">trigger_patterns_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput">trigger_prefixes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput">vcs_repo_input</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput">working_directory_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan">allow_destroy_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled">assessments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApply">auto_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger">auto_apply_run_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration">auto_destroy_activity_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt">auto_destroy_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.executionMode">execution_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled">file_triggers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState">global_remote_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames">ignore_additional_tag_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.operations">operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.projectId">project_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns">queue_all_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds">remote_state_consumer_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl">source_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled">speculative_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId">ssh_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled">structured_run_output_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tagNames">tag_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion">terraform_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns">trigger_patterns</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes">trigger_prefixes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory">working_directory</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.workspace.Workspace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.workspace.Workspace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspace.Workspace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.workspace.Workspace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspace.Workspace.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspace.Workspace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspace.Workspace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspace.Workspace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspace.Workspace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.Workspace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspace.Workspace.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `html_url`<sup>Required</sup> <a name="html_url" id="@cdktf/provider-tfe.workspace.Workspace.property.htmlUrl"></a>

```python
html_url: str
```

- *Type:* str

---

##### `resource_count`<sup>Required</sup> <a name="resource_count" id="@cdktf/provider-tfe.workspace.Workspace.property.resourceCount"></a>

```python
resource_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vcs_repo`<sup>Required</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepo"></a>

```python
vcs_repo: WorkspaceVcsRepoOutputReference
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference">WorkspaceVcsRepoOutputReference</a>

---

##### `agent_pool_id_input`<sup>Optional</sup> <a name="agent_pool_id_input" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolIdInput"></a>

```python
agent_pool_id_input: str
```

- *Type:* str

---

##### `allow_destroy_plan_input`<sup>Optional</sup> <a name="allow_destroy_plan_input" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlanInput"></a>

```python
allow_destroy_plan_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assessments_enabled_input`<sup>Optional</sup> <a name="assessments_enabled_input" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabledInput"></a>

```python
assessments_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply_input`<sup>Optional</sup> <a name="auto_apply_input" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyInput"></a>

```python
auto_apply_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply_run_trigger_input`<sup>Optional</sup> <a name="auto_apply_run_trigger_input" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTriggerInput"></a>

```python
auto_apply_run_trigger_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_destroy_activity_duration_input`<sup>Optional</sup> <a name="auto_destroy_activity_duration_input" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDurationInput"></a>

```python
auto_destroy_activity_duration_input: str
```

- *Type:* str

---

##### `auto_destroy_at_input`<sup>Optional</sup> <a name="auto_destroy_at_input" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAtInput"></a>

```python
auto_destroy_at_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-tfe.workspace.Workspace.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `execution_mode_input`<sup>Optional</sup> <a name="execution_mode_input" id="@cdktf/provider-tfe.workspace.Workspace.property.executionModeInput"></a>

```python
execution_mode_input: str
```

- *Type:* str

---

##### `file_triggers_enabled_input`<sup>Optional</sup> <a name="file_triggers_enabled_input" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabledInput"></a>

```python
file_triggers_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete_input`<sup>Optional</sup> <a name="force_delete_input" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDeleteInput"></a>

```python
force_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `global_remote_state_input`<sup>Optional</sup> <a name="global_remote_state_input" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteStateInput"></a>

```python
global_remote_state_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.workspace.Workspace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_additional_tag_names_input`<sup>Optional</sup> <a name="ignore_additional_tag_names_input" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNamesInput"></a>

```python
ignore_additional_tag_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.workspace.Workspace.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `operations_input`<sup>Optional</sup> <a name="operations_input" id="@cdktf/provider-tfe.workspace.Workspace.property.operationsInput"></a>

```python
operations_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.workspace.Workspace.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `project_id_input`<sup>Optional</sup> <a name="project_id_input" id="@cdktf/provider-tfe.workspace.Workspace.property.projectIdInput"></a>

```python
project_id_input: str
```

- *Type:* str

---

##### `queue_all_runs_input`<sup>Optional</sup> <a name="queue_all_runs_input" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRunsInput"></a>

```python
queue_all_runs_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_state_consumer_ids_input`<sup>Optional</sup> <a name="remote_state_consumer_ids_input" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIdsInput"></a>

```python
remote_state_consumer_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_name_input`<sup>Optional</sup> <a name="source_name_input" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceNameInput"></a>

```python
source_name_input: str
```

- *Type:* str

---

##### `source_url_input`<sup>Optional</sup> <a name="source_url_input" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrlInput"></a>

```python
source_url_input: str
```

- *Type:* str

---

##### `speculative_enabled_input`<sup>Optional</sup> <a name="speculative_enabled_input" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabledInput"></a>

```python
speculative_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_key_id_input`<sup>Optional</sup> <a name="ssh_key_id_input" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyIdInput"></a>

```python
ssh_key_id_input: str
```

- *Type:* str

---

##### `structured_run_output_enabled_input`<sup>Optional</sup> <a name="structured_run_output_enabled_input" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabledInput"></a>

```python
structured_run_output_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_names_input`<sup>Optional</sup> <a name="tag_names_input" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNamesInput"></a>

```python
tag_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `terraform_version_input`<sup>Optional</sup> <a name="terraform_version_input" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersionInput"></a>

```python
terraform_version_input: str
```

- *Type:* str

---

##### `trigger_patterns_input`<sup>Optional</sup> <a name="trigger_patterns_input" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatternsInput"></a>

```python
trigger_patterns_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_prefixes_input`<sup>Optional</sup> <a name="trigger_prefixes_input" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixesInput"></a>

```python
trigger_prefixes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `vcs_repo_input`<sup>Optional</sup> <a name="vcs_repo_input" id="@cdktf/provider-tfe.workspace.Workspace.property.vcsRepoInput"></a>

```python
vcs_repo_input: WorkspaceVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---

##### `working_directory_input`<sup>Optional</sup> <a name="working_directory_input" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectoryInput"></a>

```python
working_directory_input: str
```

- *Type:* str

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.workspace.Workspace.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

---

##### `allow_destroy_plan`<sup>Required</sup> <a name="allow_destroy_plan" id="@cdktf/provider-tfe.workspace.Workspace.property.allowDestroyPlan"></a>

```python
allow_destroy_plan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `assessments_enabled`<sup>Required</sup> <a name="assessments_enabled" id="@cdktf/provider-tfe.workspace.Workspace.property.assessmentsEnabled"></a>

```python
assessments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply`<sup>Required</sup> <a name="auto_apply" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApply"></a>

```python
auto_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_apply_run_trigger`<sup>Required</sup> <a name="auto_apply_run_trigger" id="@cdktf/provider-tfe.workspace.Workspace.property.autoApplyRunTrigger"></a>

```python
auto_apply_run_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_destroy_activity_duration`<sup>Required</sup> <a name="auto_destroy_activity_duration" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyActivityDuration"></a>

```python
auto_destroy_activity_duration: str
```

- *Type:* str

---

##### `auto_destroy_at`<sup>Required</sup> <a name="auto_destroy_at" id="@cdktf/provider-tfe.workspace.Workspace.property.autoDestroyAt"></a>

```python
auto_destroy_at: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-tfe.workspace.Workspace.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `execution_mode`<sup>Required</sup> <a name="execution_mode" id="@cdktf/provider-tfe.workspace.Workspace.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

---

##### `file_triggers_enabled`<sup>Required</sup> <a name="file_triggers_enabled" id="@cdktf/provider-tfe.workspace.Workspace.property.fileTriggersEnabled"></a>

```python
file_triggers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `force_delete`<sup>Required</sup> <a name="force_delete" id="@cdktf/provider-tfe.workspace.Workspace.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `global_remote_state`<sup>Required</sup> <a name="global_remote_state" id="@cdktf/provider-tfe.workspace.Workspace.property.globalRemoteState"></a>

```python
global_remote_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.workspace.Workspace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_additional_tag_names`<sup>Required</sup> <a name="ignore_additional_tag_names" id="@cdktf/provider-tfe.workspace.Workspace.property.ignoreAdditionalTagNames"></a>

```python
ignore_additional_tag_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.workspace.Workspace.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `operations`<sup>Required</sup> <a name="operations" id="@cdktf/provider-tfe.workspace.Workspace.property.operations"></a>

```python
operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.workspace.Workspace.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `project_id`<sup>Required</sup> <a name="project_id" id="@cdktf/provider-tfe.workspace.Workspace.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

---

##### `queue_all_runs`<sup>Required</sup> <a name="queue_all_runs" id="@cdktf/provider-tfe.workspace.Workspace.property.queueAllRuns"></a>

```python
queue_all_runs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `remote_state_consumer_ids`<sup>Required</sup> <a name="remote_state_consumer_ids" id="@cdktf/provider-tfe.workspace.Workspace.property.remoteStateConsumerIds"></a>

```python
remote_state_consumer_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_url`<sup>Required</sup> <a name="source_url" id="@cdktf/provider-tfe.workspace.Workspace.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

---

##### `speculative_enabled`<sup>Required</sup> <a name="speculative_enabled" id="@cdktf/provider-tfe.workspace.Workspace.property.speculativeEnabled"></a>

```python
speculative_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ssh_key_id`<sup>Required</sup> <a name="ssh_key_id" id="@cdktf/provider-tfe.workspace.Workspace.property.sshKeyId"></a>

```python
ssh_key_id: str
```

- *Type:* str

---

##### `structured_run_output_enabled`<sup>Required</sup> <a name="structured_run_output_enabled" id="@cdktf/provider-tfe.workspace.Workspace.property.structuredRunOutputEnabled"></a>

```python
structured_run_output_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tag_names`<sup>Required</sup> <a name="tag_names" id="@cdktf/provider-tfe.workspace.Workspace.property.tagNames"></a>

```python
tag_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `terraform_version`<sup>Required</sup> <a name="terraform_version" id="@cdktf/provider-tfe.workspace.Workspace.property.terraformVersion"></a>

```python
terraform_version: str
```

- *Type:* str

---

##### `trigger_patterns`<sup>Required</sup> <a name="trigger_patterns" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPatterns"></a>

```python
trigger_patterns: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `trigger_prefixes`<sup>Required</sup> <a name="trigger_prefixes" id="@cdktf/provider-tfe.workspace.Workspace.property.triggerPrefixes"></a>

```python
trigger_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `working_directory`<sup>Required</sup> <a name="working_directory" id="@cdktf/provider-tfe.workspace.Workspace.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.workspace.Workspace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspaceConfig <a name="WorkspaceConfig" id="@cdktf/provider-tfe.workspace.WorkspaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.WorkspaceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  agent_pool_id: str = None,
  allow_destroy_plan: typing.Union[bool, IResolvable] = None,
  assessments_enabled: typing.Union[bool, IResolvable] = None,
  auto_apply: typing.Union[bool, IResolvable] = None,
  auto_apply_run_trigger: typing.Union[bool, IResolvable] = None,
  auto_destroy_activity_duration: str = None,
  auto_destroy_at: str = None,
  description: str = None,
  execution_mode: str = None,
  file_triggers_enabled: typing.Union[bool, IResolvable] = None,
  force_delete: typing.Union[bool, IResolvable] = None,
  global_remote_state: typing.Union[bool, IResolvable] = None,
  id: str = None,
  ignore_additional_tag_names: typing.Union[bool, IResolvable] = None,
  operations: typing.Union[bool, IResolvable] = None,
  organization: str = None,
  project_id: str = None,
  queue_all_runs: typing.Union[bool, IResolvable] = None,
  remote_state_consumer_ids: typing.List[str] = None,
  source_name: str = None,
  source_url: str = None,
  speculative_enabled: typing.Union[bool, IResolvable] = None,
  ssh_key_id: str = None,
  structured_run_output_enabled: typing.Union[bool, IResolvable] = None,
  tag_names: typing.List[str] = None,
  terraform_version: str = None,
  trigger_patterns: typing.List[str] = None,
  trigger_prefixes: typing.List[str] = None,
  vcs_repo: WorkspaceVcsRepo = None,
  working_directory: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#name Workspace#name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan">allow_destroy_plan</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled">assessments_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply">auto_apply</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply Workspace#auto_apply}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger">auto_apply_run_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration">auto_destroy_activity_duration</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt">auto_destroy_at</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#description Workspace#description}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode">execution_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#execution_mode Workspace#execution_mode}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled">file_triggers_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete">force_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#force_delete Workspace#force_delete}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState">global_remote_state</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#id Workspace#id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames">ignore_additional_tag_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations">operations</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#operations Workspace#operations}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#organization Workspace#organization}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId">project_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#project_id Workspace#project_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns">queue_all_runs</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds">remote_state_consumer_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName">source_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_name Workspace#source_name}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl">source_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_url Workspace#source_url}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled">speculative_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId">ssh_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled">structured_run_output_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames">tag_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#tag_names Workspace#tag_names}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion">terraform_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#terraform_version Workspace#terraform_version}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns">trigger_patterns</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes">trigger_prefixes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo">vcs_repo</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | vcs_repo block. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory">working_directory</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#working_directory Workspace#working_directory}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#name Workspace#name}.

---

##### `agent_pool_id`<sup>Optional</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#agent_pool_id Workspace#agent_pool_id}.

---

##### `allow_destroy_plan`<sup>Optional</sup> <a name="allow_destroy_plan" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.allowDestroyPlan"></a>

```python
allow_destroy_plan: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.

---

##### `assessments_enabled`<sup>Optional</sup> <a name="assessments_enabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.assessmentsEnabled"></a>

```python
assessments_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#assessments_enabled Workspace#assessments_enabled}.

---

##### `auto_apply`<sup>Optional</sup> <a name="auto_apply" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApply"></a>

```python
auto_apply: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply Workspace#auto_apply}.

---

##### `auto_apply_run_trigger`<sup>Optional</sup> <a name="auto_apply_run_trigger" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoApplyRunTrigger"></a>

```python
auto_apply_run_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_apply_run_trigger Workspace#auto_apply_run_trigger}.

---

##### `auto_destroy_activity_duration`<sup>Optional</sup> <a name="auto_destroy_activity_duration" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyActivityDuration"></a>

```python
auto_destroy_activity_duration: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_activity_duration Workspace#auto_destroy_activity_duration}.

---

##### `auto_destroy_at`<sup>Optional</sup> <a name="auto_destroy_at" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.autoDestroyAt"></a>

```python
auto_destroy_at: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#auto_destroy_at Workspace#auto_destroy_at}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#description Workspace#description}.

---

##### `execution_mode`<sup>Optional</sup> <a name="execution_mode" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.executionMode"></a>

```python
execution_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#execution_mode Workspace#execution_mode}.

---

##### `file_triggers_enabled`<sup>Optional</sup> <a name="file_triggers_enabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.fileTriggersEnabled"></a>

```python
file_triggers_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.

---

##### `force_delete`<sup>Optional</sup> <a name="force_delete" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.forceDelete"></a>

```python
force_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#force_delete Workspace#force_delete}.

---

##### `global_remote_state`<sup>Optional</sup> <a name="global_remote_state" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.globalRemoteState"></a>

```python
global_remote_state: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#global_remote_state Workspace#global_remote_state}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#id Workspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_additional_tag_names`<sup>Optional</sup> <a name="ignore_additional_tag_names" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.ignoreAdditionalTagNames"></a>

```python
ignore_additional_tag_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ignore_additional_tag_names Workspace#ignore_additional_tag_names}.

---

##### `operations`<sup>Optional</sup> <a name="operations" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.operations"></a>

```python
operations: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#operations Workspace#operations}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#organization Workspace#organization}.

---

##### `project_id`<sup>Optional</sup> <a name="project_id" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.projectId"></a>

```python
project_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#project_id Workspace#project_id}.

---

##### `queue_all_runs`<sup>Optional</sup> <a name="queue_all_runs" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.queueAllRuns"></a>

```python
queue_all_runs: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#queue_all_runs Workspace#queue_all_runs}.

---

##### `remote_state_consumer_ids`<sup>Optional</sup> <a name="remote_state_consumer_ids" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.remoteStateConsumerIds"></a>

```python
remote_state_consumer_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.

---

##### `source_name`<sup>Optional</sup> <a name="source_name" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_name Workspace#source_name}.

---

##### `source_url`<sup>Optional</sup> <a name="source_url" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sourceUrl"></a>

```python
source_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#source_url Workspace#source_url}.

---

##### `speculative_enabled`<sup>Optional</sup> <a name="speculative_enabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.speculativeEnabled"></a>

```python
speculative_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#speculative_enabled Workspace#speculative_enabled}.

---

##### `ssh_key_id`<sup>Optional</sup> <a name="ssh_key_id" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.sshKeyId"></a>

```python
ssh_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ssh_key_id Workspace#ssh_key_id}.

---

##### `structured_run_output_enabled`<sup>Optional</sup> <a name="structured_run_output_enabled" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.structuredRunOutputEnabled"></a>

```python
structured_run_output_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.

---

##### `tag_names`<sup>Optional</sup> <a name="tag_names" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.tagNames"></a>

```python
tag_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#tag_names Workspace#tag_names}.

---

##### `terraform_version`<sup>Optional</sup> <a name="terraform_version" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.terraformVersion"></a>

```python
terraform_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#terraform_version Workspace#terraform_version}.

---

##### `trigger_patterns`<sup>Optional</sup> <a name="trigger_patterns" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPatterns"></a>

```python
trigger_patterns: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_patterns Workspace#trigger_patterns}.

---

##### `trigger_prefixes`<sup>Optional</sup> <a name="trigger_prefixes" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.triggerPrefixes"></a>

```python
trigger_prefixes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#trigger_prefixes Workspace#trigger_prefixes}.

---

##### `vcs_repo`<sup>Optional</sup> <a name="vcs_repo" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.vcsRepo"></a>

```python
vcs_repo: WorkspaceVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

vcs_repo block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#vcs_repo Workspace#vcs_repo}

---

##### `working_directory`<sup>Optional</sup> <a name="working_directory" id="@cdktf/provider-tfe.workspace.WorkspaceConfig.property.workingDirectory"></a>

```python
working_directory: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#working_directory Workspace#working_directory}.

---

### WorkspaceVcsRepo <a name="WorkspaceVcsRepo" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.WorkspaceVcsRepo(
  identifier: str,
  branch: str = None,
  github_app_installation_id: str = None,
  ingress_submodules: typing.Union[bool, IResolvable] = None,
  oauth_token_id: str = None,
  tags_regex: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier">identifier</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#identifier Workspace#identifier}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch">branch</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#branch Workspace#branch}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules">ingress_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex">tags_regex</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#tags_regex Workspace#tags_regex}. |

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#identifier Workspace#identifier}.

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.branch"></a>

```python
branch: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#branch Workspace#branch}.

---

##### `github_app_installation_id`<sup>Optional</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#github_app_installation_id Workspace#github_app_installation_id}.

---

##### `ingress_submodules`<sup>Optional</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.ingressSubmodules"></a>

```python
ingress_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#ingress_submodules Workspace#ingress_submodules}.

---

##### `oauth_token_id`<sup>Optional</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#oauth_token_id Workspace#oauth_token_id}.

---

##### `tags_regex`<sup>Optional</sup> <a name="tags_regex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepo.property.tagsRegex"></a>

```python
tags_regex: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.63.0/docs/resources/workspace#tags_regex Workspace#tags_regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspaceVcsRepoOutputReference <a name="WorkspaceVcsRepoOutputReference" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import workspace

workspace.WorkspaceVcsRepoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetBranch">reset_branch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetGithubAppInstallationId">reset_github_app_installation_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetIngressSubmodules">reset_ingress_submodules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetOauthTokenId">reset_oauth_token_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetTagsRegex">reset_tags_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_branch` <a name="reset_branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetBranch"></a>

```python
def reset_branch() -> None
```

##### `reset_github_app_installation_id` <a name="reset_github_app_installation_id" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetGithubAppInstallationId"></a>

```python
def reset_github_app_installation_id() -> None
```

##### `reset_ingress_submodules` <a name="reset_ingress_submodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetIngressSubmodules"></a>

```python
def reset_ingress_submodules() -> None
```

##### `reset_oauth_token_id` <a name="reset_oauth_token_id" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetOauthTokenId"></a>

```python
def reset_oauth_token_id() -> None
```

##### `reset_tags_regex` <a name="reset_tags_regex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.resetTagsRegex"></a>

```python
def reset_tags_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput">branch_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput">github_app_installation_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput">identifier_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput">ingress_submodules_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput">oauth_token_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput">tags_regex_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch">branch</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId">github_app_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier">identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules">ingress_submodules</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex">tags_regex</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `branch_input`<sup>Optional</sup> <a name="branch_input" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branchInput"></a>

```python
branch_input: str
```

- *Type:* str

---

##### `github_app_installation_id_input`<sup>Optional</sup> <a name="github_app_installation_id_input" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationIdInput"></a>

```python
github_app_installation_id_input: str
```

- *Type:* str

---

##### `identifier_input`<sup>Optional</sup> <a name="identifier_input" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifierInput"></a>

```python
identifier_input: str
```

- *Type:* str

---

##### `ingress_submodules_input`<sup>Optional</sup> <a name="ingress_submodules_input" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput"></a>

```python
ingress_submodules_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_token_id_input`<sup>Optional</sup> <a name="oauth_token_id_input" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput"></a>

```python
oauth_token_id_input: str
```

- *Type:* str

---

##### `tags_regex_input`<sup>Optional</sup> <a name="tags_regex_input" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegexInput"></a>

```python
tags_regex_input: str
```

- *Type:* str

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.branch"></a>

```python
branch: str
```

- *Type:* str

---

##### `github_app_installation_id`<sup>Required</sup> <a name="github_app_installation_id" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.githubAppInstallationId"></a>

```python
github_app_installation_id: str
```

- *Type:* str

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.identifier"></a>

```python
identifier: str
```

- *Type:* str

---

##### `ingress_submodules`<sup>Required</sup> <a name="ingress_submodules" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.ingressSubmodules"></a>

```python
ingress_submodules: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `tags_regex`<sup>Required</sup> <a name="tags_regex" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.tagsRegex"></a>

```python
tags_regex: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-tfe.workspace.WorkspaceVcsRepoOutputReference.property.internalValue"></a>

```python
internal_value: WorkspaceVcsRepo
```

- *Type:* <a href="#@cdktf/provider-tfe.workspace.WorkspaceVcsRepo">WorkspaceVcsRepo</a>

---



