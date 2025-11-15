# `oauthClient` Submodule <a name="`oauthClient` Submodule" id="@cdktf/provider-tfe.oauthClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthClient <a name="OauthClient" id="@cdktf/provider-tfe.oauthClient.OauthClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client tfe_oauth_client}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import oauth_client

oauthClient.OauthClient(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_url: str,
  http_url: str,
  service_provider: str,
  agent_pool_id: str = None,
  id: str = None,
  key: str = None,
  name: str = None,
  oauth_token: str = None,
  organization: str = None,
  organization_scoped: bool | IResolvable = None,
  private_key: str = None,
  rsa_public_key: str = None,
  secret: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.apiUrl">api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#api_url OauthClient#api_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.httpUrl">http_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#http_url OauthClient#http_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.serviceProvider">service_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#agent_pool_id OauthClient#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#id OauthClient#id}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#key OauthClient#key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#name OauthClient#name}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.oauthToken">oauth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization OauthClient#organization}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.organizationScoped">organization_scoped</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization_scoped OauthClient#organization_scoped}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#private_key OauthClient#private_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#secret OauthClient#secret}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.connection"></a>

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.apiUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#api_url OauthClient#api_url}.

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.httpUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#http_url OauthClient#http_url}.

---

##### `service_provider`<sup>Required</sup> <a name="service_provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.serviceProvider"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}.

---

##### `agent_pool_id`<sup>Optional</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.agentPoolId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#agent_pool_id OauthClient#agent_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#id OauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.key"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#key OauthClient#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#name OauthClient#name}.

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.oauthToken"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.organization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization OauthClient#organization}.

---

##### `organization_scoped`<sup>Optional</sup> <a name="organization_scoped" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.organizationScoped"></a>

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization_scoped OauthClient#organization_scoped}.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.privateKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#private_key OauthClient#private_key}.

---

##### `rsa_public_key`<sup>Optional</sup> <a name="rsa_public_key" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.rsaPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-tfe.oauthClient.OauthClient.Initializer.parameter.secret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#secret OauthClient#secret}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetAgentPoolId">reset_agent_pool_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOauthToken">reset_oauth_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganization">reset_organization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganizationScoped">reset_organization_scoped</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetPrivateKey">reset_private_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetRsaPublicKey">reset_rsa_public_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.resetSecret">reset_secret</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-tfe.oauthClient.OauthClient.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.oauthClient.OauthClient.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-tfe.oauthClient.OauthClient.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-tfe.oauthClient.OauthClient.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-tfe.oauthClient.OauthClient.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-tfe.oauthClient.OauthClient.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.oauthClient.OauthClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-tfe.oauthClient.OauthClient.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktf/provider-tfe.oauthClient.OauthClient.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-tfe.oauthClient.OauthClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-tfe.oauthClient.OauthClient.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-tfe.oauthClient.OauthClient.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.oauthClient.OauthClient.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_agent_pool_id` <a name="reset_agent_pool_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetAgentPoolId"></a>

```python
def reset_agent_pool_id() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_oauth_token` <a name="reset_oauth_token" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOauthToken"></a>

```python
def reset_oauth_token() -> None
```

##### `reset_organization` <a name="reset_organization" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganization"></a>

```python
def reset_organization() -> None
```

##### `reset_organization_scoped` <a name="reset_organization_scoped" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetOrganizationScoped"></a>

```python
def reset_organization_scoped() -> None
```

##### `reset_private_key` <a name="reset_private_key" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetPrivateKey"></a>

```python
def reset_private_key() -> None
```

##### `reset_rsa_public_key` <a name="reset_rsa_public_key" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetRsaPublicKey"></a>

```python
def reset_rsa_public_key() -> None
```

##### `reset_secret` <a name="reset_secret" id="@cdktf/provider-tfe.oauthClient.OauthClient.resetSecret"></a>

```python
def reset_secret() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a OauthClient resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct"></a>

```python
from cdktf_cdktf_provider_tfe import oauth_client

oauthClient.OauthClient.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.oauthClient.OauthClient.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_tfe import oauth_client

oauthClient.OauthClient.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_tfe import oauth_client

oauthClient.OauthClient.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.oauthClient.OauthClient.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-tfe.oauthClient.OauthClient.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_tfe import oauth_client

oauthClient.OauthClient.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a OauthClient resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.oauthClient.OauthClient.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the OauthClient to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing OauthClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OauthClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenId">oauth_token_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.agentPoolIdInput">agent_pool_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrlInput">api_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrlInput">http_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenInput">oauth_token_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationInput">organization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationScopedInput">organization_scoped_input</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKeyInput">private_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKeyInput">rsa_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.secretInput">secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProviderInput">service_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrl">api_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrl">http_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthToken">oauth_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organization">organization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationScoped">organization_scoped</a></code> | <code>bool \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKey">private_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.secret">secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProvider">service_provider</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `oauth_token_id`<sup>Required</sup> <a name="oauth_token_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenId"></a>

```python
oauth_token_id: str
```

- *Type:* str

---

##### `agent_pool_id_input`<sup>Optional</sup> <a name="agent_pool_id_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.agentPoolIdInput"></a>

```python
agent_pool_id_input: str
```

- *Type:* str

---

##### `api_url_input`<sup>Optional</sup> <a name="api_url_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrlInput"></a>

```python
api_url_input: str
```

- *Type:* str

---

##### `http_url_input`<sup>Optional</sup> <a name="http_url_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrlInput"></a>

```python
http_url_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `oauth_token_input`<sup>Optional</sup> <a name="oauth_token_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthTokenInput"></a>

```python
oauth_token_input: str
```

- *Type:* str

---

##### `organization_input`<sup>Optional</sup> <a name="organization_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationInput"></a>

```python
organization_input: str
```

- *Type:* str

---

##### `organization_scoped_input`<sup>Optional</sup> <a name="organization_scoped_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationScopedInput"></a>

```python
organization_scoped_input: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `private_key_input`<sup>Optional</sup> <a name="private_key_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKeyInput"></a>

```python
private_key_input: str
```

- *Type:* str

---

##### `rsa_public_key_input`<sup>Optional</sup> <a name="rsa_public_key_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKeyInput"></a>

```python
rsa_public_key_input: str
```

- *Type:* str

---

##### `secret_input`<sup>Optional</sup> <a name="secret_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.secretInput"></a>

```python
secret_input: str
```

- *Type:* str

---

##### `service_provider_input`<sup>Optional</sup> <a name="service_provider_input" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProviderInput"></a>

```python
service_provider_input: str
```

- *Type:* str

---

##### `agent_pool_id`<sup>Required</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `oauth_token`<sup>Required</sup> <a name="oauth_token" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organization"></a>

```python
organization: str
```

- *Type:* str

---

##### `organization_scoped`<sup>Required</sup> <a name="organization_scoped" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.organizationScoped"></a>

```python
organization_scoped: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

---

##### `private_key`<sup>Required</sup> <a name="private_key" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

---

##### `rsa_public_key`<sup>Required</sup> <a name="rsa_public_key" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.rsaPublicKey"></a>

```python
rsa_public_key: str
```

- *Type:* str

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.secret"></a>

```python
secret: str
```

- *Type:* str

---

##### `service_provider`<sup>Required</sup> <a name="service_provider" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.serviceProvider"></a>

```python
service_provider: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClient.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.oauthClient.OauthClient.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### OauthClientConfig <a name="OauthClientConfig" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_tfe import oauth_client

oauthClient.OauthClientConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  api_url: str,
  http_url: str,
  service_provider: str,
  agent_pool_id: str = None,
  id: str = None,
  key: str = None,
  name: str = None,
  oauth_token: str = None,
  organization: str = None,
  organization_scoped: bool | IResolvable = None,
  private_key: str = None,
  rsa_public_key: str = None,
  secret: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.apiUrl">api_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#api_url OauthClient#api_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.httpUrl">http_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#http_url OauthClient#http_url}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.serviceProvider">service_provider</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.agentPoolId">agent_pool_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#agent_pool_id OauthClient#agent_pool_id}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#id OauthClient#id}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#key OauthClient#key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#name OauthClient#name}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.oauthToken">oauth_token</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organization">organization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization OauthClient#organization}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organizationScoped">organization_scoped</a></code> | <code>bool \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization_scoped OauthClient#organization_scoped}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.privateKey">private_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#private_key OauthClient#private_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.rsaPublicKey">rsa_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}. |
| <code><a href="#@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.secret">secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#secret OauthClient#secret}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktf.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner]

---

##### `api_url`<sup>Required</sup> <a name="api_url" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.apiUrl"></a>

```python
api_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#api_url OauthClient#api_url}.

---

##### `http_url`<sup>Required</sup> <a name="http_url" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.httpUrl"></a>

```python
http_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#http_url OauthClient#http_url}.

---

##### `service_provider`<sup>Required</sup> <a name="service_provider" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.serviceProvider"></a>

```python
service_provider: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#service_provider OauthClient#service_provider}.

---

##### `agent_pool_id`<sup>Optional</sup> <a name="agent_pool_id" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.agentPoolId"></a>

```python
agent_pool_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#agent_pool_id OauthClient#agent_pool_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#id OauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#key OauthClient#key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#name OauthClient#name}.

---

##### `oauth_token`<sup>Optional</sup> <a name="oauth_token" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.oauthToken"></a>

```python
oauth_token: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#oauth_token OauthClient#oauth_token}.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organization"></a>

```python
organization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization OauthClient#organization}.

---

##### `organization_scoped`<sup>Optional</sup> <a name="organization_scoped" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.organizationScoped"></a>

```python
organization_scoped: bool | IResolvable
```

- *Type:* bool | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#organization_scoped OauthClient#organization_scoped}.

---

##### `private_key`<sup>Optional</sup> <a name="private_key" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.privateKey"></a>

```python
private_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#private_key OauthClient#private_key}.

---

##### `rsa_public_key`<sup>Optional</sup> <a name="rsa_public_key" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.rsaPublicKey"></a>

```python
rsa_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#rsa_public_key OauthClient#rsa_public_key}.

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktf/provider-tfe.oauthClient.OauthClientConfig.property.secret"></a>

```python
secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.71.0/docs/resources/oauth_client#secret OauthClient#secret}.

---



