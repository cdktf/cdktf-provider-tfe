# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### AgentPool <a name="@cdktf/provider-tfe.AgentPool" id="cdktfprovidertfeagentpool"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/agent_pool tfe_agent_pool}.

#### Initializers <a name="@cdktf/provider-tfe.AgentPool.Initializer" id="cdktfprovidertfeagentpoolinitializer"></a>

```typescript
import { AgentPool } from '@cdktf/provider-tfe'

new AgentPool(scope: Construct, id: string, config: AgentPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeagentpoolparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeagentpoolparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeagentpoolparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.AgentPoolConfig`](#@cdktf/provider-tfe.AgentPoolConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPool.parameter.scope" id="cdktfprovidertfeagentpoolparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPool.parameter.id" id="cdktfprovidertfeagentpoolparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPool.parameter.config" id="cdktfprovidertfeagentpoolparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.AgentPoolConfig`](#@cdktf/provider-tfe.AgentPoolConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeagentpoolresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.AgentPool.resetId" id="cdktfprovidertfeagentpoolresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfeagentpoolpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfeagentpoolpropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfeagentpoolpropertyorganizationinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfeagentpoolpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfeagentpoolpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfeagentpoolpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPool.property.idInput" id="cdktfprovidertfeagentpoolpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPool.property.nameInput" id="cdktfprovidertfeagentpoolpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPool.property.organizationInput" id="cdktfprovidertfeagentpoolpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPool.property.id" id="cdktfprovidertfeagentpoolpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPool.property.name" id="cdktfprovidertfeagentpoolpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPool.property.organization" id="cdktfprovidertfeagentpoolpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeagentpoolpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.AgentPool.property.tfResourceType" id="cdktfprovidertfeagentpoolpropertytfresourcetype"></a>

- *Type:* `string`

---

### AgentToken <a name="@cdktf/provider-tfe.AgentToken" id="cdktfprovidertfeagenttoken"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/agent_token tfe_agent_token}.

#### Initializers <a name="@cdktf/provider-tfe.AgentToken.Initializer" id="cdktfprovidertfeagenttokeninitializer"></a>

```typescript
import { AgentToken } from '@cdktf/provider-tfe'

new AgentToken(scope: Construct, id: string, config: AgentTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeagenttokenparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeagenttokenparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeagenttokenparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.AgentTokenConfig`](#@cdktf/provider-tfe.AgentTokenConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentToken.parameter.scope" id="cdktfprovidertfeagenttokenparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentToken.parameter.id" id="cdktfprovidertfeagenttokenparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentToken.parameter.config" id="cdktfprovidertfeagenttokenparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.AgentTokenConfig`](#@cdktf/provider-tfe.AgentTokenConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeagenttokenresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.AgentToken.resetId" id="cdktfprovidertfeagenttokenresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`token`](#cdktfprovidertfeagenttokenpropertytoken)<span title="Required">*</span> | `string` | *No description.* |
| [`agentPoolIdInput`](#cdktfprovidertfeagenttokenpropertyagentpoolidinput) | `string` | *No description.* |
| [`descriptionInput`](#cdktfprovidertfeagenttokenpropertydescriptioninput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfeagenttokenpropertyidinput) | `string` | *No description.* |
| [`agentPoolId`](#cdktfprovidertfeagenttokenpropertyagentpoolid)<span title="Required">*</span> | `string` | *No description.* |
| [`description`](#cdktfprovidertfeagenttokenpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfeagenttokenpropertyid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `token`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentToken.property.token" id="cdktfprovidertfeagenttokenpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

---

##### `agentPoolIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentToken.property.agentPoolIdInput" id="cdktfprovidertfeagenttokenpropertyagentpoolidinput"></a>

```typescript
public readonly agentPoolIdInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentToken.property.descriptionInput" id="cdktfprovidertfeagenttokenpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentToken.property.idInput" id="cdktfprovidertfeagenttokenpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `agentPoolId`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentToken.property.agentPoolId" id="cdktfprovidertfeagenttokenpropertyagentpoolid"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentToken.property.description" id="cdktfprovidertfeagenttokenpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentToken.property.id" id="cdktfprovidertfeagenttokenpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeagenttokenpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.AgentToken.property.tfResourceType" id="cdktfprovidertfeagenttokenpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeAgentPool <a name="@cdktf/provider-tfe.DataTfeAgentPool" id="cdktfprovidertfedatatfeagentpool"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/agent_pool tfe_agent_pool}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeAgentPool.Initializer" id="cdktfprovidertfedatatfeagentpoolinitializer"></a>

```typescript
import { DataTfeAgentPool } from '@cdktf/provider-tfe'

new DataTfeAgentPool(scope: Construct, id: string, config: DataTfeAgentPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeagentpoolparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeagentpoolparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeagentpoolparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeAgentPoolConfig`](#@cdktf/provider-tfe.DataTfeAgentPoolConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.parameter.scope" id="cdktfprovidertfedatatfeagentpoolparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.parameter.id" id="cdktfprovidertfedatatfeagentpoolparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.parameter.config" id="cdktfprovidertfedatatfeagentpoolparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeAgentPoolConfig`](#@cdktf/provider-tfe.DataTfeAgentPoolConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeagentpoolresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeAgentPool.resetId" id="cdktfprovidertfedatatfeagentpoolresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfedatatfeagentpoolpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfedatatfeagentpoolpropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfeagentpoolpropertyorganizationinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeagentpoolpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfeagentpoolpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeagentpoolpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.property.idInput" id="cdktfprovidertfedatatfeagentpoolpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.property.nameInput" id="cdktfprovidertfedatatfeagentpoolpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.property.organizationInput" id="cdktfprovidertfedatatfeagentpoolpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.property.id" id="cdktfprovidertfedatatfeagentpoolpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.property.name" id="cdktfprovidertfedatatfeagentpoolpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPool.property.organization" id="cdktfprovidertfedatatfeagentpoolpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeagentpoolpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeAgentPool.property.tfResourceType" id="cdktfprovidertfedatatfeagentpoolpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeIpRanges <a name="@cdktf/provider-tfe.DataTfeIpRanges" id="cdktfprovidertfedatatfeipranges"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges tfe_ip_ranges}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeIpRanges.Initializer" id="cdktfprovidertfedatatfeiprangesinitializer"></a>

```typescript
import { DataTfeIpRanges } from '@cdktf/provider-tfe'

new DataTfeIpRanges(scope: Construct, id: string, config?: DataTfeIpRangesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeiprangesparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeiprangesparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeiprangesparameterconfig) | [`@cdktf/provider-tfe.DataTfeIpRangesConfig`](#@cdktf/provider-tfe.DataTfeIpRangesConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.parameter.scope" id="cdktfprovidertfedatatfeiprangesparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.parameter.id" id="cdktfprovidertfedatatfeiprangesparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.parameter.config" id="cdktfprovidertfedatatfeiprangesparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeIpRangesConfig`](#@cdktf/provider-tfe.DataTfeIpRangesConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeiprangesresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeIpRanges.resetId" id="cdktfprovidertfedatatfeiprangesresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`api`](#cdktfprovidertfedatatfeiprangespropertyapi)<span title="Required">*</span> | `string`[] | *No description.* |
| [`notifications`](#cdktfprovidertfedatatfeiprangespropertynotifications)<span title="Required">*</span> | `string`[] | *No description.* |
| [`sentinel`](#cdktfprovidertfedatatfeiprangespropertysentinel)<span title="Required">*</span> | `string`[] | *No description.* |
| [`vcs`](#cdktfprovidertfedatatfeiprangespropertyvcs)<span title="Required">*</span> | `string`[] | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeiprangespropertyidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeiprangespropertyid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `api`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.property.api" id="cdktfprovidertfedatatfeiprangespropertyapi"></a>

```typescript
public readonly api: string[];
```

- *Type:* `string`[]

---

##### `notifications`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.property.notifications" id="cdktfprovidertfedatatfeiprangespropertynotifications"></a>

```typescript
public readonly notifications: string[];
```

- *Type:* `string`[]

---

##### `sentinel`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.property.sentinel" id="cdktfprovidertfedatatfeiprangespropertysentinel"></a>

```typescript
public readonly sentinel: string[];
```

- *Type:* `string`[]

---

##### `vcs`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.property.vcs" id="cdktfprovidertfedatatfeiprangespropertyvcs"></a>

```typescript
public readonly vcs: string[];
```

- *Type:* `string`[]

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.property.idInput" id="cdktfprovidertfedatatfeiprangespropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeIpRanges.property.id" id="cdktfprovidertfedatatfeiprangespropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeiprangespropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeIpRanges.property.tfResourceType" id="cdktfprovidertfedatatfeiprangespropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeOauthClient <a name="@cdktf/provider-tfe.DataTfeOauthClient" id="cdktfprovidertfedatatfeoauthclient"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/oauth_client tfe_oauth_client}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeOauthClient.Initializer" id="cdktfprovidertfedatatfeoauthclientinitializer"></a>

```typescript
import { DataTfeOauthClient } from '@cdktf/provider-tfe'

new DataTfeOauthClient(scope: Construct, id: string, config: DataTfeOauthClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeoauthclientparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeoauthclientparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeoauthclientparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeOauthClientConfig`](#@cdktf/provider-tfe.DataTfeOauthClientConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.parameter.scope" id="cdktfprovidertfedatatfeoauthclientparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.parameter.id" id="cdktfprovidertfedatatfeoauthclientparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.parameter.config" id="cdktfprovidertfedatatfeoauthclientparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeOauthClientConfig`](#@cdktf/provider-tfe.DataTfeOauthClientConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeoauthclientresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeOauthClient.resetId" id="cdktfprovidertfedatatfeoauthclientresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`apiUrl`](#cdktfprovidertfedatatfeoauthclientpropertyapiurl)<span title="Required">*</span> | `string` | *No description.* |
| [`httpUrl`](#cdktfprovidertfedatatfeoauthclientpropertyhttpurl)<span title="Required">*</span> | `string` | *No description.* |
| [`oauthTokenId`](#cdktfprovidertfedatatfeoauthclientpropertyoauthtokenid)<span title="Required">*</span> | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeoauthclientpropertyidinput) | `string` | *No description.* |
| [`oauthClientIdInput`](#cdktfprovidertfedatatfeoauthclientpropertyoauthclientidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeoauthclientpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`oauthClientId`](#cdktfprovidertfedatatfeoauthclientpropertyoauthclientid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `apiUrl`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.apiUrl" id="cdktfprovidertfedatatfeoauthclientpropertyapiurl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* `string`

---

##### `httpUrl`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.httpUrl" id="cdktfprovidertfedatatfeoauthclientpropertyhttpurl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* `string`

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.oauthTokenId" id="cdktfprovidertfedatatfeoauthclientpropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.idInput" id="cdktfprovidertfedatatfeoauthclientpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.oauthClientIdInput" id="cdktfprovidertfedatatfeoauthclientpropertyoauthclientidinput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.id" id="cdktfprovidertfedatatfeoauthclientpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `oauthClientId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.oauthClientId" id="cdktfprovidertfedatatfeoauthclientpropertyoauthclientid"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeoauthclientpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeOauthClient.property.tfResourceType" id="cdktfprovidertfedatatfeoauthclientpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeOrganization <a name="@cdktf/provider-tfe.DataTfeOrganization" id="cdktfprovidertfedatatfeorganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/organization tfe_organization}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeOrganization.Initializer" id="cdktfprovidertfedatatfeorganizationinitializer"></a>

```typescript
import { DataTfeOrganization } from '@cdktf/provider-tfe'

new DataTfeOrganization(scope: Construct, id: string, config: DataTfeOrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeorganizationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeorganizationparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeorganizationparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeOrganizationConfig`](#@cdktf/provider-tfe.DataTfeOrganizationConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.parameter.scope" id="cdktfprovidertfedatatfeorganizationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.parameter.id" id="cdktfprovidertfedatatfeorganizationparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.parameter.config" id="cdktfprovidertfedatatfeorganizationparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeOrganizationConfig`](#@cdktf/provider-tfe.DataTfeOrganizationConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeorganizationresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeOrganization.resetId" id="cdktfprovidertfedatatfeorganizationresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`collaboratorAuthPolicy`](#cdktfprovidertfedatatfeorganizationpropertycollaboratorauthpolicy)<span title="Required">*</span> | `string` | *No description.* |
| [`costEstimationEnabled`](#cdktfprovidertfedatatfeorganizationpropertycostestimationenabled)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`email`](#cdktfprovidertfedatatfeorganizationpropertyemail)<span title="Required">*</span> | `string` | *No description.* |
| [`externalId`](#cdktfprovidertfedatatfeorganizationpropertyexternalid)<span title="Required">*</span> | `string` | *No description.* |
| [`ownersTeamSamlRoleId`](#cdktfprovidertfedatatfeorganizationpropertyownersteamsamlroleid)<span title="Required">*</span> | `string` | *No description.* |
| [`sendPassingStatusesForUntriggeredSpeculativePlans`](#cdktfprovidertfedatatfeorganizationpropertysendpassingstatusesforuntriggeredspeculativeplans)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`twoFactorConformant`](#cdktfprovidertfedatatfeorganizationpropertytwofactorconformant)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeorganizationpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfedatatfeorganizationpropertynameinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeorganizationpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfeorganizationpropertyname)<span title="Required">*</span> | `string` | *No description.* |

---

##### `collaboratorAuthPolicy`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.collaboratorAuthPolicy" id="cdktfprovidertfedatatfeorganizationpropertycollaboratorauthpolicy"></a>

```typescript
public readonly collaboratorAuthPolicy: string;
```

- *Type:* `string`

---

##### `costEstimationEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.costEstimationEnabled" id="cdktfprovidertfedatatfeorganizationpropertycostestimationenabled"></a>

```typescript
public readonly costEstimationEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.email" id="cdktfprovidertfedatatfeorganizationpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

---

##### `externalId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.externalId" id="cdktfprovidertfedatatfeorganizationpropertyexternalid"></a>

```typescript
public readonly externalId: string;
```

- *Type:* `string`

---

##### `ownersTeamSamlRoleId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.ownersTeamSamlRoleId" id="cdktfprovidertfedatatfeorganizationpropertyownersteamsamlroleid"></a>

```typescript
public readonly ownersTeamSamlRoleId: string;
```

- *Type:* `string`

---

##### `sendPassingStatusesForUntriggeredSpeculativePlans`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.sendPassingStatusesForUntriggeredSpeculativePlans" id="cdktfprovidertfedatatfeorganizationpropertysendpassingstatusesforuntriggeredspeculativeplans"></a>

```typescript
public readonly sendPassingStatusesForUntriggeredSpeculativePlans: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `twoFactorConformant`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.twoFactorConformant" id="cdktfprovidertfedatatfeorganizationpropertytwofactorconformant"></a>

```typescript
public readonly twoFactorConformant: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.idInput" id="cdktfprovidertfedatatfeorganizationpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.nameInput" id="cdktfprovidertfedatatfeorganizationpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.id" id="cdktfprovidertfedatatfeorganizationpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganization.property.name" id="cdktfprovidertfedatatfeorganizationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeorganizationpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeOrganization.property.tfResourceType" id="cdktfprovidertfedatatfeorganizationpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeOrganizationMembership <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership" id="cdktfprovidertfedatatfeorganizationmembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/organization_membership tfe_organization_membership}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.Initializer" id="cdktfprovidertfedatatfeorganizationmembershipinitializer"></a>

```typescript
import { DataTfeOrganizationMembership } from '@cdktf/provider-tfe'

new DataTfeOrganizationMembership(scope: Construct, id: string, config: DataTfeOrganizationMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeorganizationmembershipparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeorganizationmembershipparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeorganizationmembershipparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig`](#@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.parameter.scope" id="cdktfprovidertfedatatfeorganizationmembershipparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.parameter.id" id="cdktfprovidertfedatatfeorganizationmembershipparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.parameter.config" id="cdktfprovidertfedatatfeorganizationmembershipparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig`](#@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeorganizationmembershipresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.resetId" id="cdktfprovidertfedatatfeorganizationmembershipresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`userId`](#cdktfprovidertfedatatfeorganizationmembershippropertyuserid)<span title="Required">*</span> | `string` | *No description.* |
| [`emailInput`](#cdktfprovidertfedatatfeorganizationmembershippropertyemailinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeorganizationmembershippropertyidinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfeorganizationmembershippropertyorganizationinput) | `string` | *No description.* |
| [`email`](#cdktfprovidertfedatatfeorganizationmembershippropertyemail)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeorganizationmembershippropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeorganizationmembershippropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.userId" id="cdktfprovidertfedatatfeorganizationmembershippropertyuserid"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

##### `emailInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.emailInput" id="cdktfprovidertfedatatfeorganizationmembershippropertyemailinput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.idInput" id="cdktfprovidertfedatatfeorganizationmembershippropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.organizationInput" id="cdktfprovidertfedatatfeorganizationmembershippropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.email" id="cdktfprovidertfedatatfeorganizationmembershippropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.id" id="cdktfprovidertfedatatfeorganizationmembershippropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.organization" id="cdktfprovidertfedatatfeorganizationmembershippropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeorganizationmembershippropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeOrganizationMembership.property.tfResourceType" id="cdktfprovidertfedatatfeorganizationmembershippropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeOrganizationRunTask <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask" id="cdktfprovidertfedatatfeorganizationruntask"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task tfe_organization_run_task}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.Initializer" id="cdktfprovidertfedatatfeorganizationruntaskinitializer"></a>

```typescript
import { DataTfeOrganizationRunTask } from '@cdktf/provider-tfe'

new DataTfeOrganizationRunTask(scope: Construct, id: string, config: DataTfeOrganizationRunTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeorganizationruntaskparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeorganizationruntaskparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeorganizationruntaskparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig`](#@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.parameter.scope" id="cdktfprovidertfedatatfeorganizationruntaskparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.parameter.id" id="cdktfprovidertfedatatfeorganizationruntaskparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.parameter.config" id="cdktfprovidertfedatatfeorganizationruntaskparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig`](#@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetCategory`](#cdktfprovidertfedatatfeorganizationruntaskresetcategory) | *No description.* |
| [`resetEnabled`](#cdktfprovidertfedatatfeorganizationruntaskresetenabled) | *No description.* |
| [`resetId`](#cdktfprovidertfedatatfeorganizationruntaskresetid) | *No description.* |
| [`resetUrl`](#cdktfprovidertfedatatfeorganizationruntaskreseturl) | *No description.* |

---

##### `resetCategory` <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.resetCategory" id="cdktfprovidertfedatatfeorganizationruntaskresetcategory"></a>

```typescript
public resetCategory()
```

##### `resetEnabled` <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.resetEnabled" id="cdktfprovidertfedatatfeorganizationruntaskresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.resetId" id="cdktfprovidertfedatatfeorganizationruntaskresetid"></a>

```typescript
public resetId()
```

##### `resetUrl` <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.resetUrl" id="cdktfprovidertfedatatfeorganizationruntaskreseturl"></a>

```typescript
public resetUrl()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`categoryInput`](#cdktfprovidertfedatatfeorganizationruntaskpropertycategoryinput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidertfedatatfeorganizationruntaskpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeorganizationruntaskpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfedatatfeorganizationruntaskpropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfeorganizationruntaskpropertyorganizationinput) | `string` | *No description.* |
| [`urlInput`](#cdktfprovidertfedatatfeorganizationruntaskpropertyurlinput) | `string` | *No description.* |
| [`category`](#cdktfprovidertfedatatfeorganizationruntaskpropertycategory)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidertfedatatfeorganizationruntaskpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfedatatfeorganizationruntaskpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfeorganizationruntaskpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeorganizationruntaskpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`url`](#cdktfprovidertfedatatfeorganizationruntaskpropertyurl)<span title="Required">*</span> | `string` | *No description.* |

---

##### `categoryInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.categoryInput" id="cdktfprovidertfedatatfeorganizationruntaskpropertycategoryinput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.enabledInput" id="cdktfprovidertfedatatfeorganizationruntaskpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.idInput" id="cdktfprovidertfedatatfeorganizationruntaskpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.nameInput" id="cdktfprovidertfedatatfeorganizationruntaskpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.organizationInput" id="cdktfprovidertfedatatfeorganizationruntaskpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `urlInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.urlInput" id="cdktfprovidertfedatatfeorganizationruntaskpropertyurlinput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* `string`

---

##### `category`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.category" id="cdktfprovidertfedatatfeorganizationruntaskpropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.enabled" id="cdktfprovidertfedatatfeorganizationruntaskpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.id" id="cdktfprovidertfedatatfeorganizationruntaskpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.name" id="cdktfprovidertfedatatfeorganizationruntaskpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.organization" id="cdktfprovidertfedatatfeorganizationruntaskpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.url" id="cdktfprovidertfedatatfeorganizationruntaskpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeorganizationruntaskpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTask.property.tfResourceType" id="cdktfprovidertfedatatfeorganizationruntaskpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeOrganizations <a name="@cdktf/provider-tfe.DataTfeOrganizations" id="cdktfprovidertfedatatfeorganizations"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/organizations tfe_organizations}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeOrganizations.Initializer" id="cdktfprovidertfedatatfeorganizationsinitializer"></a>

```typescript
import { DataTfeOrganizations } from '@cdktf/provider-tfe'

new DataTfeOrganizations(scope: Construct, id: string, config?: DataTfeOrganizationsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeorganizationsparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeorganizationsparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeorganizationsparameterconfig) | [`@cdktf/provider-tfe.DataTfeOrganizationsConfig`](#@cdktf/provider-tfe.DataTfeOrganizationsConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.parameter.scope" id="cdktfprovidertfedatatfeorganizationsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.parameter.id" id="cdktfprovidertfedatatfeorganizationsparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.parameter.config" id="cdktfprovidertfedatatfeorganizationsparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeOrganizationsConfig`](#@cdktf/provider-tfe.DataTfeOrganizationsConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAdmin`](#cdktfprovidertfedatatfeorganizationsresetadmin) | *No description.* |
| [`resetId`](#cdktfprovidertfedatatfeorganizationsresetid) | *No description.* |

---

##### `resetAdmin` <a name="@cdktf/provider-tfe.DataTfeOrganizations.resetAdmin" id="cdktfprovidertfedatatfeorganizationsresetadmin"></a>

```typescript
public resetAdmin()
```

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeOrganizations.resetId" id="cdktfprovidertfedatatfeorganizationsresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ids`](#cdktfprovidertfedatatfeorganizationspropertyids)<span title="Required">*</span> | [`cdktf.StringMap`](#cdktf.StringMap) | *No description.* |
| [`names`](#cdktfprovidertfedatatfeorganizationspropertynames)<span title="Required">*</span> | `string`[] | *No description.* |
| [`adminInput`](#cdktfprovidertfedatatfeorganizationspropertyadmininput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeorganizationspropertyidinput) | `string` | *No description.* |
| [`admin`](#cdktfprovidertfedatatfeorganizationspropertyadmin)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfedatatfeorganizationspropertyid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `ids`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.property.ids" id="cdktfprovidertfedatatfeorganizationspropertyids"></a>

```typescript
public readonly ids: StringMap;
```

- *Type:* [`cdktf.StringMap`](#cdktf.StringMap)

---

##### `names`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.property.names" id="cdktfprovidertfedatatfeorganizationspropertynames"></a>

```typescript
public readonly names: string[];
```

- *Type:* `string`[]

---

##### `adminInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.property.adminInput" id="cdktfprovidertfedatatfeorganizationspropertyadmininput"></a>

```typescript
public readonly adminInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.property.idInput" id="cdktfprovidertfedatatfeorganizationspropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `admin`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.property.admin" id="cdktfprovidertfedatatfeorganizationspropertyadmin"></a>

```typescript
public readonly admin: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizations.property.id" id="cdktfprovidertfedatatfeorganizationspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeorganizationspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeOrganizations.property.tfResourceType" id="cdktfprovidertfedatatfeorganizationspropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeOutputs <a name="@cdktf/provider-tfe.DataTfeOutputs" id="cdktfprovidertfedatatfeoutputs"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/outputs tfe_outputs}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeOutputs.Initializer" id="cdktfprovidertfedatatfeoutputsinitializer"></a>

```typescript
import { DataTfeOutputs } from '@cdktf/provider-tfe'

new DataTfeOutputs(scope: Construct, id: string, config: DataTfeOutputsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeoutputsparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeoutputsparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeoutputsparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeOutputsConfig`](#@cdktf/provider-tfe.DataTfeOutputsConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.parameter.scope" id="cdktfprovidertfedatatfeoutputsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.parameter.id" id="cdktfprovidertfedatatfeoutputsparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.parameter.config" id="cdktfprovidertfedatatfeoutputsparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeOutputsConfig`](#@cdktf/provider-tfe.DataTfeOutputsConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetValues`](#cdktfprovidertfedatatfeoutputsresetvalues) | *No description.* |

---

##### `resetValues` <a name="@cdktf/provider-tfe.DataTfeOutputs.resetValues" id="cdktfprovidertfedatatfeoutputsresetvalues"></a>

```typescript
public resetValues()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`id`](#cdktfprovidertfedatatfeoutputspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfeoutputspropertyorganizationinput) | `string` | *No description.* |
| [`valuesInput`](#cdktfprovidertfedatatfeoutputspropertyvaluesinput) | {[ key: string ]: `any`} | *No description.* |
| [`workspaceInput`](#cdktfprovidertfedatatfeoutputspropertyworkspaceinput) | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeoutputspropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`values`](#cdktfprovidertfedatatfeoutputspropertyvalues)<span title="Required">*</span> | {[ key: string ]: `any`} | *No description.* |
| [`workspace`](#cdktfprovidertfedatatfeoutputspropertyworkspace)<span title="Required">*</span> | `string` | *No description.* |

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.property.id" id="cdktfprovidertfedatatfeoutputspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.property.organizationInput" id="cdktfprovidertfedatatfeoutputspropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `valuesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.property.valuesInput" id="cdktfprovidertfedatatfeoutputspropertyvaluesinput"></a>

```typescript
public readonly valuesInput: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `workspaceInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.property.workspaceInput" id="cdktfprovidertfedatatfeoutputspropertyworkspaceinput"></a>

```typescript
public readonly workspaceInput: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.property.organization" id="cdktfprovidertfedatatfeoutputspropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `values`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.property.values" id="cdktfprovidertfedatatfeoutputspropertyvalues"></a>

```typescript
public readonly values: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

---

##### `workspace`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputs.property.workspace" id="cdktfprovidertfedatatfeoutputspropertyworkspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeoutputspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeOutputs.property.tfResourceType" id="cdktfprovidertfedatatfeoutputspropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeSlug <a name="@cdktf/provider-tfe.DataTfeSlug" id="cdktfprovidertfedatatfeslug"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/slug tfe_slug}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeSlug.Initializer" id="cdktfprovidertfedatatfesluginitializer"></a>

```typescript
import { DataTfeSlug } from '@cdktf/provider-tfe'

new DataTfeSlug(scope: Construct, id: string, config: DataTfeSlugConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeslugparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeslugparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeslugparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeSlugConfig`](#@cdktf/provider-tfe.DataTfeSlugConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSlug.parameter.scope" id="cdktfprovidertfedatatfeslugparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSlug.parameter.id" id="cdktfprovidertfedatatfeslugparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSlug.parameter.config" id="cdktfprovidertfedatatfeslugparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeSlugConfig`](#@cdktf/provider-tfe.DataTfeSlugConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeslugresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeSlug.resetId" id="cdktfprovidertfedatatfeslugresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfedatatfeslugpropertyidinput) | `string` | *No description.* |
| [`sourcePathInput`](#cdktfprovidertfedatatfeslugpropertysourcepathinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeslugpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`sourcePath`](#cdktfprovidertfedatatfeslugpropertysourcepath)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSlug.property.idInput" id="cdktfprovidertfedatatfeslugpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `sourcePathInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSlug.property.sourcePathInput" id="cdktfprovidertfedatatfeslugpropertysourcepathinput"></a>

```typescript
public readonly sourcePathInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSlug.property.id" id="cdktfprovidertfedatatfeslugpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `sourcePath`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSlug.property.sourcePath" id="cdktfprovidertfedatatfeslugpropertysourcepath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeslugpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeSlug.property.tfResourceType" id="cdktfprovidertfedatatfeslugpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeSshKey <a name="@cdktf/provider-tfe.DataTfeSshKey" id="cdktfprovidertfedatatfesshkey"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/ssh_key tfe_ssh_key}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeSshKey.Initializer" id="cdktfprovidertfedatatfesshkeyinitializer"></a>

```typescript
import { DataTfeSshKey } from '@cdktf/provider-tfe'

new DataTfeSshKey(scope: Construct, id: string, config: DataTfeSshKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfesshkeyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfesshkeyparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfesshkeyparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeSshKeyConfig`](#@cdktf/provider-tfe.DataTfeSshKeyConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.parameter.scope" id="cdktfprovidertfedatatfesshkeyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.parameter.id" id="cdktfprovidertfedatatfesshkeyparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.parameter.config" id="cdktfprovidertfedatatfesshkeyparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeSshKeyConfig`](#@cdktf/provider-tfe.DataTfeSshKeyConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfesshkeyresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeSshKey.resetId" id="cdktfprovidertfedatatfesshkeyresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfedatatfesshkeypropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfedatatfesshkeypropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfesshkeypropertyorganizationinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfesshkeypropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfesshkeypropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfesshkeypropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.property.idInput" id="cdktfprovidertfedatatfesshkeypropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.property.nameInput" id="cdktfprovidertfedatatfesshkeypropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.property.organizationInput" id="cdktfprovidertfedatatfesshkeypropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.property.id" id="cdktfprovidertfedatatfesshkeypropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.property.name" id="cdktfprovidertfedatatfesshkeypropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKey.property.organization" id="cdktfprovidertfedatatfesshkeypropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfesshkeypropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeSshKey.property.tfResourceType" id="cdktfprovidertfedatatfesshkeypropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeTeam <a name="@cdktf/provider-tfe.DataTfeTeam" id="cdktfprovidertfedatatfeteam"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/team tfe_team}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeTeam.Initializer" id="cdktfprovidertfedatatfeteaminitializer"></a>

```typescript
import { DataTfeTeam } from '@cdktf/provider-tfe'

new DataTfeTeam(scope: Construct, id: string, config: DataTfeTeamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeteamparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeteamparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeteamparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeTeamConfig`](#@cdktf/provider-tfe.DataTfeTeamConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.parameter.scope" id="cdktfprovidertfedatatfeteamparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.parameter.id" id="cdktfprovidertfedatatfeteamparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.parameter.config" id="cdktfprovidertfedatatfeteamparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeTeamConfig`](#@cdktf/provider-tfe.DataTfeTeamConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeteamresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeTeam.resetId" id="cdktfprovidertfedatatfeteamresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`ssoTeamId`](#cdktfprovidertfedatatfeteampropertyssoteamid)<span title="Required">*</span> | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeteampropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfedatatfeteampropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfeteampropertyorganizationinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeteampropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfeteampropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeteampropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `ssoTeamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.property.ssoTeamId" id="cdktfprovidertfedatatfeteampropertyssoteamid"></a>

```typescript
public readonly ssoTeamId: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.property.idInput" id="cdktfprovidertfedatatfeteampropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.property.nameInput" id="cdktfprovidertfedatatfeteampropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.property.organizationInput" id="cdktfprovidertfedatatfeteampropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.property.id" id="cdktfprovidertfedatatfeteampropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.property.name" id="cdktfprovidertfedatatfeteampropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeam.property.organization" id="cdktfprovidertfedatatfeteampropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeteampropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeTeam.property.tfResourceType" id="cdktfprovidertfedatatfeteampropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeTeamAccess <a name="@cdktf/provider-tfe.DataTfeTeamAccess" id="cdktfprovidertfedatatfeteamaccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/team_access tfe_team_access}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeTeamAccess.Initializer" id="cdktfprovidertfedatatfeteamaccessinitializer"></a>

```typescript
import { DataTfeTeamAccess } from '@cdktf/provider-tfe'

new DataTfeTeamAccess(scope: Construct, id: string, config: DataTfeTeamAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeteamaccessparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeteamaccessparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeteamaccessparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeTeamAccessConfig`](#@cdktf/provider-tfe.DataTfeTeamAccessConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.parameter.scope" id="cdktfprovidertfedatatfeteamaccessparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.parameter.id" id="cdktfprovidertfedatatfeteamaccessparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.parameter.config" id="cdktfprovidertfedatatfeteamaccessparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeTeamAccessConfig`](#@cdktf/provider-tfe.DataTfeTeamAccessConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeteamaccessresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeTeamAccess.resetId" id="cdktfprovidertfedatatfeteamaccessresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`access`](#cdktfprovidertfedatatfeteamaccesspropertyaccess)<span title="Required">*</span> | `string` | *No description.* |
| [`permissions`](#cdktfprovidertfedatatfeteamaccesspropertypermissions)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList`](#@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList) | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeteamaccesspropertyidinput) | `string` | *No description.* |
| [`teamIdInput`](#cdktfprovidertfedatatfeteamaccesspropertyteamidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfedatatfeteamaccesspropertyworkspaceidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeteamaccesspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`teamId`](#cdktfprovidertfedatatfeteamaccesspropertyteamid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfedatatfeteamaccesspropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `access`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.access" id="cdktfprovidertfedatatfeteamaccesspropertyaccess"></a>

```typescript
public readonly access: string;
```

- *Type:* `string`

---

##### `permissions`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.permissions" id="cdktfprovidertfedatatfeteamaccesspropertypermissions"></a>

```typescript
public readonly permissions: DataTfeTeamAccessPermissionsList;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList`](#@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.idInput" id="cdktfprovidertfedatatfeteamaccesspropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `teamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.teamIdInput" id="cdktfprovidertfedatatfeteamaccesspropertyteamidinput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.workspaceIdInput" id="cdktfprovidertfedatatfeteamaccesspropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.id" id="cdktfprovidertfedatatfeteamaccesspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.teamId" id="cdktfprovidertfedatatfeteamaccesspropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.workspaceId" id="cdktfprovidertfedatatfeteamaccesspropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeteamaccesspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeTeamAccess.property.tfResourceType" id="cdktfprovidertfedatatfeteamaccesspropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeVariables <a name="@cdktf/provider-tfe.DataTfeVariables" id="cdktfprovidertfedatatfevariables"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/variables tfe_variables}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariables.Initializer" id="cdktfprovidertfedatatfevariablesinitializer"></a>

```typescript
import { DataTfeVariables } from '@cdktf/provider-tfe'

new DataTfeVariables(scope: Construct, id: string, config?: DataTfeVariablesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfevariablesparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfevariablesparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfevariablesparameterconfig) | [`@cdktf/provider-tfe.DataTfeVariablesConfig`](#@cdktf/provider-tfe.DataTfeVariablesConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.parameter.scope" id="cdktfprovidertfedatatfevariablesparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.parameter.id" id="cdktfprovidertfedatatfevariablesparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.parameter.config" id="cdktfprovidertfedatatfevariablesparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeVariablesConfig`](#@cdktf/provider-tfe.DataTfeVariablesConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfevariablesresetid) | *No description.* |
| [`resetVariableSetId`](#cdktfprovidertfedatatfevariablesresetvariablesetid) | *No description.* |
| [`resetWorkspaceId`](#cdktfprovidertfedatatfevariablesresetworkspaceid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeVariables.resetId" id="cdktfprovidertfedatatfevariablesresetid"></a>

```typescript
public resetId()
```

##### `resetVariableSetId` <a name="@cdktf/provider-tfe.DataTfeVariables.resetVariableSetId" id="cdktfprovidertfedatatfevariablesresetvariablesetid"></a>

```typescript
public resetVariableSetId()
```

##### `resetWorkspaceId` <a name="@cdktf/provider-tfe.DataTfeVariables.resetWorkspaceId" id="cdktfprovidertfedatatfevariablesresetworkspaceid"></a>

```typescript
public resetWorkspaceId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`env`](#cdktfprovidertfedatatfevariablespropertyenv)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeVariablesEnvList`](#@cdktf/provider-tfe.DataTfeVariablesEnvList) | *No description.* |
| [`terraform`](#cdktfprovidertfedatatfevariablespropertyterraform)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeVariablesTerraformList`](#@cdktf/provider-tfe.DataTfeVariablesTerraformList) | *No description.* |
| [`variables`](#cdktfprovidertfedatatfevariablespropertyvariables)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeVariablesVariablesList`](#@cdktf/provider-tfe.DataTfeVariablesVariablesList) | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfevariablespropertyidinput) | `string` | *No description.* |
| [`variableSetIdInput`](#cdktfprovidertfedatatfevariablespropertyvariablesetidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfedatatfevariablespropertyworkspaceidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfevariablespropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`variableSetId`](#cdktfprovidertfedatatfevariablespropertyvariablesetid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfedatatfevariablespropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `env`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.env" id="cdktfprovidertfedatatfevariablespropertyenv"></a>

```typescript
public readonly env: DataTfeVariablesEnvList;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeVariablesEnvList`](#@cdktf/provider-tfe.DataTfeVariablesEnvList)

---

##### `terraform`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.terraform" id="cdktfprovidertfedatatfevariablespropertyterraform"></a>

```typescript
public readonly terraform: DataTfeVariablesTerraformList;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeVariablesTerraformList`](#@cdktf/provider-tfe.DataTfeVariablesTerraformList)

---

##### `variables`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.variables" id="cdktfprovidertfedatatfevariablespropertyvariables"></a>

```typescript
public readonly variables: DataTfeVariablesVariablesList;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeVariablesVariablesList`](#@cdktf/provider-tfe.DataTfeVariablesVariablesList)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.idInput" id="cdktfprovidertfedatatfevariablespropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `variableSetIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.variableSetIdInput" id="cdktfprovidertfedatatfevariablespropertyvariablesetidinput"></a>

```typescript
public readonly variableSetIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.workspaceIdInput" id="cdktfprovidertfedatatfevariablespropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.id" id="cdktfprovidertfedatatfevariablespropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `variableSetId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.variableSetId" id="cdktfprovidertfedatatfevariablespropertyvariablesetid"></a>

```typescript
public readonly variableSetId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariables.property.workspaceId" id="cdktfprovidertfedatatfevariablespropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfevariablespropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeVariables.property.tfResourceType" id="cdktfprovidertfedatatfevariablespropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeVariableSet <a name="@cdktf/provider-tfe.DataTfeVariableSet" id="cdktfprovidertfedatatfevariableset"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/variable_set tfe_variable_set}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariableSet.Initializer" id="cdktfprovidertfedatatfevariablesetinitializer"></a>

```typescript
import { DataTfeVariableSet } from '@cdktf/provider-tfe'

new DataTfeVariableSet(scope: Construct, id: string, config: DataTfeVariableSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfevariablesetparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfevariablesetparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfevariablesetparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeVariableSetConfig`](#@cdktf/provider-tfe.DataTfeVariableSetConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.parameter.scope" id="cdktfprovidertfedatatfevariablesetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.parameter.id" id="cdktfprovidertfedatatfevariablesetparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.parameter.config" id="cdktfprovidertfedatatfevariablesetparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeVariableSetConfig`](#@cdktf/provider-tfe.DataTfeVariableSetConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfevariablesetresetid) | *No description.* |
| [`resetVariableIds`](#cdktfprovidertfedatatfevariablesetresetvariableids) | *No description.* |
| [`resetWorkspaceIds`](#cdktfprovidertfedatatfevariablesetresetworkspaceids) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeVariableSet.resetId" id="cdktfprovidertfedatatfevariablesetresetid"></a>

```typescript
public resetId()
```

##### `resetVariableIds` <a name="@cdktf/provider-tfe.DataTfeVariableSet.resetVariableIds" id="cdktfprovidertfedatatfevariablesetresetvariableids"></a>

```typescript
public resetVariableIds()
```

##### `resetWorkspaceIds` <a name="@cdktf/provider-tfe.DataTfeVariableSet.resetWorkspaceIds" id="cdktfprovidertfedatatfevariablesetresetworkspaceids"></a>

```typescript
public resetWorkspaceIds()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`description`](#cdktfprovidertfedatatfevariablesetpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`global`](#cdktfprovidertfedatatfevariablesetpropertyglobal)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfevariablesetpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfedatatfevariablesetpropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfevariablesetpropertyorganizationinput) | `string` | *No description.* |
| [`variableIdsInput`](#cdktfprovidertfedatatfevariablesetpropertyvariableidsinput) | `string`[] | *No description.* |
| [`workspaceIdsInput`](#cdktfprovidertfedatatfevariablesetpropertyworkspaceidsinput) | `string`[] | *No description.* |
| [`id`](#cdktfprovidertfedatatfevariablesetpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfevariablesetpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfevariablesetpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`variableIds`](#cdktfprovidertfedatatfevariablesetpropertyvariableids)<span title="Required">*</span> | `string`[] | *No description.* |
| [`workspaceIds`](#cdktfprovidertfedatatfevariablesetpropertyworkspaceids)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.description" id="cdktfprovidertfedatatfevariablesetpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `global`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.global" id="cdktfprovidertfedatatfevariablesetpropertyglobal"></a>

```typescript
public readonly global: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.idInput" id="cdktfprovidertfedatatfevariablesetpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.nameInput" id="cdktfprovidertfedatatfevariablesetpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.organizationInput" id="cdktfprovidertfedatatfevariablesetpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `variableIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.variableIdsInput" id="cdktfprovidertfedatatfevariablesetpropertyvariableidsinput"></a>

```typescript
public readonly variableIdsInput: string[];
```

- *Type:* `string`[]

---

##### `workspaceIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.workspaceIdsInput" id="cdktfprovidertfedatatfevariablesetpropertyworkspaceidsinput"></a>

```typescript
public readonly workspaceIdsInput: string[];
```

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.id" id="cdktfprovidertfedatatfevariablesetpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.name" id="cdktfprovidertfedatatfevariablesetpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.organization" id="cdktfprovidertfedatatfevariablesetpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `variableIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.variableIds" id="cdktfprovidertfedatatfevariablesetpropertyvariableids"></a>

```typescript
public readonly variableIds: string[];
```

- *Type:* `string`[]

---

##### `workspaceIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.workspaceIds" id="cdktfprovidertfedatatfevariablesetpropertyworkspaceids"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfevariablesetpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeVariableSet.property.tfResourceType" id="cdktfprovidertfedatatfevariablesetpropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeWorkspace <a name="@cdktf/provider-tfe.DataTfeWorkspace" id="cdktfprovidertfedatatfeworkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/workspace tfe_workspace}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeWorkspace.Initializer" id="cdktfprovidertfedatatfeworkspaceinitializer"></a>

```typescript
import { DataTfeWorkspace } from '@cdktf/provider-tfe'

new DataTfeWorkspace(scope: Construct, id: string, config: DataTfeWorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeworkspaceparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeworkspaceparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeworkspaceparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeWorkspaceConfig`](#@cdktf/provider-tfe.DataTfeWorkspaceConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.parameter.scope" id="cdktfprovidertfedatatfeworkspaceparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.parameter.id" id="cdktfprovidertfedatatfeworkspaceparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.parameter.config" id="cdktfprovidertfedatatfeworkspaceparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeWorkspaceConfig`](#@cdktf/provider-tfe.DataTfeWorkspaceConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeworkspaceresetid) | *No description.* |
| [`resetTagNames`](#cdktfprovidertfedatatfeworkspaceresettagnames) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeWorkspace.resetId" id="cdktfprovidertfedatatfeworkspaceresetid"></a>

```typescript
public resetId()
```

##### `resetTagNames` <a name="@cdktf/provider-tfe.DataTfeWorkspace.resetTagNames" id="cdktfprovidertfedatatfeworkspaceresettagnames"></a>

```typescript
public resetTagNames()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`allowDestroyPlan`](#cdktfprovidertfedatatfeworkspacepropertyallowdestroyplan)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`autoApply`](#cdktfprovidertfedatatfeworkspacepropertyautoapply)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`description`](#cdktfprovidertfedatatfeworkspacepropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`fileTriggersEnabled`](#cdktfprovidertfedatatfeworkspacepropertyfiletriggersenabled)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`globalRemoteState`](#cdktfprovidertfedatatfeworkspacepropertyglobalremotestate)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`operations`](#cdktfprovidertfedatatfeworkspacepropertyoperations)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`policyCheckFailures`](#cdktfprovidertfedatatfeworkspacepropertypolicycheckfailures)<span title="Required">*</span> | `number` | *No description.* |
| [`queueAllRuns`](#cdktfprovidertfedatatfeworkspacepropertyqueueallruns)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`remoteStateConsumerIds`](#cdktfprovidertfedatatfeworkspacepropertyremotestateconsumerids)<span title="Required">*</span> | `string`[] | *No description.* |
| [`resourceCount`](#cdktfprovidertfedatatfeworkspacepropertyresourcecount)<span title="Required">*</span> | `number` | *No description.* |
| [`runFailures`](#cdktfprovidertfedatatfeworkspacepropertyrunfailures)<span title="Required">*</span> | `number` | *No description.* |
| [`runsCount`](#cdktfprovidertfedatatfeworkspacepropertyrunscount)<span title="Required">*</span> | `number` | *No description.* |
| [`speculativeEnabled`](#cdktfprovidertfedatatfeworkspacepropertyspeculativeenabled)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sshKeyId`](#cdktfprovidertfedatatfeworkspacepropertysshkeyid)<span title="Required">*</span> | `string` | *No description.* |
| [`structuredRunOutputEnabled`](#cdktfprovidertfedatatfeworkspacepropertystructuredrunoutputenabled)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`terraformVersion`](#cdktfprovidertfedatatfeworkspacepropertyterraformversion)<span title="Required">*</span> | `string` | *No description.* |
| [`triggerPatterns`](#cdktfprovidertfedatatfeworkspacepropertytriggerpatterns)<span title="Required">*</span> | `string`[] | *No description.* |
| [`triggerPrefixes`](#cdktfprovidertfedatatfeworkspacepropertytriggerprefixes)<span title="Required">*</span> | `string`[] | *No description.* |
| [`vcsRepo`](#cdktfprovidertfedatatfeworkspacepropertyvcsrepo)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList`](#@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList) | *No description.* |
| [`workingDirectory`](#cdktfprovidertfedatatfeworkspacepropertyworkingdirectory)<span title="Required">*</span> | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeworkspacepropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfedatatfeworkspacepropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfeworkspacepropertyorganizationinput) | `string` | *No description.* |
| [`tagNamesInput`](#cdktfprovidertfedatatfeworkspacepropertytagnamesinput) | `string`[] | *No description.* |
| [`id`](#cdktfprovidertfedatatfeworkspacepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfeworkspacepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeworkspacepropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`tagNames`](#cdktfprovidertfedatatfeworkspacepropertytagnames)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `allowDestroyPlan`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.allowDestroyPlan" id="cdktfprovidertfedatatfeworkspacepropertyallowdestroyplan"></a>

```typescript
public readonly allowDestroyPlan: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `autoApply`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.autoApply" id="cdktfprovidertfedatatfeworkspacepropertyautoapply"></a>

```typescript
public readonly autoApply: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.description" id="cdktfprovidertfedatatfeworkspacepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `fileTriggersEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.fileTriggersEnabled" id="cdktfprovidertfedatatfeworkspacepropertyfiletriggersenabled"></a>

```typescript
public readonly fileTriggersEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `globalRemoteState`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.globalRemoteState" id="cdktfprovidertfedatatfeworkspacepropertyglobalremotestate"></a>

```typescript
public readonly globalRemoteState: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `operations`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.operations" id="cdktfprovidertfedatatfeworkspacepropertyoperations"></a>

```typescript
public readonly operations: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `policyCheckFailures`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.policyCheckFailures" id="cdktfprovidertfedatatfeworkspacepropertypolicycheckfailures"></a>

```typescript
public readonly policyCheckFailures: number;
```

- *Type:* `number`

---

##### `queueAllRuns`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.queueAllRuns" id="cdktfprovidertfedatatfeworkspacepropertyqueueallruns"></a>

```typescript
public readonly queueAllRuns: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `remoteStateConsumerIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.remoteStateConsumerIds" id="cdktfprovidertfedatatfeworkspacepropertyremotestateconsumerids"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* `string`[]

---

##### `resourceCount`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.resourceCount" id="cdktfprovidertfedatatfeworkspacepropertyresourcecount"></a>

```typescript
public readonly resourceCount: number;
```

- *Type:* `number`

---

##### `runFailures`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.runFailures" id="cdktfprovidertfedatatfeworkspacepropertyrunfailures"></a>

```typescript
public readonly runFailures: number;
```

- *Type:* `number`

---

##### `runsCount`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.runsCount" id="cdktfprovidertfedatatfeworkspacepropertyrunscount"></a>

```typescript
public readonly runsCount: number;
```

- *Type:* `number`

---

##### `speculativeEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.speculativeEnabled" id="cdktfprovidertfedatatfeworkspacepropertyspeculativeenabled"></a>

```typescript
public readonly speculativeEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sshKeyId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.sshKeyId" id="cdktfprovidertfedatatfeworkspacepropertysshkeyid"></a>

```typescript
public readonly sshKeyId: string;
```

- *Type:* `string`

---

##### `structuredRunOutputEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.structuredRunOutputEnabled" id="cdktfprovidertfedatatfeworkspacepropertystructuredrunoutputenabled"></a>

```typescript
public readonly structuredRunOutputEnabled: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `terraformVersion`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.terraformVersion" id="cdktfprovidertfedatatfeworkspacepropertyterraformversion"></a>

```typescript
public readonly terraformVersion: string;
```

- *Type:* `string`

---

##### `triggerPatterns`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.triggerPatterns" id="cdktfprovidertfedatatfeworkspacepropertytriggerpatterns"></a>

```typescript
public readonly triggerPatterns: string[];
```

- *Type:* `string`[]

---

##### `triggerPrefixes`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.triggerPrefixes" id="cdktfprovidertfedatatfeworkspacepropertytriggerprefixes"></a>

```typescript
public readonly triggerPrefixes: string[];
```

- *Type:* `string`[]

---

##### `vcsRepo`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.vcsRepo" id="cdktfprovidertfedatatfeworkspacepropertyvcsrepo"></a>

```typescript
public readonly vcsRepo: DataTfeWorkspaceVcsRepoList;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList`](#@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList)

---

##### `workingDirectory`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.workingDirectory" id="cdktfprovidertfedatatfeworkspacepropertyworkingdirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.idInput" id="cdktfprovidertfedatatfeworkspacepropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.nameInput" id="cdktfprovidertfedatatfeworkspacepropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.organizationInput" id="cdktfprovidertfedatatfeworkspacepropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `tagNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.tagNamesInput" id="cdktfprovidertfedatatfeworkspacepropertytagnamesinput"></a>

```typescript
public readonly tagNamesInput: string[];
```

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.id" id="cdktfprovidertfedatatfeworkspacepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.name" id="cdktfprovidertfedatatfeworkspacepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.organization" id="cdktfprovidertfedatatfeworkspacepropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `tagNames`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.tagNames" id="cdktfprovidertfedatatfeworkspacepropertytagnames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeworkspacepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeWorkspace.property.tfResourceType" id="cdktfprovidertfedatatfeworkspacepropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeWorkspaceIds <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds" id="cdktfprovidertfedatatfeworkspaceids"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids tfe_workspace_ids}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.Initializer" id="cdktfprovidertfedatatfeworkspaceidsinitializer"></a>

```typescript
import { DataTfeWorkspaceIds } from '@cdktf/provider-tfe'

new DataTfeWorkspaceIds(scope: Construct, id: string, config: DataTfeWorkspaceIdsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeworkspaceidsparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeworkspaceidsparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeworkspaceidsparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig`](#@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.parameter.scope" id="cdktfprovidertfedatatfeworkspaceidsparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.parameter.id" id="cdktfprovidertfedatatfeworkspaceidsparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.parameter.config" id="cdktfprovidertfedatatfeworkspaceidsparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig`](#@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetExcludeTags`](#cdktfprovidertfedatatfeworkspaceidsresetexcludetags) | *No description.* |
| [`resetId`](#cdktfprovidertfedatatfeworkspaceidsresetid) | *No description.* |
| [`resetNames`](#cdktfprovidertfedatatfeworkspaceidsresetnames) | *No description.* |
| [`resetTagNames`](#cdktfprovidertfedatatfeworkspaceidsresettagnames) | *No description.* |

---

##### `resetExcludeTags` <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.resetExcludeTags" id="cdktfprovidertfedatatfeworkspaceidsresetexcludetags"></a>

```typescript
public resetExcludeTags()
```

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.resetId" id="cdktfprovidertfedatatfeworkspaceidsresetid"></a>

```typescript
public resetId()
```

##### `resetNames` <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.resetNames" id="cdktfprovidertfedatatfeworkspaceidsresetnames"></a>

```typescript
public resetNames()
```

##### `resetTagNames` <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.resetTagNames" id="cdktfprovidertfedatatfeworkspaceidsresettagnames"></a>

```typescript
public resetTagNames()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`fullNames`](#cdktfprovidertfedatatfeworkspaceidspropertyfullnames)<span title="Required">*</span> | [`cdktf.StringMap`](#cdktf.StringMap) | *No description.* |
| [`ids`](#cdktfprovidertfedatatfeworkspaceidspropertyids)<span title="Required">*</span> | [`cdktf.StringMap`](#cdktf.StringMap) | *No description.* |
| [`excludeTagsInput`](#cdktfprovidertfedatatfeworkspaceidspropertyexcludetagsinput) | `string`[] | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeworkspaceidspropertyidinput) | `string` | *No description.* |
| [`namesInput`](#cdktfprovidertfedatatfeworkspaceidspropertynamesinput) | `string`[] | *No description.* |
| [`organizationInput`](#cdktfprovidertfedatatfeworkspaceidspropertyorganizationinput) | `string` | *No description.* |
| [`tagNamesInput`](#cdktfprovidertfedatatfeworkspaceidspropertytagnamesinput) | `string`[] | *No description.* |
| [`excludeTags`](#cdktfprovidertfedatatfeworkspaceidspropertyexcludetags)<span title="Required">*</span> | `string`[] | *No description.* |
| [`id`](#cdktfprovidertfedatatfeworkspaceidspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`names`](#cdktfprovidertfedatatfeworkspaceidspropertynames)<span title="Required">*</span> | `string`[] | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeworkspaceidspropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`tagNames`](#cdktfprovidertfedatatfeworkspaceidspropertytagnames)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `fullNames`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.fullNames" id="cdktfprovidertfedatatfeworkspaceidspropertyfullnames"></a>

```typescript
public readonly fullNames: StringMap;
```

- *Type:* [`cdktf.StringMap`](#cdktf.StringMap)

---

##### `ids`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.ids" id="cdktfprovidertfedatatfeworkspaceidspropertyids"></a>

```typescript
public readonly ids: StringMap;
```

- *Type:* [`cdktf.StringMap`](#cdktf.StringMap)

---

##### `excludeTagsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.excludeTagsInput" id="cdktfprovidertfedatatfeworkspaceidspropertyexcludetagsinput"></a>

```typescript
public readonly excludeTagsInput: string[];
```

- *Type:* `string`[]

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.idInput" id="cdktfprovidertfedatatfeworkspaceidspropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `namesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.namesInput" id="cdktfprovidertfedatatfeworkspaceidspropertynamesinput"></a>

```typescript
public readonly namesInput: string[];
```

- *Type:* `string`[]

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.organizationInput" id="cdktfprovidertfedatatfeworkspaceidspropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `tagNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.tagNamesInput" id="cdktfprovidertfedatatfeworkspaceidspropertytagnamesinput"></a>

```typescript
public readonly tagNamesInput: string[];
```

- *Type:* `string`[]

---

##### `excludeTags`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.excludeTags" id="cdktfprovidertfedatatfeworkspaceidspropertyexcludetags"></a>

```typescript
public readonly excludeTags: string[];
```

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.id" id="cdktfprovidertfedatatfeworkspaceidspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `names`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.names" id="cdktfprovidertfedatatfeworkspaceidspropertynames"></a>

```typescript
public readonly names: string[];
```

- *Type:* `string`[]

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.organization" id="cdktfprovidertfedatatfeworkspaceidspropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `tagNames`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.tagNames" id="cdktfprovidertfedatatfeworkspaceidspropertytagnames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeworkspaceidspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeWorkspaceIds.property.tfResourceType" id="cdktfprovidertfedatatfeworkspaceidspropertytfresourcetype"></a>

- *Type:* `string`

---

### DataTfeWorkspaceRunTask <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask" id="cdktfprovidertfedatatfeworkspaceruntask"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/d/workspace_run_task tfe_workspace_run_task}.

#### Initializers <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.Initializer" id="cdktfprovidertfedatatfeworkspaceruntaskinitializer"></a>

```typescript
import { DataTfeWorkspaceRunTask } from '@cdktf/provider-tfe'

new DataTfeWorkspaceRunTask(scope: Construct, id: string, config: DataTfeWorkspaceRunTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfedatatfeworkspaceruntaskparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfedatatfeworkspaceruntaskparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfedatatfeworkspaceruntaskparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig`](#@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.parameter.scope" id="cdktfprovidertfedatatfeworkspaceruntaskparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.parameter.id" id="cdktfprovidertfedatatfeworkspaceruntaskparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.parameter.config" id="cdktfprovidertfedatatfeworkspaceruntaskparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig`](#@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfedatatfeworkspaceruntaskresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.resetId" id="cdktfprovidertfedatatfeworkspaceruntaskresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`enforcementLevel`](#cdktfprovidertfedatatfeworkspaceruntaskpropertyenforcementlevel)<span title="Required">*</span> | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfedatatfeworkspaceruntaskpropertyidinput) | `string` | *No description.* |
| [`taskIdInput`](#cdktfprovidertfedatatfeworkspaceruntaskpropertytaskidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfedatatfeworkspaceruntaskpropertyworkspaceidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfedatatfeworkspaceruntaskpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`taskId`](#cdktfprovidertfedatatfeworkspaceruntaskpropertytaskid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfedatatfeworkspaceruntaskpropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `enforcementLevel`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.enforcementLevel" id="cdktfprovidertfedatatfeworkspaceruntaskpropertyenforcementlevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.idInput" id="cdktfprovidertfedatatfeworkspaceruntaskpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `taskIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.taskIdInput" id="cdktfprovidertfedatatfeworkspaceruntaskpropertytaskidinput"></a>

```typescript
public readonly taskIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.workspaceIdInput" id="cdktfprovidertfedatatfeworkspaceruntaskpropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.id" id="cdktfprovidertfedatatfeworkspaceruntaskpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.taskId" id="cdktfprovidertfedatatfeworkspaceruntaskpropertytaskid"></a>

```typescript
public readonly taskId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.workspaceId" id="cdktfprovidertfedatatfeworkspaceruntaskpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfedatatfeworkspaceruntaskpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTask.property.tfResourceType" id="cdktfprovidertfedatatfeworkspaceruntaskpropertytfresourcetype"></a>

- *Type:* `string`

---

### NotificationConfiguration <a name="@cdktf/provider-tfe.NotificationConfiguration" id="cdktfprovidertfenotificationconfiguration"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration tfe_notification_configuration}.

#### Initializers <a name="@cdktf/provider-tfe.NotificationConfiguration.Initializer" id="cdktfprovidertfenotificationconfigurationinitializer"></a>

```typescript
import { NotificationConfiguration } from '@cdktf/provider-tfe'

new NotificationConfiguration(scope: Construct, id: string, config: NotificationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfenotificationconfigurationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfenotificationconfigurationparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfenotificationconfigurationparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.NotificationConfigurationConfig`](#@cdktf/provider-tfe.NotificationConfigurationConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.parameter.scope" id="cdktfprovidertfenotificationconfigurationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.parameter.id" id="cdktfprovidertfenotificationconfigurationparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.parameter.config" id="cdktfprovidertfenotificationconfigurationparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.NotificationConfigurationConfig`](#@cdktf/provider-tfe.NotificationConfigurationConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetEmailAddresses`](#cdktfprovidertfenotificationconfigurationresetemailaddresses) | *No description.* |
| [`resetEmailUserIds`](#cdktfprovidertfenotificationconfigurationresetemailuserids) | *No description.* |
| [`resetEnabled`](#cdktfprovidertfenotificationconfigurationresetenabled) | *No description.* |
| [`resetId`](#cdktfprovidertfenotificationconfigurationresetid) | *No description.* |
| [`resetToken`](#cdktfprovidertfenotificationconfigurationresettoken) | *No description.* |
| [`resetTriggers`](#cdktfprovidertfenotificationconfigurationresettriggers) | *No description.* |
| [`resetUrl`](#cdktfprovidertfenotificationconfigurationreseturl) | *No description.* |

---

##### `resetEmailAddresses` <a name="@cdktf/provider-tfe.NotificationConfiguration.resetEmailAddresses" id="cdktfprovidertfenotificationconfigurationresetemailaddresses"></a>

```typescript
public resetEmailAddresses()
```

##### `resetEmailUserIds` <a name="@cdktf/provider-tfe.NotificationConfiguration.resetEmailUserIds" id="cdktfprovidertfenotificationconfigurationresetemailuserids"></a>

```typescript
public resetEmailUserIds()
```

##### `resetEnabled` <a name="@cdktf/provider-tfe.NotificationConfiguration.resetEnabled" id="cdktfprovidertfenotificationconfigurationresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetId` <a name="@cdktf/provider-tfe.NotificationConfiguration.resetId" id="cdktfprovidertfenotificationconfigurationresetid"></a>

```typescript
public resetId()
```

##### `resetToken` <a name="@cdktf/provider-tfe.NotificationConfiguration.resetToken" id="cdktfprovidertfenotificationconfigurationresettoken"></a>

```typescript
public resetToken()
```

##### `resetTriggers` <a name="@cdktf/provider-tfe.NotificationConfiguration.resetTriggers" id="cdktfprovidertfenotificationconfigurationresettriggers"></a>

```typescript
public resetTriggers()
```

##### `resetUrl` <a name="@cdktf/provider-tfe.NotificationConfiguration.resetUrl" id="cdktfprovidertfenotificationconfigurationreseturl"></a>

```typescript
public resetUrl()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`destinationTypeInput`](#cdktfprovidertfenotificationconfigurationpropertydestinationtypeinput) | `string` | *No description.* |
| [`emailAddressesInput`](#cdktfprovidertfenotificationconfigurationpropertyemailaddressesinput) | `string`[] | *No description.* |
| [`emailUserIdsInput`](#cdktfprovidertfenotificationconfigurationpropertyemailuseridsinput) | `string`[] | *No description.* |
| [`enabledInput`](#cdktfprovidertfenotificationconfigurationpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfenotificationconfigurationpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfenotificationconfigurationpropertynameinput) | `string` | *No description.* |
| [`tokenInput`](#cdktfprovidertfenotificationconfigurationpropertytokeninput) | `string` | *No description.* |
| [`triggersInput`](#cdktfprovidertfenotificationconfigurationpropertytriggersinput) | `string`[] | *No description.* |
| [`urlInput`](#cdktfprovidertfenotificationconfigurationpropertyurlinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfenotificationconfigurationpropertyworkspaceidinput) | `string` | *No description.* |
| [`destinationType`](#cdktfprovidertfenotificationconfigurationpropertydestinationtype)<span title="Required">*</span> | `string` | *No description.* |
| [`emailAddresses`](#cdktfprovidertfenotificationconfigurationpropertyemailaddresses)<span title="Required">*</span> | `string`[] | *No description.* |
| [`emailUserIds`](#cdktfprovidertfenotificationconfigurationpropertyemailuserids)<span title="Required">*</span> | `string`[] | *No description.* |
| [`enabled`](#cdktfprovidertfenotificationconfigurationpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfenotificationconfigurationpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfenotificationconfigurationpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`token`](#cdktfprovidertfenotificationconfigurationpropertytoken)<span title="Required">*</span> | `string` | *No description.* |
| [`triggers`](#cdktfprovidertfenotificationconfigurationpropertytriggers)<span title="Required">*</span> | `string`[] | *No description.* |
| [`url`](#cdktfprovidertfenotificationconfigurationpropertyurl)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfenotificationconfigurationpropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `destinationTypeInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.destinationTypeInput" id="cdktfprovidertfenotificationconfigurationpropertydestinationtypeinput"></a>

```typescript
public readonly destinationTypeInput: string;
```

- *Type:* `string`

---

##### `emailAddressesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.emailAddressesInput" id="cdktfprovidertfenotificationconfigurationpropertyemailaddressesinput"></a>

```typescript
public readonly emailAddressesInput: string[];
```

- *Type:* `string`[]

---

##### `emailUserIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.emailUserIdsInput" id="cdktfprovidertfenotificationconfigurationpropertyemailuseridsinput"></a>

```typescript
public readonly emailUserIdsInput: string[];
```

- *Type:* `string`[]

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.enabledInput" id="cdktfprovidertfenotificationconfigurationpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.idInput" id="cdktfprovidertfenotificationconfigurationpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.nameInput" id="cdktfprovidertfenotificationconfigurationpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `tokenInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.tokenInput" id="cdktfprovidertfenotificationconfigurationpropertytokeninput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* `string`

---

##### `triggersInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.triggersInput" id="cdktfprovidertfenotificationconfigurationpropertytriggersinput"></a>

```typescript
public readonly triggersInput: string[];
```

- *Type:* `string`[]

---

##### `urlInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.urlInput" id="cdktfprovidertfenotificationconfigurationpropertyurlinput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.workspaceIdInput" id="cdktfprovidertfenotificationconfigurationpropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `destinationType`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.destinationType" id="cdktfprovidertfenotificationconfigurationpropertydestinationtype"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* `string`

---

##### `emailAddresses`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.emailAddresses" id="cdktfprovidertfenotificationconfigurationpropertyemailaddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* `string`[]

---

##### `emailUserIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.emailUserIds" id="cdktfprovidertfenotificationconfigurationpropertyemailuserids"></a>

```typescript
public readonly emailUserIds: string[];
```

- *Type:* `string`[]

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.enabled" id="cdktfprovidertfenotificationconfigurationpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.id" id="cdktfprovidertfenotificationconfigurationpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.name" id="cdktfprovidertfenotificationconfigurationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `token`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.token" id="cdktfprovidertfenotificationconfigurationpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

---

##### `triggers`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.triggers" id="cdktfprovidertfenotificationconfigurationpropertytriggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* `string`[]

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.url" id="cdktfprovidertfenotificationconfigurationpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfiguration.property.workspaceId" id="cdktfprovidertfenotificationconfigurationpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfenotificationconfigurationpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.NotificationConfiguration.property.tfResourceType" id="cdktfprovidertfenotificationconfigurationpropertytfresourcetype"></a>

- *Type:* `string`

---

### OauthClient <a name="@cdktf/provider-tfe.OauthClient" id="cdktfprovidertfeoauthclient"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client tfe_oauth_client}.

#### Initializers <a name="@cdktf/provider-tfe.OauthClient.Initializer" id="cdktfprovidertfeoauthclientinitializer"></a>

```typescript
import { OauthClient } from '@cdktf/provider-tfe'

new OauthClient(scope: Construct, id: string, config: OauthClientConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeoauthclientparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeoauthclientparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeoauthclientparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.OauthClientConfig`](#@cdktf/provider-tfe.OauthClientConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.parameter.scope" id="cdktfprovidertfeoauthclientparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.parameter.id" id="cdktfprovidertfeoauthclientparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.parameter.config" id="cdktfprovidertfeoauthclientparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.OauthClientConfig`](#@cdktf/provider-tfe.OauthClientConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeoauthclientresetid) | *No description.* |
| [`resetKey`](#cdktfprovidertfeoauthclientresetkey) | *No description.* |
| [`resetName`](#cdktfprovidertfeoauthclientresetname) | *No description.* |
| [`resetOauthToken`](#cdktfprovidertfeoauthclientresetoauthtoken) | *No description.* |
| [`resetPrivateKey`](#cdktfprovidertfeoauthclientresetprivatekey) | *No description.* |
| [`resetRsaPublicKey`](#cdktfprovidertfeoauthclientresetrsapublickey) | *No description.* |
| [`resetSecret`](#cdktfprovidertfeoauthclientresetsecret) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.OauthClient.resetId" id="cdktfprovidertfeoauthclientresetid"></a>

```typescript
public resetId()
```

##### `resetKey` <a name="@cdktf/provider-tfe.OauthClient.resetKey" id="cdktfprovidertfeoauthclientresetkey"></a>

```typescript
public resetKey()
```

##### `resetName` <a name="@cdktf/provider-tfe.OauthClient.resetName" id="cdktfprovidertfeoauthclientresetname"></a>

```typescript
public resetName()
```

##### `resetOauthToken` <a name="@cdktf/provider-tfe.OauthClient.resetOauthToken" id="cdktfprovidertfeoauthclientresetoauthtoken"></a>

```typescript
public resetOauthToken()
```

##### `resetPrivateKey` <a name="@cdktf/provider-tfe.OauthClient.resetPrivateKey" id="cdktfprovidertfeoauthclientresetprivatekey"></a>

```typescript
public resetPrivateKey()
```

##### `resetRsaPublicKey` <a name="@cdktf/provider-tfe.OauthClient.resetRsaPublicKey" id="cdktfprovidertfeoauthclientresetrsapublickey"></a>

```typescript
public resetRsaPublicKey()
```

##### `resetSecret` <a name="@cdktf/provider-tfe.OauthClient.resetSecret" id="cdktfprovidertfeoauthclientresetsecret"></a>

```typescript
public resetSecret()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`oauthTokenId`](#cdktfprovidertfeoauthclientpropertyoauthtokenid)<span title="Required">*</span> | `string` | *No description.* |
| [`apiUrlInput`](#cdktfprovidertfeoauthclientpropertyapiurlinput) | `string` | *No description.* |
| [`httpUrlInput`](#cdktfprovidertfeoauthclientpropertyhttpurlinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfeoauthclientpropertyidinput) | `string` | *No description.* |
| [`keyInput`](#cdktfprovidertfeoauthclientpropertykeyinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfeoauthclientpropertynameinput) | `string` | *No description.* |
| [`oauthTokenInput`](#cdktfprovidertfeoauthclientpropertyoauthtokeninput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfeoauthclientpropertyorganizationinput) | `string` | *No description.* |
| [`privateKeyInput`](#cdktfprovidertfeoauthclientpropertyprivatekeyinput) | `string` | *No description.* |
| [`rsaPublicKeyInput`](#cdktfprovidertfeoauthclientpropertyrsapublickeyinput) | `string` | *No description.* |
| [`secretInput`](#cdktfprovidertfeoauthclientpropertysecretinput) | `string` | *No description.* |
| [`serviceProviderInput`](#cdktfprovidertfeoauthclientpropertyserviceproviderinput) | `string` | *No description.* |
| [`apiUrl`](#cdktfprovidertfeoauthclientpropertyapiurl)<span title="Required">*</span> | `string` | *No description.* |
| [`httpUrl`](#cdktfprovidertfeoauthclientpropertyhttpurl)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfeoauthclientpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidertfeoauthclientpropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfeoauthclientpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`oauthToken`](#cdktfprovidertfeoauthclientpropertyoauthtoken)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfeoauthclientpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`privateKey`](#cdktfprovidertfeoauthclientpropertyprivatekey)<span title="Required">*</span> | `string` | *No description.* |
| [`rsaPublicKey`](#cdktfprovidertfeoauthclientpropertyrsapublickey)<span title="Required">*</span> | `string` | *No description.* |
| [`secret`](#cdktfprovidertfeoauthclientpropertysecret)<span title="Required">*</span> | `string` | *No description.* |
| [`serviceProvider`](#cdktfprovidertfeoauthclientpropertyserviceprovider)<span title="Required">*</span> | `string` | *No description.* |

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.oauthTokenId" id="cdktfprovidertfeoauthclientpropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

---

##### `apiUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.apiUrlInput" id="cdktfprovidertfeoauthclientpropertyapiurlinput"></a>

```typescript
public readonly apiUrlInput: string;
```

- *Type:* `string`

---

##### `httpUrlInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.httpUrlInput" id="cdktfprovidertfeoauthclientpropertyhttpurlinput"></a>

```typescript
public readonly httpUrlInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.idInput" id="cdktfprovidertfeoauthclientpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.keyInput" id="cdktfprovidertfeoauthclientpropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.nameInput" id="cdktfprovidertfeoauthclientpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `oauthTokenInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.oauthTokenInput" id="cdktfprovidertfeoauthclientpropertyoauthtokeninput"></a>

```typescript
public readonly oauthTokenInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.organizationInput" id="cdktfprovidertfeoauthclientpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `privateKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.privateKeyInput" id="cdktfprovidertfeoauthclientpropertyprivatekeyinput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* `string`

---

##### `rsaPublicKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.rsaPublicKeyInput" id="cdktfprovidertfeoauthclientpropertyrsapublickeyinput"></a>

```typescript
public readonly rsaPublicKeyInput: string;
```

- *Type:* `string`

---

##### `secretInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.secretInput" id="cdktfprovidertfeoauthclientpropertysecretinput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* `string`

---

##### `serviceProviderInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClient.property.serviceProviderInput" id="cdktfprovidertfeoauthclientpropertyserviceproviderinput"></a>

```typescript
public readonly serviceProviderInput: string;
```

- *Type:* `string`

---

##### `apiUrl`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.apiUrl" id="cdktfprovidertfeoauthclientpropertyapiurl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* `string`

---

##### `httpUrl`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.httpUrl" id="cdktfprovidertfeoauthclientpropertyhttpurl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.id" id="cdktfprovidertfeoauthclientpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.key" id="cdktfprovidertfeoauthclientpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.name" id="cdktfprovidertfeoauthclientpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `oauthToken`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.oauthToken" id="cdktfprovidertfeoauthclientpropertyoauthtoken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.organization" id="cdktfprovidertfeoauthclientpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `privateKey`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.privateKey" id="cdktfprovidertfeoauthclientpropertyprivatekey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* `string`

---

##### `rsaPublicKey`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.rsaPublicKey" id="cdktfprovidertfeoauthclientpropertyrsapublickey"></a>

```typescript
public readonly rsaPublicKey: string;
```

- *Type:* `string`

---

##### `secret`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.secret" id="cdktfprovidertfeoauthclientpropertysecret"></a>

```typescript
public readonly secret: string;
```

- *Type:* `string`

---

##### `serviceProvider`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClient.property.serviceProvider" id="cdktfprovidertfeoauthclientpropertyserviceprovider"></a>

```typescript
public readonly serviceProvider: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeoauthclientpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.OauthClient.property.tfResourceType" id="cdktfprovidertfeoauthclientpropertytfresourcetype"></a>

- *Type:* `string`

---

### Organization <a name="@cdktf/provider-tfe.Organization" id="cdktfprovidertfeorganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization tfe_organization}.

#### Initializers <a name="@cdktf/provider-tfe.Organization.Initializer" id="cdktfprovidertfeorganizationinitializer"></a>

```typescript
import { Organization } from '@cdktf/provider-tfe'

new Organization(scope: Construct, id: string, config: OrganizationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeorganizationparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeorganizationparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeorganizationparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.OrganizationConfig`](#@cdktf/provider-tfe.OrganizationConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.parameter.scope" id="cdktfprovidertfeorganizationparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.parameter.id" id="cdktfprovidertfeorganizationparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.parameter.config" id="cdktfprovidertfeorganizationparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.OrganizationConfig`](#@cdktf/provider-tfe.OrganizationConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetCollaboratorAuthPolicy`](#cdktfprovidertfeorganizationresetcollaboratorauthpolicy) | *No description.* |
| [`resetCostEstimationEnabled`](#cdktfprovidertfeorganizationresetcostestimationenabled) | *No description.* |
| [`resetId`](#cdktfprovidertfeorganizationresetid) | *No description.* |
| [`resetOwnersTeamSamlRoleId`](#cdktfprovidertfeorganizationresetownersteamsamlroleid) | *No description.* |
| [`resetSendPassingStatusesForUntriggeredSpeculativePlans`](#cdktfprovidertfeorganizationresetsendpassingstatusesforuntriggeredspeculativeplans) | *No description.* |
| [`resetSessionRememberMinutes`](#cdktfprovidertfeorganizationresetsessionrememberminutes) | *No description.* |
| [`resetSessionTimeoutMinutes`](#cdktfprovidertfeorganizationresetsessiontimeoutminutes) | *No description.* |

---

##### `resetCollaboratorAuthPolicy` <a name="@cdktf/provider-tfe.Organization.resetCollaboratorAuthPolicy" id="cdktfprovidertfeorganizationresetcollaboratorauthpolicy"></a>

```typescript
public resetCollaboratorAuthPolicy()
```

##### `resetCostEstimationEnabled` <a name="@cdktf/provider-tfe.Organization.resetCostEstimationEnabled" id="cdktfprovidertfeorganizationresetcostestimationenabled"></a>

```typescript
public resetCostEstimationEnabled()
```

##### `resetId` <a name="@cdktf/provider-tfe.Organization.resetId" id="cdktfprovidertfeorganizationresetid"></a>

```typescript
public resetId()
```

##### `resetOwnersTeamSamlRoleId` <a name="@cdktf/provider-tfe.Organization.resetOwnersTeamSamlRoleId" id="cdktfprovidertfeorganizationresetownersteamsamlroleid"></a>

```typescript
public resetOwnersTeamSamlRoleId()
```

##### `resetSendPassingStatusesForUntriggeredSpeculativePlans` <a name="@cdktf/provider-tfe.Organization.resetSendPassingStatusesForUntriggeredSpeculativePlans" id="cdktfprovidertfeorganizationresetsendpassingstatusesforuntriggeredspeculativeplans"></a>

```typescript
public resetSendPassingStatusesForUntriggeredSpeculativePlans()
```

##### `resetSessionRememberMinutes` <a name="@cdktf/provider-tfe.Organization.resetSessionRememberMinutes" id="cdktfprovidertfeorganizationresetsessionrememberminutes"></a>

```typescript
public resetSessionRememberMinutes()
```

##### `resetSessionTimeoutMinutes` <a name="@cdktf/provider-tfe.Organization.resetSessionTimeoutMinutes" id="cdktfprovidertfeorganizationresetsessiontimeoutminutes"></a>

```typescript
public resetSessionTimeoutMinutes()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`collaboratorAuthPolicyInput`](#cdktfprovidertfeorganizationpropertycollaboratorauthpolicyinput) | `string` | *No description.* |
| [`costEstimationEnabledInput`](#cdktfprovidertfeorganizationpropertycostestimationenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`emailInput`](#cdktfprovidertfeorganizationpropertyemailinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfeorganizationpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfeorganizationpropertynameinput) | `string` | *No description.* |
| [`ownersTeamSamlRoleIdInput`](#cdktfprovidertfeorganizationpropertyownersteamsamlroleidinput) | `string` | *No description.* |
| [`sendPassingStatusesForUntriggeredSpeculativePlansInput`](#cdktfprovidertfeorganizationpropertysendpassingstatusesforuntriggeredspeculativeplansinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sessionRememberMinutesInput`](#cdktfprovidertfeorganizationpropertysessionrememberminutesinput) | `number` | *No description.* |
| [`sessionTimeoutMinutesInput`](#cdktfprovidertfeorganizationpropertysessiontimeoutminutesinput) | `number` | *No description.* |
| [`collaboratorAuthPolicy`](#cdktfprovidertfeorganizationpropertycollaboratorauthpolicy)<span title="Required">*</span> | `string` | *No description.* |
| [`costEstimationEnabled`](#cdktfprovidertfeorganizationpropertycostestimationenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`email`](#cdktfprovidertfeorganizationpropertyemail)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfeorganizationpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfeorganizationpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`ownersTeamSamlRoleId`](#cdktfprovidertfeorganizationpropertyownersteamsamlroleid)<span title="Required">*</span> | `string` | *No description.* |
| [`sendPassingStatusesForUntriggeredSpeculativePlans`](#cdktfprovidertfeorganizationpropertysendpassingstatusesforuntriggeredspeculativeplans)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sessionRememberMinutes`](#cdktfprovidertfeorganizationpropertysessionrememberminutes)<span title="Required">*</span> | `number` | *No description.* |
| [`sessionTimeoutMinutes`](#cdktfprovidertfeorganizationpropertysessiontimeoutminutes)<span title="Required">*</span> | `number` | *No description.* |

---

##### `collaboratorAuthPolicyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.collaboratorAuthPolicyInput" id="cdktfprovidertfeorganizationpropertycollaboratorauthpolicyinput"></a>

```typescript
public readonly collaboratorAuthPolicyInput: string;
```

- *Type:* `string`

---

##### `costEstimationEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.costEstimationEnabledInput" id="cdktfprovidertfeorganizationpropertycostestimationenabledinput"></a>

```typescript
public readonly costEstimationEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `emailInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.emailInput" id="cdktfprovidertfeorganizationpropertyemailinput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.idInput" id="cdktfprovidertfeorganizationpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.nameInput" id="cdktfprovidertfeorganizationpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `ownersTeamSamlRoleIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.ownersTeamSamlRoleIdInput" id="cdktfprovidertfeorganizationpropertyownersteamsamlroleidinput"></a>

```typescript
public readonly ownersTeamSamlRoleIdInput: string;
```

- *Type:* `string`

---

##### `sendPassingStatusesForUntriggeredSpeculativePlansInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlansInput" id="cdktfprovidertfeorganizationpropertysendpassingstatusesforuntriggeredspeculativeplansinput"></a>

```typescript
public readonly sendPassingStatusesForUntriggeredSpeculativePlansInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sessionRememberMinutesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.sessionRememberMinutesInput" id="cdktfprovidertfeorganizationpropertysessionrememberminutesinput"></a>

```typescript
public readonly sessionRememberMinutesInput: number;
```

- *Type:* `number`

---

##### `sessionTimeoutMinutesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Organization.property.sessionTimeoutMinutesInput" id="cdktfprovidertfeorganizationpropertysessiontimeoutminutesinput"></a>

```typescript
public readonly sessionTimeoutMinutesInput: number;
```

- *Type:* `number`

---

##### `collaboratorAuthPolicy`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.collaboratorAuthPolicy" id="cdktfprovidertfeorganizationpropertycollaboratorauthpolicy"></a>

```typescript
public readonly collaboratorAuthPolicy: string;
```

- *Type:* `string`

---

##### `costEstimationEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.costEstimationEnabled" id="cdktfprovidertfeorganizationpropertycostestimationenabled"></a>

```typescript
public readonly costEstimationEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.email" id="cdktfprovidertfeorganizationpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.id" id="cdktfprovidertfeorganizationpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.name" id="cdktfprovidertfeorganizationpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `ownersTeamSamlRoleId`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.ownersTeamSamlRoleId" id="cdktfprovidertfeorganizationpropertyownersteamsamlroleid"></a>

```typescript
public readonly ownersTeamSamlRoleId: string;
```

- *Type:* `string`

---

##### `sendPassingStatusesForUntriggeredSpeculativePlans`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.sendPassingStatusesForUntriggeredSpeculativePlans" id="cdktfprovidertfeorganizationpropertysendpassingstatusesforuntriggeredspeculativeplans"></a>

```typescript
public readonly sendPassingStatusesForUntriggeredSpeculativePlans: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sessionRememberMinutes`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.sessionRememberMinutes" id="cdktfprovidertfeorganizationpropertysessionrememberminutes"></a>

```typescript
public readonly sessionRememberMinutes: number;
```

- *Type:* `number`

---

##### `sessionTimeoutMinutes`<sup>Required</sup> <a name="@cdktf/provider-tfe.Organization.property.sessionTimeoutMinutes" id="cdktfprovidertfeorganizationpropertysessiontimeoutminutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* `number`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeorganizationpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.Organization.property.tfResourceType" id="cdktfprovidertfeorganizationpropertytfresourcetype"></a>

- *Type:* `string`

---

### OrganizationMembership <a name="@cdktf/provider-tfe.OrganizationMembership" id="cdktfprovidertfeorganizationmembership"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership tfe_organization_membership}.

#### Initializers <a name="@cdktf/provider-tfe.OrganizationMembership.Initializer" id="cdktfprovidertfeorganizationmembershipinitializer"></a>

```typescript
import { OrganizationMembership } from '@cdktf/provider-tfe'

new OrganizationMembership(scope: Construct, id: string, config: OrganizationMembershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeorganizationmembershipparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeorganizationmembershipparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeorganizationmembershipparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.OrganizationMembershipConfig`](#@cdktf/provider-tfe.OrganizationMembershipConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.parameter.scope" id="cdktfprovidertfeorganizationmembershipparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.parameter.id" id="cdktfprovidertfeorganizationmembershipparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.parameter.config" id="cdktfprovidertfeorganizationmembershipparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.OrganizationMembershipConfig`](#@cdktf/provider-tfe.OrganizationMembershipConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeorganizationmembershipresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.OrganizationMembership.resetId" id="cdktfprovidertfeorganizationmembershipresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`userId`](#cdktfprovidertfeorganizationmembershippropertyuserid)<span title="Required">*</span> | `string` | *No description.* |
| [`emailInput`](#cdktfprovidertfeorganizationmembershippropertyemailinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfeorganizationmembershippropertyidinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfeorganizationmembershippropertyorganizationinput) | `string` | *No description.* |
| [`email`](#cdktfprovidertfeorganizationmembershippropertyemail)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfeorganizationmembershippropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfeorganizationmembershippropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `userId`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.property.userId" id="cdktfprovidertfeorganizationmembershippropertyuserid"></a>

```typescript
public readonly userId: string;
```

- *Type:* `string`

---

##### `emailInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.property.emailInput" id="cdktfprovidertfeorganizationmembershippropertyemailinput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.property.idInput" id="cdktfprovidertfeorganizationmembershippropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.property.organizationInput" id="cdktfprovidertfeorganizationmembershippropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.property.email" id="cdktfprovidertfeorganizationmembershippropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.property.id" id="cdktfprovidertfeorganizationmembershippropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembership.property.organization" id="cdktfprovidertfeorganizationmembershippropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeorganizationmembershippropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.OrganizationMembership.property.tfResourceType" id="cdktfprovidertfeorganizationmembershippropertytfresourcetype"></a>

- *Type:* `string`

---

### OrganizationModuleSharing <a name="@cdktf/provider-tfe.OrganizationModuleSharing" id="cdktfprovidertfeorganizationmodulesharing"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing tfe_organization_module_sharing}.

#### Initializers <a name="@cdktf/provider-tfe.OrganizationModuleSharing.Initializer" id="cdktfprovidertfeorganizationmodulesharinginitializer"></a>

```typescript
import { OrganizationModuleSharing } from '@cdktf/provider-tfe'

new OrganizationModuleSharing(scope: Construct, id: string, config: OrganizationModuleSharingConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeorganizationmodulesharingparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeorganizationmodulesharingparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeorganizationmodulesharingparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.OrganizationModuleSharingConfig`](#@cdktf/provider-tfe.OrganizationModuleSharingConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.parameter.scope" id="cdktfprovidertfeorganizationmodulesharingparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.parameter.id" id="cdktfprovidertfeorganizationmodulesharingparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.parameter.config" id="cdktfprovidertfeorganizationmodulesharingparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.OrganizationModuleSharingConfig`](#@cdktf/provider-tfe.OrganizationModuleSharingConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeorganizationmodulesharingresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.OrganizationModuleSharing.resetId" id="cdktfprovidertfeorganizationmodulesharingresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfeorganizationmodulesharingpropertyidinput) | `string` | *No description.* |
| [`moduleConsumersInput`](#cdktfprovidertfeorganizationmodulesharingpropertymoduleconsumersinput) | `string`[] | *No description.* |
| [`organizationInput`](#cdktfprovidertfeorganizationmodulesharingpropertyorganizationinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfeorganizationmodulesharingpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`moduleConsumers`](#cdktfprovidertfeorganizationmodulesharingpropertymoduleconsumers)<span title="Required">*</span> | `string`[] | *No description.* |
| [`organization`](#cdktfprovidertfeorganizationmodulesharingpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.property.idInput" id="cdktfprovidertfeorganizationmodulesharingpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `moduleConsumersInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.property.moduleConsumersInput" id="cdktfprovidertfeorganizationmodulesharingpropertymoduleconsumersinput"></a>

```typescript
public readonly moduleConsumersInput: string[];
```

- *Type:* `string`[]

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.property.organizationInput" id="cdktfprovidertfeorganizationmodulesharingpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.property.id" id="cdktfprovidertfeorganizationmodulesharingpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `moduleConsumers`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.property.moduleConsumers" id="cdktfprovidertfeorganizationmodulesharingpropertymoduleconsumers"></a>

```typescript
public readonly moduleConsumers: string[];
```

- *Type:* `string`[]

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharing.property.organization" id="cdktfprovidertfeorganizationmodulesharingpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeorganizationmodulesharingpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.OrganizationModuleSharing.property.tfResourceType" id="cdktfprovidertfeorganizationmodulesharingpropertytfresourcetype"></a>

- *Type:* `string`

---

### OrganizationRunTask <a name="@cdktf/provider-tfe.OrganizationRunTask" id="cdktfprovidertfeorganizationruntask"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task tfe_organization_run_task}.

#### Initializers <a name="@cdktf/provider-tfe.OrganizationRunTask.Initializer" id="cdktfprovidertfeorganizationruntaskinitializer"></a>

```typescript
import { OrganizationRunTask } from '@cdktf/provider-tfe'

new OrganizationRunTask(scope: Construct, id: string, config: OrganizationRunTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeorganizationruntaskparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeorganizationruntaskparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeorganizationruntaskparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.OrganizationRunTaskConfig`](#@cdktf/provider-tfe.OrganizationRunTaskConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.parameter.scope" id="cdktfprovidertfeorganizationruntaskparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.parameter.id" id="cdktfprovidertfeorganizationruntaskparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.parameter.config" id="cdktfprovidertfeorganizationruntaskparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.OrganizationRunTaskConfig`](#@cdktf/provider-tfe.OrganizationRunTaskConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetCategory`](#cdktfprovidertfeorganizationruntaskresetcategory) | *No description.* |
| [`resetEnabled`](#cdktfprovidertfeorganizationruntaskresetenabled) | *No description.* |
| [`resetHmacKey`](#cdktfprovidertfeorganizationruntaskresethmackey) | *No description.* |
| [`resetId`](#cdktfprovidertfeorganizationruntaskresetid) | *No description.* |

---

##### `resetCategory` <a name="@cdktf/provider-tfe.OrganizationRunTask.resetCategory" id="cdktfprovidertfeorganizationruntaskresetcategory"></a>

```typescript
public resetCategory()
```

##### `resetEnabled` <a name="@cdktf/provider-tfe.OrganizationRunTask.resetEnabled" id="cdktfprovidertfeorganizationruntaskresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetHmacKey` <a name="@cdktf/provider-tfe.OrganizationRunTask.resetHmacKey" id="cdktfprovidertfeorganizationruntaskresethmackey"></a>

```typescript
public resetHmacKey()
```

##### `resetId` <a name="@cdktf/provider-tfe.OrganizationRunTask.resetId" id="cdktfprovidertfeorganizationruntaskresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`categoryInput`](#cdktfprovidertfeorganizationruntaskpropertycategoryinput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidertfeorganizationruntaskpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`hmacKeyInput`](#cdktfprovidertfeorganizationruntaskpropertyhmackeyinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfeorganizationruntaskpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfeorganizationruntaskpropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfeorganizationruntaskpropertyorganizationinput) | `string` | *No description.* |
| [`urlInput`](#cdktfprovidertfeorganizationruntaskpropertyurlinput) | `string` | *No description.* |
| [`category`](#cdktfprovidertfeorganizationruntaskpropertycategory)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidertfeorganizationruntaskpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`hmacKey`](#cdktfprovidertfeorganizationruntaskpropertyhmackey)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfeorganizationruntaskpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfeorganizationruntaskpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfeorganizationruntaskpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`url`](#cdktfprovidertfeorganizationruntaskpropertyurl)<span title="Required">*</span> | `string` | *No description.* |

---

##### `categoryInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.categoryInput" id="cdktfprovidertfeorganizationruntaskpropertycategoryinput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.enabledInput" id="cdktfprovidertfeorganizationruntaskpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `hmacKeyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.hmacKeyInput" id="cdktfprovidertfeorganizationruntaskpropertyhmackeyinput"></a>

```typescript
public readonly hmacKeyInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.idInput" id="cdktfprovidertfeorganizationruntaskpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.nameInput" id="cdktfprovidertfeorganizationruntaskpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.organizationInput" id="cdktfprovidertfeorganizationruntaskpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `urlInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.urlInput" id="cdktfprovidertfeorganizationruntaskpropertyurlinput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* `string`

---

##### `category`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.category" id="cdktfprovidertfeorganizationruntaskpropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.enabled" id="cdktfprovidertfeorganizationruntaskpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `hmacKey`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.hmacKey" id="cdktfprovidertfeorganizationruntaskpropertyhmackey"></a>

```typescript
public readonly hmacKey: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.id" id="cdktfprovidertfeorganizationruntaskpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.name" id="cdktfprovidertfeorganizationruntaskpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.organization" id="cdktfprovidertfeorganizationruntaskpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTask.property.url" id="cdktfprovidertfeorganizationruntaskpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeorganizationruntaskpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.OrganizationRunTask.property.tfResourceType" id="cdktfprovidertfeorganizationruntaskpropertytfresourcetype"></a>

- *Type:* `string`

---

### OrganizationToken <a name="@cdktf/provider-tfe.OrganizationToken" id="cdktfprovidertfeorganizationtoken"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/organization_token tfe_organization_token}.

#### Initializers <a name="@cdktf/provider-tfe.OrganizationToken.Initializer" id="cdktfprovidertfeorganizationtokeninitializer"></a>

```typescript
import { OrganizationToken } from '@cdktf/provider-tfe'

new OrganizationToken(scope: Construct, id: string, config: OrganizationTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeorganizationtokenparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeorganizationtokenparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeorganizationtokenparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.OrganizationTokenConfig`](#@cdktf/provider-tfe.OrganizationTokenConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationToken.parameter.scope" id="cdktfprovidertfeorganizationtokenparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationToken.parameter.id" id="cdktfprovidertfeorganizationtokenparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationToken.parameter.config" id="cdktfprovidertfeorganizationtokenparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.OrganizationTokenConfig`](#@cdktf/provider-tfe.OrganizationTokenConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetForceRegenerate`](#cdktfprovidertfeorganizationtokenresetforceregenerate) | *No description.* |
| [`resetId`](#cdktfprovidertfeorganizationtokenresetid) | *No description.* |

---

##### `resetForceRegenerate` <a name="@cdktf/provider-tfe.OrganizationToken.resetForceRegenerate" id="cdktfprovidertfeorganizationtokenresetforceregenerate"></a>

```typescript
public resetForceRegenerate()
```

##### `resetId` <a name="@cdktf/provider-tfe.OrganizationToken.resetId" id="cdktfprovidertfeorganizationtokenresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`token`](#cdktfprovidertfeorganizationtokenpropertytoken)<span title="Required">*</span> | `string` | *No description.* |
| [`forceRegenerateInput`](#cdktfprovidertfeorganizationtokenpropertyforceregenerateinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfeorganizationtokenpropertyidinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfeorganizationtokenpropertyorganizationinput) | `string` | *No description.* |
| [`forceRegenerate`](#cdktfprovidertfeorganizationtokenpropertyforceregenerate)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfeorganizationtokenpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfeorganizationtokenpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `token`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationToken.property.token" id="cdktfprovidertfeorganizationtokenpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

---

##### `forceRegenerateInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationToken.property.forceRegenerateInput" id="cdktfprovidertfeorganizationtokenpropertyforceregenerateinput"></a>

```typescript
public readonly forceRegenerateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationToken.property.idInput" id="cdktfprovidertfeorganizationtokenpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationToken.property.organizationInput" id="cdktfprovidertfeorganizationtokenpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `forceRegenerate`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationToken.property.forceRegenerate" id="cdktfprovidertfeorganizationtokenpropertyforceregenerate"></a>

```typescript
public readonly forceRegenerate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationToken.property.id" id="cdktfprovidertfeorganizationtokenpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationToken.property.organization" id="cdktfprovidertfeorganizationtokenpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeorganizationtokenpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.OrganizationToken.property.tfResourceType" id="cdktfprovidertfeorganizationtokenpropertytfresourcetype"></a>

- *Type:* `string`

---

### PolicySet <a name="@cdktf/provider-tfe.PolicySet" id="cdktfprovidertfepolicyset"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/policy_set tfe_policy_set}.

#### Initializers <a name="@cdktf/provider-tfe.PolicySet.Initializer" id="cdktfprovidertfepolicysetinitializer"></a>

```typescript
import { PolicySet } from '@cdktf/provider-tfe'

new PolicySet(scope: Construct, id: string, config: PolicySetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfepolicysetparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfepolicysetparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfepolicysetparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.PolicySetConfig`](#@cdktf/provider-tfe.PolicySetConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.parameter.scope" id="cdktfprovidertfepolicysetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.parameter.id" id="cdktfprovidertfepolicysetparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.parameter.config" id="cdktfprovidertfepolicysetparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.PolicySetConfig`](#@cdktf/provider-tfe.PolicySetConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putVcsRepo`](#cdktfprovidertfepolicysetputvcsrepo) | *No description.* |
| [`resetDescription`](#cdktfprovidertfepolicysetresetdescription) | *No description.* |
| [`resetGlobal`](#cdktfprovidertfepolicysetresetglobal) | *No description.* |
| [`resetId`](#cdktfprovidertfepolicysetresetid) | *No description.* |
| [`resetPoliciesPath`](#cdktfprovidertfepolicysetresetpoliciespath) | *No description.* |
| [`resetPolicyIds`](#cdktfprovidertfepolicysetresetpolicyids) | *No description.* |
| [`resetSlug`](#cdktfprovidertfepolicysetresetslug) | *No description.* |
| [`resetVcsRepo`](#cdktfprovidertfepolicysetresetvcsrepo) | *No description.* |
| [`resetWorkspaceIds`](#cdktfprovidertfepolicysetresetworkspaceids) | *No description.* |

---

##### `putVcsRepo` <a name="@cdktf/provider-tfe.PolicySet.putVcsRepo" id="cdktfprovidertfepolicysetputvcsrepo"></a>

```typescript
public putVcsRepo(value: PolicySetVcsRepo)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.parameter.value" id="cdktfprovidertfepolicysetparametervalue"></a>

- *Type:* [`@cdktf/provider-tfe.PolicySetVcsRepo`](#@cdktf/provider-tfe.PolicySetVcsRepo)

---

##### `resetDescription` <a name="@cdktf/provider-tfe.PolicySet.resetDescription" id="cdktfprovidertfepolicysetresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetGlobal` <a name="@cdktf/provider-tfe.PolicySet.resetGlobal" id="cdktfprovidertfepolicysetresetglobal"></a>

```typescript
public resetGlobal()
```

##### `resetId` <a name="@cdktf/provider-tfe.PolicySet.resetId" id="cdktfprovidertfepolicysetresetid"></a>

```typescript
public resetId()
```

##### `resetPoliciesPath` <a name="@cdktf/provider-tfe.PolicySet.resetPoliciesPath" id="cdktfprovidertfepolicysetresetpoliciespath"></a>

```typescript
public resetPoliciesPath()
```

##### `resetPolicyIds` <a name="@cdktf/provider-tfe.PolicySet.resetPolicyIds" id="cdktfprovidertfepolicysetresetpolicyids"></a>

```typescript
public resetPolicyIds()
```

##### `resetSlug` <a name="@cdktf/provider-tfe.PolicySet.resetSlug" id="cdktfprovidertfepolicysetresetslug"></a>

```typescript
public resetSlug()
```

##### `resetVcsRepo` <a name="@cdktf/provider-tfe.PolicySet.resetVcsRepo" id="cdktfprovidertfepolicysetresetvcsrepo"></a>

```typescript
public resetVcsRepo()
```

##### `resetWorkspaceIds` <a name="@cdktf/provider-tfe.PolicySet.resetWorkspaceIds" id="cdktfprovidertfepolicysetresetworkspaceids"></a>

```typescript
public resetWorkspaceIds()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vcsRepo`](#cdktfprovidertfepolicysetpropertyvcsrepo)<span title="Required">*</span> | [`@cdktf/provider-tfe.PolicySetVcsRepoOutputReference`](#@cdktf/provider-tfe.PolicySetVcsRepoOutputReference) | *No description.* |
| [`descriptionInput`](#cdktfprovidertfepolicysetpropertydescriptioninput) | `string` | *No description.* |
| [`globalInput`](#cdktfprovidertfepolicysetpropertyglobalinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfepolicysetpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfepolicysetpropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfepolicysetpropertyorganizationinput) | `string` | *No description.* |
| [`policiesPathInput`](#cdktfprovidertfepolicysetpropertypoliciespathinput) | `string` | *No description.* |
| [`policyIdsInput`](#cdktfprovidertfepolicysetpropertypolicyidsinput) | `string`[] | *No description.* |
| [`slugInput`](#cdktfprovidertfepolicysetpropertysluginput) | {[ key: string ]: `string`} | *No description.* |
| [`vcsRepoInput`](#cdktfprovidertfepolicysetpropertyvcsrepoinput) | [`@cdktf/provider-tfe.PolicySetVcsRepo`](#@cdktf/provider-tfe.PolicySetVcsRepo) | *No description.* |
| [`workspaceIdsInput`](#cdktfprovidertfepolicysetpropertyworkspaceidsinput) | `string`[] | *No description.* |
| [`description`](#cdktfprovidertfepolicysetpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`global`](#cdktfprovidertfepolicysetpropertyglobal)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfepolicysetpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfepolicysetpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfepolicysetpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`policiesPath`](#cdktfprovidertfepolicysetpropertypoliciespath)<span title="Required">*</span> | `string` | *No description.* |
| [`policyIds`](#cdktfprovidertfepolicysetpropertypolicyids)<span title="Required">*</span> | `string`[] | *No description.* |
| [`slug`](#cdktfprovidertfepolicysetpropertyslug)<span title="Required">*</span> | {[ key: string ]: `string`} | *No description.* |
| [`workspaceIds`](#cdktfprovidertfepolicysetpropertyworkspaceids)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `vcsRepo`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.vcsRepo" id="cdktfprovidertfepolicysetpropertyvcsrepo"></a>

```typescript
public readonly vcsRepo: PolicySetVcsRepoOutputReference;
```

- *Type:* [`@cdktf/provider-tfe.PolicySetVcsRepoOutputReference`](#@cdktf/provider-tfe.PolicySetVcsRepoOutputReference)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.descriptionInput" id="cdktfprovidertfepolicysetpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `globalInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.globalInput" id="cdktfprovidertfepolicysetpropertyglobalinput"></a>

```typescript
public readonly globalInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.idInput" id="cdktfprovidertfepolicysetpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.nameInput" id="cdktfprovidertfepolicysetpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.organizationInput" id="cdktfprovidertfepolicysetpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `policiesPathInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.policiesPathInput" id="cdktfprovidertfepolicysetpropertypoliciespathinput"></a>

```typescript
public readonly policiesPathInput: string;
```

- *Type:* `string`

---

##### `policyIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.policyIdsInput" id="cdktfprovidertfepolicysetpropertypolicyidsinput"></a>

```typescript
public readonly policyIdsInput: string[];
```

- *Type:* `string`[]

---

##### `slugInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.slugInput" id="cdktfprovidertfepolicysetpropertysluginput"></a>

```typescript
public readonly slugInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.vcsRepoInput" id="cdktfprovidertfepolicysetpropertyvcsrepoinput"></a>

```typescript
public readonly vcsRepoInput: PolicySetVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.PolicySetVcsRepo`](#@cdktf/provider-tfe.PolicySetVcsRepo)

---

##### `workspaceIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySet.property.workspaceIdsInput" id="cdktfprovidertfepolicysetpropertyworkspaceidsinput"></a>

```typescript
public readonly workspaceIdsInput: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.description" id="cdktfprovidertfepolicysetpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `global`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.global" id="cdktfprovidertfepolicysetpropertyglobal"></a>

```typescript
public readonly global: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.id" id="cdktfprovidertfepolicysetpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.name" id="cdktfprovidertfepolicysetpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.organization" id="cdktfprovidertfepolicysetpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `policiesPath`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.policiesPath" id="cdktfprovidertfepolicysetpropertypoliciespath"></a>

```typescript
public readonly policiesPath: string;
```

- *Type:* `string`

---

##### `policyIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.policyIds" id="cdktfprovidertfepolicysetpropertypolicyids"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* `string`[]

---

##### `slug`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.slug" id="cdktfprovidertfepolicysetpropertyslug"></a>

```typescript
public readonly slug: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

---

##### `workspaceIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySet.property.workspaceIds" id="cdktfprovidertfepolicysetpropertyworkspaceids"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfepolicysetpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.PolicySet.property.tfResourceType" id="cdktfprovidertfepolicysetpropertytfresourcetype"></a>

- *Type:* `string`

---

### PolicySetParameter <a name="@cdktf/provider-tfe.PolicySetParameter" id="cdktfprovidertfepolicysetparameter"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter tfe_policy_set_parameter}.

#### Initializers <a name="@cdktf/provider-tfe.PolicySetParameter.Initializer" id="cdktfprovidertfepolicysetparameterinitializer"></a>

```typescript
import { PolicySetParameter } from '@cdktf/provider-tfe'

new PolicySetParameter(scope: Construct, id: string, config: PolicySetParameterConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfepolicysetparameterparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfepolicysetparameterparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfepolicysetparameterparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.PolicySetParameterConfig`](#@cdktf/provider-tfe.PolicySetParameterConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.parameter.scope" id="cdktfprovidertfepolicysetparameterparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.parameter.id" id="cdktfprovidertfepolicysetparameterparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.parameter.config" id="cdktfprovidertfepolicysetparameterparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.PolicySetParameterConfig`](#@cdktf/provider-tfe.PolicySetParameterConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfepolicysetparameterresetid) | *No description.* |
| [`resetSensitive`](#cdktfprovidertfepolicysetparameterresetsensitive) | *No description.* |
| [`resetValue`](#cdktfprovidertfepolicysetparameterresetvalue) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.PolicySetParameter.resetId" id="cdktfprovidertfepolicysetparameterresetid"></a>

```typescript
public resetId()
```

##### `resetSensitive` <a name="@cdktf/provider-tfe.PolicySetParameter.resetSensitive" id="cdktfprovidertfepolicysetparameterresetsensitive"></a>

```typescript
public resetSensitive()
```

##### `resetValue` <a name="@cdktf/provider-tfe.PolicySetParameter.resetValue" id="cdktfprovidertfepolicysetparameterresetvalue"></a>

```typescript
public resetValue()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfepolicysetparameterpropertyidinput) | `string` | *No description.* |
| [`keyInput`](#cdktfprovidertfepolicysetparameterpropertykeyinput) | `string` | *No description.* |
| [`policySetIdInput`](#cdktfprovidertfepolicysetparameterpropertypolicysetidinput) | `string` | *No description.* |
| [`sensitiveInput`](#cdktfprovidertfepolicysetparameterpropertysensitiveinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`valueInput`](#cdktfprovidertfepolicysetparameterpropertyvalueinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfepolicysetparameterpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidertfepolicysetparameterpropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`policySetId`](#cdktfprovidertfepolicysetparameterpropertypolicysetid)<span title="Required">*</span> | `string` | *No description.* |
| [`sensitive`](#cdktfprovidertfepolicysetparameterpropertysensitive)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`value`](#cdktfprovidertfepolicysetparameterpropertyvalue)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.idInput" id="cdktfprovidertfepolicysetparameterpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.keyInput" id="cdktfprovidertfepolicysetparameterpropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `policySetIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.policySetIdInput" id="cdktfprovidertfepolicysetparameterpropertypolicysetidinput"></a>

```typescript
public readonly policySetIdInput: string;
```

- *Type:* `string`

---

##### `sensitiveInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.sensitiveInput" id="cdktfprovidertfepolicysetparameterpropertysensitiveinput"></a>

```typescript
public readonly sensitiveInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.valueInput" id="cdktfprovidertfepolicysetparameterpropertyvalueinput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.id" id="cdktfprovidertfepolicysetparameterpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.key" id="cdktfprovidertfepolicysetparameterpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `policySetId`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.policySetId" id="cdktfprovidertfepolicysetparameterpropertypolicysetid"></a>

```typescript
public readonly policySetId: string;
```

- *Type:* `string`

---

##### `sensitive`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.sensitive" id="cdktfprovidertfepolicysetparameterpropertysensitive"></a>

```typescript
public readonly sensitive: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameter.property.value" id="cdktfprovidertfepolicysetparameterpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfepolicysetparameterpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.PolicySetParameter.property.tfResourceType" id="cdktfprovidertfepolicysetparameterpropertytfresourcetype"></a>

- *Type:* `string`

---

### RegistryModule <a name="@cdktf/provider-tfe.RegistryModule" id="cdktfprovidertferegistrymodule"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/registry_module tfe_registry_module}.

#### Initializers <a name="@cdktf/provider-tfe.RegistryModule.Initializer" id="cdktfprovidertferegistrymoduleinitializer"></a>

```typescript
import { RegistryModule } from '@cdktf/provider-tfe'

new RegistryModule(scope: Construct, id: string, config: RegistryModuleConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertferegistrymoduleparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertferegistrymoduleparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertferegistrymoduleparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.RegistryModuleConfig`](#@cdktf/provider-tfe.RegistryModuleConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.parameter.scope" id="cdktfprovidertferegistrymoduleparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.parameter.id" id="cdktfprovidertferegistrymoduleparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.parameter.config" id="cdktfprovidertferegistrymoduleparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.RegistryModuleConfig`](#@cdktf/provider-tfe.RegistryModuleConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putVcsRepo`](#cdktfprovidertferegistrymoduleputvcsrepo) | *No description.* |
| [`resetId`](#cdktfprovidertferegistrymoduleresetid) | *No description.* |

---

##### `putVcsRepo` <a name="@cdktf/provider-tfe.RegistryModule.putVcsRepo" id="cdktfprovidertferegistrymoduleputvcsrepo"></a>

```typescript
public putVcsRepo(value: RegistryModuleVcsRepo)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.parameter.value" id="cdktfprovidertferegistrymoduleparametervalue"></a>

- *Type:* [`@cdktf/provider-tfe.RegistryModuleVcsRepo`](#@cdktf/provider-tfe.RegistryModuleVcsRepo)

---

##### `resetId` <a name="@cdktf/provider-tfe.RegistryModule.resetId" id="cdktfprovidertferegistrymoduleresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`moduleProvider`](#cdktfprovidertferegistrymodulepropertymoduleprovider)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertferegistrymodulepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertferegistrymodulepropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`vcsRepo`](#cdktfprovidertferegistrymodulepropertyvcsrepo)<span title="Required">*</span> | [`@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference`](#@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference) | *No description.* |
| [`idInput`](#cdktfprovidertferegistrymodulepropertyidinput) | `string` | *No description.* |
| [`vcsRepoInput`](#cdktfprovidertferegistrymodulepropertyvcsrepoinput) | [`@cdktf/provider-tfe.RegistryModuleVcsRepo`](#@cdktf/provider-tfe.RegistryModuleVcsRepo) | *No description.* |
| [`id`](#cdktfprovidertferegistrymodulepropertyid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `moduleProvider`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.property.moduleProvider" id="cdktfprovidertferegistrymodulepropertymoduleprovider"></a>

```typescript
public readonly moduleProvider: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.property.name" id="cdktfprovidertferegistrymodulepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.property.organization" id="cdktfprovidertferegistrymodulepropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `vcsRepo`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.property.vcsRepo" id="cdktfprovidertferegistrymodulepropertyvcsrepo"></a>

```typescript
public readonly vcsRepo: RegistryModuleVcsRepoOutputReference;
```

- *Type:* [`@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference`](#@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModule.property.idInput" id="cdktfprovidertferegistrymodulepropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModule.property.vcsRepoInput" id="cdktfprovidertferegistrymodulepropertyvcsrepoinput"></a>

```typescript
public readonly vcsRepoInput: RegistryModuleVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.RegistryModuleVcsRepo`](#@cdktf/provider-tfe.RegistryModuleVcsRepo)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModule.property.id" id="cdktfprovidertferegistrymodulepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertferegistrymodulepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.RegistryModule.property.tfResourceType" id="cdktfprovidertferegistrymodulepropertytfresourcetype"></a>

- *Type:* `string`

---

### RunTrigger <a name="@cdktf/provider-tfe.RunTrigger" id="cdktfprovidertferuntrigger"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger tfe_run_trigger}.

#### Initializers <a name="@cdktf/provider-tfe.RunTrigger.Initializer" id="cdktfprovidertferuntriggerinitializer"></a>

```typescript
import { RunTrigger } from '@cdktf/provider-tfe'

new RunTrigger(scope: Construct, id: string, config: RunTriggerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertferuntriggerparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertferuntriggerparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertferuntriggerparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.RunTriggerConfig`](#@cdktf/provider-tfe.RunTriggerConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTrigger.parameter.scope" id="cdktfprovidertferuntriggerparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTrigger.parameter.id" id="cdktfprovidertferuntriggerparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTrigger.parameter.config" id="cdktfprovidertferuntriggerparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.RunTriggerConfig`](#@cdktf/provider-tfe.RunTriggerConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertferuntriggerresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.RunTrigger.resetId" id="cdktfprovidertferuntriggerresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertferuntriggerpropertyidinput) | `string` | *No description.* |
| [`sourceableIdInput`](#cdktfprovidertferuntriggerpropertysourceableidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertferuntriggerpropertyworkspaceidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertferuntriggerpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`sourceableId`](#cdktfprovidertferuntriggerpropertysourceableid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertferuntriggerpropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTrigger.property.idInput" id="cdktfprovidertferuntriggerpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `sourceableIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTrigger.property.sourceableIdInput" id="cdktfprovidertferuntriggerpropertysourceableidinput"></a>

```typescript
public readonly sourceableIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTrigger.property.workspaceIdInput" id="cdktfprovidertferuntriggerpropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTrigger.property.id" id="cdktfprovidertferuntriggerpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `sourceableId`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTrigger.property.sourceableId" id="cdktfprovidertferuntriggerpropertysourceableid"></a>

```typescript
public readonly sourceableId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTrigger.property.workspaceId" id="cdktfprovidertferuntriggerpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertferuntriggerpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.RunTrigger.property.tfResourceType" id="cdktfprovidertferuntriggerpropertytfresourcetype"></a>

- *Type:* `string`

---

### SentinelPolicy <a name="@cdktf/provider-tfe.SentinelPolicy" id="cdktfprovidertfesentinelpolicy"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy tfe_sentinel_policy}.

#### Initializers <a name="@cdktf/provider-tfe.SentinelPolicy.Initializer" id="cdktfprovidertfesentinelpolicyinitializer"></a>

```typescript
import { SentinelPolicy } from '@cdktf/provider-tfe'

new SentinelPolicy(scope: Construct, id: string, config: SentinelPolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfesentinelpolicyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfesentinelpolicyparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfesentinelpolicyparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.SentinelPolicyConfig`](#@cdktf/provider-tfe.SentinelPolicyConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.parameter.scope" id="cdktfprovidertfesentinelpolicyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.parameter.id" id="cdktfprovidertfesentinelpolicyparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.parameter.config" id="cdktfprovidertfesentinelpolicyparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.SentinelPolicyConfig`](#@cdktf/provider-tfe.SentinelPolicyConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetDescription`](#cdktfprovidertfesentinelpolicyresetdescription) | *No description.* |
| [`resetEnforceMode`](#cdktfprovidertfesentinelpolicyresetenforcemode) | *No description.* |
| [`resetId`](#cdktfprovidertfesentinelpolicyresetid) | *No description.* |

---

##### `resetDescription` <a name="@cdktf/provider-tfe.SentinelPolicy.resetDescription" id="cdktfprovidertfesentinelpolicyresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetEnforceMode` <a name="@cdktf/provider-tfe.SentinelPolicy.resetEnforceMode" id="cdktfprovidertfesentinelpolicyresetenforcemode"></a>

```typescript
public resetEnforceMode()
```

##### `resetId` <a name="@cdktf/provider-tfe.SentinelPolicy.resetId" id="cdktfprovidertfesentinelpolicyresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`descriptionInput`](#cdktfprovidertfesentinelpolicypropertydescriptioninput) | `string` | *No description.* |
| [`enforceModeInput`](#cdktfprovidertfesentinelpolicypropertyenforcemodeinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfesentinelpolicypropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfesentinelpolicypropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfesentinelpolicypropertyorganizationinput) | `string` | *No description.* |
| [`policyInput`](#cdktfprovidertfesentinelpolicypropertypolicyinput) | `string` | *No description.* |
| [`description`](#cdktfprovidertfesentinelpolicypropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`enforceMode`](#cdktfprovidertfesentinelpolicypropertyenforcemode)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfesentinelpolicypropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfesentinelpolicypropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfesentinelpolicypropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`policy`](#cdktfprovidertfesentinelpolicypropertypolicy)<span title="Required">*</span> | `string` | *No description.* |

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.descriptionInput" id="cdktfprovidertfesentinelpolicypropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `enforceModeInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.enforceModeInput" id="cdktfprovidertfesentinelpolicypropertyenforcemodeinput"></a>

```typescript
public readonly enforceModeInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.idInput" id="cdktfprovidertfesentinelpolicypropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.nameInput" id="cdktfprovidertfesentinelpolicypropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.organizationInput" id="cdktfprovidertfesentinelpolicypropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `policyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.policyInput" id="cdktfprovidertfesentinelpolicypropertypolicyinput"></a>

```typescript
public readonly policyInput: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.description" id="cdktfprovidertfesentinelpolicypropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `enforceMode`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.enforceMode" id="cdktfprovidertfesentinelpolicypropertyenforcemode"></a>

```typescript
public readonly enforceMode: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.id" id="cdktfprovidertfesentinelpolicypropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.name" id="cdktfprovidertfesentinelpolicypropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.organization" id="cdktfprovidertfesentinelpolicypropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `policy`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicy.property.policy" id="cdktfprovidertfesentinelpolicypropertypolicy"></a>

```typescript
public readonly policy: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfesentinelpolicypropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.SentinelPolicy.property.tfResourceType" id="cdktfprovidertfesentinelpolicypropertytfresourcetype"></a>

- *Type:* `string`

---

### SshKey <a name="@cdktf/provider-tfe.SshKey" id="cdktfprovidertfesshkey"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key tfe_ssh_key}.

#### Initializers <a name="@cdktf/provider-tfe.SshKey.Initializer" id="cdktfprovidertfesshkeyinitializer"></a>

```typescript
import { SshKey } from '@cdktf/provider-tfe'

new SshKey(scope: Construct, id: string, config: SshKeyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfesshkeyparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfesshkeyparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfesshkeyparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.SshKeyConfig`](#@cdktf/provider-tfe.SshKeyConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKey.parameter.scope" id="cdktfprovidertfesshkeyparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKey.parameter.id" id="cdktfprovidertfesshkeyparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKey.parameter.config" id="cdktfprovidertfesshkeyparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.SshKeyConfig`](#@cdktf/provider-tfe.SshKeyConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfesshkeyresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.SshKey.resetId" id="cdktfprovidertfesshkeyresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfesshkeypropertyidinput) | `string` | *No description.* |
| [`keyInput`](#cdktfprovidertfesshkeypropertykeyinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfesshkeypropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfesshkeypropertyorganizationinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfesshkeypropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidertfesshkeypropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfesshkeypropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfesshkeypropertyorganization)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKey.property.idInput" id="cdktfprovidertfesshkeypropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKey.property.keyInput" id="cdktfprovidertfesshkeypropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKey.property.nameInput" id="cdktfprovidertfesshkeypropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKey.property.organizationInput" id="cdktfprovidertfesshkeypropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKey.property.id" id="cdktfprovidertfesshkeypropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKey.property.key" id="cdktfprovidertfesshkeypropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKey.property.name" id="cdktfprovidertfesshkeypropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKey.property.organization" id="cdktfprovidertfesshkeypropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfesshkeypropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.SshKey.property.tfResourceType" id="cdktfprovidertfesshkeypropertytfresourcetype"></a>

- *Type:* `string`

---

### Team <a name="@cdktf/provider-tfe.Team" id="cdktfprovidertfeteam"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team tfe_team}.

#### Initializers <a name="@cdktf/provider-tfe.Team.Initializer" id="cdktfprovidertfeteaminitializer"></a>

```typescript
import { Team } from '@cdktf/provider-tfe'

new Team(scope: Construct, id: string, config: TeamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeteamparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeteamparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeteamparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamConfig`](#@cdktf/provider-tfe.TeamConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.parameter.scope" id="cdktfprovidertfeteamparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.parameter.id" id="cdktfprovidertfeteamparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.parameter.config" id="cdktfprovidertfeteamparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TeamConfig`](#@cdktf/provider-tfe.TeamConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putOrganizationAccess`](#cdktfprovidertfeteamputorganizationaccess) | *No description.* |
| [`resetId`](#cdktfprovidertfeteamresetid) | *No description.* |
| [`resetOrganizationAccess`](#cdktfprovidertfeteamresetorganizationaccess) | *No description.* |
| [`resetSsoTeamId`](#cdktfprovidertfeteamresetssoteamid) | *No description.* |
| [`resetVisibility`](#cdktfprovidertfeteamresetvisibility) | *No description.* |

---

##### `putOrganizationAccess` <a name="@cdktf/provider-tfe.Team.putOrganizationAccess" id="cdktfprovidertfeteamputorganizationaccess"></a>

```typescript
public putOrganizationAccess(value: TeamOrganizationAccess)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.parameter.value" id="cdktfprovidertfeteamparametervalue"></a>

- *Type:* [`@cdktf/provider-tfe.TeamOrganizationAccess`](#@cdktf/provider-tfe.TeamOrganizationAccess)

---

##### `resetId` <a name="@cdktf/provider-tfe.Team.resetId" id="cdktfprovidertfeteamresetid"></a>

```typescript
public resetId()
```

##### `resetOrganizationAccess` <a name="@cdktf/provider-tfe.Team.resetOrganizationAccess" id="cdktfprovidertfeteamresetorganizationaccess"></a>

```typescript
public resetOrganizationAccess()
```

##### `resetSsoTeamId` <a name="@cdktf/provider-tfe.Team.resetSsoTeamId" id="cdktfprovidertfeteamresetssoteamid"></a>

```typescript
public resetSsoTeamId()
```

##### `resetVisibility` <a name="@cdktf/provider-tfe.Team.resetVisibility" id="cdktfprovidertfeteamresetvisibility"></a>

```typescript
public resetVisibility()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`organizationAccess`](#cdktfprovidertfeteampropertyorganizationaccess)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamOrganizationAccessOutputReference`](#@cdktf/provider-tfe.TeamOrganizationAccessOutputReference) | *No description.* |
| [`idInput`](#cdktfprovidertfeteampropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfeteampropertynameinput) | `string` | *No description.* |
| [`organizationAccessInput`](#cdktfprovidertfeteampropertyorganizationaccessinput) | [`@cdktf/provider-tfe.TeamOrganizationAccess`](#@cdktf/provider-tfe.TeamOrganizationAccess) | *No description.* |
| [`organizationInput`](#cdktfprovidertfeteampropertyorganizationinput) | `string` | *No description.* |
| [`ssoTeamIdInput`](#cdktfprovidertfeteampropertyssoteamidinput) | `string` | *No description.* |
| [`visibilityInput`](#cdktfprovidertfeteampropertyvisibilityinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfeteampropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfeteampropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfeteampropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`ssoTeamId`](#cdktfprovidertfeteampropertyssoteamid)<span title="Required">*</span> | `string` | *No description.* |
| [`visibility`](#cdktfprovidertfeteampropertyvisibility)<span title="Required">*</span> | `string` | *No description.* |

---

##### `organizationAccess`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.property.organizationAccess" id="cdktfprovidertfeteampropertyorganizationaccess"></a>

```typescript
public readonly organizationAccess: TeamOrganizationAccessOutputReference;
```

- *Type:* [`@cdktf/provider-tfe.TeamOrganizationAccessOutputReference`](#@cdktf/provider-tfe.TeamOrganizationAccessOutputReference)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Team.property.idInput" id="cdktfprovidertfeteampropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Team.property.nameInput" id="cdktfprovidertfeteampropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationAccessInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Team.property.organizationAccessInput" id="cdktfprovidertfeteampropertyorganizationaccessinput"></a>

```typescript
public readonly organizationAccessInput: TeamOrganizationAccess;
```

- *Type:* [`@cdktf/provider-tfe.TeamOrganizationAccess`](#@cdktf/provider-tfe.TeamOrganizationAccess)

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Team.property.organizationInput" id="cdktfprovidertfeteampropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `ssoTeamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Team.property.ssoTeamIdInput" id="cdktfprovidertfeteampropertyssoteamidinput"></a>

```typescript
public readonly ssoTeamIdInput: string;
```

- *Type:* `string`

---

##### `visibilityInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Team.property.visibilityInput" id="cdktfprovidertfeteampropertyvisibilityinput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.property.id" id="cdktfprovidertfeteampropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.property.name" id="cdktfprovidertfeteampropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.property.organization" id="cdktfprovidertfeteampropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `ssoTeamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.property.ssoTeamId" id="cdktfprovidertfeteampropertyssoteamid"></a>

```typescript
public readonly ssoTeamId: string;
```

- *Type:* `string`

---

##### `visibility`<sup>Required</sup> <a name="@cdktf/provider-tfe.Team.property.visibility" id="cdktfprovidertfeteampropertyvisibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeteampropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.Team.property.tfResourceType" id="cdktfprovidertfeteampropertytfresourcetype"></a>

- *Type:* `string`

---

### TeamAccess <a name="@cdktf/provider-tfe.TeamAccess" id="cdktfprovidertfeteamaccess"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_access tfe_team_access}.

#### Initializers <a name="@cdktf/provider-tfe.TeamAccess.Initializer" id="cdktfprovidertfeteamaccessinitializer"></a>

```typescript
import { TeamAccess } from '@cdktf/provider-tfe'

new TeamAccess(scope: Construct, id: string, config: TeamAccessConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeteamaccessparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeteamaccessparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeteamaccessparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamAccessConfig`](#@cdktf/provider-tfe.TeamAccessConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.parameter.scope" id="cdktfprovidertfeteamaccessparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.parameter.id" id="cdktfprovidertfeteamaccessparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.parameter.config" id="cdktfprovidertfeteamaccessparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TeamAccessConfig`](#@cdktf/provider-tfe.TeamAccessConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putPermissions`](#cdktfprovidertfeteamaccessputpermissions) | *No description.* |
| [`resetAccess`](#cdktfprovidertfeteamaccessresetaccess) | *No description.* |
| [`resetId`](#cdktfprovidertfeteamaccessresetid) | *No description.* |
| [`resetPermissions`](#cdktfprovidertfeteamaccessresetpermissions) | *No description.* |

---

##### `putPermissions` <a name="@cdktf/provider-tfe.TeamAccess.putPermissions" id="cdktfprovidertfeteamaccessputpermissions"></a>

```typescript
public putPermissions(value: IResolvable | TeamAccessPermissions[])
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.parameter.value" id="cdktfprovidertfeteamaccessparametervalue"></a>

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)[]

---

##### `resetAccess` <a name="@cdktf/provider-tfe.TeamAccess.resetAccess" id="cdktfprovidertfeteamaccessresetaccess"></a>

```typescript
public resetAccess()
```

##### `resetId` <a name="@cdktf/provider-tfe.TeamAccess.resetId" id="cdktfprovidertfeteamaccessresetid"></a>

```typescript
public resetId()
```

##### `resetPermissions` <a name="@cdktf/provider-tfe.TeamAccess.resetPermissions" id="cdktfprovidertfeteamaccessresetpermissions"></a>

```typescript
public resetPermissions()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`permissions`](#cdktfprovidertfeteamaccesspropertypermissions)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamAccessPermissionsList`](#@cdktf/provider-tfe.TeamAccessPermissionsList) | *No description.* |
| [`accessInput`](#cdktfprovidertfeteamaccesspropertyaccessinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfeteamaccesspropertyidinput) | `string` | *No description.* |
| [`permissionsInput`](#cdktfprovidertfeteamaccesspropertypermissionsinput) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)[] | *No description.* |
| [`teamIdInput`](#cdktfprovidertfeteamaccesspropertyteamidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfeteamaccesspropertyworkspaceidinput) | `string` | *No description.* |
| [`access`](#cdktfprovidertfeteamaccesspropertyaccess)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfeteamaccesspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`teamId`](#cdktfprovidertfeteamaccesspropertyteamid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfeteamaccesspropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `permissions`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.permissions" id="cdktfprovidertfeteamaccesspropertypermissions"></a>

```typescript
public readonly permissions: TeamAccessPermissionsList;
```

- *Type:* [`@cdktf/provider-tfe.TeamAccessPermissionsList`](#@cdktf/provider-tfe.TeamAccessPermissionsList)

---

##### `accessInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.accessInput" id="cdktfprovidertfeteamaccesspropertyaccessinput"></a>

```typescript
public readonly accessInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.idInput" id="cdktfprovidertfeteamaccesspropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `permissionsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.permissionsInput" id="cdktfprovidertfeteamaccesspropertypermissionsinput"></a>

```typescript
public readonly permissionsInput: IResolvable | TeamAccessPermissions[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)[]

---

##### `teamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.teamIdInput" id="cdktfprovidertfeteamaccesspropertyteamidinput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.workspaceIdInput" id="cdktfprovidertfeteamaccesspropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `access`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.access" id="cdktfprovidertfeteamaccesspropertyaccess"></a>

```typescript
public readonly access: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.id" id="cdktfprovidertfeteamaccesspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.teamId" id="cdktfprovidertfeteamaccesspropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccess.property.workspaceId" id="cdktfprovidertfeteamaccesspropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeteamaccesspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.TeamAccess.property.tfResourceType" id="cdktfprovidertfeteamaccesspropertytfresourcetype"></a>

- *Type:* `string`

---

### TeamMember <a name="@cdktf/provider-tfe.TeamMember" id="cdktfprovidertfeteammember"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_member tfe_team_member}.

#### Initializers <a name="@cdktf/provider-tfe.TeamMember.Initializer" id="cdktfprovidertfeteammemberinitializer"></a>

```typescript
import { TeamMember } from '@cdktf/provider-tfe'

new TeamMember(scope: Construct, id: string, config: TeamMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeteammemberparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeteammemberparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeteammemberparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamMemberConfig`](#@cdktf/provider-tfe.TeamMemberConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMember.parameter.scope" id="cdktfprovidertfeteammemberparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMember.parameter.id" id="cdktfprovidertfeteammemberparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMember.parameter.config" id="cdktfprovidertfeteammemberparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TeamMemberConfig`](#@cdktf/provider-tfe.TeamMemberConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeteammemberresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.TeamMember.resetId" id="cdktfprovidertfeteammemberresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfeteammemberpropertyidinput) | `string` | *No description.* |
| [`teamIdInput`](#cdktfprovidertfeteammemberpropertyteamidinput) | `string` | *No description.* |
| [`usernameInput`](#cdktfprovidertfeteammemberpropertyusernameinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfeteammemberpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`teamId`](#cdktfprovidertfeteammemberpropertyteamid)<span title="Required">*</span> | `string` | *No description.* |
| [`username`](#cdktfprovidertfeteammemberpropertyusername)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMember.property.idInput" id="cdktfprovidertfeteammemberpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `teamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMember.property.teamIdInput" id="cdktfprovidertfeteammemberpropertyteamidinput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* `string`

---

##### `usernameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMember.property.usernameInput" id="cdktfprovidertfeteammemberpropertyusernameinput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMember.property.id" id="cdktfprovidertfeteammemberpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMember.property.teamId" id="cdktfprovidertfeteammemberpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

---

##### `username`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMember.property.username" id="cdktfprovidertfeteammemberpropertyusername"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeteammemberpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.TeamMember.property.tfResourceType" id="cdktfprovidertfeteammemberpropertytfresourcetype"></a>

- *Type:* `string`

---

### TeamMembers <a name="@cdktf/provider-tfe.TeamMembers" id="cdktfprovidertfeteammembers"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_members tfe_team_members}.

#### Initializers <a name="@cdktf/provider-tfe.TeamMembers.Initializer" id="cdktfprovidertfeteammembersinitializer"></a>

```typescript
import { TeamMembers } from '@cdktf/provider-tfe'

new TeamMembers(scope: Construct, id: string, config: TeamMembersConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeteammembersparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeteammembersparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeteammembersparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamMembersConfig`](#@cdktf/provider-tfe.TeamMembersConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembers.parameter.scope" id="cdktfprovidertfeteammembersparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembers.parameter.id" id="cdktfprovidertfeteammembersparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembers.parameter.config" id="cdktfprovidertfeteammembersparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TeamMembersConfig`](#@cdktf/provider-tfe.TeamMembersConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeteammembersresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.TeamMembers.resetId" id="cdktfprovidertfeteammembersresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfeteammemberspropertyidinput) | `string` | *No description.* |
| [`teamIdInput`](#cdktfprovidertfeteammemberspropertyteamidinput) | `string` | *No description.* |
| [`usernamesInput`](#cdktfprovidertfeteammemberspropertyusernamesinput) | `string`[] | *No description.* |
| [`id`](#cdktfprovidertfeteammemberspropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`teamId`](#cdktfprovidertfeteammemberspropertyteamid)<span title="Required">*</span> | `string` | *No description.* |
| [`usernames`](#cdktfprovidertfeteammemberspropertyusernames)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembers.property.idInput" id="cdktfprovidertfeteammemberspropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `teamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembers.property.teamIdInput" id="cdktfprovidertfeteammemberspropertyteamidinput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* `string`

---

##### `usernamesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembers.property.usernamesInput" id="cdktfprovidertfeteammemberspropertyusernamesinput"></a>

```typescript
public readonly usernamesInput: string[];
```

- *Type:* `string`[]

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembers.property.id" id="cdktfprovidertfeteammemberspropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembers.property.teamId" id="cdktfprovidertfeteammemberspropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

---

##### `usernames`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembers.property.usernames" id="cdktfprovidertfeteammemberspropertyusernames"></a>

```typescript
public readonly usernames: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeteammemberspropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.TeamMembers.property.tfResourceType" id="cdktfprovidertfeteammemberspropertytfresourcetype"></a>

- *Type:* `string`

---

### TeamOrganizationMember <a name="@cdktf/provider-tfe.TeamOrganizationMember" id="cdktfprovidertfeteamorganizationmember"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member tfe_team_organization_member}.

#### Initializers <a name="@cdktf/provider-tfe.TeamOrganizationMember.Initializer" id="cdktfprovidertfeteamorganizationmemberinitializer"></a>

```typescript
import { TeamOrganizationMember } from '@cdktf/provider-tfe'

new TeamOrganizationMember(scope: Construct, id: string, config: TeamOrganizationMemberConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeteamorganizationmemberparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeteamorganizationmemberparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeteamorganizationmemberparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamOrganizationMemberConfig`](#@cdktf/provider-tfe.TeamOrganizationMemberConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.parameter.scope" id="cdktfprovidertfeteamorganizationmemberparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.parameter.id" id="cdktfprovidertfeteamorganizationmemberparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.parameter.config" id="cdktfprovidertfeteamorganizationmemberparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TeamOrganizationMemberConfig`](#@cdktf/provider-tfe.TeamOrganizationMemberConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeteamorganizationmemberresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.TeamOrganizationMember.resetId" id="cdktfprovidertfeteamorganizationmemberresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfeteamorganizationmemberpropertyidinput) | `string` | *No description.* |
| [`organizationMembershipIdInput`](#cdktfprovidertfeteamorganizationmemberpropertyorganizationmembershipidinput) | `string` | *No description.* |
| [`teamIdInput`](#cdktfprovidertfeteamorganizationmemberpropertyteamidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfeteamorganizationmemberpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`organizationMembershipId`](#cdktfprovidertfeteamorganizationmemberpropertyorganizationmembershipid)<span title="Required">*</span> | `string` | *No description.* |
| [`teamId`](#cdktfprovidertfeteamorganizationmemberpropertyteamid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.property.idInput" id="cdktfprovidertfeteamorganizationmemberpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `organizationMembershipIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.property.organizationMembershipIdInput" id="cdktfprovidertfeteamorganizationmemberpropertyorganizationmembershipidinput"></a>

```typescript
public readonly organizationMembershipIdInput: string;
```

- *Type:* `string`

---

##### `teamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.property.teamIdInput" id="cdktfprovidertfeteamorganizationmemberpropertyteamidinput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.property.id" id="cdktfprovidertfeteamorganizationmemberpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `organizationMembershipId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.property.organizationMembershipId" id="cdktfprovidertfeteamorganizationmemberpropertyorganizationmembershipid"></a>

```typescript
public readonly organizationMembershipId: string;
```

- *Type:* `string`

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMember.property.teamId" id="cdktfprovidertfeteamorganizationmemberpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeteamorganizationmemberpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.TeamOrganizationMember.property.tfResourceType" id="cdktfprovidertfeteamorganizationmemberpropertytfresourcetype"></a>

- *Type:* `string`

---

### TeamToken <a name="@cdktf/provider-tfe.TeamToken" id="cdktfprovidertfeteamtoken"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/team_token tfe_team_token}.

#### Initializers <a name="@cdktf/provider-tfe.TeamToken.Initializer" id="cdktfprovidertfeteamtokeninitializer"></a>

```typescript
import { TeamToken } from '@cdktf/provider-tfe'

new TeamToken(scope: Construct, id: string, config: TeamTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeteamtokenparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeteamtokenparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeteamtokenparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.TeamTokenConfig`](#@cdktf/provider-tfe.TeamTokenConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamToken.parameter.scope" id="cdktfprovidertfeteamtokenparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamToken.parameter.id" id="cdktfprovidertfeteamtokenparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamToken.parameter.config" id="cdktfprovidertfeteamtokenparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TeamTokenConfig`](#@cdktf/provider-tfe.TeamTokenConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetForceRegenerate`](#cdktfprovidertfeteamtokenresetforceregenerate) | *No description.* |
| [`resetId`](#cdktfprovidertfeteamtokenresetid) | *No description.* |

---

##### `resetForceRegenerate` <a name="@cdktf/provider-tfe.TeamToken.resetForceRegenerate" id="cdktfprovidertfeteamtokenresetforceregenerate"></a>

```typescript
public resetForceRegenerate()
```

##### `resetId` <a name="@cdktf/provider-tfe.TeamToken.resetId" id="cdktfprovidertfeteamtokenresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`token`](#cdktfprovidertfeteamtokenpropertytoken)<span title="Required">*</span> | `string` | *No description.* |
| [`forceRegenerateInput`](#cdktfprovidertfeteamtokenpropertyforceregenerateinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfeteamtokenpropertyidinput) | `string` | *No description.* |
| [`teamIdInput`](#cdktfprovidertfeteamtokenpropertyteamidinput) | `string` | *No description.* |
| [`forceRegenerate`](#cdktfprovidertfeteamtokenpropertyforceregenerate)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfeteamtokenpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`teamId`](#cdktfprovidertfeteamtokenpropertyteamid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `token`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamToken.property.token" id="cdktfprovidertfeteamtokenpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

---

##### `forceRegenerateInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamToken.property.forceRegenerateInput" id="cdktfprovidertfeteamtokenpropertyforceregenerateinput"></a>

```typescript
public readonly forceRegenerateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamToken.property.idInput" id="cdktfprovidertfeteamtokenpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `teamIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamToken.property.teamIdInput" id="cdktfprovidertfeteamtokenpropertyteamidinput"></a>

```typescript
public readonly teamIdInput: string;
```

- *Type:* `string`

---

##### `forceRegenerate`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamToken.property.forceRegenerate" id="cdktfprovidertfeteamtokenpropertyforceregenerate"></a>

```typescript
public readonly forceRegenerate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamToken.property.id" id="cdktfprovidertfeteamtokenpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamToken.property.teamId" id="cdktfprovidertfeteamtokenpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeteamtokenpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.TeamToken.property.tfResourceType" id="cdktfprovidertfeteamtokenpropertytfresourcetype"></a>

- *Type:* `string`

---

### TerraformVersion <a name="@cdktf/provider-tfe.TerraformVersion" id="cdktfprovidertfeterraformversion"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version tfe_terraform_version}.

#### Initializers <a name="@cdktf/provider-tfe.TerraformVersion.Initializer" id="cdktfprovidertfeterraformversioninitializer"></a>

```typescript
import { TerraformVersion } from '@cdktf/provider-tfe'

new TerraformVersion(scope: Construct, id: string, config: TerraformVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeterraformversionparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeterraformversionparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeterraformversionparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.TerraformVersionConfig`](#@cdktf/provider-tfe.TerraformVersionConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.parameter.scope" id="cdktfprovidertfeterraformversionparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.parameter.id" id="cdktfprovidertfeterraformversionparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.parameter.config" id="cdktfprovidertfeterraformversionparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TerraformVersionConfig`](#@cdktf/provider-tfe.TerraformVersionConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetBeta`](#cdktfprovidertfeterraformversionresetbeta) | *No description.* |
| [`resetDeprecated`](#cdktfprovidertfeterraformversionresetdeprecated) | *No description.* |
| [`resetDeprecatedReason`](#cdktfprovidertfeterraformversionresetdeprecatedreason) | *No description.* |
| [`resetEnabled`](#cdktfprovidertfeterraformversionresetenabled) | *No description.* |
| [`resetId`](#cdktfprovidertfeterraformversionresetid) | *No description.* |
| [`resetOfficial`](#cdktfprovidertfeterraformversionresetofficial) | *No description.* |

---

##### `resetBeta` <a name="@cdktf/provider-tfe.TerraformVersion.resetBeta" id="cdktfprovidertfeterraformversionresetbeta"></a>

```typescript
public resetBeta()
```

##### `resetDeprecated` <a name="@cdktf/provider-tfe.TerraformVersion.resetDeprecated" id="cdktfprovidertfeterraformversionresetdeprecated"></a>

```typescript
public resetDeprecated()
```

##### `resetDeprecatedReason` <a name="@cdktf/provider-tfe.TerraformVersion.resetDeprecatedReason" id="cdktfprovidertfeterraformversionresetdeprecatedreason"></a>

```typescript
public resetDeprecatedReason()
```

##### `resetEnabled` <a name="@cdktf/provider-tfe.TerraformVersion.resetEnabled" id="cdktfprovidertfeterraformversionresetenabled"></a>

```typescript
public resetEnabled()
```

##### `resetId` <a name="@cdktf/provider-tfe.TerraformVersion.resetId" id="cdktfprovidertfeterraformversionresetid"></a>

```typescript
public resetId()
```

##### `resetOfficial` <a name="@cdktf/provider-tfe.TerraformVersion.resetOfficial" id="cdktfprovidertfeterraformversionresetofficial"></a>

```typescript
public resetOfficial()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`betaInput`](#cdktfprovidertfeterraformversionpropertybetainput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`deprecatedInput`](#cdktfprovidertfeterraformversionpropertydeprecatedinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`deprecatedReasonInput`](#cdktfprovidertfeterraformversionpropertydeprecatedreasoninput) | `string` | *No description.* |
| [`enabledInput`](#cdktfprovidertfeterraformversionpropertyenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfeterraformversionpropertyidinput) | `string` | *No description.* |
| [`officialInput`](#cdktfprovidertfeterraformversionpropertyofficialinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`shaInput`](#cdktfprovidertfeterraformversionpropertyshainput) | `string` | *No description.* |
| [`urlInput`](#cdktfprovidertfeterraformversionpropertyurlinput) | `string` | *No description.* |
| [`versionInput`](#cdktfprovidertfeterraformversionpropertyversioninput) | `string` | *No description.* |
| [`beta`](#cdktfprovidertfeterraformversionpropertybeta)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`deprecated`](#cdktfprovidertfeterraformversionpropertydeprecated)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`deprecatedReason`](#cdktfprovidertfeterraformversionpropertydeprecatedreason)<span title="Required">*</span> | `string` | *No description.* |
| [`enabled`](#cdktfprovidertfeterraformversionpropertyenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfeterraformversionpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`official`](#cdktfprovidertfeterraformversionpropertyofficial)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sha`](#cdktfprovidertfeterraformversionpropertysha)<span title="Required">*</span> | `string` | *No description.* |
| [`url`](#cdktfprovidertfeterraformversionpropertyurl)<span title="Required">*</span> | `string` | *No description.* |
| [`version`](#cdktfprovidertfeterraformversionpropertyversion)<span title="Required">*</span> | `string` | *No description.* |

---

##### `betaInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.betaInput" id="cdktfprovidertfeterraformversionpropertybetainput"></a>

```typescript
public readonly betaInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `deprecatedInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.deprecatedInput" id="cdktfprovidertfeterraformversionpropertydeprecatedinput"></a>

```typescript
public readonly deprecatedInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `deprecatedReasonInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.deprecatedReasonInput" id="cdktfprovidertfeterraformversionpropertydeprecatedreasoninput"></a>

```typescript
public readonly deprecatedReasonInput: string;
```

- *Type:* `string`

---

##### `enabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.enabledInput" id="cdktfprovidertfeterraformversionpropertyenabledinput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.idInput" id="cdktfprovidertfeterraformversionpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `officialInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.officialInput" id="cdktfprovidertfeterraformversionpropertyofficialinput"></a>

```typescript
public readonly officialInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `shaInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.shaInput" id="cdktfprovidertfeterraformversionpropertyshainput"></a>

```typescript
public readonly shaInput: string;
```

- *Type:* `string`

---

##### `urlInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.urlInput" id="cdktfprovidertfeterraformversionpropertyurlinput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* `string`

---

##### `versionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.versionInput" id="cdktfprovidertfeterraformversionpropertyversioninput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* `string`

---

##### `beta`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.beta" id="cdktfprovidertfeterraformversionpropertybeta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `deprecated`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.deprecated" id="cdktfprovidertfeterraformversionpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `deprecatedReason`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.deprecatedReason" id="cdktfprovidertfeterraformversionpropertydeprecatedreason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* `string`

---

##### `enabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.enabled" id="cdktfprovidertfeterraformversionpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.id" id="cdktfprovidertfeterraformversionpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `official`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.official" id="cdktfprovidertfeterraformversionpropertyofficial"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sha`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.sha" id="cdktfprovidertfeterraformversionpropertysha"></a>

```typescript
public readonly sha: string;
```

- *Type:* `string`

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.url" id="cdktfprovidertfeterraformversionpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersion.property.version" id="cdktfprovidertfeterraformversionpropertyversion"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeterraformversionpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.TerraformVersion.property.tfResourceType" id="cdktfprovidertfeterraformversionpropertytfresourcetype"></a>

- *Type:* `string`

---

### TfeProvider <a name="@cdktf/provider-tfe.TfeProvider" id="cdktfprovidertfetfeprovider"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe tfe}.

#### Initializers <a name="@cdktf/provider-tfe.TfeProvider.Initializer" id="cdktfprovidertfetfeproviderinitializer"></a>

```typescript
import { TfeProvider } from '@cdktf/provider-tfe'

new TfeProvider(scope: Construct, id: string, config?: TfeProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfetfeproviderparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfetfeproviderparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfetfeproviderparameterconfig) | [`@cdktf/provider-tfe.TfeProviderConfig`](#@cdktf/provider-tfe.TfeProviderConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.TfeProvider.parameter.scope" id="cdktfprovidertfetfeproviderparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.TfeProvider.parameter.id" id="cdktfprovidertfetfeproviderparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.parameter.config" id="cdktfprovidertfetfeproviderparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.TfeProviderConfig`](#@cdktf/provider-tfe.TfeProviderConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetAlias`](#cdktfprovidertfetfeproviderresetalias) | *No description.* |
| [`resetHostname`](#cdktfprovidertfetfeproviderresethostname) | *No description.* |
| [`resetSslSkipVerify`](#cdktfprovidertfetfeproviderresetsslskipverify) | *No description.* |
| [`resetToken`](#cdktfprovidertfetfeproviderresettoken) | *No description.* |

---

##### `resetAlias` <a name="@cdktf/provider-tfe.TfeProvider.resetAlias" id="cdktfprovidertfetfeproviderresetalias"></a>

```typescript
public resetAlias()
```

##### `resetHostname` <a name="@cdktf/provider-tfe.TfeProvider.resetHostname" id="cdktfprovidertfetfeproviderresethostname"></a>

```typescript
public resetHostname()
```

##### `resetSslSkipVerify` <a name="@cdktf/provider-tfe.TfeProvider.resetSslSkipVerify" id="cdktfprovidertfetfeproviderresetsslskipverify"></a>

```typescript
public resetSslSkipVerify()
```

##### `resetToken` <a name="@cdktf/provider-tfe.TfeProvider.resetToken" id="cdktfprovidertfetfeproviderresettoken"></a>

```typescript
public resetToken()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`aliasInput`](#cdktfprovidertfetfeproviderpropertyaliasinput) | `string` | *No description.* |
| [`hostnameInput`](#cdktfprovidertfetfeproviderpropertyhostnameinput) | `string` | *No description.* |
| [`sslSkipVerifyInput`](#cdktfprovidertfetfeproviderpropertysslskipverifyinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`tokenInput`](#cdktfprovidertfetfeproviderpropertytokeninput) | `string` | *No description.* |
| [`alias`](#cdktfprovidertfetfeproviderpropertyalias) | `string` | *No description.* |
| [`hostname`](#cdktfprovidertfetfeproviderpropertyhostname) | `string` | *No description.* |
| [`sslSkipVerify`](#cdktfprovidertfetfeproviderpropertysslskipverify) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`token`](#cdktfprovidertfetfeproviderpropertytoken) | `string` | *No description.* |

---

##### `aliasInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.aliasInput" id="cdktfprovidertfetfeproviderpropertyaliasinput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* `string`

---

##### `hostnameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.hostnameInput" id="cdktfprovidertfetfeproviderpropertyhostnameinput"></a>

```typescript
public readonly hostnameInput: string;
```

- *Type:* `string`

---

##### `sslSkipVerifyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.sslSkipVerifyInput" id="cdktfprovidertfetfeproviderpropertysslskipverifyinput"></a>

```typescript
public readonly sslSkipVerifyInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `tokenInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.tokenInput" id="cdktfprovidertfetfeproviderpropertytokeninput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* `string`

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.alias" id="cdktfprovidertfetfeproviderpropertyalias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

---

##### `hostname`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.hostname" id="cdktfprovidertfetfeproviderpropertyhostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* `string`

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.sslSkipVerify" id="cdktfprovidertfetfeproviderpropertysslskipverify"></a>

```typescript
public readonly sslSkipVerify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `token`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProvider.property.token" id="cdktfprovidertfetfeproviderpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfetfeproviderpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.TfeProvider.property.tfResourceType" id="cdktfprovidertfetfeproviderpropertytfresourcetype"></a>

- *Type:* `string`

---

### Variable <a name="@cdktf/provider-tfe.Variable" id="cdktfprovidertfevariable"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/variable tfe_variable}.

#### Initializers <a name="@cdktf/provider-tfe.Variable.Initializer" id="cdktfprovidertfevariableinitializer"></a>

```typescript
import { Variable } from '@cdktf/provider-tfe'

new Variable(scope: Construct, id: string, config: VariableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfevariableparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfevariableparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfevariableparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.VariableConfig`](#@cdktf/provider-tfe.VariableConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.parameter.scope" id="cdktfprovidertfevariableparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.parameter.id" id="cdktfprovidertfevariableparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.parameter.config" id="cdktfprovidertfevariableparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.VariableConfig`](#@cdktf/provider-tfe.VariableConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetDescription`](#cdktfprovidertfevariableresetdescription) | *No description.* |
| [`resetHcl`](#cdktfprovidertfevariableresethcl) | *No description.* |
| [`resetId`](#cdktfprovidertfevariableresetid) | *No description.* |
| [`resetSensitive`](#cdktfprovidertfevariableresetsensitive) | *No description.* |
| [`resetValue`](#cdktfprovidertfevariableresetvalue) | *No description.* |
| [`resetVariableSetId`](#cdktfprovidertfevariableresetvariablesetid) | *No description.* |
| [`resetWorkspaceId`](#cdktfprovidertfevariableresetworkspaceid) | *No description.* |

---

##### `resetDescription` <a name="@cdktf/provider-tfe.Variable.resetDescription" id="cdktfprovidertfevariableresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetHcl` <a name="@cdktf/provider-tfe.Variable.resetHcl" id="cdktfprovidertfevariableresethcl"></a>

```typescript
public resetHcl()
```

##### `resetId` <a name="@cdktf/provider-tfe.Variable.resetId" id="cdktfprovidertfevariableresetid"></a>

```typescript
public resetId()
```

##### `resetSensitive` <a name="@cdktf/provider-tfe.Variable.resetSensitive" id="cdktfprovidertfevariableresetsensitive"></a>

```typescript
public resetSensitive()
```

##### `resetValue` <a name="@cdktf/provider-tfe.Variable.resetValue" id="cdktfprovidertfevariableresetvalue"></a>

```typescript
public resetValue()
```

##### `resetVariableSetId` <a name="@cdktf/provider-tfe.Variable.resetVariableSetId" id="cdktfprovidertfevariableresetvariablesetid"></a>

```typescript
public resetVariableSetId()
```

##### `resetWorkspaceId` <a name="@cdktf/provider-tfe.Variable.resetWorkspaceId" id="cdktfprovidertfevariableresetworkspaceid"></a>

```typescript
public resetWorkspaceId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`categoryInput`](#cdktfprovidertfevariablepropertycategoryinput) | `string` | *No description.* |
| [`descriptionInput`](#cdktfprovidertfevariablepropertydescriptioninput) | `string` | *No description.* |
| [`hclInput`](#cdktfprovidertfevariablepropertyhclinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfevariablepropertyidinput) | `string` | *No description.* |
| [`keyInput`](#cdktfprovidertfevariablepropertykeyinput) | `string` | *No description.* |
| [`sensitiveInput`](#cdktfprovidertfevariablepropertysensitiveinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`valueInput`](#cdktfprovidertfevariablepropertyvalueinput) | `string` | *No description.* |
| [`variableSetIdInput`](#cdktfprovidertfevariablepropertyvariablesetidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfevariablepropertyworkspaceidinput) | `string` | *No description.* |
| [`category`](#cdktfprovidertfevariablepropertycategory)<span title="Required">*</span> | `string` | *No description.* |
| [`description`](#cdktfprovidertfevariablepropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`hcl`](#cdktfprovidertfevariablepropertyhcl)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfevariablepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`key`](#cdktfprovidertfevariablepropertykey)<span title="Required">*</span> | `string` | *No description.* |
| [`sensitive`](#cdktfprovidertfevariablepropertysensitive)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`value`](#cdktfprovidertfevariablepropertyvalue)<span title="Required">*</span> | `string` | *No description.* |
| [`variableSetId`](#cdktfprovidertfevariablepropertyvariablesetid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfevariablepropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `categoryInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.categoryInput" id="cdktfprovidertfevariablepropertycategoryinput"></a>

```typescript
public readonly categoryInput: string;
```

- *Type:* `string`

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.descriptionInput" id="cdktfprovidertfevariablepropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `hclInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.hclInput" id="cdktfprovidertfevariablepropertyhclinput"></a>

```typescript
public readonly hclInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.idInput" id="cdktfprovidertfevariablepropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `keyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.keyInput" id="cdktfprovidertfevariablepropertykeyinput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* `string`

---

##### `sensitiveInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.sensitiveInput" id="cdktfprovidertfevariablepropertysensitiveinput"></a>

```typescript
public readonly sensitiveInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `valueInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.valueInput" id="cdktfprovidertfevariablepropertyvalueinput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* `string`

---

##### `variableSetIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.variableSetIdInput" id="cdktfprovidertfevariablepropertyvariablesetidinput"></a>

```typescript
public readonly variableSetIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Variable.property.workspaceIdInput" id="cdktfprovidertfevariablepropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `category`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.category" id="cdktfprovidertfevariablepropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.description" id="cdktfprovidertfevariablepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `hcl`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.hcl" id="cdktfprovidertfevariablepropertyhcl"></a>

```typescript
public readonly hcl: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.id" id="cdktfprovidertfevariablepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.key" id="cdktfprovidertfevariablepropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

---

##### `sensitive`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.sensitive" id="cdktfprovidertfevariablepropertysensitive"></a>

```typescript
public readonly sensitive: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.value" id="cdktfprovidertfevariablepropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `variableSetId`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.variableSetId" id="cdktfprovidertfevariablepropertyvariablesetid"></a>

```typescript
public readonly variableSetId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.Variable.property.workspaceId" id="cdktfprovidertfevariablepropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfevariablepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.Variable.property.tfResourceType" id="cdktfprovidertfevariablepropertytfresourcetype"></a>

- *Type:* `string`

---

### VariableSet <a name="@cdktf/provider-tfe.VariableSet" id="cdktfprovidertfevariableset"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/variable_set tfe_variable_set}.

#### Initializers <a name="@cdktf/provider-tfe.VariableSet.Initializer" id="cdktfprovidertfevariablesetinitializer"></a>

```typescript
import { VariableSet } from '@cdktf/provider-tfe'

new VariableSet(scope: Construct, id: string, config: VariableSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfevariablesetparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfevariablesetparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfevariablesetparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.VariableSetConfig`](#@cdktf/provider-tfe.VariableSetConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.parameter.scope" id="cdktfprovidertfevariablesetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.parameter.id" id="cdktfprovidertfevariablesetparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.parameter.config" id="cdktfprovidertfevariablesetparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.VariableSetConfig`](#@cdktf/provider-tfe.VariableSetConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetDescription`](#cdktfprovidertfevariablesetresetdescription) | *No description.* |
| [`resetGlobal`](#cdktfprovidertfevariablesetresetglobal) | *No description.* |
| [`resetId`](#cdktfprovidertfevariablesetresetid) | *No description.* |
| [`resetWorkspaceIds`](#cdktfprovidertfevariablesetresetworkspaceids) | *No description.* |

---

##### `resetDescription` <a name="@cdktf/provider-tfe.VariableSet.resetDescription" id="cdktfprovidertfevariablesetresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetGlobal` <a name="@cdktf/provider-tfe.VariableSet.resetGlobal" id="cdktfprovidertfevariablesetresetglobal"></a>

```typescript
public resetGlobal()
```

##### `resetId` <a name="@cdktf/provider-tfe.VariableSet.resetId" id="cdktfprovidertfevariablesetresetid"></a>

```typescript
public resetId()
```

##### `resetWorkspaceIds` <a name="@cdktf/provider-tfe.VariableSet.resetWorkspaceIds" id="cdktfprovidertfevariablesetresetworkspaceids"></a>

```typescript
public resetWorkspaceIds()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`descriptionInput`](#cdktfprovidertfevariablesetpropertydescriptioninput) | `string` | *No description.* |
| [`globalInput`](#cdktfprovidertfevariablesetpropertyglobalinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfevariablesetpropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfevariablesetpropertynameinput) | `string` | *No description.* |
| [`organizationInput`](#cdktfprovidertfevariablesetpropertyorganizationinput) | `string` | *No description.* |
| [`workspaceIdsInput`](#cdktfprovidertfevariablesetpropertyworkspaceidsinput) | `string`[] | *No description.* |
| [`description`](#cdktfprovidertfevariablesetpropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`global`](#cdktfprovidertfevariablesetpropertyglobal)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfevariablesetpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfevariablesetpropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`organization`](#cdktfprovidertfevariablesetpropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceIds`](#cdktfprovidertfevariablesetpropertyworkspaceids)<span title="Required">*</span> | `string`[] | *No description.* |

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSet.property.descriptionInput" id="cdktfprovidertfevariablesetpropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `globalInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSet.property.globalInput" id="cdktfprovidertfevariablesetpropertyglobalinput"></a>

```typescript
public readonly globalInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSet.property.idInput" id="cdktfprovidertfevariablesetpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSet.property.nameInput" id="cdktfprovidertfevariablesetpropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSet.property.organizationInput" id="cdktfprovidertfevariablesetpropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `workspaceIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSet.property.workspaceIdsInput" id="cdktfprovidertfevariablesetpropertyworkspaceidsinput"></a>

```typescript
public readonly workspaceIdsInput: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.property.description" id="cdktfprovidertfevariablesetpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `global`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.property.global" id="cdktfprovidertfevariablesetpropertyglobal"></a>

```typescript
public readonly global: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.property.id" id="cdktfprovidertfevariablesetpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.property.name" id="cdktfprovidertfevariablesetpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.property.organization" id="cdktfprovidertfevariablesetpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `workspaceIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSet.property.workspaceIds" id="cdktfprovidertfevariablesetpropertyworkspaceids"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* `string`[]

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfevariablesetpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.VariableSet.property.tfResourceType" id="cdktfprovidertfevariablesetpropertytfresourcetype"></a>

- *Type:* `string`

---

### Workspace <a name="@cdktf/provider-tfe.Workspace" id="cdktfprovidertfeworkspace"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/workspace tfe_workspace}.

#### Initializers <a name="@cdktf/provider-tfe.Workspace.Initializer" id="cdktfprovidertfeworkspaceinitializer"></a>

```typescript
import { Workspace } from '@cdktf/provider-tfe'

new Workspace(scope: Construct, id: string, config: WorkspaceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeworkspaceparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeworkspaceparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeworkspaceparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.WorkspaceConfig`](#@cdktf/provider-tfe.WorkspaceConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.parameter.scope" id="cdktfprovidertfeworkspaceparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.parameter.id" id="cdktfprovidertfeworkspaceparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.parameter.config" id="cdktfprovidertfeworkspaceparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.WorkspaceConfig`](#@cdktf/provider-tfe.WorkspaceConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`putVcsRepo`](#cdktfprovidertfeworkspaceputvcsrepo) | *No description.* |
| [`resetAgentPoolId`](#cdktfprovidertfeworkspaceresetagentpoolid) | *No description.* |
| [`resetAllowDestroyPlan`](#cdktfprovidertfeworkspaceresetallowdestroyplan) | *No description.* |
| [`resetAutoApply`](#cdktfprovidertfeworkspaceresetautoapply) | *No description.* |
| [`resetDescription`](#cdktfprovidertfeworkspaceresetdescription) | *No description.* |
| [`resetExecutionMode`](#cdktfprovidertfeworkspaceresetexecutionmode) | *No description.* |
| [`resetFileTriggersEnabled`](#cdktfprovidertfeworkspaceresetfiletriggersenabled) | *No description.* |
| [`resetGlobalRemoteState`](#cdktfprovidertfeworkspaceresetglobalremotestate) | *No description.* |
| [`resetId`](#cdktfprovidertfeworkspaceresetid) | *No description.* |
| [`resetOperations`](#cdktfprovidertfeworkspaceresetoperations) | *No description.* |
| [`resetQueueAllRuns`](#cdktfprovidertfeworkspaceresetqueueallruns) | *No description.* |
| [`resetRemoteStateConsumerIds`](#cdktfprovidertfeworkspaceresetremotestateconsumerids) | *No description.* |
| [`resetSpeculativeEnabled`](#cdktfprovidertfeworkspaceresetspeculativeenabled) | *No description.* |
| [`resetSshKeyId`](#cdktfprovidertfeworkspaceresetsshkeyid) | *No description.* |
| [`resetStructuredRunOutputEnabled`](#cdktfprovidertfeworkspaceresetstructuredrunoutputenabled) | *No description.* |
| [`resetTagNames`](#cdktfprovidertfeworkspaceresettagnames) | *No description.* |
| [`resetTerraformVersion`](#cdktfprovidertfeworkspaceresetterraformversion) | *No description.* |
| [`resetTriggerPatterns`](#cdktfprovidertfeworkspaceresettriggerpatterns) | *No description.* |
| [`resetTriggerPrefixes`](#cdktfprovidertfeworkspaceresettriggerprefixes) | *No description.* |
| [`resetVcsRepo`](#cdktfprovidertfeworkspaceresetvcsrepo) | *No description.* |
| [`resetWorkingDirectory`](#cdktfprovidertfeworkspaceresetworkingdirectory) | *No description.* |

---

##### `putVcsRepo` <a name="@cdktf/provider-tfe.Workspace.putVcsRepo" id="cdktfprovidertfeworkspaceputvcsrepo"></a>

```typescript
public putVcsRepo(value: WorkspaceVcsRepo)
```

###### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.parameter.value" id="cdktfprovidertfeworkspaceparametervalue"></a>

- *Type:* [`@cdktf/provider-tfe.WorkspaceVcsRepo`](#@cdktf/provider-tfe.WorkspaceVcsRepo)

---

##### `resetAgentPoolId` <a name="@cdktf/provider-tfe.Workspace.resetAgentPoolId" id="cdktfprovidertfeworkspaceresetagentpoolid"></a>

```typescript
public resetAgentPoolId()
```

##### `resetAllowDestroyPlan` <a name="@cdktf/provider-tfe.Workspace.resetAllowDestroyPlan" id="cdktfprovidertfeworkspaceresetallowdestroyplan"></a>

```typescript
public resetAllowDestroyPlan()
```

##### `resetAutoApply` <a name="@cdktf/provider-tfe.Workspace.resetAutoApply" id="cdktfprovidertfeworkspaceresetautoapply"></a>

```typescript
public resetAutoApply()
```

##### `resetDescription` <a name="@cdktf/provider-tfe.Workspace.resetDescription" id="cdktfprovidertfeworkspaceresetdescription"></a>

```typescript
public resetDescription()
```

##### `resetExecutionMode` <a name="@cdktf/provider-tfe.Workspace.resetExecutionMode" id="cdktfprovidertfeworkspaceresetexecutionmode"></a>

```typescript
public resetExecutionMode()
```

##### `resetFileTriggersEnabled` <a name="@cdktf/provider-tfe.Workspace.resetFileTriggersEnabled" id="cdktfprovidertfeworkspaceresetfiletriggersenabled"></a>

```typescript
public resetFileTriggersEnabled()
```

##### `resetGlobalRemoteState` <a name="@cdktf/provider-tfe.Workspace.resetGlobalRemoteState" id="cdktfprovidertfeworkspaceresetglobalremotestate"></a>

```typescript
public resetGlobalRemoteState()
```

##### `resetId` <a name="@cdktf/provider-tfe.Workspace.resetId" id="cdktfprovidertfeworkspaceresetid"></a>

```typescript
public resetId()
```

##### `resetOperations` <a name="@cdktf/provider-tfe.Workspace.resetOperations" id="cdktfprovidertfeworkspaceresetoperations"></a>

```typescript
public resetOperations()
```

##### `resetQueueAllRuns` <a name="@cdktf/provider-tfe.Workspace.resetQueueAllRuns" id="cdktfprovidertfeworkspaceresetqueueallruns"></a>

```typescript
public resetQueueAllRuns()
```

##### `resetRemoteStateConsumerIds` <a name="@cdktf/provider-tfe.Workspace.resetRemoteStateConsumerIds" id="cdktfprovidertfeworkspaceresetremotestateconsumerids"></a>

```typescript
public resetRemoteStateConsumerIds()
```

##### `resetSpeculativeEnabled` <a name="@cdktf/provider-tfe.Workspace.resetSpeculativeEnabled" id="cdktfprovidertfeworkspaceresetspeculativeenabled"></a>

```typescript
public resetSpeculativeEnabled()
```

##### `resetSshKeyId` <a name="@cdktf/provider-tfe.Workspace.resetSshKeyId" id="cdktfprovidertfeworkspaceresetsshkeyid"></a>

```typescript
public resetSshKeyId()
```

##### `resetStructuredRunOutputEnabled` <a name="@cdktf/provider-tfe.Workspace.resetStructuredRunOutputEnabled" id="cdktfprovidertfeworkspaceresetstructuredrunoutputenabled"></a>

```typescript
public resetStructuredRunOutputEnabled()
```

##### `resetTagNames` <a name="@cdktf/provider-tfe.Workspace.resetTagNames" id="cdktfprovidertfeworkspaceresettagnames"></a>

```typescript
public resetTagNames()
```

##### `resetTerraformVersion` <a name="@cdktf/provider-tfe.Workspace.resetTerraformVersion" id="cdktfprovidertfeworkspaceresetterraformversion"></a>

```typescript
public resetTerraformVersion()
```

##### `resetTriggerPatterns` <a name="@cdktf/provider-tfe.Workspace.resetTriggerPatterns" id="cdktfprovidertfeworkspaceresettriggerpatterns"></a>

```typescript
public resetTriggerPatterns()
```

##### `resetTriggerPrefixes` <a name="@cdktf/provider-tfe.Workspace.resetTriggerPrefixes" id="cdktfprovidertfeworkspaceresettriggerprefixes"></a>

```typescript
public resetTriggerPrefixes()
```

##### `resetVcsRepo` <a name="@cdktf/provider-tfe.Workspace.resetVcsRepo" id="cdktfprovidertfeworkspaceresetvcsrepo"></a>

```typescript
public resetVcsRepo()
```

##### `resetWorkingDirectory` <a name="@cdktf/provider-tfe.Workspace.resetWorkingDirectory" id="cdktfprovidertfeworkspaceresetworkingdirectory"></a>

```typescript
public resetWorkingDirectory()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`vcsRepo`](#cdktfprovidertfeworkspacepropertyvcsrepo)<span title="Required">*</span> | [`@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference`](#@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference) | *No description.* |
| [`agentPoolIdInput`](#cdktfprovidertfeworkspacepropertyagentpoolidinput) | `string` | *No description.* |
| [`allowDestroyPlanInput`](#cdktfprovidertfeworkspacepropertyallowdestroyplaninput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`autoApplyInput`](#cdktfprovidertfeworkspacepropertyautoapplyinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`descriptionInput`](#cdktfprovidertfeworkspacepropertydescriptioninput) | `string` | *No description.* |
| [`executionModeInput`](#cdktfprovidertfeworkspacepropertyexecutionmodeinput) | `string` | *No description.* |
| [`fileTriggersEnabledInput`](#cdktfprovidertfeworkspacepropertyfiletriggersenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`globalRemoteStateInput`](#cdktfprovidertfeworkspacepropertyglobalremotestateinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`idInput`](#cdktfprovidertfeworkspacepropertyidinput) | `string` | *No description.* |
| [`nameInput`](#cdktfprovidertfeworkspacepropertynameinput) | `string` | *No description.* |
| [`operationsInput`](#cdktfprovidertfeworkspacepropertyoperationsinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`organizationInput`](#cdktfprovidertfeworkspacepropertyorganizationinput) | `string` | *No description.* |
| [`queueAllRunsInput`](#cdktfprovidertfeworkspacepropertyqueueallrunsinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`remoteStateConsumerIdsInput`](#cdktfprovidertfeworkspacepropertyremotestateconsumeridsinput) | `string`[] | *No description.* |
| [`speculativeEnabledInput`](#cdktfprovidertfeworkspacepropertyspeculativeenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sshKeyIdInput`](#cdktfprovidertfeworkspacepropertysshkeyidinput) | `string` | *No description.* |
| [`structuredRunOutputEnabledInput`](#cdktfprovidertfeworkspacepropertystructuredrunoutputenabledinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`tagNamesInput`](#cdktfprovidertfeworkspacepropertytagnamesinput) | `string`[] | *No description.* |
| [`terraformVersionInput`](#cdktfprovidertfeworkspacepropertyterraformversioninput) | `string` | *No description.* |
| [`triggerPatternsInput`](#cdktfprovidertfeworkspacepropertytriggerpatternsinput) | `string`[] | *No description.* |
| [`triggerPrefixesInput`](#cdktfprovidertfeworkspacepropertytriggerprefixesinput) | `string`[] | *No description.* |
| [`vcsRepoInput`](#cdktfprovidertfeworkspacepropertyvcsrepoinput) | [`@cdktf/provider-tfe.WorkspaceVcsRepo`](#@cdktf/provider-tfe.WorkspaceVcsRepo) | *No description.* |
| [`workingDirectoryInput`](#cdktfprovidertfeworkspacepropertyworkingdirectoryinput) | `string` | *No description.* |
| [`agentPoolId`](#cdktfprovidertfeworkspacepropertyagentpoolid)<span title="Required">*</span> | `string` | *No description.* |
| [`allowDestroyPlan`](#cdktfprovidertfeworkspacepropertyallowdestroyplan)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`autoApply`](#cdktfprovidertfeworkspacepropertyautoapply)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`description`](#cdktfprovidertfeworkspacepropertydescription)<span title="Required">*</span> | `string` | *No description.* |
| [`executionMode`](#cdktfprovidertfeworkspacepropertyexecutionmode)<span title="Required">*</span> | `string` | *No description.* |
| [`fileTriggersEnabled`](#cdktfprovidertfeworkspacepropertyfiletriggersenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`globalRemoteState`](#cdktfprovidertfeworkspacepropertyglobalremotestate)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfeworkspacepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfeworkspacepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`operations`](#cdktfprovidertfeworkspacepropertyoperations)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`organization`](#cdktfprovidertfeworkspacepropertyorganization)<span title="Required">*</span> | `string` | *No description.* |
| [`queueAllRuns`](#cdktfprovidertfeworkspacepropertyqueueallruns)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`remoteStateConsumerIds`](#cdktfprovidertfeworkspacepropertyremotestateconsumerids)<span title="Required">*</span> | `string`[] | *No description.* |
| [`speculativeEnabled`](#cdktfprovidertfeworkspacepropertyspeculativeenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sshKeyId`](#cdktfprovidertfeworkspacepropertysshkeyid)<span title="Required">*</span> | `string` | *No description.* |
| [`structuredRunOutputEnabled`](#cdktfprovidertfeworkspacepropertystructuredrunoutputenabled)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`tagNames`](#cdktfprovidertfeworkspacepropertytagnames)<span title="Required">*</span> | `string`[] | *No description.* |
| [`terraformVersion`](#cdktfprovidertfeworkspacepropertyterraformversion)<span title="Required">*</span> | `string` | *No description.* |
| [`triggerPatterns`](#cdktfprovidertfeworkspacepropertytriggerpatterns)<span title="Required">*</span> | `string`[] | *No description.* |
| [`triggerPrefixes`](#cdktfprovidertfeworkspacepropertytriggerprefixes)<span title="Required">*</span> | `string`[] | *No description.* |
| [`workingDirectory`](#cdktfprovidertfeworkspacepropertyworkingdirectory)<span title="Required">*</span> | `string` | *No description.* |

---

##### `vcsRepo`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.vcsRepo" id="cdktfprovidertfeworkspacepropertyvcsrepo"></a>

```typescript
public readonly vcsRepo: WorkspaceVcsRepoOutputReference;
```

- *Type:* [`@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference`](#@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference)

---

##### `agentPoolIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.agentPoolIdInput" id="cdktfprovidertfeworkspacepropertyagentpoolidinput"></a>

```typescript
public readonly agentPoolIdInput: string;
```

- *Type:* `string`

---

##### `allowDestroyPlanInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.allowDestroyPlanInput" id="cdktfprovidertfeworkspacepropertyallowdestroyplaninput"></a>

```typescript
public readonly allowDestroyPlanInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `autoApplyInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.autoApplyInput" id="cdktfprovidertfeworkspacepropertyautoapplyinput"></a>

```typescript
public readonly autoApplyInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `descriptionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.descriptionInput" id="cdktfprovidertfeworkspacepropertydescriptioninput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* `string`

---

##### `executionModeInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.executionModeInput" id="cdktfprovidertfeworkspacepropertyexecutionmodeinput"></a>

```typescript
public readonly executionModeInput: string;
```

- *Type:* `string`

---

##### `fileTriggersEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.fileTriggersEnabledInput" id="cdktfprovidertfeworkspacepropertyfiletriggersenabledinput"></a>

```typescript
public readonly fileTriggersEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `globalRemoteStateInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.globalRemoteStateInput" id="cdktfprovidertfeworkspacepropertyglobalremotestateinput"></a>

```typescript
public readonly globalRemoteStateInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.idInput" id="cdktfprovidertfeworkspacepropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `nameInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.nameInput" id="cdktfprovidertfeworkspacepropertynameinput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* `string`

---

##### `operationsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.operationsInput" id="cdktfprovidertfeworkspacepropertyoperationsinput"></a>

```typescript
public readonly operationsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `organizationInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.organizationInput" id="cdktfprovidertfeworkspacepropertyorganizationinput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* `string`

---

##### `queueAllRunsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.queueAllRunsInput" id="cdktfprovidertfeworkspacepropertyqueueallrunsinput"></a>

```typescript
public readonly queueAllRunsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `remoteStateConsumerIdsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.remoteStateConsumerIdsInput" id="cdktfprovidertfeworkspacepropertyremotestateconsumeridsinput"></a>

```typescript
public readonly remoteStateConsumerIdsInput: string[];
```

- *Type:* `string`[]

---

##### `speculativeEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.speculativeEnabledInput" id="cdktfprovidertfeworkspacepropertyspeculativeenabledinput"></a>

```typescript
public readonly speculativeEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sshKeyIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.sshKeyIdInput" id="cdktfprovidertfeworkspacepropertysshkeyidinput"></a>

```typescript
public readonly sshKeyIdInput: string;
```

- *Type:* `string`

---

##### `structuredRunOutputEnabledInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.structuredRunOutputEnabledInput" id="cdktfprovidertfeworkspacepropertystructuredrunoutputenabledinput"></a>

```typescript
public readonly structuredRunOutputEnabledInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `tagNamesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.tagNamesInput" id="cdktfprovidertfeworkspacepropertytagnamesinput"></a>

```typescript
public readonly tagNamesInput: string[];
```

- *Type:* `string`[]

---

##### `terraformVersionInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.terraformVersionInput" id="cdktfprovidertfeworkspacepropertyterraformversioninput"></a>

```typescript
public readonly terraformVersionInput: string;
```

- *Type:* `string`

---

##### `triggerPatternsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.triggerPatternsInput" id="cdktfprovidertfeworkspacepropertytriggerpatternsinput"></a>

```typescript
public readonly triggerPatternsInput: string[];
```

- *Type:* `string`[]

---

##### `triggerPrefixesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.triggerPrefixesInput" id="cdktfprovidertfeworkspacepropertytriggerprefixesinput"></a>

```typescript
public readonly triggerPrefixesInput: string[];
```

- *Type:* `string`[]

---

##### `vcsRepoInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.vcsRepoInput" id="cdktfprovidertfeworkspacepropertyvcsrepoinput"></a>

```typescript
public readonly vcsRepoInput: WorkspaceVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.WorkspaceVcsRepo`](#@cdktf/provider-tfe.WorkspaceVcsRepo)

---

##### `workingDirectoryInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.Workspace.property.workingDirectoryInput" id="cdktfprovidertfeworkspacepropertyworkingdirectoryinput"></a>

```typescript
public readonly workingDirectoryInput: string;
```

- *Type:* `string`

---

##### `agentPoolId`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.agentPoolId" id="cdktfprovidertfeworkspacepropertyagentpoolid"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* `string`

---

##### `allowDestroyPlan`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.allowDestroyPlan" id="cdktfprovidertfeworkspacepropertyallowdestroyplan"></a>

```typescript
public readonly allowDestroyPlan: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `autoApply`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.autoApply" id="cdktfprovidertfeworkspacepropertyautoapply"></a>

```typescript
public readonly autoApply: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.description" id="cdktfprovidertfeworkspacepropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `executionMode`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.executionMode" id="cdktfprovidertfeworkspacepropertyexecutionmode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* `string`

---

##### `fileTriggersEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.fileTriggersEnabled" id="cdktfprovidertfeworkspacepropertyfiletriggersenabled"></a>

```typescript
public readonly fileTriggersEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `globalRemoteState`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.globalRemoteState" id="cdktfprovidertfeworkspacepropertyglobalremotestate"></a>

```typescript
public readonly globalRemoteState: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.id" id="cdktfprovidertfeworkspacepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.name" id="cdktfprovidertfeworkspacepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `operations`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.operations" id="cdktfprovidertfeworkspacepropertyoperations"></a>

```typescript
public readonly operations: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.organization" id="cdktfprovidertfeworkspacepropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

---

##### `queueAllRuns`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.queueAllRuns" id="cdktfprovidertfeworkspacepropertyqueueallruns"></a>

```typescript
public readonly queueAllRuns: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `remoteStateConsumerIds`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.remoteStateConsumerIds" id="cdktfprovidertfeworkspacepropertyremotestateconsumerids"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* `string`[]

---

##### `speculativeEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.speculativeEnabled" id="cdktfprovidertfeworkspacepropertyspeculativeenabled"></a>

```typescript
public readonly speculativeEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sshKeyId`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.sshKeyId" id="cdktfprovidertfeworkspacepropertysshkeyid"></a>

```typescript
public readonly sshKeyId: string;
```

- *Type:* `string`

---

##### `structuredRunOutputEnabled`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.structuredRunOutputEnabled" id="cdktfprovidertfeworkspacepropertystructuredrunoutputenabled"></a>

```typescript
public readonly structuredRunOutputEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `tagNames`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.tagNames" id="cdktfprovidertfeworkspacepropertytagnames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* `string`[]

---

##### `terraformVersion`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.terraformVersion" id="cdktfprovidertfeworkspacepropertyterraformversion"></a>

```typescript
public readonly terraformVersion: string;
```

- *Type:* `string`

---

##### `triggerPatterns`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.triggerPatterns" id="cdktfprovidertfeworkspacepropertytriggerpatterns"></a>

```typescript
public readonly triggerPatterns: string[];
```

- *Type:* `string`[]

---

##### `triggerPrefixes`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.triggerPrefixes" id="cdktfprovidertfeworkspacepropertytriggerprefixes"></a>

```typescript
public readonly triggerPrefixes: string[];
```

- *Type:* `string`[]

---

##### `workingDirectory`<sup>Required</sup> <a name="@cdktf/provider-tfe.Workspace.property.workingDirectory" id="cdktfprovidertfeworkspacepropertyworkingdirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeworkspacepropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.Workspace.property.tfResourceType" id="cdktfprovidertfeworkspacepropertytfresourcetype"></a>

- *Type:* `string`

---

### WorkspaceRunTask <a name="@cdktf/provider-tfe.WorkspaceRunTask" id="cdktfprovidertfeworkspaceruntask"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task tfe_workspace_run_task}.

#### Initializers <a name="@cdktf/provider-tfe.WorkspaceRunTask.Initializer" id="cdktfprovidertfeworkspaceruntaskinitializer"></a>

```typescript
import { WorkspaceRunTask } from '@cdktf/provider-tfe'

new WorkspaceRunTask(scope: Construct, id: string, config: WorkspaceRunTaskConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeworkspaceruntaskparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeworkspaceruntaskparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeworkspaceruntaskparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.WorkspaceRunTaskConfig`](#@cdktf/provider-tfe.WorkspaceRunTaskConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.parameter.scope" id="cdktfprovidertfeworkspaceruntaskparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.parameter.id" id="cdktfprovidertfeworkspaceruntaskparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.parameter.config" id="cdktfprovidertfeworkspaceruntaskparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.WorkspaceRunTaskConfig`](#@cdktf/provider-tfe.WorkspaceRunTaskConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeworkspaceruntaskresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.WorkspaceRunTask.resetId" id="cdktfprovidertfeworkspaceruntaskresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`enforcementLevelInput`](#cdktfprovidertfeworkspaceruntaskpropertyenforcementlevelinput) | `string` | *No description.* |
| [`idInput`](#cdktfprovidertfeworkspaceruntaskpropertyidinput) | `string` | *No description.* |
| [`taskIdInput`](#cdktfprovidertfeworkspaceruntaskpropertytaskidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfeworkspaceruntaskpropertyworkspaceidinput) | `string` | *No description.* |
| [`enforcementLevel`](#cdktfprovidertfeworkspaceruntaskpropertyenforcementlevel)<span title="Required">*</span> | `string` | *No description.* |
| [`id`](#cdktfprovidertfeworkspaceruntaskpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`taskId`](#cdktfprovidertfeworkspaceruntaskpropertytaskid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfeworkspaceruntaskpropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `enforcementLevelInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.enforcementLevelInput" id="cdktfprovidertfeworkspaceruntaskpropertyenforcementlevelinput"></a>

```typescript
public readonly enforcementLevelInput: string;
```

- *Type:* `string`

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.idInput" id="cdktfprovidertfeworkspaceruntaskpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `taskIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.taskIdInput" id="cdktfprovidertfeworkspaceruntaskpropertytaskidinput"></a>

```typescript
public readonly taskIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.workspaceIdInput" id="cdktfprovidertfeworkspaceruntaskpropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `enforcementLevel`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.enforcementLevel" id="cdktfprovidertfeworkspaceruntaskpropertyenforcementlevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.id" id="cdktfprovidertfeworkspaceruntaskpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `taskId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.taskId" id="cdktfprovidertfeworkspaceruntaskpropertytaskid"></a>

```typescript
public readonly taskId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.workspaceId" id="cdktfprovidertfeworkspaceruntaskpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeworkspaceruntaskpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.WorkspaceRunTask.property.tfResourceType" id="cdktfprovidertfeworkspaceruntaskpropertytfresourcetype"></a>

- *Type:* `string`

---

### WorkspaceVariableSet <a name="@cdktf/provider-tfe.WorkspaceVariableSet" id="cdktfprovidertfeworkspacevariableset"></a>

Represents a {@link https://www.terraform.io/docs/providers/tfe/r/workspace_variable_set tfe_workspace_variable_set}.

#### Initializers <a name="@cdktf/provider-tfe.WorkspaceVariableSet.Initializer" id="cdktfprovidertfeworkspacevariablesetinitializer"></a>

```typescript
import { WorkspaceVariableSet } from '@cdktf/provider-tfe'

new WorkspaceVariableSet(scope: Construct, id: string, config: WorkspaceVariableSetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#cdktfprovidertfeworkspacevariablesetparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | The scope in which to define this construct. |
| [`id`](#cdktfprovidertfeworkspacevariablesetparameterid)<span title="Required">*</span> | `string` | The scoped construct ID. |
| [`config`](#cdktfprovidertfeworkspacevariablesetparameterconfig)<span title="Required">*</span> | [`@cdktf/provider-tfe.WorkspaceVariableSetConfig`](#@cdktf/provider-tfe.WorkspaceVariableSetConfig) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.parameter.scope" id="cdktfprovidertfeworkspacevariablesetparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.parameter.id" id="cdktfprovidertfeworkspacevariablesetparameterid"></a>

- *Type:* `string`

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.parameter.config" id="cdktfprovidertfeworkspacevariablesetparameterconfig"></a>

- *Type:* [`@cdktf/provider-tfe.WorkspaceVariableSetConfig`](#@cdktf/provider-tfe.WorkspaceVariableSetConfig)

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetId`](#cdktfprovidertfeworkspacevariablesetresetid) | *No description.* |

---

##### `resetId` <a name="@cdktf/provider-tfe.WorkspaceVariableSet.resetId" id="cdktfprovidertfeworkspacevariablesetresetid"></a>

```typescript
public resetId()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`idInput`](#cdktfprovidertfeworkspacevariablesetpropertyidinput) | `string` | *No description.* |
| [`variableSetIdInput`](#cdktfprovidertfeworkspacevariablesetpropertyvariablesetidinput) | `string` | *No description.* |
| [`workspaceIdInput`](#cdktfprovidertfeworkspacevariablesetpropertyworkspaceidinput) | `string` | *No description.* |
| [`id`](#cdktfprovidertfeworkspacevariablesetpropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`variableSetId`](#cdktfprovidertfeworkspacevariablesetpropertyvariablesetid)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceId`](#cdktfprovidertfeworkspacevariablesetpropertyworkspaceid)<span title="Required">*</span> | `string` | *No description.* |

---

##### `idInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.property.idInput" id="cdktfprovidertfeworkspacevariablesetpropertyidinput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* `string`

---

##### `variableSetIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.property.variableSetIdInput" id="cdktfprovidertfeworkspacevariablesetpropertyvariablesetidinput"></a>

```typescript
public readonly variableSetIdInput: string;
```

- *Type:* `string`

---

##### `workspaceIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.property.workspaceIdInput" id="cdktfprovidertfeworkspacevariablesetpropertyworkspaceidinput"></a>

```typescript
public readonly workspaceIdInput: string;
```

- *Type:* `string`

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.property.id" id="cdktfprovidertfeworkspacevariablesetpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `variableSetId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.property.variableSetId" id="cdktfprovidertfeworkspacevariablesetpropertyvariablesetid"></a>

```typescript
public readonly variableSetId: string;
```

- *Type:* `string`

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSet.property.workspaceId" id="cdktfprovidertfeworkspacevariablesetpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

---

#### Constants <a name="Constants" id="constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`tfResourceType`](#cdktfprovidertfeworkspacevariablesetpropertytfresourcetype)<span title="Required">*</span> | `string` | *No description.* |

---

##### `tfResourceType` <a name="@cdktf/provider-tfe.WorkspaceVariableSet.property.tfResourceType" id="cdktfprovidertfeworkspacevariablesetpropertytfresourcetype"></a>

- *Type:* `string`

---

## Structs <a name="Structs" id="structs"></a>

### AgentPoolConfig <a name="@cdktf/provider-tfe.AgentPoolConfig" id="cdktfprovidertfeagentpoolconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AgentPoolConfig } from '@cdktf/provider-tfe'

const agentPoolConfig: AgentPoolConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeagentpoolconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeagentpoolconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeagentpoolconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeagentpoolconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfeagentpoolconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_pool#name AgentPool#name}. |
| [`organization`](#cdktfprovidertfeagentpoolconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_pool#organization AgentPool#organization}. |
| [`id`](#cdktfprovidertfeagentpoolconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_pool#id AgentPool#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPoolConfig.property.count" id="cdktfprovidertfeagentpoolconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPoolConfig.property.dependsOn" id="cdktfprovidertfeagentpoolconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPoolConfig.property.lifecycle" id="cdktfprovidertfeagentpoolconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPoolConfig.property.provider" id="cdktfprovidertfeagentpoolconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPoolConfig.property.name" id="cdktfprovidertfeagentpoolconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_pool#name AgentPool#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentPoolConfig.property.organization" id="cdktfprovidertfeagentpoolconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_pool#organization AgentPool#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentPoolConfig.property.id" id="cdktfprovidertfeagentpoolconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_pool#id AgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### AgentTokenConfig <a name="@cdktf/provider-tfe.AgentTokenConfig" id="cdktfprovidertfeagenttokenconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { AgentTokenConfig } from '@cdktf/provider-tfe'

const agentTokenConfig: AgentTokenConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeagenttokenconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeagenttokenconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeagenttokenconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeagenttokenconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`agentPoolId`](#cdktfprovidertfeagenttokenconfigpropertyagentpoolid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_token#agent_pool_id AgentToken#agent_pool_id}. |
| [`description`](#cdktfprovidertfeagenttokenconfigpropertydescription)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_token#description AgentToken#description}. |
| [`id`](#cdktfprovidertfeagenttokenconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_token#id AgentToken#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentTokenConfig.property.count" id="cdktfprovidertfeagenttokenconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentTokenConfig.property.dependsOn" id="cdktfprovidertfeagenttokenconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentTokenConfig.property.lifecycle" id="cdktfprovidertfeagenttokenconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentTokenConfig.property.provider" id="cdktfprovidertfeagenttokenconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `agentPoolId`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentTokenConfig.property.agentPoolId" id="cdktfprovidertfeagenttokenconfigpropertyagentpoolid"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_token#agent_pool_id AgentToken#agent_pool_id}.

---

##### `description`<sup>Required</sup> <a name="@cdktf/provider-tfe.AgentTokenConfig.property.description" id="cdktfprovidertfeagenttokenconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_token#description AgentToken#description}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.AgentTokenConfig.property.id" id="cdktfprovidertfeagenttokenconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/agent_token#id AgentToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeAgentPoolConfig <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig" id="cdktfprovidertfedatatfeagentpoolconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeAgentPoolConfig } from '@cdktf/provider-tfe'

const dataTfeAgentPoolConfig: DataTfeAgentPoolConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeagentpoolconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeagentpoolconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeagentpoolconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeagentpoolconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfedatatfeagentpoolconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/agent_pool#name DataTfeAgentPool#name}. |
| [`organization`](#cdktfprovidertfedatatfeagentpoolconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/agent_pool#organization DataTfeAgentPool#organization}. |
| [`id`](#cdktfprovidertfedatatfeagentpoolconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/agent_pool#id DataTfeAgentPool#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig.property.count" id="cdktfprovidertfedatatfeagentpoolconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig.property.dependsOn" id="cdktfprovidertfedatatfeagentpoolconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig.property.lifecycle" id="cdktfprovidertfedatatfeagentpoolconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig.property.provider" id="cdktfprovidertfedatatfeagentpoolconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig.property.name" id="cdktfprovidertfedatatfeagentpoolconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/agent_pool#name DataTfeAgentPool#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig.property.organization" id="cdktfprovidertfedatatfeagentpoolconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/agent_pool#organization DataTfeAgentPool#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeAgentPoolConfig.property.id" id="cdktfprovidertfedatatfeagentpoolconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/agent_pool#id DataTfeAgentPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeIpRangesConfig <a name="@cdktf/provider-tfe.DataTfeIpRangesConfig" id="cdktfprovidertfedatatfeiprangesconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeIpRangesConfig } from '@cdktf/provider-tfe'

const dataTfeIpRangesConfig: DataTfeIpRangesConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeiprangesconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeiprangesconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeiprangesconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeiprangesconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`id`](#cdktfprovidertfedatatfeiprangesconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges#id DataTfeIpRanges#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeIpRangesConfig.property.count" id="cdktfprovidertfedatatfeiprangesconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeIpRangesConfig.property.dependsOn" id="cdktfprovidertfedatatfeiprangesconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeIpRangesConfig.property.lifecycle" id="cdktfprovidertfedatatfeiprangesconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeIpRangesConfig.property.provider" id="cdktfprovidertfedatatfeiprangesconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeIpRangesConfig.property.id" id="cdktfprovidertfedatatfeiprangesconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ip_ranges#id DataTfeIpRanges#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeOauthClientConfig <a name="@cdktf/provider-tfe.DataTfeOauthClientConfig" id="cdktfprovidertfedatatfeoauthclientconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeOauthClientConfig } from '@cdktf/provider-tfe'

const dataTfeOauthClientConfig: DataTfeOauthClientConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeoauthclientconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeoauthclientconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeoauthclientconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeoauthclientconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`oauthClientId`](#cdktfprovidertfedatatfeoauthclientconfigpropertyoauthclientid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/oauth_client#oauth_client_id DataTfeOauthClient#oauth_client_id}. |
| [`id`](#cdktfprovidertfedatatfeoauthclientconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/oauth_client#id DataTfeOauthClient#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClientConfig.property.count" id="cdktfprovidertfedatatfeoauthclientconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClientConfig.property.dependsOn" id="cdktfprovidertfedatatfeoauthclientconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClientConfig.property.lifecycle" id="cdktfprovidertfedatatfeoauthclientconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClientConfig.property.provider" id="cdktfprovidertfedatatfeoauthclientconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `oauthClientId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClientConfig.property.oauthClientId" id="cdktfprovidertfedatatfeoauthclientconfigpropertyoauthclientid"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/oauth_client#oauth_client_id DataTfeOauthClient#oauth_client_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOauthClientConfig.property.id" id="cdktfprovidertfedatatfeoauthclientconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/oauth_client#id DataTfeOauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeOrganizationConfig <a name="@cdktf/provider-tfe.DataTfeOrganizationConfig" id="cdktfprovidertfedatatfeorganizationconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeOrganizationConfig } from '@cdktf/provider-tfe'

const dataTfeOrganizationConfig: DataTfeOrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeorganizationconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeorganizationconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeorganizationconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeorganizationconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfedatatfeorganizationconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization#name DataTfeOrganization#name}. |
| [`id`](#cdktfprovidertfedatatfeorganizationconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization#id DataTfeOrganization#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationConfig.property.count" id="cdktfprovidertfedatatfeorganizationconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationConfig.property.dependsOn" id="cdktfprovidertfedatatfeorganizationconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationConfig.property.lifecycle" id="cdktfprovidertfedatatfeorganizationconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationConfig.property.provider" id="cdktfprovidertfedatatfeorganizationconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationConfig.property.name" id="cdktfprovidertfedatatfeorganizationconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization#name DataTfeOrganization#name}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationConfig.property.id" id="cdktfprovidertfedatatfeorganizationconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization#id DataTfeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeOrganizationMembershipConfig <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig" id="cdktfprovidertfedatatfeorganizationmembershipconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeOrganizationMembershipConfig } from '@cdktf/provider-tfe'

const dataTfeOrganizationMembershipConfig: DataTfeOrganizationMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeorganizationmembershipconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeorganizationmembershipconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeorganizationmembershipconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeorganizationmembershipconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`email`](#cdktfprovidertfedatatfeorganizationmembershipconfigpropertyemail)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_membership#email DataTfeOrganizationMembership#email}. |
| [`organization`](#cdktfprovidertfedatatfeorganizationmembershipconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_membership#organization DataTfeOrganizationMembership#organization}. |
| [`id`](#cdktfprovidertfedatatfeorganizationmembershipconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_membership#id DataTfeOrganizationMembership#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig.property.count" id="cdktfprovidertfedatatfeorganizationmembershipconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig.property.dependsOn" id="cdktfprovidertfedatatfeorganizationmembershipconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig.property.lifecycle" id="cdktfprovidertfedatatfeorganizationmembershipconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig.property.provider" id="cdktfprovidertfedatatfeorganizationmembershipconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig.property.email" id="cdktfprovidertfedatatfeorganizationmembershipconfigpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_membership#email DataTfeOrganizationMembership#email}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig.property.organization" id="cdktfprovidertfedatatfeorganizationmembershipconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_membership#organization DataTfeOrganizationMembership#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationMembershipConfig.property.id" id="cdktfprovidertfedatatfeorganizationmembershipconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_membership#id DataTfeOrganizationMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeOrganizationRunTaskConfig <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig" id="cdktfprovidertfedatatfeorganizationruntaskconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeOrganizationRunTaskConfig } from '@cdktf/provider-tfe'

const dataTfeOrganizationRunTaskConfig: DataTfeOrganizationRunTaskConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#name DataTfeOrganizationRunTask#name}. |
| [`organization`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#organization DataTfeOrganizationRunTask#organization}. |
| [`category`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertycategory) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#category DataTfeOrganizationRunTask#category}. |
| [`enabled`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#enabled DataTfeOrganizationRunTask#enabled}. |
| [`id`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#id DataTfeOrganizationRunTask#id}. |
| [`url`](#cdktfprovidertfedatatfeorganizationruntaskconfigpropertyurl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#url DataTfeOrganizationRunTask#url}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.count" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.dependsOn" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.lifecycle" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.provider" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.name" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#name DataTfeOrganizationRunTask#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.organization" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#organization DataTfeOrganizationRunTask#organization}.

---

##### `category`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.category" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#category DataTfeOrganizationRunTask#category}.

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.enabled" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#enabled DataTfeOrganizationRunTask#enabled}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.id" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#id DataTfeOrganizationRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `url`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationRunTaskConfig.property.url" id="cdktfprovidertfedatatfeorganizationruntaskconfigpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organization_run_task#url DataTfeOrganizationRunTask#url}.

---

### DataTfeOrganizationsConfig <a name="@cdktf/provider-tfe.DataTfeOrganizationsConfig" id="cdktfprovidertfedatatfeorganizationsconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeOrganizationsConfig } from '@cdktf/provider-tfe'

const dataTfeOrganizationsConfig: DataTfeOrganizationsConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeorganizationsconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeorganizationsconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeorganizationsconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeorganizationsconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`admin`](#cdktfprovidertfedatatfeorganizationsconfigpropertyadmin) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organizations#admin DataTfeOrganizations#admin}. |
| [`id`](#cdktfprovidertfedatatfeorganizationsconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organizations#id DataTfeOrganizations#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationsConfig.property.count" id="cdktfprovidertfedatatfeorganizationsconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationsConfig.property.dependsOn" id="cdktfprovidertfedatatfeorganizationsconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationsConfig.property.lifecycle" id="cdktfprovidertfedatatfeorganizationsconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationsConfig.property.provider" id="cdktfprovidertfedatatfeorganizationsconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `admin`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationsConfig.property.admin" id="cdktfprovidertfedatatfeorganizationsconfigpropertyadmin"></a>

```typescript
public readonly admin: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organizations#admin DataTfeOrganizations#admin}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOrganizationsConfig.property.id" id="cdktfprovidertfedatatfeorganizationsconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/organizations#id DataTfeOrganizations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeOutputsConfig <a name="@cdktf/provider-tfe.DataTfeOutputsConfig" id="cdktfprovidertfedatatfeoutputsconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeOutputsConfig } from '@cdktf/provider-tfe'

const dataTfeOutputsConfig: DataTfeOutputsConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeoutputsconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeoutputsconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeoutputsconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeoutputsconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeoutputsconfigpropertyorganization)<span title="Required">*</span> | `string` | The organization to fetch the remote state from. |
| [`workspace`](#cdktfprovidertfedatatfeoutputsconfigpropertyworkspace)<span title="Required">*</span> | `string` | The workspace to fetch the remote state from. |
| [`values`](#cdktfprovidertfedatatfeoutputsconfigpropertyvalues) | {[ key: string ]: `any`} | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/outputs#values DataTfeOutputs#values}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputsConfig.property.count" id="cdktfprovidertfedatatfeoutputsconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputsConfig.property.dependsOn" id="cdktfprovidertfedatatfeoutputsconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputsConfig.property.lifecycle" id="cdktfprovidertfedatatfeoutputsconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputsConfig.property.provider" id="cdktfprovidertfedatatfeoutputsconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputsConfig.property.organization" id="cdktfprovidertfedatatfeoutputsconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

The organization to fetch the remote state from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/outputs#organization DataTfeOutputs#organization}

---

##### `workspace`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeOutputsConfig.property.workspace" id="cdktfprovidertfedatatfeoutputsconfigpropertyworkspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* `string`

The workspace to fetch the remote state from.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/outputs#workspace DataTfeOutputs#workspace}

---

##### `values`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeOutputsConfig.property.values" id="cdktfprovidertfedatatfeoutputsconfigpropertyvalues"></a>

```typescript
public readonly values: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: `any`}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/outputs#values DataTfeOutputs#values}.

---

### DataTfeSlugConfig <a name="@cdktf/provider-tfe.DataTfeSlugConfig" id="cdktfprovidertfedatatfeslugconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeSlugConfig } from '@cdktf/provider-tfe'

const dataTfeSlugConfig: DataTfeSlugConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeslugconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeslugconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeslugconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeslugconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`sourcePath`](#cdktfprovidertfedatatfeslugconfigpropertysourcepath)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/slug#source_path DataTfeSlug#source_path}. |
| [`id`](#cdktfprovidertfedatatfeslugconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/slug#id DataTfeSlug#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSlugConfig.property.count" id="cdktfprovidertfedatatfeslugconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSlugConfig.property.dependsOn" id="cdktfprovidertfedatatfeslugconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSlugConfig.property.lifecycle" id="cdktfprovidertfedatatfeslugconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSlugConfig.property.provider" id="cdktfprovidertfedatatfeslugconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `sourcePath`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSlugConfig.property.sourcePath" id="cdktfprovidertfedatatfeslugconfigpropertysourcepath"></a>

```typescript
public readonly sourcePath: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/slug#source_path DataTfeSlug#source_path}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSlugConfig.property.id" id="cdktfprovidertfedatatfeslugconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/slug#id DataTfeSlug#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeSshKeyConfig <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig" id="cdktfprovidertfedatatfesshkeyconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeSshKeyConfig } from '@cdktf/provider-tfe'

const dataTfeSshKeyConfig: DataTfeSshKeyConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfesshkeyconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfesshkeyconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfesshkeyconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfesshkeyconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfedatatfesshkeyconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ssh_key#name DataTfeSshKey#name}. |
| [`organization`](#cdktfprovidertfedatatfesshkeyconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ssh_key#organization DataTfeSshKey#organization}. |
| [`id`](#cdktfprovidertfedatatfesshkeyconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ssh_key#id DataTfeSshKey#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig.property.count" id="cdktfprovidertfedatatfesshkeyconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig.property.dependsOn" id="cdktfprovidertfedatatfesshkeyconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig.property.lifecycle" id="cdktfprovidertfedatatfesshkeyconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig.property.provider" id="cdktfprovidertfedatatfesshkeyconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig.property.name" id="cdktfprovidertfedatatfesshkeyconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ssh_key#name DataTfeSshKey#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig.property.organization" id="cdktfprovidertfedatatfesshkeyconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ssh_key#organization DataTfeSshKey#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeSshKeyConfig.property.id" id="cdktfprovidertfedatatfesshkeyconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/ssh_key#id DataTfeSshKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeTeamAccessConfig <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig" id="cdktfprovidertfedatatfeteamaccessconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeTeamAccessConfig } from '@cdktf/provider-tfe'

const dataTfeTeamAccessConfig: DataTfeTeamAccessConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeteamaccessconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeteamaccessconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeteamaccessconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeteamaccessconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`teamId`](#cdktfprovidertfedatatfeteamaccessconfigpropertyteamid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access#team_id DataTfeTeamAccess#team_id}. |
| [`workspaceId`](#cdktfprovidertfedatatfeteamaccessconfigpropertyworkspaceid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access#workspace_id DataTfeTeamAccess#workspace_id}. |
| [`id`](#cdktfprovidertfedatatfeteamaccessconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access#id DataTfeTeamAccess#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig.property.count" id="cdktfprovidertfedatatfeteamaccessconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig.property.dependsOn" id="cdktfprovidertfedatatfeteamaccessconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig.property.lifecycle" id="cdktfprovidertfedatatfeteamaccessconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig.property.provider" id="cdktfprovidertfedatatfeteamaccessconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig.property.teamId" id="cdktfprovidertfedatatfeteamaccessconfigpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access#team_id DataTfeTeamAccess#team_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig.property.workspaceId" id="cdktfprovidertfedatatfeteamaccessconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access#workspace_id DataTfeTeamAccess#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessConfig.property.id" id="cdktfprovidertfedatatfeteamaccessconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team_access#id DataTfeTeamAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeTeamAccessPermissions <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissions" id="cdktfprovidertfedatatfeteamaccesspermissions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeTeamAccessPermissions } from '@cdktf/provider-tfe'

const dataTfeTeamAccessPermissions: DataTfeTeamAccessPermissions = { ... }
```


### DataTfeTeamConfig <a name="@cdktf/provider-tfe.DataTfeTeamConfig" id="cdktfprovidertfedatatfeteamconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeTeamConfig } from '@cdktf/provider-tfe'

const dataTfeTeamConfig: DataTfeTeamConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeteamconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeteamconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeteamconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeteamconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfedatatfeteamconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team#name DataTfeTeam#name}. |
| [`organization`](#cdktfprovidertfedatatfeteamconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team#organization DataTfeTeam#organization}. |
| [`id`](#cdktfprovidertfedatatfeteamconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team#id DataTfeTeam#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamConfig.property.count" id="cdktfprovidertfedatatfeteamconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamConfig.property.dependsOn" id="cdktfprovidertfedatatfeteamconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamConfig.property.lifecycle" id="cdktfprovidertfedatatfeteamconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamConfig.property.provider" id="cdktfprovidertfedatatfeteamconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamConfig.property.name" id="cdktfprovidertfedatatfeteamconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team#name DataTfeTeam#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamConfig.property.organization" id="cdktfprovidertfedatatfeteamconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team#organization DataTfeTeam#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamConfig.property.id" id="cdktfprovidertfedatatfeteamconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/team#id DataTfeTeam#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeVariablesConfig <a name="@cdktf/provider-tfe.DataTfeVariablesConfig" id="cdktfprovidertfedatatfevariablesconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeVariablesConfig } from '@cdktf/provider-tfe'

const dataTfeVariablesConfig: DataTfeVariablesConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfevariablesconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfevariablesconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfevariablesconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfevariablesconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`id`](#cdktfprovidertfedatatfevariablesconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variables#id DataTfeVariables#id}. |
| [`variableSetId`](#cdktfprovidertfedatatfevariablesconfigpropertyvariablesetid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variables#variable_set_id DataTfeVariables#variable_set_id}. |
| [`workspaceId`](#cdktfprovidertfedatatfevariablesconfigpropertyworkspaceid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variables#workspace_id DataTfeVariables#workspace_id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesConfig.property.count" id="cdktfprovidertfedatatfevariablesconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesConfig.property.dependsOn" id="cdktfprovidertfedatatfevariablesconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesConfig.property.lifecycle" id="cdktfprovidertfedatatfevariablesconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesConfig.property.provider" id="cdktfprovidertfedatatfevariablesconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesConfig.property.id" id="cdktfprovidertfedatatfevariablesconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variables#id DataTfeVariables#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `variableSetId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesConfig.property.variableSetId" id="cdktfprovidertfedatatfevariablesconfigpropertyvariablesetid"></a>

```typescript
public readonly variableSetId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variables#variable_set_id DataTfeVariables#variable_set_id}.

---

##### `workspaceId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesConfig.property.workspaceId" id="cdktfprovidertfedatatfevariablesconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variables#workspace_id DataTfeVariables#workspace_id}.

---

### DataTfeVariablesEnv <a name="@cdktf/provider-tfe.DataTfeVariablesEnv" id="cdktfprovidertfedatatfevariablesenv"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeVariablesEnv } from '@cdktf/provider-tfe'

const dataTfeVariablesEnv: DataTfeVariablesEnv = { ... }
```


### DataTfeVariableSetConfig <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig" id="cdktfprovidertfedatatfevariablesetconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeVariableSetConfig } from '@cdktf/provider-tfe'

const dataTfeVariableSetConfig: DataTfeVariableSetConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfevariablesetconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfevariablesetconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfevariablesetconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfevariablesetconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfedatatfevariablesetconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#name DataTfeVariableSet#name}. |
| [`organization`](#cdktfprovidertfedatatfevariablesetconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#organization DataTfeVariableSet#organization}. |
| [`id`](#cdktfprovidertfedatatfevariablesetconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#id DataTfeVariableSet#id}. |
| [`variableIds`](#cdktfprovidertfedatatfevariablesetconfigpropertyvariableids) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#variable_ids DataTfeVariableSet#variable_ids}. |
| [`workspaceIds`](#cdktfprovidertfedatatfevariablesetconfigpropertyworkspaceids) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#workspace_ids DataTfeVariableSet#workspace_ids}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.count" id="cdktfprovidertfedatatfevariablesetconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.dependsOn" id="cdktfprovidertfedatatfevariablesetconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.lifecycle" id="cdktfprovidertfedatatfevariablesetconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.provider" id="cdktfprovidertfedatatfevariablesetconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.name" id="cdktfprovidertfedatatfevariablesetconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#name DataTfeVariableSet#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.organization" id="cdktfprovidertfedatatfevariablesetconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#organization DataTfeVariableSet#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.id" id="cdktfprovidertfedatatfevariablesetconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#id DataTfeVariableSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `variableIds`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.variableIds" id="cdktfprovidertfedatatfevariablesetconfigpropertyvariableids"></a>

```typescript
public readonly variableIds: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#variable_ids DataTfeVariableSet#variable_ids}.

---

##### `workspaceIds`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariableSetConfig.property.workspaceIds" id="cdktfprovidertfedatatfevariablesetconfigpropertyworkspaceids"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/variable_set#workspace_ids DataTfeVariableSet#workspace_ids}.

---

### DataTfeVariablesTerraform <a name="@cdktf/provider-tfe.DataTfeVariablesTerraform" id="cdktfprovidertfedatatfevariablesterraform"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeVariablesTerraform } from '@cdktf/provider-tfe'

const dataTfeVariablesTerraform: DataTfeVariablesTerraform = { ... }
```


### DataTfeVariablesVariables <a name="@cdktf/provider-tfe.DataTfeVariablesVariables" id="cdktfprovidertfedatatfevariablesvariables"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeVariablesVariables } from '@cdktf/provider-tfe'

const dataTfeVariablesVariables: DataTfeVariablesVariables = { ... }
```


### DataTfeWorkspaceConfig <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig" id="cdktfprovidertfedatatfeworkspaceconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeWorkspaceConfig } from '@cdktf/provider-tfe'

const dataTfeWorkspaceConfig: DataTfeWorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeworkspaceconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeworkspaceconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeworkspaceconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeworkspaceconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfedatatfeworkspaceconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#name DataTfeWorkspace#name}. |
| [`organization`](#cdktfprovidertfedatatfeworkspaceconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#organization DataTfeWorkspace#organization}. |
| [`id`](#cdktfprovidertfedatatfeworkspaceconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#id DataTfeWorkspace#id}. |
| [`tagNames`](#cdktfprovidertfedatatfeworkspaceconfigpropertytagnames) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#tag_names DataTfeWorkspace#tag_names}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.count" id="cdktfprovidertfedatatfeworkspaceconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.dependsOn" id="cdktfprovidertfedatatfeworkspaceconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.lifecycle" id="cdktfprovidertfedatatfeworkspaceconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.provider" id="cdktfprovidertfedatatfeworkspaceconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.name" id="cdktfprovidertfedatatfeworkspaceconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#name DataTfeWorkspace#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.organization" id="cdktfprovidertfedatatfeworkspaceconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#organization DataTfeWorkspace#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.id" id="cdktfprovidertfedatatfeworkspaceconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#id DataTfeWorkspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `tagNames`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceConfig.property.tagNames" id="cdktfprovidertfedatatfeworkspaceconfigpropertytagnames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace#tag_names DataTfeWorkspace#tag_names}.

---

### DataTfeWorkspaceIdsConfig <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig" id="cdktfprovidertfedatatfeworkspaceidsconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeWorkspaceIdsConfig } from '@cdktf/provider-tfe'

const dataTfeWorkspaceIdsConfig: DataTfeWorkspaceIdsConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`organization`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#organization DataTfeWorkspaceIds#organization}. |
| [`excludeTags`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertyexcludetags) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}. |
| [`id`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#id DataTfeWorkspaceIds#id}. |
| [`names`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertynames) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#names DataTfeWorkspaceIds#names}. |
| [`tagNames`](#cdktfprovidertfedatatfeworkspaceidsconfigpropertytagnames) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.count" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.dependsOn" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.lifecycle" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.provider" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.organization" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#organization DataTfeWorkspaceIds#organization}.

---

##### `excludeTags`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.excludeTags" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertyexcludetags"></a>

```typescript
public readonly excludeTags: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#exclude_tags DataTfeWorkspaceIds#exclude_tags}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.id" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#id DataTfeWorkspaceIds#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `names`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.names" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertynames"></a>

```typescript
public readonly names: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#names DataTfeWorkspaceIds#names}.

---

##### `tagNames`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceIdsConfig.property.tagNames" id="cdktfprovidertfedatatfeworkspaceidsconfigpropertytagnames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_ids#tag_names DataTfeWorkspaceIds#tag_names}.

---

### DataTfeWorkspaceRunTaskConfig <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig" id="cdktfprovidertfedatatfeworkspaceruntaskconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeWorkspaceRunTaskConfig } from '@cdktf/provider-tfe'

const dataTfeWorkspaceRunTaskConfig: DataTfeWorkspaceRunTaskConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfedatatfeworkspaceruntaskconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfedatatfeworkspaceruntaskconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfedatatfeworkspaceruntaskconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfedatatfeworkspaceruntaskconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`taskId`](#cdktfprovidertfedatatfeworkspaceruntaskconfigpropertytaskid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_run_task#task_id DataTfeWorkspaceRunTask#task_id}. |
| [`workspaceId`](#cdktfprovidertfedatatfeworkspaceruntaskconfigpropertyworkspaceid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_run_task#workspace_id DataTfeWorkspaceRunTask#workspace_id}. |
| [`id`](#cdktfprovidertfedatatfeworkspaceruntaskconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_run_task#id DataTfeWorkspaceRunTask#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig.property.count" id="cdktfprovidertfedatatfeworkspaceruntaskconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig.property.dependsOn" id="cdktfprovidertfedatatfeworkspaceruntaskconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig.property.lifecycle" id="cdktfprovidertfedatatfeworkspaceruntaskconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig.property.provider" id="cdktfprovidertfedatatfeworkspaceruntaskconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `taskId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig.property.taskId" id="cdktfprovidertfedatatfeworkspaceruntaskconfigpropertytaskid"></a>

```typescript
public readonly taskId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_run_task#task_id DataTfeWorkspaceRunTask#task_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig.property.workspaceId" id="cdktfprovidertfedatatfeworkspaceruntaskconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_run_task#workspace_id DataTfeWorkspaceRunTask#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceRunTaskConfig.property.id" id="cdktfprovidertfedatatfeworkspaceruntaskconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/d/workspace_run_task#id DataTfeWorkspaceRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataTfeWorkspaceVcsRepo <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepo" id="cdktfprovidertfedatatfeworkspacevcsrepo"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { DataTfeWorkspaceVcsRepo } from '@cdktf/provider-tfe'

const dataTfeWorkspaceVcsRepo: DataTfeWorkspaceVcsRepo = { ... }
```


### NotificationConfigurationConfig <a name="@cdktf/provider-tfe.NotificationConfigurationConfig" id="cdktfprovidertfenotificationconfigurationconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { NotificationConfigurationConfig } from '@cdktf/provider-tfe'

const notificationConfigurationConfig: NotificationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfenotificationconfigurationconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfenotificationconfigurationconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfenotificationconfigurationconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfenotificationconfigurationconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`destinationType`](#cdktfprovidertfenotificationconfigurationconfigpropertydestinationtype)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#destination_type NotificationConfiguration#destination_type}. |
| [`name`](#cdktfprovidertfenotificationconfigurationconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#name NotificationConfiguration#name}. |
| [`workspaceId`](#cdktfprovidertfenotificationconfigurationconfigpropertyworkspaceid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#workspace_id NotificationConfiguration#workspace_id}. |
| [`emailAddresses`](#cdktfprovidertfenotificationconfigurationconfigpropertyemailaddresses) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#email_addresses NotificationConfiguration#email_addresses}. |
| [`emailUserIds`](#cdktfprovidertfenotificationconfigurationconfigpropertyemailuserids) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#email_user_ids NotificationConfiguration#email_user_ids}. |
| [`enabled`](#cdktfprovidertfenotificationconfigurationconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#enabled NotificationConfiguration#enabled}. |
| [`id`](#cdktfprovidertfenotificationconfigurationconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#id NotificationConfiguration#id}. |
| [`token`](#cdktfprovidertfenotificationconfigurationconfigpropertytoken) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#token NotificationConfiguration#token}. |
| [`triggers`](#cdktfprovidertfenotificationconfigurationconfigpropertytriggers) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#triggers NotificationConfiguration#triggers}. |
| [`url`](#cdktfprovidertfenotificationconfigurationconfigpropertyurl) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#url NotificationConfiguration#url}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.count" id="cdktfprovidertfenotificationconfigurationconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.dependsOn" id="cdktfprovidertfenotificationconfigurationconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.lifecycle" id="cdktfprovidertfenotificationconfigurationconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.provider" id="cdktfprovidertfenotificationconfigurationconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `destinationType`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.destinationType" id="cdktfprovidertfenotificationconfigurationconfigpropertydestinationtype"></a>

```typescript
public readonly destinationType: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#destination_type NotificationConfiguration#destination_type}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.name" id="cdktfprovidertfenotificationconfigurationconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#name NotificationConfiguration#name}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.workspaceId" id="cdktfprovidertfenotificationconfigurationconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#workspace_id NotificationConfiguration#workspace_id}.

---

##### `emailAddresses`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.emailAddresses" id="cdktfprovidertfenotificationconfigurationconfigpropertyemailaddresses"></a>

```typescript
public readonly emailAddresses: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#email_addresses NotificationConfiguration#email_addresses}.

---

##### `emailUserIds`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.emailUserIds" id="cdktfprovidertfenotificationconfigurationconfigpropertyemailuserids"></a>

```typescript
public readonly emailUserIds: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#email_user_ids NotificationConfiguration#email_user_ids}.

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.enabled" id="cdktfprovidertfenotificationconfigurationconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#enabled NotificationConfiguration#enabled}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.id" id="cdktfprovidertfenotificationconfigurationconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#id NotificationConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `token`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.token" id="cdktfprovidertfenotificationconfigurationconfigpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#token NotificationConfiguration#token}.

---

##### `triggers`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.triggers" id="cdktfprovidertfenotificationconfigurationconfigpropertytriggers"></a>

```typescript
public readonly triggers: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#triggers NotificationConfiguration#triggers}.

---

##### `url`<sup>Optional</sup> <a name="@cdktf/provider-tfe.NotificationConfigurationConfig.property.url" id="cdktfprovidertfenotificationconfigurationconfigpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/notification_configuration#url NotificationConfiguration#url}.

---

### OauthClientConfig <a name="@cdktf/provider-tfe.OauthClientConfig" id="cdktfprovidertfeoauthclientconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OauthClientConfig } from '@cdktf/provider-tfe'

const oauthClientConfig: OauthClientConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeoauthclientconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeoauthclientconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeoauthclientconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeoauthclientconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`apiUrl`](#cdktfprovidertfeoauthclientconfigpropertyapiurl)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#api_url OauthClient#api_url}. |
| [`httpUrl`](#cdktfprovidertfeoauthclientconfigpropertyhttpurl)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#http_url OauthClient#http_url}. |
| [`organization`](#cdktfprovidertfeoauthclientconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#organization OauthClient#organization}. |
| [`serviceProvider`](#cdktfprovidertfeoauthclientconfigpropertyserviceprovider)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#service_provider OauthClient#service_provider}. |
| [`id`](#cdktfprovidertfeoauthclientconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#id OauthClient#id}. |
| [`key`](#cdktfprovidertfeoauthclientconfigpropertykey) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#key OauthClient#key}. |
| [`name`](#cdktfprovidertfeoauthclientconfigpropertyname) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#name OauthClient#name}. |
| [`oauthToken`](#cdktfprovidertfeoauthclientconfigpropertyoauthtoken) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#oauth_token OauthClient#oauth_token}. |
| [`privateKey`](#cdktfprovidertfeoauthclientconfigpropertyprivatekey) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#private_key OauthClient#private_key}. |
| [`rsaPublicKey`](#cdktfprovidertfeoauthclientconfigpropertyrsapublickey) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#rsa_public_key OauthClient#rsa_public_key}. |
| [`secret`](#cdktfprovidertfeoauthclientconfigpropertysecret) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#secret OauthClient#secret}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.count" id="cdktfprovidertfeoauthclientconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.dependsOn" id="cdktfprovidertfeoauthclientconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.lifecycle" id="cdktfprovidertfeoauthclientconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.provider" id="cdktfprovidertfeoauthclientconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `apiUrl`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.apiUrl" id="cdktfprovidertfeoauthclientconfigpropertyapiurl"></a>

```typescript
public readonly apiUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#api_url OauthClient#api_url}.

---

##### `httpUrl`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.httpUrl" id="cdktfprovidertfeoauthclientconfigpropertyhttpurl"></a>

```typescript
public readonly httpUrl: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#http_url OauthClient#http_url}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.organization" id="cdktfprovidertfeoauthclientconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#organization OauthClient#organization}.

---

##### `serviceProvider`<sup>Required</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.serviceProvider" id="cdktfprovidertfeoauthclientconfigpropertyserviceprovider"></a>

```typescript
public readonly serviceProvider: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#service_provider OauthClient#service_provider}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.id" id="cdktfprovidertfeoauthclientconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#id OauthClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `key`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.key" id="cdktfprovidertfeoauthclientconfigpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#key OauthClient#key}.

---

##### `name`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.name" id="cdktfprovidertfeoauthclientconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#name OauthClient#name}.

---

##### `oauthToken`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.oauthToken" id="cdktfprovidertfeoauthclientconfigpropertyoauthtoken"></a>

```typescript
public readonly oauthToken: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#oauth_token OauthClient#oauth_token}.

---

##### `privateKey`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.privateKey" id="cdktfprovidertfeoauthclientconfigpropertyprivatekey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#private_key OauthClient#private_key}.

---

##### `rsaPublicKey`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.rsaPublicKey" id="cdktfprovidertfeoauthclientconfigpropertyrsapublickey"></a>

```typescript
public readonly rsaPublicKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#rsa_public_key OauthClient#rsa_public_key}.

---

##### `secret`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OauthClientConfig.property.secret" id="cdktfprovidertfeoauthclientconfigpropertysecret"></a>

```typescript
public readonly secret: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/oauth_client#secret OauthClient#secret}.

---

### OrganizationConfig <a name="@cdktf/provider-tfe.OrganizationConfig" id="cdktfprovidertfeorganizationconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrganizationConfig } from '@cdktf/provider-tfe'

const organizationConfig: OrganizationConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeorganizationconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeorganizationconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeorganizationconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeorganizationconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`email`](#cdktfprovidertfeorganizationconfigpropertyemail)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#email Organization#email}. |
| [`name`](#cdktfprovidertfeorganizationconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#name Organization#name}. |
| [`collaboratorAuthPolicy`](#cdktfprovidertfeorganizationconfigpropertycollaboratorauthpolicy) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#collaborator_auth_policy Organization#collaborator_auth_policy}. |
| [`costEstimationEnabled`](#cdktfprovidertfeorganizationconfigpropertycostestimationenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#cost_estimation_enabled Organization#cost_estimation_enabled}. |
| [`id`](#cdktfprovidertfeorganizationconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#id Organization#id}. |
| [`ownersTeamSamlRoleId`](#cdktfprovidertfeorganizationconfigpropertyownersteamsamlroleid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}. |
| [`sendPassingStatusesForUntriggeredSpeculativePlans`](#cdktfprovidertfeorganizationconfigpropertysendpassingstatusesforuntriggeredspeculativeplans) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}. |
| [`sessionRememberMinutes`](#cdktfprovidertfeorganizationconfigpropertysessionrememberminutes) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#session_remember_minutes Organization#session_remember_minutes}. |
| [`sessionTimeoutMinutes`](#cdktfprovidertfeorganizationconfigpropertysessiontimeoutminutes) | `number` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#session_timeout_minutes Organization#session_timeout_minutes}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.count" id="cdktfprovidertfeorganizationconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.dependsOn" id="cdktfprovidertfeorganizationconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.lifecycle" id="cdktfprovidertfeorganizationconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.provider" id="cdktfprovidertfeorganizationconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.email" id="cdktfprovidertfeorganizationconfigpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#email Organization#email}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.name" id="cdktfprovidertfeorganizationconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#name Organization#name}.

---

##### `collaboratorAuthPolicy`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.collaboratorAuthPolicy" id="cdktfprovidertfeorganizationconfigpropertycollaboratorauthpolicy"></a>

```typescript
public readonly collaboratorAuthPolicy: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#collaborator_auth_policy Organization#collaborator_auth_policy}.

---

##### `costEstimationEnabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.costEstimationEnabled" id="cdktfprovidertfeorganizationconfigpropertycostestimationenabled"></a>

```typescript
public readonly costEstimationEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#cost_estimation_enabled Organization#cost_estimation_enabled}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.id" id="cdktfprovidertfeorganizationconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#id Organization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ownersTeamSamlRoleId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.ownersTeamSamlRoleId" id="cdktfprovidertfeorganizationconfigpropertyownersteamsamlroleid"></a>

```typescript
public readonly ownersTeamSamlRoleId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#owners_team_saml_role_id Organization#owners_team_saml_role_id}.

---

##### `sendPassingStatusesForUntriggeredSpeculativePlans`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.sendPassingStatusesForUntriggeredSpeculativePlans" id="cdktfprovidertfeorganizationconfigpropertysendpassingstatusesforuntriggeredspeculativeplans"></a>

```typescript
public readonly sendPassingStatusesForUntriggeredSpeculativePlans: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#send_passing_statuses_for_untriggered_speculative_plans Organization#send_passing_statuses_for_untriggered_speculative_plans}.

---

##### `sessionRememberMinutes`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.sessionRememberMinutes" id="cdktfprovidertfeorganizationconfigpropertysessionrememberminutes"></a>

```typescript
public readonly sessionRememberMinutes: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#session_remember_minutes Organization#session_remember_minutes}.

---

##### `sessionTimeoutMinutes`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationConfig.property.sessionTimeoutMinutes" id="cdktfprovidertfeorganizationconfigpropertysessiontimeoutminutes"></a>

```typescript
public readonly sessionTimeoutMinutes: number;
```

- *Type:* `number`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization#session_timeout_minutes Organization#session_timeout_minutes}.

---

### OrganizationMembershipConfig <a name="@cdktf/provider-tfe.OrganizationMembershipConfig" id="cdktfprovidertfeorganizationmembershipconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrganizationMembershipConfig } from '@cdktf/provider-tfe'

const organizationMembershipConfig: OrganizationMembershipConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeorganizationmembershipconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeorganizationmembershipconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeorganizationmembershipconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeorganizationmembershipconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`email`](#cdktfprovidertfeorganizationmembershipconfigpropertyemail)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#email OrganizationMembership#email}. |
| [`organization`](#cdktfprovidertfeorganizationmembershipconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#organization OrganizationMembership#organization}. |
| [`id`](#cdktfprovidertfeorganizationmembershipconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#id OrganizationMembership#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembershipConfig.property.count" id="cdktfprovidertfeorganizationmembershipconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembershipConfig.property.dependsOn" id="cdktfprovidertfeorganizationmembershipconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembershipConfig.property.lifecycle" id="cdktfprovidertfeorganizationmembershipconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembershipConfig.property.provider" id="cdktfprovidertfeorganizationmembershipconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `email`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembershipConfig.property.email" id="cdktfprovidertfeorganizationmembershipconfigpropertyemail"></a>

```typescript
public readonly email: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#email OrganizationMembership#email}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationMembershipConfig.property.organization" id="cdktfprovidertfeorganizationmembershipconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#organization OrganizationMembership#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationMembershipConfig.property.id" id="cdktfprovidertfeorganizationmembershipconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_membership#id OrganizationMembership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationModuleSharingConfig <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig" id="cdktfprovidertfeorganizationmodulesharingconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrganizationModuleSharingConfig } from '@cdktf/provider-tfe'

const organizationModuleSharingConfig: OrganizationModuleSharingConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeorganizationmodulesharingconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeorganizationmodulesharingconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeorganizationmodulesharingconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeorganizationmodulesharingconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`moduleConsumers`](#cdktfprovidertfeorganizationmodulesharingconfigpropertymoduleconsumers)<span title="Required">*</span> | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#module_consumers OrganizationModuleSharing#module_consumers}. |
| [`organization`](#cdktfprovidertfeorganizationmodulesharingconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#organization OrganizationModuleSharing#organization}. |
| [`id`](#cdktfprovidertfeorganizationmodulesharingconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#id OrganizationModuleSharing#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig.property.count" id="cdktfprovidertfeorganizationmodulesharingconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig.property.dependsOn" id="cdktfprovidertfeorganizationmodulesharingconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig.property.lifecycle" id="cdktfprovidertfeorganizationmodulesharingconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig.property.provider" id="cdktfprovidertfeorganizationmodulesharingconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `moduleConsumers`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig.property.moduleConsumers" id="cdktfprovidertfeorganizationmodulesharingconfigpropertymoduleconsumers"></a>

```typescript
public readonly moduleConsumers: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#module_consumers OrganizationModuleSharing#module_consumers}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig.property.organization" id="cdktfprovidertfeorganizationmodulesharingconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#organization OrganizationModuleSharing#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationModuleSharingConfig.property.id" id="cdktfprovidertfeorganizationmodulesharingconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_module_sharing#id OrganizationModuleSharing#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationRunTaskConfig <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig" id="cdktfprovidertfeorganizationruntaskconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrganizationRunTaskConfig } from '@cdktf/provider-tfe'

const organizationRunTaskConfig: OrganizationRunTaskConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeorganizationruntaskconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeorganizationruntaskconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeorganizationruntaskconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeorganizationruntaskconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfeorganizationruntaskconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#name OrganizationRunTask#name}. |
| [`organization`](#cdktfprovidertfeorganizationruntaskconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#organization OrganizationRunTask#organization}. |
| [`url`](#cdktfprovidertfeorganizationruntaskconfigpropertyurl)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#url OrganizationRunTask#url}. |
| [`category`](#cdktfprovidertfeorganizationruntaskconfigpropertycategory) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#category OrganizationRunTask#category}. |
| [`enabled`](#cdktfprovidertfeorganizationruntaskconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#enabled OrganizationRunTask#enabled}. |
| [`hmacKey`](#cdktfprovidertfeorganizationruntaskconfigpropertyhmackey) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#hmac_key OrganizationRunTask#hmac_key}. |
| [`id`](#cdktfprovidertfeorganizationruntaskconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#id OrganizationRunTask#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.count" id="cdktfprovidertfeorganizationruntaskconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.dependsOn" id="cdktfprovidertfeorganizationruntaskconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.lifecycle" id="cdktfprovidertfeorganizationruntaskconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.provider" id="cdktfprovidertfeorganizationruntaskconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.name" id="cdktfprovidertfeorganizationruntaskconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#name OrganizationRunTask#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.organization" id="cdktfprovidertfeorganizationruntaskconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#organization OrganizationRunTask#organization}.

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.url" id="cdktfprovidertfeorganizationruntaskconfigpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#url OrganizationRunTask#url}.

---

##### `category`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.category" id="cdktfprovidertfeorganizationruntaskconfigpropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#category OrganizationRunTask#category}.

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.enabled" id="cdktfprovidertfeorganizationruntaskconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#enabled OrganizationRunTask#enabled}.

---

##### `hmacKey`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.hmacKey" id="cdktfprovidertfeorganizationruntaskconfigpropertyhmackey"></a>

```typescript
public readonly hmacKey: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#hmac_key OrganizationRunTask#hmac_key}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationRunTaskConfig.property.id" id="cdktfprovidertfeorganizationruntaskconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_run_task#id OrganizationRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### OrganizationTokenConfig <a name="@cdktf/provider-tfe.OrganizationTokenConfig" id="cdktfprovidertfeorganizationtokenconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { OrganizationTokenConfig } from '@cdktf/provider-tfe'

const organizationTokenConfig: OrganizationTokenConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeorganizationtokenconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeorganizationtokenconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeorganizationtokenconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeorganizationtokenconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`organization`](#cdktfprovidertfeorganizationtokenconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#organization OrganizationToken#organization}. |
| [`forceRegenerate`](#cdktfprovidertfeorganizationtokenconfigpropertyforceregenerate) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#force_regenerate OrganizationToken#force_regenerate}. |
| [`id`](#cdktfprovidertfeorganizationtokenconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#id OrganizationToken#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationTokenConfig.property.count" id="cdktfprovidertfeorganizationtokenconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationTokenConfig.property.dependsOn" id="cdktfprovidertfeorganizationtokenconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationTokenConfig.property.lifecycle" id="cdktfprovidertfeorganizationtokenconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationTokenConfig.property.provider" id="cdktfprovidertfeorganizationtokenconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.OrganizationTokenConfig.property.organization" id="cdktfprovidertfeorganizationtokenconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#organization OrganizationToken#organization}.

---

##### `forceRegenerate`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationTokenConfig.property.forceRegenerate" id="cdktfprovidertfeorganizationtokenconfigpropertyforceregenerate"></a>

```typescript
public readonly forceRegenerate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#force_regenerate OrganizationToken#force_regenerate}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.OrganizationTokenConfig.property.id" id="cdktfprovidertfeorganizationtokenconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/organization_token#id OrganizationToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### PolicySetConfig <a name="@cdktf/provider-tfe.PolicySetConfig" id="cdktfprovidertfepolicysetconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PolicySetConfig } from '@cdktf/provider-tfe'

const policySetConfig: PolicySetConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfepolicysetconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfepolicysetconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfepolicysetconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfepolicysetconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfepolicysetconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#name PolicySet#name}. |
| [`organization`](#cdktfprovidertfepolicysetconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#organization PolicySet#organization}. |
| [`description`](#cdktfprovidertfepolicysetconfigpropertydescription) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#description PolicySet#description}. |
| [`global`](#cdktfprovidertfepolicysetconfigpropertyglobal) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#global PolicySet#global}. |
| [`id`](#cdktfprovidertfepolicysetconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#id PolicySet#id}. |
| [`policiesPath`](#cdktfprovidertfepolicysetconfigpropertypoliciespath) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#policies_path PolicySet#policies_path}. |
| [`policyIds`](#cdktfprovidertfepolicysetconfigpropertypolicyids) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#policy_ids PolicySet#policy_ids}. |
| [`slug`](#cdktfprovidertfepolicysetconfigpropertyslug) | {[ key: string ]: `string`} | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#slug PolicySet#slug}. |
| [`vcsRepo`](#cdktfprovidertfepolicysetconfigpropertyvcsrepo) | [`@cdktf/provider-tfe.PolicySetVcsRepo`](#@cdktf/provider-tfe.PolicySetVcsRepo) | vcs_repo block. |
| [`workspaceIds`](#cdktfprovidertfepolicysetconfigpropertyworkspaceids) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#workspace_ids PolicySet#workspace_ids}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.count" id="cdktfprovidertfepolicysetconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.dependsOn" id="cdktfprovidertfepolicysetconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.lifecycle" id="cdktfprovidertfepolicysetconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.provider" id="cdktfprovidertfepolicysetconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.name" id="cdktfprovidertfepolicysetconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#name PolicySet#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.organization" id="cdktfprovidertfepolicysetconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#organization PolicySet#organization}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.description" id="cdktfprovidertfepolicysetconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#description PolicySet#description}.

---

##### `global`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.global" id="cdktfprovidertfepolicysetconfigpropertyglobal"></a>

```typescript
public readonly global: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#global PolicySet#global}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.id" id="cdktfprovidertfepolicysetconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#id PolicySet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policiesPath`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.policiesPath" id="cdktfprovidertfepolicysetconfigpropertypoliciespath"></a>

```typescript
public readonly policiesPath: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#policies_path PolicySet#policies_path}.

---

##### `policyIds`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.policyIds" id="cdktfprovidertfepolicysetconfigpropertypolicyids"></a>

```typescript
public readonly policyIds: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#policy_ids PolicySet#policy_ids}.

---

##### `slug`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.slug" id="cdktfprovidertfepolicysetconfigpropertyslug"></a>

```typescript
public readonly slug: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#slug PolicySet#slug}.

---

##### `vcsRepo`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.vcsRepo" id="cdktfprovidertfepolicysetconfigpropertyvcsrepo"></a>

```typescript
public readonly vcsRepo: PolicySetVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.PolicySetVcsRepo`](#@cdktf/provider-tfe.PolicySetVcsRepo)

vcs_repo block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#vcs_repo PolicySet#vcs_repo}

---

##### `workspaceIds`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetConfig.property.workspaceIds" id="cdktfprovidertfepolicysetconfigpropertyworkspaceids"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#workspace_ids PolicySet#workspace_ids}.

---

### PolicySetParameterConfig <a name="@cdktf/provider-tfe.PolicySetParameterConfig" id="cdktfprovidertfepolicysetparameterconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PolicySetParameterConfig } from '@cdktf/provider-tfe'

const policySetParameterConfig: PolicySetParameterConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfepolicysetparameterconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfepolicysetparameterconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfepolicysetparameterconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfepolicysetparameterconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`key`](#cdktfprovidertfepolicysetparameterconfigpropertykey)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#key PolicySetParameter#key}. |
| [`policySetId`](#cdktfprovidertfepolicysetparameterconfigpropertypolicysetid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#policy_set_id PolicySetParameter#policy_set_id}. |
| [`id`](#cdktfprovidertfepolicysetparameterconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#id PolicySetParameter#id}. |
| [`sensitive`](#cdktfprovidertfepolicysetparameterconfigpropertysensitive) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#sensitive PolicySetParameter#sensitive}. |
| [`value`](#cdktfprovidertfepolicysetparameterconfigpropertyvalue) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#value PolicySetParameter#value}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.count" id="cdktfprovidertfepolicysetparameterconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.dependsOn" id="cdktfprovidertfepolicysetparameterconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.lifecycle" id="cdktfprovidertfepolicysetparameterconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.provider" id="cdktfprovidertfepolicysetparameterconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.key" id="cdktfprovidertfepolicysetparameterconfigpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#key PolicySetParameter#key}.

---

##### `policySetId`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.policySetId" id="cdktfprovidertfepolicysetparameterconfigpropertypolicysetid"></a>

```typescript
public readonly policySetId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#policy_set_id PolicySetParameter#policy_set_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.id" id="cdktfprovidertfepolicysetparameterconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#id PolicySetParameter#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitive`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.sensitive" id="cdktfprovidertfepolicysetparameterconfigpropertysensitive"></a>

```typescript
public readonly sensitive: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#sensitive PolicySetParameter#sensitive}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetParameterConfig.property.value" id="cdktfprovidertfepolicysetparameterconfigpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set_parameter#value PolicySetParameter#value}.

---

### PolicySetVcsRepo <a name="@cdktf/provider-tfe.PolicySetVcsRepo" id="cdktfprovidertfepolicysetvcsrepo"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { PolicySetVcsRepo } from '@cdktf/provider-tfe'

const policySetVcsRepo: PolicySetVcsRepo = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`identifier`](#cdktfprovidertfepolicysetvcsrepopropertyidentifier)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#identifier PolicySet#identifier}. |
| [`oauthTokenId`](#cdktfprovidertfepolicysetvcsrepopropertyoauthtokenid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#oauth_token_id PolicySet#oauth_token_id}. |
| [`branch`](#cdktfprovidertfepolicysetvcsrepopropertybranch) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#branch PolicySet#branch}. |
| [`ingressSubmodules`](#cdktfprovidertfepolicysetvcsrepopropertyingresssubmodules) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#ingress_submodules PolicySet#ingress_submodules}. |

---

##### `identifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepo.property.identifier" id="cdktfprovidertfepolicysetvcsrepopropertyidentifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#identifier PolicySet#identifier}.

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepo.property.oauthTokenId" id="cdktfprovidertfepolicysetvcsrepopropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#oauth_token_id PolicySet#oauth_token_id}.

---

##### `branch`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepo.property.branch" id="cdktfprovidertfepolicysetvcsrepopropertybranch"></a>

```typescript
public readonly branch: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#branch PolicySet#branch}.

---

##### `ingressSubmodules`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepo.property.ingressSubmodules" id="cdktfprovidertfepolicysetvcsrepopropertyingresssubmodules"></a>

```typescript
public readonly ingressSubmodules: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/policy_set#ingress_submodules PolicySet#ingress_submodules}.

---

### RegistryModuleConfig <a name="@cdktf/provider-tfe.RegistryModuleConfig" id="cdktfprovidertferegistrymoduleconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RegistryModuleConfig } from '@cdktf/provider-tfe'

const registryModuleConfig: RegistryModuleConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertferegistrymoduleconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertferegistrymoduleconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertferegistrymoduleconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertferegistrymoduleconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`vcsRepo`](#cdktfprovidertferegistrymoduleconfigpropertyvcsrepo)<span title="Required">*</span> | [`@cdktf/provider-tfe.RegistryModuleVcsRepo`](#@cdktf/provider-tfe.RegistryModuleVcsRepo) | vcs_repo block. |
| [`id`](#cdktfprovidertferegistrymoduleconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#id RegistryModule#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleConfig.property.count" id="cdktfprovidertferegistrymoduleconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleConfig.property.dependsOn" id="cdktfprovidertferegistrymoduleconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleConfig.property.lifecycle" id="cdktfprovidertferegistrymoduleconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleConfig.property.provider" id="cdktfprovidertferegistrymoduleconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `vcsRepo`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleConfig.property.vcsRepo" id="cdktfprovidertferegistrymoduleconfigpropertyvcsrepo"></a>

```typescript
public readonly vcsRepo: RegistryModuleVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.RegistryModuleVcsRepo`](#@cdktf/provider-tfe.RegistryModuleVcsRepo)

vcs_repo block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#vcs_repo RegistryModule#vcs_repo}

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleConfig.property.id" id="cdktfprovidertferegistrymoduleconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#id RegistryModule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### RegistryModuleVcsRepo <a name="@cdktf/provider-tfe.RegistryModuleVcsRepo" id="cdktfprovidertferegistrymodulevcsrepo"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RegistryModuleVcsRepo } from '@cdktf/provider-tfe'

const registryModuleVcsRepo: RegistryModuleVcsRepo = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`displayIdentifier`](#cdktfprovidertferegistrymodulevcsrepopropertydisplayidentifier)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#display_identifier RegistryModule#display_identifier}. |
| [`identifier`](#cdktfprovidertferegistrymodulevcsrepopropertyidentifier)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#identifier RegistryModule#identifier}. |
| [`oauthTokenId`](#cdktfprovidertferegistrymodulevcsrepopropertyoauthtokenid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#oauth_token_id RegistryModule#oauth_token_id}. |

---

##### `displayIdentifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepo.property.displayIdentifier" id="cdktfprovidertferegistrymodulevcsrepopropertydisplayidentifier"></a>

```typescript
public readonly displayIdentifier: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#display_identifier RegistryModule#display_identifier}.

---

##### `identifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepo.property.identifier" id="cdktfprovidertferegistrymodulevcsrepopropertyidentifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#identifier RegistryModule#identifier}.

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepo.property.oauthTokenId" id="cdktfprovidertferegistrymodulevcsrepopropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/registry_module#oauth_token_id RegistryModule#oauth_token_id}.

---

### RunTriggerConfig <a name="@cdktf/provider-tfe.RunTriggerConfig" id="cdktfprovidertferuntriggerconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { RunTriggerConfig } from '@cdktf/provider-tfe'

const runTriggerConfig: RunTriggerConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertferuntriggerconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertferuntriggerconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertferuntriggerconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertferuntriggerconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`sourceableId`](#cdktfprovidertferuntriggerconfigpropertysourceableid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger#sourceable_id RunTrigger#sourceable_id}. |
| [`workspaceId`](#cdktfprovidertferuntriggerconfigpropertyworkspaceid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger#workspace_id RunTrigger#workspace_id}. |
| [`id`](#cdktfprovidertferuntriggerconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger#id RunTrigger#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTriggerConfig.property.count" id="cdktfprovidertferuntriggerconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTriggerConfig.property.dependsOn" id="cdktfprovidertferuntriggerconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTriggerConfig.property.lifecycle" id="cdktfprovidertferuntriggerconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTriggerConfig.property.provider" id="cdktfprovidertferuntriggerconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `sourceableId`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTriggerConfig.property.sourceableId" id="cdktfprovidertferuntriggerconfigpropertysourceableid"></a>

```typescript
public readonly sourceableId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger#sourceable_id RunTrigger#sourceable_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.RunTriggerConfig.property.workspaceId" id="cdktfprovidertferuntriggerconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger#workspace_id RunTrigger#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RunTriggerConfig.property.id" id="cdktfprovidertferuntriggerconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/run_trigger#id RunTrigger#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SentinelPolicyConfig <a name="@cdktf/provider-tfe.SentinelPolicyConfig" id="cdktfprovidertfesentinelpolicyconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SentinelPolicyConfig } from '@cdktf/provider-tfe'

const sentinelPolicyConfig: SentinelPolicyConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfesentinelpolicyconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfesentinelpolicyconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfesentinelpolicyconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfesentinelpolicyconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfesentinelpolicyconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#name SentinelPolicy#name}. |
| [`organization`](#cdktfprovidertfesentinelpolicyconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#organization SentinelPolicy#organization}. |
| [`policy`](#cdktfprovidertfesentinelpolicyconfigpropertypolicy)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#policy SentinelPolicy#policy}. |
| [`description`](#cdktfprovidertfesentinelpolicyconfigpropertydescription) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#description SentinelPolicy#description}. |
| [`enforceMode`](#cdktfprovidertfesentinelpolicyconfigpropertyenforcemode) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#enforce_mode SentinelPolicy#enforce_mode}. |
| [`id`](#cdktfprovidertfesentinelpolicyconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#id SentinelPolicy#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.count" id="cdktfprovidertfesentinelpolicyconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.dependsOn" id="cdktfprovidertfesentinelpolicyconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.lifecycle" id="cdktfprovidertfesentinelpolicyconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.provider" id="cdktfprovidertfesentinelpolicyconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.name" id="cdktfprovidertfesentinelpolicyconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#name SentinelPolicy#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.organization" id="cdktfprovidertfesentinelpolicyconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#organization SentinelPolicy#organization}.

---

##### `policy`<sup>Required</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.policy" id="cdktfprovidertfesentinelpolicyconfigpropertypolicy"></a>

```typescript
public readonly policy: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#policy SentinelPolicy#policy}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.description" id="cdktfprovidertfesentinelpolicyconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#description SentinelPolicy#description}.

---

##### `enforceMode`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.enforceMode" id="cdktfprovidertfesentinelpolicyconfigpropertyenforcemode"></a>

```typescript
public readonly enforceMode: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#enforce_mode SentinelPolicy#enforce_mode}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SentinelPolicyConfig.property.id" id="cdktfprovidertfesentinelpolicyconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/sentinel_policy#id SentinelPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### SshKeyConfig <a name="@cdktf/provider-tfe.SshKeyConfig" id="cdktfprovidertfesshkeyconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { SshKeyConfig } from '@cdktf/provider-tfe'

const sshKeyConfig: SshKeyConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfesshkeyconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfesshkeyconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfesshkeyconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfesshkeyconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`key`](#cdktfprovidertfesshkeyconfigpropertykey)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#key SshKey#key}. |
| [`name`](#cdktfprovidertfesshkeyconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#name SshKey#name}. |
| [`organization`](#cdktfprovidertfesshkeyconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#organization SshKey#organization}. |
| [`id`](#cdktfprovidertfesshkeyconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#id SshKey#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.count" id="cdktfprovidertfesshkeyconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.dependsOn" id="cdktfprovidertfesshkeyconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.lifecycle" id="cdktfprovidertfesshkeyconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.provider" id="cdktfprovidertfesshkeyconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.key" id="cdktfprovidertfesshkeyconfigpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#key SshKey#key}.

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.name" id="cdktfprovidertfesshkeyconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#name SshKey#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.organization" id="cdktfprovidertfesshkeyconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#organization SshKey#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.SshKeyConfig.property.id" id="cdktfprovidertfesshkeyconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/ssh_key#id SshKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamAccessConfig <a name="@cdktf/provider-tfe.TeamAccessConfig" id="cdktfprovidertfeteamaccessconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamAccessConfig } from '@cdktf/provider-tfe'

const teamAccessConfig: TeamAccessConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeteamaccessconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeteamaccessconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeteamaccessconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeteamaccessconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`teamId`](#cdktfprovidertfeteamaccessconfigpropertyteamid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#team_id TeamAccess#team_id}. |
| [`workspaceId`](#cdktfprovidertfeteamaccessconfigpropertyworkspaceid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#workspace_id TeamAccess#workspace_id}. |
| [`access`](#cdktfprovidertfeteamaccessconfigpropertyaccess) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#access TeamAccess#access}. |
| [`id`](#cdktfprovidertfeteamaccessconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#id TeamAccess#id}. |
| [`permissions`](#cdktfprovidertfeteamaccessconfigpropertypermissions) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)[] | permissions block. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.count" id="cdktfprovidertfeteamaccessconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.dependsOn" id="cdktfprovidertfeteamaccessconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.lifecycle" id="cdktfprovidertfeteamaccessconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.provider" id="cdktfprovidertfeteamaccessconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.teamId" id="cdktfprovidertfeteamaccessconfigpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#team_id TeamAccess#team_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.workspaceId" id="cdktfprovidertfeteamaccessconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#workspace_id TeamAccess#workspace_id}.

---

##### `access`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.access" id="cdktfprovidertfeteamaccessconfigpropertyaccess"></a>

```typescript
public readonly access: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#access TeamAccess#access}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.id" id="cdktfprovidertfeteamaccessconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#id TeamAccess#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `permissions`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessConfig.property.permissions" id="cdktfprovidertfeteamaccessconfigpropertypermissions"></a>

```typescript
public readonly permissions: IResolvable | TeamAccessPermissions[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)[]

permissions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#permissions TeamAccess#permissions}

---

### TeamAccessPermissions <a name="@cdktf/provider-tfe.TeamAccessPermissions" id="cdktfprovidertfeteamaccesspermissions"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamAccessPermissions } from '@cdktf/provider-tfe'

const teamAccessPermissions: TeamAccessPermissions = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`runs`](#cdktfprovidertfeteamaccesspermissionspropertyruns)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#runs TeamAccess#runs}. |
| [`runTasks`](#cdktfprovidertfeteamaccesspermissionspropertyruntasks)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#run_tasks TeamAccess#run_tasks}. |
| [`sentinelMocks`](#cdktfprovidertfeteamaccesspermissionspropertysentinelmocks)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#sentinel_mocks TeamAccess#sentinel_mocks}. |
| [`stateVersions`](#cdktfprovidertfeteamaccesspermissionspropertystateversions)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#state_versions TeamAccess#state_versions}. |
| [`variables`](#cdktfprovidertfeteamaccesspermissionspropertyvariables)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#variables TeamAccess#variables}. |
| [`workspaceLocking`](#cdktfprovidertfeteamaccesspermissionspropertyworkspacelocking)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#workspace_locking TeamAccess#workspace_locking}. |

---

##### `runs`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissions.property.runs" id="cdktfprovidertfeteamaccesspermissionspropertyruns"></a>

```typescript
public readonly runs: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#runs TeamAccess#runs}.

---

##### `runTasks`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissions.property.runTasks" id="cdktfprovidertfeteamaccesspermissionspropertyruntasks"></a>

```typescript
public readonly runTasks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#run_tasks TeamAccess#run_tasks}.

---

##### `sentinelMocks`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissions.property.sentinelMocks" id="cdktfprovidertfeteamaccesspermissionspropertysentinelmocks"></a>

```typescript
public readonly sentinelMocks: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#sentinel_mocks TeamAccess#sentinel_mocks}.

---

##### `stateVersions`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissions.property.stateVersions" id="cdktfprovidertfeteamaccesspermissionspropertystateversions"></a>

```typescript
public readonly stateVersions: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#state_versions TeamAccess#state_versions}.

---

##### `variables`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissions.property.variables" id="cdktfprovidertfeteamaccesspermissionspropertyvariables"></a>

```typescript
public readonly variables: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#variables TeamAccess#variables}.

---

##### `workspaceLocking`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissions.property.workspaceLocking" id="cdktfprovidertfeteamaccesspermissionspropertyworkspacelocking"></a>

```typescript
public readonly workspaceLocking: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_access#workspace_locking TeamAccess#workspace_locking}.

---

### TeamConfig <a name="@cdktf/provider-tfe.TeamConfig" id="cdktfprovidertfeteamconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamConfig } from '@cdktf/provider-tfe'

const teamConfig: TeamConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeteamconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeteamconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeteamconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeteamconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfeteamconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#name Team#name}. |
| [`organization`](#cdktfprovidertfeteamconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#organization Team#organization}. |
| [`id`](#cdktfprovidertfeteamconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#id Team#id}. |
| [`organizationAccess`](#cdktfprovidertfeteamconfigpropertyorganizationaccess) | [`@cdktf/provider-tfe.TeamOrganizationAccess`](#@cdktf/provider-tfe.TeamOrganizationAccess) | organization_access block. |
| [`ssoTeamId`](#cdktfprovidertfeteamconfigpropertyssoteamid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#sso_team_id Team#sso_team_id}. |
| [`visibility`](#cdktfprovidertfeteamconfigpropertyvisibility) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#visibility Team#visibility}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.count" id="cdktfprovidertfeteamconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.dependsOn" id="cdktfprovidertfeteamconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.lifecycle" id="cdktfprovidertfeteamconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.provider" id="cdktfprovidertfeteamconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.name" id="cdktfprovidertfeteamconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#name Team#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.organization" id="cdktfprovidertfeteamconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#organization Team#organization}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.id" id="cdktfprovidertfeteamconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organizationAccess`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.organizationAccess" id="cdktfprovidertfeteamconfigpropertyorganizationaccess"></a>

```typescript
public readonly organizationAccess: TeamOrganizationAccess;
```

- *Type:* [`@cdktf/provider-tfe.TeamOrganizationAccess`](#@cdktf/provider-tfe.TeamOrganizationAccess)

organization_access block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#organization_access Team#organization_access}

---

##### `ssoTeamId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.ssoTeamId" id="cdktfprovidertfeteamconfigpropertyssoteamid"></a>

```typescript
public readonly ssoTeamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#sso_team_id Team#sso_team_id}.

---

##### `visibility`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamConfig.property.visibility" id="cdktfprovidertfeteamconfigpropertyvisibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#visibility Team#visibility}.

---

### TeamMemberConfig <a name="@cdktf/provider-tfe.TeamMemberConfig" id="cdktfprovidertfeteammemberconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamMemberConfig } from '@cdktf/provider-tfe'

const teamMemberConfig: TeamMemberConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeteammemberconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeteammemberconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeteammemberconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeteammemberconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`teamId`](#cdktfprovidertfeteammemberconfigpropertyteamid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_member#team_id TeamMember#team_id}. |
| [`username`](#cdktfprovidertfeteammemberconfigpropertyusername)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_member#username TeamMember#username}. |
| [`id`](#cdktfprovidertfeteammemberconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_member#id TeamMember#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMemberConfig.property.count" id="cdktfprovidertfeteammemberconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMemberConfig.property.dependsOn" id="cdktfprovidertfeteammemberconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMemberConfig.property.lifecycle" id="cdktfprovidertfeteammemberconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMemberConfig.property.provider" id="cdktfprovidertfeteammemberconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMemberConfig.property.teamId" id="cdktfprovidertfeteammemberconfigpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_member#team_id TeamMember#team_id}.

---

##### `username`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMemberConfig.property.username" id="cdktfprovidertfeteammemberconfigpropertyusername"></a>

```typescript
public readonly username: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_member#username TeamMember#username}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMemberConfig.property.id" id="cdktfprovidertfeteammemberconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_member#id TeamMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamMembersConfig <a name="@cdktf/provider-tfe.TeamMembersConfig" id="cdktfprovidertfeteammembersconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamMembersConfig } from '@cdktf/provider-tfe'

const teamMembersConfig: TeamMembersConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeteammembersconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeteammembersconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeteammembersconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeteammembersconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`teamId`](#cdktfprovidertfeteammembersconfigpropertyteamid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_members#team_id TeamMembers#team_id}. |
| [`usernames`](#cdktfprovidertfeteammembersconfigpropertyusernames)<span title="Required">*</span> | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_members#usernames TeamMembers#usernames}. |
| [`id`](#cdktfprovidertfeteammembersconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_members#id TeamMembers#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembersConfig.property.count" id="cdktfprovidertfeteammembersconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembersConfig.property.dependsOn" id="cdktfprovidertfeteammembersconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembersConfig.property.lifecycle" id="cdktfprovidertfeteammembersconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembersConfig.property.provider" id="cdktfprovidertfeteammembersconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembersConfig.property.teamId" id="cdktfprovidertfeteammembersconfigpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_members#team_id TeamMembers#team_id}.

---

##### `usernames`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamMembersConfig.property.usernames" id="cdktfprovidertfeteammembersconfigpropertyusernames"></a>

```typescript
public readonly usernames: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_members#usernames TeamMembers#usernames}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamMembersConfig.property.id" id="cdktfprovidertfeteammembersconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_members#id TeamMembers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamOrganizationAccess <a name="@cdktf/provider-tfe.TeamOrganizationAccess" id="cdktfprovidertfeteamorganizationaccess"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamOrganizationAccess } from '@cdktf/provider-tfe'

const teamOrganizationAccess: TeamOrganizationAccess = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`manageModules`](#cdktfprovidertfeteamorganizationaccesspropertymanagemodules) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_modules Team#manage_modules}. |
| [`managePolicies`](#cdktfprovidertfeteamorganizationaccesspropertymanagepolicies) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_policies Team#manage_policies}. |
| [`managePolicyOverrides`](#cdktfprovidertfeteamorganizationaccesspropertymanagepolicyoverrides) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_policy_overrides Team#manage_policy_overrides}. |
| [`manageProviders`](#cdktfprovidertfeteamorganizationaccesspropertymanageproviders) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_providers Team#manage_providers}. |
| [`manageRunTasks`](#cdktfprovidertfeteamorganizationaccesspropertymanageruntasks) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_run_tasks Team#manage_run_tasks}. |
| [`manageVcsSettings`](#cdktfprovidertfeteamorganizationaccesspropertymanagevcssettings) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_vcs_settings Team#manage_vcs_settings}. |
| [`manageWorkspaces`](#cdktfprovidertfeteamorganizationaccesspropertymanageworkspaces) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_workspaces Team#manage_workspaces}. |

---

##### `manageModules`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccess.property.manageModules" id="cdktfprovidertfeteamorganizationaccesspropertymanagemodules"></a>

```typescript
public readonly manageModules: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_modules Team#manage_modules}.

---

##### `managePolicies`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccess.property.managePolicies" id="cdktfprovidertfeteamorganizationaccesspropertymanagepolicies"></a>

```typescript
public readonly managePolicies: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_policies Team#manage_policies}.

---

##### `managePolicyOverrides`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccess.property.managePolicyOverrides" id="cdktfprovidertfeteamorganizationaccesspropertymanagepolicyoverrides"></a>

```typescript
public readonly managePolicyOverrides: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_policy_overrides Team#manage_policy_overrides}.

---

##### `manageProviders`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccess.property.manageProviders" id="cdktfprovidertfeteamorganizationaccesspropertymanageproviders"></a>

```typescript
public readonly manageProviders: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_providers Team#manage_providers}.

---

##### `manageRunTasks`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccess.property.manageRunTasks" id="cdktfprovidertfeteamorganizationaccesspropertymanageruntasks"></a>

```typescript
public readonly manageRunTasks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_run_tasks Team#manage_run_tasks}.

---

##### `manageVcsSettings`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccess.property.manageVcsSettings" id="cdktfprovidertfeteamorganizationaccesspropertymanagevcssettings"></a>

```typescript
public readonly manageVcsSettings: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_vcs_settings Team#manage_vcs_settings}.

---

##### `manageWorkspaces`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccess.property.manageWorkspaces" id="cdktfprovidertfeteamorganizationaccesspropertymanageworkspaces"></a>

```typescript
public readonly manageWorkspaces: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team#manage_workspaces Team#manage_workspaces}.

---

### TeamOrganizationMemberConfig <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig" id="cdktfprovidertfeteamorganizationmemberconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamOrganizationMemberConfig } from '@cdktf/provider-tfe'

const teamOrganizationMemberConfig: TeamOrganizationMemberConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeteamorganizationmemberconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeteamorganizationmemberconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeteamorganizationmemberconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeteamorganizationmemberconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`organizationMembershipId`](#cdktfprovidertfeteamorganizationmemberconfigpropertyorganizationmembershipid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member#organization_membership_id TeamOrganizationMember#organization_membership_id}. |
| [`teamId`](#cdktfprovidertfeteamorganizationmemberconfigpropertyteamid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member#team_id TeamOrganizationMember#team_id}. |
| [`id`](#cdktfprovidertfeteamorganizationmemberconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member#id TeamOrganizationMember#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig.property.count" id="cdktfprovidertfeteamorganizationmemberconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig.property.dependsOn" id="cdktfprovidertfeteamorganizationmemberconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig.property.lifecycle" id="cdktfprovidertfeteamorganizationmemberconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig.property.provider" id="cdktfprovidertfeteamorganizationmemberconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `organizationMembershipId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig.property.organizationMembershipId" id="cdktfprovidertfeteamorganizationmemberconfigpropertyorganizationmembershipid"></a>

```typescript
public readonly organizationMembershipId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member#organization_membership_id TeamOrganizationMember#organization_membership_id}.

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig.property.teamId" id="cdktfprovidertfeteamorganizationmemberconfigpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member#team_id TeamOrganizationMember#team_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationMemberConfig.property.id" id="cdktfprovidertfeteamorganizationmemberconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_organization_member#id TeamOrganizationMember#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TeamTokenConfig <a name="@cdktf/provider-tfe.TeamTokenConfig" id="cdktfprovidertfeteamtokenconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TeamTokenConfig } from '@cdktf/provider-tfe'

const teamTokenConfig: TeamTokenConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeteamtokenconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeteamtokenconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeteamtokenconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeteamtokenconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`teamId`](#cdktfprovidertfeteamtokenconfigpropertyteamid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_token#team_id TeamToken#team_id}. |
| [`forceRegenerate`](#cdktfprovidertfeteamtokenconfigpropertyforceregenerate) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_token#force_regenerate TeamToken#force_regenerate}. |
| [`id`](#cdktfprovidertfeteamtokenconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_token#id TeamToken#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamTokenConfig.property.count" id="cdktfprovidertfeteamtokenconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamTokenConfig.property.dependsOn" id="cdktfprovidertfeteamtokenconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamTokenConfig.property.lifecycle" id="cdktfprovidertfeteamtokenconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamTokenConfig.property.provider" id="cdktfprovidertfeteamtokenconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `teamId`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamTokenConfig.property.teamId" id="cdktfprovidertfeteamtokenconfigpropertyteamid"></a>

```typescript
public readonly teamId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_token#team_id TeamToken#team_id}.

---

##### `forceRegenerate`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamTokenConfig.property.forceRegenerate" id="cdktfprovidertfeteamtokenconfigpropertyforceregenerate"></a>

```typescript
public readonly forceRegenerate: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_token#force_regenerate TeamToken#force_regenerate}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamTokenConfig.property.id" id="cdktfprovidertfeteamtokenconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/team_token#id TeamToken#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### TerraformVersionConfig <a name="@cdktf/provider-tfe.TerraformVersionConfig" id="cdktfprovidertfeterraformversionconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TerraformVersionConfig } from '@cdktf/provider-tfe'

const terraformVersionConfig: TerraformVersionConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeterraformversionconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeterraformversionconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeterraformversionconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeterraformversionconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`sha`](#cdktfprovidertfeterraformversionconfigpropertysha)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#sha TerraformVersion#sha}. |
| [`url`](#cdktfprovidertfeterraformversionconfigpropertyurl)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#url TerraformVersion#url}. |
| [`version`](#cdktfprovidertfeterraformversionconfigpropertyversion)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#version TerraformVersion#version}. |
| [`beta`](#cdktfprovidertfeterraformversionconfigpropertybeta) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#beta TerraformVersion#beta}. |
| [`deprecated`](#cdktfprovidertfeterraformversionconfigpropertydeprecated) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#deprecated TerraformVersion#deprecated}. |
| [`deprecatedReason`](#cdktfprovidertfeterraformversionconfigpropertydeprecatedreason) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}. |
| [`enabled`](#cdktfprovidertfeterraformversionconfigpropertyenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#enabled TerraformVersion#enabled}. |
| [`id`](#cdktfprovidertfeterraformversionconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#id TerraformVersion#id}. |
| [`official`](#cdktfprovidertfeterraformversionconfigpropertyofficial) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#official TerraformVersion#official}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.count" id="cdktfprovidertfeterraformversionconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.dependsOn" id="cdktfprovidertfeterraformversionconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.lifecycle" id="cdktfprovidertfeterraformversionconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.provider" id="cdktfprovidertfeterraformversionconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `sha`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.sha" id="cdktfprovidertfeterraformversionconfigpropertysha"></a>

```typescript
public readonly sha: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#sha TerraformVersion#sha}.

---

##### `url`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.url" id="cdktfprovidertfeterraformversionconfigpropertyurl"></a>

```typescript
public readonly url: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#url TerraformVersion#url}.

---

##### `version`<sup>Required</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.version" id="cdktfprovidertfeterraformversionconfigpropertyversion"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#version TerraformVersion#version}.

---

##### `beta`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.beta" id="cdktfprovidertfeterraformversionconfigpropertybeta"></a>

```typescript
public readonly beta: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#beta TerraformVersion#beta}.

---

##### `deprecated`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.deprecated" id="cdktfprovidertfeterraformversionconfigpropertydeprecated"></a>

```typescript
public readonly deprecated: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#deprecated TerraformVersion#deprecated}.

---

##### `deprecatedReason`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.deprecatedReason" id="cdktfprovidertfeterraformversionconfigpropertydeprecatedreason"></a>

```typescript
public readonly deprecatedReason: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#deprecated_reason TerraformVersion#deprecated_reason}.

---

##### `enabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.enabled" id="cdktfprovidertfeterraformversionconfigpropertyenabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#enabled TerraformVersion#enabled}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.id" id="cdktfprovidertfeterraformversionconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#id TerraformVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `official`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TerraformVersionConfig.property.official" id="cdktfprovidertfeterraformversionconfigpropertyofficial"></a>

```typescript
public readonly official: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/terraform_version#official TerraformVersion#official}.

---

### TfeProviderConfig <a name="@cdktf/provider-tfe.TfeProviderConfig" id="cdktfprovidertfetfeproviderconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { TfeProviderConfig } from '@cdktf/provider-tfe'

const tfeProviderConfig: TfeProviderConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`alias`](#cdktfprovidertfetfeproviderconfigpropertyalias) | `string` | Alias name. |
| [`hostname`](#cdktfprovidertfetfeproviderconfigpropertyhostname) | `string` | The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io. |
| [`sslSkipVerify`](#cdktfprovidertfetfeproviderconfigpropertysslskipverify) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Whether or not to skip certificate verifications. |
| [`token`](#cdktfprovidertfetfeproviderconfigpropertytoken) | `string` | The token used to authenticate with Terraform Enterprise. |

---

##### `alias`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProviderConfig.property.alias" id="cdktfprovidertfetfeproviderconfigpropertyalias"></a>

```typescript
public readonly alias: string;
```

- *Type:* `string`

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe#alias TfeProvider#alias}

---

##### `hostname`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProviderConfig.property.hostname" id="cdktfprovidertfetfeproviderconfigpropertyhostname"></a>

```typescript
public readonly hostname: string;
```

- *Type:* `string`

The Terraform Enterprise hostname to connect to. Defaults to app.terraform.io.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe#hostname TfeProvider#hostname}

---

##### `sslSkipVerify`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProviderConfig.property.sslSkipVerify" id="cdktfprovidertfetfeproviderconfigpropertysslskipverify"></a>

```typescript
public readonly sslSkipVerify: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Whether or not to skip certificate verifications.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe#ssl_skip_verify TfeProvider#ssl_skip_verify}

---

##### `token`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TfeProviderConfig.property.token" id="cdktfprovidertfetfeproviderconfigpropertytoken"></a>

```typescript
public readonly token: string;
```

- *Type:* `string`

The token used to authenticate with Terraform Enterprise.

We recommend omitting the token which can be set as credentials in the CLI config file.  Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe#token TfeProvider#token}

---

### VariableConfig <a name="@cdktf/provider-tfe.VariableConfig" id="cdktfprovidertfevariableconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VariableConfig } from '@cdktf/provider-tfe'

const variableConfig: VariableConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfevariableconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfevariableconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfevariableconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfevariableconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`category`](#cdktfprovidertfevariableconfigpropertycategory)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#category Variable#category}. |
| [`key`](#cdktfprovidertfevariableconfigpropertykey)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#key Variable#key}. |
| [`description`](#cdktfprovidertfevariableconfigpropertydescription) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#description Variable#description}. |
| [`hcl`](#cdktfprovidertfevariableconfigpropertyhcl) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#hcl Variable#hcl}. |
| [`id`](#cdktfprovidertfevariableconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#id Variable#id}. |
| [`sensitive`](#cdktfprovidertfevariableconfigpropertysensitive) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#sensitive Variable#sensitive}. |
| [`value`](#cdktfprovidertfevariableconfigpropertyvalue) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#value Variable#value}. |
| [`variableSetId`](#cdktfprovidertfevariableconfigpropertyvariablesetid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#variable_set_id Variable#variable_set_id}. |
| [`workspaceId`](#cdktfprovidertfevariableconfigpropertyworkspaceid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#workspace_id Variable#workspace_id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.count" id="cdktfprovidertfevariableconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.dependsOn" id="cdktfprovidertfevariableconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.lifecycle" id="cdktfprovidertfevariableconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.provider" id="cdktfprovidertfevariableconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `category`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.category" id="cdktfprovidertfevariableconfigpropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#category Variable#category}.

---

##### `key`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.key" id="cdktfprovidertfevariableconfigpropertykey"></a>

```typescript
public readonly key: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#key Variable#key}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.description" id="cdktfprovidertfevariableconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#description Variable#description}.

---

##### `hcl`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.hcl" id="cdktfprovidertfevariableconfigpropertyhcl"></a>

```typescript
public readonly hcl: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#hcl Variable#hcl}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.id" id="cdktfprovidertfevariableconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#id Variable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sensitive`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.sensitive" id="cdktfprovidertfevariableconfigpropertysensitive"></a>

```typescript
public readonly sensitive: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#sensitive Variable#sensitive}.

---

##### `value`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.value" id="cdktfprovidertfevariableconfigpropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#value Variable#value}.

---

##### `variableSetId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.variableSetId" id="cdktfprovidertfevariableconfigpropertyvariablesetid"></a>

```typescript
public readonly variableSetId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#variable_set_id Variable#variable_set_id}.

---

##### `workspaceId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableConfig.property.workspaceId" id="cdktfprovidertfevariableconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable#workspace_id Variable#workspace_id}.

---

### VariableSetConfig <a name="@cdktf/provider-tfe.VariableSetConfig" id="cdktfprovidertfevariablesetconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { VariableSetConfig } from '@cdktf/provider-tfe'

const variableSetConfig: VariableSetConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfevariablesetconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfevariablesetconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfevariablesetconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfevariablesetconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfevariablesetconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#name VariableSet#name}. |
| [`organization`](#cdktfprovidertfevariablesetconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#organization VariableSet#organization}. |
| [`description`](#cdktfprovidertfevariablesetconfigpropertydescription) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#description VariableSet#description}. |
| [`global`](#cdktfprovidertfevariablesetconfigpropertyglobal) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#global VariableSet#global}. |
| [`id`](#cdktfprovidertfevariablesetconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#id VariableSet#id}. |
| [`workspaceIds`](#cdktfprovidertfevariablesetconfigpropertyworkspaceids) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#workspace_ids VariableSet#workspace_ids}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.count" id="cdktfprovidertfevariablesetconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.dependsOn" id="cdktfprovidertfevariablesetconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.lifecycle" id="cdktfprovidertfevariablesetconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.provider" id="cdktfprovidertfevariablesetconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.name" id="cdktfprovidertfevariablesetconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#name VariableSet#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.organization" id="cdktfprovidertfevariablesetconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#organization VariableSet#organization}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.description" id="cdktfprovidertfevariablesetconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#description VariableSet#description}.

---

##### `global`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.global" id="cdktfprovidertfevariablesetconfigpropertyglobal"></a>

```typescript
public readonly global: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#global VariableSet#global}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.id" id="cdktfprovidertfevariablesetconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#id VariableSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `workspaceIds`<sup>Optional</sup> <a name="@cdktf/provider-tfe.VariableSetConfig.property.workspaceIds" id="cdktfprovidertfevariablesetconfigpropertyworkspaceids"></a>

```typescript
public readonly workspaceIds: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/variable_set#workspace_ids VariableSet#workspace_ids}.

---

### WorkspaceConfig <a name="@cdktf/provider-tfe.WorkspaceConfig" id="cdktfprovidertfeworkspaceconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { WorkspaceConfig } from '@cdktf/provider-tfe'

const workspaceConfig: WorkspaceConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeworkspaceconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeworkspaceconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeworkspaceconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeworkspaceconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`name`](#cdktfprovidertfeworkspaceconfigpropertyname)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#name Workspace#name}. |
| [`organization`](#cdktfprovidertfeworkspaceconfigpropertyorganization)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#organization Workspace#organization}. |
| [`agentPoolId`](#cdktfprovidertfeworkspaceconfigpropertyagentpoolid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#agent_pool_id Workspace#agent_pool_id}. |
| [`allowDestroyPlan`](#cdktfprovidertfeworkspaceconfigpropertyallowdestroyplan) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#allow_destroy_plan Workspace#allow_destroy_plan}. |
| [`autoApply`](#cdktfprovidertfeworkspaceconfigpropertyautoapply) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#auto_apply Workspace#auto_apply}. |
| [`description`](#cdktfprovidertfeworkspaceconfigpropertydescription) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#description Workspace#description}. |
| [`executionMode`](#cdktfprovidertfeworkspaceconfigpropertyexecutionmode) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#execution_mode Workspace#execution_mode}. |
| [`fileTriggersEnabled`](#cdktfprovidertfeworkspaceconfigpropertyfiletriggersenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#file_triggers_enabled Workspace#file_triggers_enabled}. |
| [`globalRemoteState`](#cdktfprovidertfeworkspaceconfigpropertyglobalremotestate) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#global_remote_state Workspace#global_remote_state}. |
| [`id`](#cdktfprovidertfeworkspaceconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#id Workspace#id}. |
| [`operations`](#cdktfprovidertfeworkspaceconfigpropertyoperations) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#operations Workspace#operations}. |
| [`queueAllRuns`](#cdktfprovidertfeworkspaceconfigpropertyqueueallruns) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#queue_all_runs Workspace#queue_all_runs}. |
| [`remoteStateConsumerIds`](#cdktfprovidertfeworkspaceconfigpropertyremotestateconsumerids) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}. |
| [`speculativeEnabled`](#cdktfprovidertfeworkspaceconfigpropertyspeculativeenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#speculative_enabled Workspace#speculative_enabled}. |
| [`sshKeyId`](#cdktfprovidertfeworkspaceconfigpropertysshkeyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#ssh_key_id Workspace#ssh_key_id}. |
| [`structuredRunOutputEnabled`](#cdktfprovidertfeworkspaceconfigpropertystructuredrunoutputenabled) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}. |
| [`tagNames`](#cdktfprovidertfeworkspaceconfigpropertytagnames) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#tag_names Workspace#tag_names}. |
| [`terraformVersion`](#cdktfprovidertfeworkspaceconfigpropertyterraformversion) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#terraform_version Workspace#terraform_version}. |
| [`triggerPatterns`](#cdktfprovidertfeworkspaceconfigpropertytriggerpatterns) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#trigger_patterns Workspace#trigger_patterns}. |
| [`triggerPrefixes`](#cdktfprovidertfeworkspaceconfigpropertytriggerprefixes) | `string`[] | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#trigger_prefixes Workspace#trigger_prefixes}. |
| [`vcsRepo`](#cdktfprovidertfeworkspaceconfigpropertyvcsrepo) | [`@cdktf/provider-tfe.WorkspaceVcsRepo`](#@cdktf/provider-tfe.WorkspaceVcsRepo) | vcs_repo block. |
| [`workingDirectory`](#cdktfprovidertfeworkspaceconfigpropertyworkingdirectory) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#working_directory Workspace#working_directory}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.count" id="cdktfprovidertfeworkspaceconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.dependsOn" id="cdktfprovidertfeworkspaceconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.lifecycle" id="cdktfprovidertfeworkspaceconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.provider" id="cdktfprovidertfeworkspaceconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.name" id="cdktfprovidertfeworkspaceconfigpropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#name Workspace#name}.

---

##### `organization`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.organization" id="cdktfprovidertfeworkspaceconfigpropertyorganization"></a>

```typescript
public readonly organization: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#organization Workspace#organization}.

---

##### `agentPoolId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.agentPoolId" id="cdktfprovidertfeworkspaceconfigpropertyagentpoolid"></a>

```typescript
public readonly agentPoolId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#agent_pool_id Workspace#agent_pool_id}.

---

##### `allowDestroyPlan`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.allowDestroyPlan" id="cdktfprovidertfeworkspaceconfigpropertyallowdestroyplan"></a>

```typescript
public readonly allowDestroyPlan: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#allow_destroy_plan Workspace#allow_destroy_plan}.

---

##### `autoApply`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.autoApply" id="cdktfprovidertfeworkspaceconfigpropertyautoapply"></a>

```typescript
public readonly autoApply: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#auto_apply Workspace#auto_apply}.

---

##### `description`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.description" id="cdktfprovidertfeworkspaceconfigpropertydescription"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#description Workspace#description}.

---

##### `executionMode`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.executionMode" id="cdktfprovidertfeworkspaceconfigpropertyexecutionmode"></a>

```typescript
public readonly executionMode: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#execution_mode Workspace#execution_mode}.

---

##### `fileTriggersEnabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.fileTriggersEnabled" id="cdktfprovidertfeworkspaceconfigpropertyfiletriggersenabled"></a>

```typescript
public readonly fileTriggersEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#file_triggers_enabled Workspace#file_triggers_enabled}.

---

##### `globalRemoteState`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.globalRemoteState" id="cdktfprovidertfeworkspaceconfigpropertyglobalremotestate"></a>

```typescript
public readonly globalRemoteState: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#global_remote_state Workspace#global_remote_state}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.id" id="cdktfprovidertfeworkspaceconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#id Workspace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `operations`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.operations" id="cdktfprovidertfeworkspaceconfigpropertyoperations"></a>

```typescript
public readonly operations: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#operations Workspace#operations}.

---

##### `queueAllRuns`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.queueAllRuns" id="cdktfprovidertfeworkspaceconfigpropertyqueueallruns"></a>

```typescript
public readonly queueAllRuns: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#queue_all_runs Workspace#queue_all_runs}.

---

##### `remoteStateConsumerIds`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.remoteStateConsumerIds" id="cdktfprovidertfeworkspaceconfigpropertyremotestateconsumerids"></a>

```typescript
public readonly remoteStateConsumerIds: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#remote_state_consumer_ids Workspace#remote_state_consumer_ids}.

---

##### `speculativeEnabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.speculativeEnabled" id="cdktfprovidertfeworkspaceconfigpropertyspeculativeenabled"></a>

```typescript
public readonly speculativeEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#speculative_enabled Workspace#speculative_enabled}.

---

##### `sshKeyId`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.sshKeyId" id="cdktfprovidertfeworkspaceconfigpropertysshkeyid"></a>

```typescript
public readonly sshKeyId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#ssh_key_id Workspace#ssh_key_id}.

---

##### `structuredRunOutputEnabled`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.structuredRunOutputEnabled" id="cdktfprovidertfeworkspaceconfigpropertystructuredrunoutputenabled"></a>

```typescript
public readonly structuredRunOutputEnabled: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#structured_run_output_enabled Workspace#structured_run_output_enabled}.

---

##### `tagNames`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.tagNames" id="cdktfprovidertfeworkspaceconfigpropertytagnames"></a>

```typescript
public readonly tagNames: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#tag_names Workspace#tag_names}.

---

##### `terraformVersion`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.terraformVersion" id="cdktfprovidertfeworkspaceconfigpropertyterraformversion"></a>

```typescript
public readonly terraformVersion: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#terraform_version Workspace#terraform_version}.

---

##### `triggerPatterns`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.triggerPatterns" id="cdktfprovidertfeworkspaceconfigpropertytriggerpatterns"></a>

```typescript
public readonly triggerPatterns: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#trigger_patterns Workspace#trigger_patterns}.

---

##### `triggerPrefixes`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.triggerPrefixes" id="cdktfprovidertfeworkspaceconfigpropertytriggerprefixes"></a>

```typescript
public readonly triggerPrefixes: string[];
```

- *Type:* `string`[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#trigger_prefixes Workspace#trigger_prefixes}.

---

##### `vcsRepo`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.vcsRepo" id="cdktfprovidertfeworkspaceconfigpropertyvcsrepo"></a>

```typescript
public readonly vcsRepo: WorkspaceVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.WorkspaceVcsRepo`](#@cdktf/provider-tfe.WorkspaceVcsRepo)

vcs_repo block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#vcs_repo Workspace#vcs_repo}

---

##### `workingDirectory`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceConfig.property.workingDirectory" id="cdktfprovidertfeworkspaceconfigpropertyworkingdirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#working_directory Workspace#working_directory}.

---

### WorkspaceRunTaskConfig <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig" id="cdktfprovidertfeworkspaceruntaskconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { WorkspaceRunTaskConfig } from '@cdktf/provider-tfe'

const workspaceRunTaskConfig: WorkspaceRunTaskConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeworkspaceruntaskconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeworkspaceruntaskconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeworkspaceruntaskconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeworkspaceruntaskconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`enforcementLevel`](#cdktfprovidertfeworkspaceruntaskconfigpropertyenforcementlevel)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}. |
| [`taskId`](#cdktfprovidertfeworkspaceruntaskconfigpropertytaskid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#task_id WorkspaceRunTask#task_id}. |
| [`workspaceId`](#cdktfprovidertfeworkspaceruntaskconfigpropertyworkspaceid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}. |
| [`id`](#cdktfprovidertfeworkspaceruntaskconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#id WorkspaceRunTask#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.count" id="cdktfprovidertfeworkspaceruntaskconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.dependsOn" id="cdktfprovidertfeworkspaceruntaskconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.lifecycle" id="cdktfprovidertfeworkspaceruntaskconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.provider" id="cdktfprovidertfeworkspaceruntaskconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `enforcementLevel`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.enforcementLevel" id="cdktfprovidertfeworkspaceruntaskconfigpropertyenforcementlevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#enforcement_level WorkspaceRunTask#enforcement_level}.

---

##### `taskId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.taskId" id="cdktfprovidertfeworkspaceruntaskconfigpropertytaskid"></a>

```typescript
public readonly taskId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#task_id WorkspaceRunTask#task_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.workspaceId" id="cdktfprovidertfeworkspaceruntaskconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#workspace_id WorkspaceRunTask#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceRunTaskConfig.property.id" id="cdktfprovidertfeworkspaceruntaskconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_run_task#id WorkspaceRunTask#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkspaceVariableSetConfig <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig" id="cdktfprovidertfeworkspacevariablesetconfig"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { WorkspaceVariableSetConfig } from '@cdktf/provider-tfe'

const workspaceVariableSetConfig: WorkspaceVariableSetConfig = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`count`](#cdktfprovidertfeworkspacevariablesetconfigpropertycount) | `number` | *No description.* |
| [`dependsOn`](#cdktfprovidertfeworkspacevariablesetconfigpropertydependson) | [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[] | *No description.* |
| [`lifecycle`](#cdktfprovidertfeworkspacevariablesetconfigpropertylifecycle) | [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle) | *No description.* |
| [`provider`](#cdktfprovidertfeworkspacevariablesetconfigpropertyprovider) | [`cdktf.TerraformProvider`](#cdktf.TerraformProvider) | *No description.* |
| [`variableSetId`](#cdktfprovidertfeworkspacevariablesetconfigpropertyvariablesetid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_variable_set#variable_set_id WorkspaceVariableSet#variable_set_id}. |
| [`workspaceId`](#cdktfprovidertfeworkspacevariablesetconfigpropertyworkspaceid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_variable_set#workspace_id WorkspaceVariableSet#workspace_id}. |
| [`id`](#cdktfprovidertfeworkspacevariablesetconfigpropertyid) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_variable_set#id WorkspaceVariableSet#id}. |

---

##### `count`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig.property.count" id="cdktfprovidertfeworkspacevariablesetconfigpropertycount"></a>

```typescript
public readonly count: number;
```

- *Type:* `number`

---

##### `dependsOn`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig.property.dependsOn" id="cdktfprovidertfeworkspacevariablesetconfigpropertydependson"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* [`cdktf.ITerraformDependable`](#cdktf.ITerraformDependable)[]

---

##### `lifecycle`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig.property.lifecycle" id="cdktfprovidertfeworkspacevariablesetconfigpropertylifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* [`cdktf.TerraformResourceLifecycle`](#cdktf.TerraformResourceLifecycle)

---

##### `provider`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig.property.provider" id="cdktfprovidertfeworkspacevariablesetconfigpropertyprovider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* [`cdktf.TerraformProvider`](#cdktf.TerraformProvider)

---

##### `variableSetId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig.property.variableSetId" id="cdktfprovidertfeworkspacevariablesetconfigpropertyvariablesetid"></a>

```typescript
public readonly variableSetId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_variable_set#variable_set_id WorkspaceVariableSet#variable_set_id}.

---

##### `workspaceId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig.property.workspaceId" id="cdktfprovidertfeworkspacevariablesetconfigpropertyworkspaceid"></a>

```typescript
public readonly workspaceId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_variable_set#workspace_id WorkspaceVariableSet#workspace_id}.

---

##### `id`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVariableSetConfig.property.id" id="cdktfprovidertfeworkspacevariablesetconfigpropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace_variable_set#id WorkspaceVariableSet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2. If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### WorkspaceVcsRepo <a name="@cdktf/provider-tfe.WorkspaceVcsRepo" id="cdktfprovidertfeworkspacevcsrepo"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { WorkspaceVcsRepo } from '@cdktf/provider-tfe'

const workspaceVcsRepo: WorkspaceVcsRepo = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`identifier`](#cdktfprovidertfeworkspacevcsrepopropertyidentifier)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#identifier Workspace#identifier}. |
| [`oauthTokenId`](#cdktfprovidertfeworkspacevcsrepopropertyoauthtokenid)<span title="Required">*</span> | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#oauth_token_id Workspace#oauth_token_id}. |
| [`branch`](#cdktfprovidertfeworkspacevcsrepopropertybranch) | `string` | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#branch Workspace#branch}. |
| [`ingressSubmodules`](#cdktfprovidertfeworkspacevcsrepopropertyingresssubmodules) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#ingress_submodules Workspace#ingress_submodules}. |

---

##### `identifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepo.property.identifier" id="cdktfprovidertfeworkspacevcsrepopropertyidentifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#identifier Workspace#identifier}.

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepo.property.oauthTokenId" id="cdktfprovidertfeworkspacevcsrepopropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#oauth_token_id Workspace#oauth_token_id}.

---

##### `branch`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepo.property.branch" id="cdktfprovidertfeworkspacevcsrepopropertybranch"></a>

```typescript
public readonly branch: string;
```

- *Type:* `string`

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#branch Workspace#branch}.

---

##### `ingressSubmodules`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepo.property.ingressSubmodules" id="cdktfprovidertfeworkspacevcsrepopropertyingresssubmodules"></a>

```typescript
public readonly ingressSubmodules: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/tfe/r/workspace#ingress_submodules Workspace#ingress_submodules}.

---

## Classes <a name="Classes" id="classes"></a>

### DataTfeTeamAccessPermissionsList <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList" id="cdktfprovidertfedatatfeteamaccesspermissionslist"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList.Initializer" id="cdktfprovidertfedatatfeteamaccesspermissionslistinitializer"></a>

```typescript
import { DataTfeTeamAccessPermissionsList } from '@cdktf/provider-tfe'

new DataTfeTeamAccessPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfeteamaccesspermissionslistparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfeteamaccesspermissionslistparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`wrapsSet`](#cdktfprovidertfedatatfeteamaccesspermissionslistparameterwrapsset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList.parameter.terraformResource" id="cdktfprovidertfedatatfeteamaccesspermissionslistparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList.parameter.terraformAttribute" id="cdktfprovidertfedatatfeteamaccesspermissionslistparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList.parameter.wrapsSet" id="cdktfprovidertfedatatfeteamaccesspermissionslistparameterwrapsset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`get`](#cdktfprovidertfedatatfeteamaccesspermissionslistget) | *No description.* |

---

##### `get` <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList.get" id="cdktfprovidertfedatatfeteamaccesspermissionslistget"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsList.parameter.index" id="cdktfprovidertfedatatfeteamaccesspermissionslistparameterindex"></a>

- *Type:* `number`

the index of the item to return.

---




### DataTfeTeamAccessPermissionsOutputReference <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.Initializer" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceinitializer"></a>

```typescript
import { DataTfeTeamAccessPermissionsOutputReference } from '@cdktf/provider-tfe'

new DataTfeTeamAccessPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`complexObjectIndex`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparametercomplexobjectindex)<span title="Required">*</span> | `number` | the index of this item in the list. |
| [`complexObjectIsFromSet`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparametercomplexobjectisfromset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.parameter.terraformResource" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.parameter.terraformAttribute" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.parameter.complexObjectIndex" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparametercomplexobjectindex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.parameter.complexObjectIsFromSet" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferenceparametercomplexobjectisfromset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`runs`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyruns)<span title="Required">*</span> | `string` | *No description.* |
| [`runTasks`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyruntasks)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sentinelMocks`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertysentinelmocks)<span title="Required">*</span> | `string` | *No description.* |
| [`stateVersions`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertystateversions)<span title="Required">*</span> | `string` | *No description.* |
| [`variables`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyvariables)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceLocking`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyworkspacelocking)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`internalValue`](#cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.DataTfeTeamAccessPermissions`](#@cdktf/provider-tfe.DataTfeTeamAccessPermissions) | *No description.* |

---

##### `runs`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.property.runs" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyruns"></a>

```typescript
public readonly runs: string;
```

- *Type:* `string`

---

##### `runTasks`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.property.runTasks" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyruntasks"></a>

```typescript
public readonly runTasks: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sentinelMocks`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.property.sentinelMocks" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertysentinelmocks"></a>

```typescript
public readonly sentinelMocks: string;
```

- *Type:* `string`

---

##### `stateVersions`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.property.stateVersions" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertystateversions"></a>

```typescript
public readonly stateVersions: string;
```

- *Type:* `string`

---

##### `variables`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.property.variables" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyvariables"></a>

```typescript
public readonly variables: string;
```

- *Type:* `string`

---

##### `workspaceLocking`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.property.workspaceLocking" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyworkspacelocking"></a>

```typescript
public readonly workspaceLocking: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeTeamAccessPermissionsOutputReference.property.internalValue" id="cdktfprovidertfedatatfeteamaccesspermissionsoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DataTfeTeamAccessPermissions;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeTeamAccessPermissions`](#@cdktf/provider-tfe.DataTfeTeamAccessPermissions)

---


### DataTfeVariablesEnvList <a name="@cdktf/provider-tfe.DataTfeVariablesEnvList" id="cdktfprovidertfedatatfevariablesenvlist"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariablesEnvList.Initializer" id="cdktfprovidertfedatatfevariablesenvlistinitializer"></a>

```typescript
import { DataTfeVariablesEnvList } from '@cdktf/provider-tfe'

new DataTfeVariablesEnvList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfevariablesenvlistparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfevariablesenvlistparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`wrapsSet`](#cdktfprovidertfedatatfevariablesenvlistparameterwrapsset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvList.parameter.terraformResource" id="cdktfprovidertfedatatfevariablesenvlistparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvList.parameter.terraformAttribute" id="cdktfprovidertfedatatfevariablesenvlistparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvList.parameter.wrapsSet" id="cdktfprovidertfedatatfevariablesenvlistparameterwrapsset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`get`](#cdktfprovidertfedatatfevariablesenvlistget) | *No description.* |

---

##### `get` <a name="@cdktf/provider-tfe.DataTfeVariablesEnvList.get" id="cdktfprovidertfedatatfevariablesenvlistget"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvList.parameter.index" id="cdktfprovidertfedatatfevariablesenvlistparameterindex"></a>

- *Type:* `number`

the index of the item to return.

---




### DataTfeVariablesEnvOutputReference <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference" id="cdktfprovidertfedatatfevariablesenvoutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.Initializer" id="cdktfprovidertfedatatfevariablesenvoutputreferenceinitializer"></a>

```typescript
import { DataTfeVariablesEnvOutputReference } from '@cdktf/provider-tfe'

new DataTfeVariablesEnvOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfevariablesenvoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfevariablesenvoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`complexObjectIndex`](#cdktfprovidertfedatatfevariablesenvoutputreferenceparametercomplexobjectindex)<span title="Required">*</span> | `number` | the index of this item in the list. |
| [`complexObjectIsFromSet`](#cdktfprovidertfedatatfevariablesenvoutputreferenceparametercomplexobjectisfromset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.parameter.terraformResource" id="cdktfprovidertfedatatfevariablesenvoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.parameter.terraformAttribute" id="cdktfprovidertfedatatfevariablesenvoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.parameter.complexObjectIndex" id="cdktfprovidertfedatatfevariablesenvoutputreferenceparametercomplexobjectindex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.parameter.complexObjectIsFromSet" id="cdktfprovidertfedatatfevariablesenvoutputreferenceparametercomplexobjectisfromset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`category`](#cdktfprovidertfedatatfevariablesenvoutputreferencepropertycategory)<span title="Required">*</span> | `string` | *No description.* |
| [`hcl`](#cdktfprovidertfedatatfevariablesenvoutputreferencepropertyhcl)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfedatatfevariablesenvoutputreferencepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfevariablesenvoutputreferencepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`sensitive`](#cdktfprovidertfedatatfevariablesenvoutputreferencepropertysensitive)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`value`](#cdktfprovidertfedatatfevariablesenvoutputreferencepropertyvalue)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidertfedatatfevariablesenvoutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.DataTfeVariablesEnv`](#@cdktf/provider-tfe.DataTfeVariablesEnv) | *No description.* |

---

##### `category`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.property.category" id="cdktfprovidertfedatatfevariablesenvoutputreferencepropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

---

##### `hcl`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.property.hcl" id="cdktfprovidertfedatatfevariablesenvoutputreferencepropertyhcl"></a>

```typescript
public readonly hcl: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.property.id" id="cdktfprovidertfedatatfevariablesenvoutputreferencepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.property.name" id="cdktfprovidertfedatatfevariablesenvoutputreferencepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `sensitive`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.property.sensitive" id="cdktfprovidertfedatatfevariablesenvoutputreferencepropertysensitive"></a>

```typescript
public readonly sensitive: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.property.value" id="cdktfprovidertfedatatfevariablesenvoutputreferencepropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesEnvOutputReference.property.internalValue" id="cdktfprovidertfedatatfevariablesenvoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DataTfeVariablesEnv;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeVariablesEnv`](#@cdktf/provider-tfe.DataTfeVariablesEnv)

---


### DataTfeVariablesTerraformList <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformList" id="cdktfprovidertfedatatfevariablesterraformlist"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformList.Initializer" id="cdktfprovidertfedatatfevariablesterraformlistinitializer"></a>

```typescript
import { DataTfeVariablesTerraformList } from '@cdktf/provider-tfe'

new DataTfeVariablesTerraformList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfevariablesterraformlistparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfevariablesterraformlistparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`wrapsSet`](#cdktfprovidertfedatatfevariablesterraformlistparameterwrapsset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformList.parameter.terraformResource" id="cdktfprovidertfedatatfevariablesterraformlistparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformList.parameter.terraformAttribute" id="cdktfprovidertfedatatfevariablesterraformlistparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformList.parameter.wrapsSet" id="cdktfprovidertfedatatfevariablesterraformlistparameterwrapsset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`get`](#cdktfprovidertfedatatfevariablesterraformlistget) | *No description.* |

---

##### `get` <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformList.get" id="cdktfprovidertfedatatfevariablesterraformlistget"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformList.parameter.index" id="cdktfprovidertfedatatfevariablesterraformlistparameterindex"></a>

- *Type:* `number`

the index of the item to return.

---




### DataTfeVariablesTerraformOutputReference <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference" id="cdktfprovidertfedatatfevariablesterraformoutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.Initializer" id="cdktfprovidertfedatatfevariablesterraformoutputreferenceinitializer"></a>

```typescript
import { DataTfeVariablesTerraformOutputReference } from '@cdktf/provider-tfe'

new DataTfeVariablesTerraformOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfevariablesterraformoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfevariablesterraformoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`complexObjectIndex`](#cdktfprovidertfedatatfevariablesterraformoutputreferenceparametercomplexobjectindex)<span title="Required">*</span> | `number` | the index of this item in the list. |
| [`complexObjectIsFromSet`](#cdktfprovidertfedatatfevariablesterraformoutputreferenceparametercomplexobjectisfromset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.parameter.terraformResource" id="cdktfprovidertfedatatfevariablesterraformoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.parameter.terraformAttribute" id="cdktfprovidertfedatatfevariablesterraformoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.parameter.complexObjectIndex" id="cdktfprovidertfedatatfevariablesterraformoutputreferenceparametercomplexobjectindex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.parameter.complexObjectIsFromSet" id="cdktfprovidertfedatatfevariablesterraformoutputreferenceparametercomplexobjectisfromset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`category`](#cdktfprovidertfedatatfevariablesterraformoutputreferencepropertycategory)<span title="Required">*</span> | `string` | *No description.* |
| [`hcl`](#cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyhcl)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`sensitive`](#cdktfprovidertfedatatfevariablesterraformoutputreferencepropertysensitive)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`value`](#cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyvalue)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.DataTfeVariablesTerraform`](#@cdktf/provider-tfe.DataTfeVariablesTerraform) | *No description.* |

---

##### `category`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.property.category" id="cdktfprovidertfedatatfevariablesterraformoutputreferencepropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

---

##### `hcl`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.property.hcl" id="cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyhcl"></a>

```typescript
public readonly hcl: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.property.id" id="cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.property.name" id="cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `sensitive`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.property.sensitive" id="cdktfprovidertfedatatfevariablesterraformoutputreferencepropertysensitive"></a>

```typescript
public readonly sensitive: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.property.value" id="cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesTerraformOutputReference.property.internalValue" id="cdktfprovidertfedatatfevariablesterraformoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DataTfeVariablesTerraform;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeVariablesTerraform`](#@cdktf/provider-tfe.DataTfeVariablesTerraform)

---


### DataTfeVariablesVariablesList <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesList" id="cdktfprovidertfedatatfevariablesvariableslist"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesList.Initializer" id="cdktfprovidertfedatatfevariablesvariableslistinitializer"></a>

```typescript
import { DataTfeVariablesVariablesList } from '@cdktf/provider-tfe'

new DataTfeVariablesVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfevariablesvariableslistparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfevariablesvariableslistparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`wrapsSet`](#cdktfprovidertfedatatfevariablesvariableslistparameterwrapsset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesList.parameter.terraformResource" id="cdktfprovidertfedatatfevariablesvariableslistparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesList.parameter.terraformAttribute" id="cdktfprovidertfedatatfevariablesvariableslistparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesList.parameter.wrapsSet" id="cdktfprovidertfedatatfevariablesvariableslistparameterwrapsset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`get`](#cdktfprovidertfedatatfevariablesvariableslistget) | *No description.* |

---

##### `get` <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesList.get" id="cdktfprovidertfedatatfevariablesvariableslistget"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesList.parameter.index" id="cdktfprovidertfedatatfevariablesvariableslistparameterindex"></a>

- *Type:* `number`

the index of the item to return.

---




### DataTfeVariablesVariablesOutputReference <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference" id="cdktfprovidertfedatatfevariablesvariablesoutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.Initializer" id="cdktfprovidertfedatatfevariablesvariablesoutputreferenceinitializer"></a>

```typescript
import { DataTfeVariablesVariablesOutputReference } from '@cdktf/provider-tfe'

new DataTfeVariablesVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfevariablesvariablesoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfevariablesvariablesoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`complexObjectIndex`](#cdktfprovidertfedatatfevariablesvariablesoutputreferenceparametercomplexobjectindex)<span title="Required">*</span> | `number` | the index of this item in the list. |
| [`complexObjectIsFromSet`](#cdktfprovidertfedatatfevariablesvariablesoutputreferenceparametercomplexobjectisfromset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.parameter.terraformResource" id="cdktfprovidertfedatatfevariablesvariablesoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.parameter.terraformAttribute" id="cdktfprovidertfedatatfevariablesvariablesoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.parameter.complexObjectIndex" id="cdktfprovidertfedatatfevariablesvariablesoutputreferenceparametercomplexobjectindex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.parameter.complexObjectIsFromSet" id="cdktfprovidertfedatatfevariablesvariablesoutputreferenceparametercomplexobjectisfromset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`category`](#cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertycategory)<span title="Required">*</span> | `string` | *No description.* |
| [`hcl`](#cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyhcl)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`id`](#cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyid)<span title="Required">*</span> | `string` | *No description.* |
| [`name`](#cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyname)<span title="Required">*</span> | `string` | *No description.* |
| [`sensitive`](#cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertysensitive)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`value`](#cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyvalue)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.DataTfeVariablesVariables`](#@cdktf/provider-tfe.DataTfeVariablesVariables) | *No description.* |

---

##### `category`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.property.category" id="cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertycategory"></a>

```typescript
public readonly category: string;
```

- *Type:* `string`

---

##### `hcl`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.property.hcl" id="cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyhcl"></a>

```typescript
public readonly hcl: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `id`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.property.id" id="cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyid"></a>

```typescript
public readonly id: string;
```

- *Type:* `string`

---

##### `name`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.property.name" id="cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyname"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `sensitive`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.property.sensitive" id="cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertysensitive"></a>

```typescript
public readonly sensitive: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `value`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.property.value" id="cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyvalue"></a>

```typescript
public readonly value: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeVariablesVariablesOutputReference.property.internalValue" id="cdktfprovidertfedatatfevariablesvariablesoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DataTfeVariablesVariables;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeVariablesVariables`](#@cdktf/provider-tfe.DataTfeVariablesVariables)

---


### DataTfeWorkspaceVcsRepoList <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList" id="cdktfprovidertfedatatfeworkspacevcsrepolist"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList.Initializer" id="cdktfprovidertfedatatfeworkspacevcsrepolistinitializer"></a>

```typescript
import { DataTfeWorkspaceVcsRepoList } from '@cdktf/provider-tfe'

new DataTfeWorkspaceVcsRepoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfeworkspacevcsrepolistparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfeworkspacevcsrepolistparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`wrapsSet`](#cdktfprovidertfedatatfeworkspacevcsrepolistparameterwrapsset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList.parameter.terraformResource" id="cdktfprovidertfedatatfeworkspacevcsrepolistparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList.parameter.terraformAttribute" id="cdktfprovidertfedatatfeworkspacevcsrepolistparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList.parameter.wrapsSet" id="cdktfprovidertfedatatfeworkspacevcsrepolistparameterwrapsset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`get`](#cdktfprovidertfedatatfeworkspacevcsrepolistget) | *No description.* |

---

##### `get` <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList.get" id="cdktfprovidertfedatatfeworkspacevcsrepolistget"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoList.parameter.index" id="cdktfprovidertfedatatfeworkspacevcsrepolistparameterindex"></a>

- *Type:* `number`

the index of the item to return.

---




### DataTfeWorkspaceVcsRepoOutputReference <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.Initializer" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceinitializer"></a>

```typescript
import { DataTfeWorkspaceVcsRepoOutputReference } from '@cdktf/provider-tfe'

new DataTfeWorkspaceVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`complexObjectIndex`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparametercomplexobjectindex)<span title="Required">*</span> | `number` | the index of this item in the list. |
| [`complexObjectIsFromSet`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparametercomplexobjectisfromset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.parameter.terraformResource" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.parameter.terraformAttribute" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.parameter.complexObjectIndex" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparametercomplexobjectindex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.parameter.complexObjectIsFromSet" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferenceparametercomplexobjectisfromset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`branch`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertybranch)<span title="Required">*</span> | `string` | *No description.* |
| [`identifier`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyidentifier)<span title="Required">*</span> | `string` | *No description.* |
| [`ingressSubmodules`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyingresssubmodules)<span title="Required">*</span> | [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`oauthTokenId`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyoauthtokenid)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.DataTfeWorkspaceVcsRepo`](#@cdktf/provider-tfe.DataTfeWorkspaceVcsRepo) | *No description.* |

---

##### `branch`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.property.branch" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertybranch"></a>

```typescript
public readonly branch: string;
```

- *Type:* `string`

---

##### `identifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.property.identifier" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyidentifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* `string`

---

##### `ingressSubmodules`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.property.ingressSubmodules" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyingresssubmodules"></a>

```typescript
public readonly ingressSubmodules: IResolvable;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.property.oauthTokenId" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.DataTfeWorkspaceVcsRepoOutputReference.property.internalValue" id="cdktfprovidertfedatatfeworkspacevcsrepooutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: DataTfeWorkspaceVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.DataTfeWorkspaceVcsRepo`](#@cdktf/provider-tfe.DataTfeWorkspaceVcsRepo)

---


### PolicySetVcsRepoOutputReference <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference" id="cdktfprovidertfepolicysetvcsrepooutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.Initializer" id="cdktfprovidertfepolicysetvcsrepooutputreferenceinitializer"></a>

```typescript
import { PolicySetVcsRepoOutputReference } from '@cdktf/provider-tfe'

new PolicySetVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfepolicysetvcsrepooutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfepolicysetvcsrepooutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.parameter.terraformResource" id="cdktfprovidertfepolicysetvcsrepooutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.parameter.terraformAttribute" id="cdktfprovidertfepolicysetvcsrepooutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetBranch`](#cdktfprovidertfepolicysetvcsrepooutputreferenceresetbranch) | *No description.* |
| [`resetIngressSubmodules`](#cdktfprovidertfepolicysetvcsrepooutputreferenceresetingresssubmodules) | *No description.* |

---

##### `resetBranch` <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.resetBranch" id="cdktfprovidertfepolicysetvcsrepooutputreferenceresetbranch"></a>

```typescript
public resetBranch()
```

##### `resetIngressSubmodules` <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.resetIngressSubmodules" id="cdktfprovidertfepolicysetvcsrepooutputreferenceresetingresssubmodules"></a>

```typescript
public resetIngressSubmodules()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`branchInput`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertybranchinput) | `string` | *No description.* |
| [`identifierInput`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertyidentifierinput) | `string` | *No description.* |
| [`ingressSubmodulesInput`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertyingresssubmodulesinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`oauthTokenIdInput`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertyoauthtokenidinput) | `string` | *No description.* |
| [`branch`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertybranch)<span title="Required">*</span> | `string` | *No description.* |
| [`identifier`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertyidentifier)<span title="Required">*</span> | `string` | *No description.* |
| [`ingressSubmodules`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertyingresssubmodules)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`oauthTokenId`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertyoauthtokenid)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidertfepolicysetvcsrepooutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.PolicySetVcsRepo`](#@cdktf/provider-tfe.PolicySetVcsRepo) | *No description.* |

---

##### `branchInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.branchInput" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertybranchinput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* `string`

---

##### `identifierInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.identifierInput" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertyidentifierinput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* `string`

---

##### `ingressSubmodulesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.ingressSubmodulesInput" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertyingresssubmodulesinput"></a>

```typescript
public readonly ingressSubmodulesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `oauthTokenIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.oauthTokenIdInput" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertyoauthtokenidinput"></a>

```typescript
public readonly oauthTokenIdInput: string;
```

- *Type:* `string`

---

##### `branch`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.branch" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertybranch"></a>

```typescript
public readonly branch: string;
```

- *Type:* `string`

---

##### `identifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.identifier" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertyidentifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* `string`

---

##### `ingressSubmodules`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.ingressSubmodules" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertyingresssubmodules"></a>

```typescript
public readonly ingressSubmodules: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.oauthTokenId" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.PolicySetVcsRepoOutputReference.property.internalValue" id="cdktfprovidertfepolicysetvcsrepooutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: PolicySetVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.PolicySetVcsRepo`](#@cdktf/provider-tfe.PolicySetVcsRepo)

---


### RegistryModuleVcsRepoOutputReference <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference" id="cdktfprovidertferegistrymodulevcsrepooutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.Initializer" id="cdktfprovidertferegistrymodulevcsrepooutputreferenceinitializer"></a>

```typescript
import { RegistryModuleVcsRepoOutputReference } from '@cdktf/provider-tfe'

new RegistryModuleVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertferegistrymodulevcsrepooutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertferegistrymodulevcsrepooutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.parameter.terraformResource" id="cdktfprovidertferegistrymodulevcsrepooutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.parameter.terraformAttribute" id="cdktfprovidertferegistrymodulevcsrepooutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`displayIdentifierInput`](#cdktfprovidertferegistrymodulevcsrepooutputreferencepropertydisplayidentifierinput) | `string` | *No description.* |
| [`identifierInput`](#cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyidentifierinput) | `string` | *No description.* |
| [`oauthTokenIdInput`](#cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyoauthtokenidinput) | `string` | *No description.* |
| [`displayIdentifier`](#cdktfprovidertferegistrymodulevcsrepooutputreferencepropertydisplayidentifier)<span title="Required">*</span> | `string` | *No description.* |
| [`identifier`](#cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyidentifier)<span title="Required">*</span> | `string` | *No description.* |
| [`oauthTokenId`](#cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyoauthtokenid)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.RegistryModuleVcsRepo`](#@cdktf/provider-tfe.RegistryModuleVcsRepo) | *No description.* |

---

##### `displayIdentifierInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.property.displayIdentifierInput" id="cdktfprovidertferegistrymodulevcsrepooutputreferencepropertydisplayidentifierinput"></a>

```typescript
public readonly displayIdentifierInput: string;
```

- *Type:* `string`

---

##### `identifierInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.property.identifierInput" id="cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyidentifierinput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* `string`

---

##### `oauthTokenIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.property.oauthTokenIdInput" id="cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyoauthtokenidinput"></a>

```typescript
public readonly oauthTokenIdInput: string;
```

- *Type:* `string`

---

##### `displayIdentifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.property.displayIdentifier" id="cdktfprovidertferegistrymodulevcsrepooutputreferencepropertydisplayidentifier"></a>

```typescript
public readonly displayIdentifier: string;
```

- *Type:* `string`

---

##### `identifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.property.identifier" id="cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyidentifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* `string`

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.property.oauthTokenId" id="cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.RegistryModuleVcsRepoOutputReference.property.internalValue" id="cdktfprovidertferegistrymodulevcsrepooutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: RegistryModuleVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.RegistryModuleVcsRepo`](#@cdktf/provider-tfe.RegistryModuleVcsRepo)

---


### TeamAccessPermissionsList <a name="@cdktf/provider-tfe.TeamAccessPermissionsList" id="cdktfprovidertfeteamaccesspermissionslist"></a>

#### Initializers <a name="@cdktf/provider-tfe.TeamAccessPermissionsList.Initializer" id="cdktfprovidertfeteamaccesspermissionslistinitializer"></a>

```typescript
import { TeamAccessPermissionsList } from '@cdktf/provider-tfe'

new TeamAccessPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfeteamaccesspermissionslistparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfeteamaccesspermissionslistparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`wrapsSet`](#cdktfprovidertfeteamaccesspermissionslistparameterwrapsset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsList.parameter.terraformResource" id="cdktfprovidertfeteamaccesspermissionslistparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsList.parameter.terraformAttribute" id="cdktfprovidertfeteamaccesspermissionslistparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsList.parameter.wrapsSet" id="cdktfprovidertfeteamaccesspermissionslistparameterwrapsset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`get`](#cdktfprovidertfeteamaccesspermissionslistget) | *No description.* |

---

##### `get` <a name="@cdktf/provider-tfe.TeamAccessPermissionsList.get" id="cdktfprovidertfeteamaccesspermissionslistget"></a>

```typescript
public get(index: number)
```

###### `index`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsList.parameter.index" id="cdktfprovidertfeteamaccesspermissionslistparameterindex"></a>

- *Type:* `number`

the index of the item to return.

---


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`internalValue`](#cdktfprovidertfeteamaccesspermissionslistpropertyinternalvalue) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)[] | *No description.* |

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsList.property.internalValue" id="cdktfprovidertfeteamaccesspermissionslistpropertyinternalvalue"></a>

```typescript
public readonly internalValue: IResolvable | TeamAccessPermissions[];
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)[]

---


### TeamAccessPermissionsOutputReference <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference" id="cdktfprovidertfeteamaccesspermissionsoutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.Initializer" id="cdktfprovidertfeteamaccesspermissionsoutputreferenceinitializer"></a>

```typescript
import { TeamAccessPermissionsOutputReference } from '@cdktf/provider-tfe'

new TeamAccessPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfeteamaccesspermissionsoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfeteamaccesspermissionsoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |
| [`complexObjectIndex`](#cdktfprovidertfeteamaccesspermissionsoutputreferenceparametercomplexobjectindex)<span title="Required">*</span> | `number` | the index of this item in the list. |
| [`complexObjectIsFromSet`](#cdktfprovidertfeteamaccesspermissionsoutputreferenceparametercomplexobjectisfromset)<span title="Required">*</span> | `boolean` | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.parameter.terraformResource" id="cdktfprovidertfeteamaccesspermissionsoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.parameter.terraformAttribute" id="cdktfprovidertfeteamaccesspermissionsoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.parameter.complexObjectIndex" id="cdktfprovidertfeteamaccesspermissionsoutputreferenceparametercomplexobjectindex"></a>

- *Type:* `number`

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.parameter.complexObjectIsFromSet" id="cdktfprovidertfeteamaccesspermissionsoutputreferenceparametercomplexobjectisfromset"></a>

- *Type:* `boolean`

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`runsInput`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyrunsinput) | `string` | *No description.* |
| [`runTasksInput`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyruntasksinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sentinelMocksInput`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertysentinelmocksinput) | `string` | *No description.* |
| [`stateVersionsInput`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertystateversionsinput) | `string` | *No description.* |
| [`variablesInput`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyvariablesinput) | `string` | *No description.* |
| [`workspaceLockingInput`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyworkspacelockinginput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`runs`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyruns)<span title="Required">*</span> | `string` | *No description.* |
| [`runTasks`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyruntasks)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`sentinelMocks`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertysentinelmocks)<span title="Required">*</span> | `string` | *No description.* |
| [`stateVersions`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertystateversions)<span title="Required">*</span> | `string` | *No description.* |
| [`variables`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyvariables)<span title="Required">*</span> | `string` | *No description.* |
| [`workspaceLocking`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyworkspacelocking)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`internalValue`](#cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyinternalvalue) | [`cdktf.IResolvable`](#cdktf.IResolvable) \| [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions) | *No description.* |

---

##### `runsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.runsInput" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyrunsinput"></a>

```typescript
public readonly runsInput: string;
```

- *Type:* `string`

---

##### `runTasksInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.runTasksInput" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyruntasksinput"></a>

```typescript
public readonly runTasksInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sentinelMocksInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.sentinelMocksInput" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertysentinelmocksinput"></a>

```typescript
public readonly sentinelMocksInput: string;
```

- *Type:* `string`

---

##### `stateVersionsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.stateVersionsInput" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertystateversionsinput"></a>

```typescript
public readonly stateVersionsInput: string;
```

- *Type:* `string`

---

##### `variablesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.variablesInput" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyvariablesinput"></a>

```typescript
public readonly variablesInput: string;
```

- *Type:* `string`

---

##### `workspaceLockingInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.workspaceLockingInput" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyworkspacelockinginput"></a>

```typescript
public readonly workspaceLockingInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `runs`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.runs" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyruns"></a>

```typescript
public readonly runs: string;
```

- *Type:* `string`

---

##### `runTasks`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.runTasks" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyruntasks"></a>

```typescript
public readonly runTasks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `sentinelMocks`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.sentinelMocks" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertysentinelmocks"></a>

```typescript
public readonly sentinelMocks: string;
```

- *Type:* `string`

---

##### `stateVersions`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.stateVersions" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertystateversions"></a>

```typescript
public readonly stateVersions: string;
```

- *Type:* `string`

---

##### `variables`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.variables" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyvariables"></a>

```typescript
public readonly variables: string;
```

- *Type:* `string`

---

##### `workspaceLocking`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.workspaceLocking" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyworkspacelocking"></a>

```typescript
public readonly workspaceLocking: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamAccessPermissionsOutputReference.property.internalValue" id="cdktfprovidertfeteamaccesspermissionsoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: IResolvable | TeamAccessPermissions;
```

- *Type:* [`cdktf.IResolvable`](#cdktf.IResolvable) | [`@cdktf/provider-tfe.TeamAccessPermissions`](#@cdktf/provider-tfe.TeamAccessPermissions)

---


### TeamOrganizationAccessOutputReference <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference" id="cdktfprovidertfeteamorganizationaccessoutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.Initializer" id="cdktfprovidertfeteamorganizationaccessoutputreferenceinitializer"></a>

```typescript
import { TeamOrganizationAccessOutputReference } from '@cdktf/provider-tfe'

new TeamOrganizationAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfeteamorganizationaccessoutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfeteamorganizationaccessoutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.parameter.terraformResource" id="cdktfprovidertfeteamorganizationaccessoutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.parameter.terraformAttribute" id="cdktfprovidertfeteamorganizationaccessoutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetManageModules`](#cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagemodules) | *No description.* |
| [`resetManagePolicies`](#cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagepolicies) | *No description.* |
| [`resetManagePolicyOverrides`](#cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagepolicyoverrides) | *No description.* |
| [`resetManageProviders`](#cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanageproviders) | *No description.* |
| [`resetManageRunTasks`](#cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanageruntasks) | *No description.* |
| [`resetManageVcsSettings`](#cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagevcssettings) | *No description.* |
| [`resetManageWorkspaces`](#cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanageworkspaces) | *No description.* |

---

##### `resetManageModules` <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.resetManageModules" id="cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagemodules"></a>

```typescript
public resetManageModules()
```

##### `resetManagePolicies` <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.resetManagePolicies" id="cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagepolicies"></a>

```typescript
public resetManagePolicies()
```

##### `resetManagePolicyOverrides` <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides" id="cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagepolicyoverrides"></a>

```typescript
public resetManagePolicyOverrides()
```

##### `resetManageProviders` <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.resetManageProviders" id="cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanageproviders"></a>

```typescript
public resetManageProviders()
```

##### `resetManageRunTasks` <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.resetManageRunTasks" id="cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanageruntasks"></a>

```typescript
public resetManageRunTasks()
```

##### `resetManageVcsSettings` <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.resetManageVcsSettings" id="cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanagevcssettings"></a>

```typescript
public resetManageVcsSettings()
```

##### `resetManageWorkspaces` <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.resetManageWorkspaces" id="cdktfprovidertfeteamorganizationaccessoutputreferenceresetmanageworkspaces"></a>

```typescript
public resetManageWorkspaces()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`manageModulesInput`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagemodulesinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`managePoliciesInput`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepoliciesinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`managePolicyOverridesInput`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepolicyoverridesinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageProvidersInput`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageprovidersinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageRunTasksInput`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageruntasksinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageVcsSettingsInput`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagevcssettingsinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageWorkspacesInput`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageworkspacesinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageModules`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagemodules)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`managePolicies`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepolicies)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`managePolicyOverrides`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepolicyoverrides)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageProviders`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageproviders)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageRunTasks`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageruntasks)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageVcsSettings`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagevcssettings)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`manageWorkspaces`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageworkspaces)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`internalValue`](#cdktfprovidertfeteamorganizationaccessoutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.TeamOrganizationAccess`](#@cdktf/provider-tfe.TeamOrganizationAccess) | *No description.* |

---

##### `manageModulesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageModulesInput" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagemodulesinput"></a>

```typescript
public readonly manageModulesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `managePoliciesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.managePoliciesInput" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepoliciesinput"></a>

```typescript
public readonly managePoliciesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `managePolicyOverridesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepolicyoverridesinput"></a>

```typescript
public readonly managePolicyOverridesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageProvidersInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageProvidersInput" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageprovidersinput"></a>

```typescript
public readonly manageProvidersInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageRunTasksInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageRunTasksInput" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageruntasksinput"></a>

```typescript
public readonly manageRunTasksInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageVcsSettingsInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagevcssettingsinput"></a>

```typescript
public readonly manageVcsSettingsInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageWorkspacesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageworkspacesinput"></a>

```typescript
public readonly manageWorkspacesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageModules`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageModules" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagemodules"></a>

```typescript
public readonly manageModules: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `managePolicies`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.managePolicies" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepolicies"></a>

```typescript
public readonly managePolicies: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `managePolicyOverrides`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.managePolicyOverrides" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagepolicyoverrides"></a>

```typescript
public readonly managePolicyOverrides: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageProviders`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageProviders" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageproviders"></a>

```typescript
public readonly manageProviders: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageRunTasks`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageRunTasks" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageruntasks"></a>

```typescript
public readonly manageRunTasks: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageVcsSettings`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageVcsSettings" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanagevcssettings"></a>

```typescript
public readonly manageVcsSettings: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `manageWorkspaces`<sup>Required</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.manageWorkspaces" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertymanageworkspaces"></a>

```typescript
public readonly manageWorkspaces: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.TeamOrganizationAccessOutputReference.property.internalValue" id="cdktfprovidertfeteamorganizationaccessoutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: TeamOrganizationAccess;
```

- *Type:* [`@cdktf/provider-tfe.TeamOrganizationAccess`](#@cdktf/provider-tfe.TeamOrganizationAccess)

---


### WorkspaceVcsRepoOutputReference <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference" id="cdktfprovidertfeworkspacevcsrepooutputreference"></a>

#### Initializers <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.Initializer" id="cdktfprovidertfeworkspacevcsrepooutputreferenceinitializer"></a>

```typescript
import { WorkspaceVcsRepoOutputReference } from '@cdktf/provider-tfe'

new WorkspaceVcsRepoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`terraformResource`](#cdktfprovidertfeworkspacevcsrepooutputreferenceparameterterraformresource)<span title="Required">*</span> | [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent) | The parent resource. |
| [`terraformAttribute`](#cdktfprovidertfeworkspacevcsrepooutputreferenceparameterterraformattribute)<span title="Required">*</span> | `string` | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.parameter.terraformResource" id="cdktfprovidertfeworkspacevcsrepooutputreferenceparameterterraformresource"></a>

- *Type:* [`cdktf.IInterpolatingParent`](#cdktf.IInterpolatingParent)

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.parameter.terraformAttribute" id="cdktfprovidertfeworkspacevcsrepooutputreferenceparameterterraformattribute"></a>

- *Type:* `string`

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="methods"></a>

| **Name** | **Description** |
| --- | --- |
| [`resetBranch`](#cdktfprovidertfeworkspacevcsrepooutputreferenceresetbranch) | *No description.* |
| [`resetIngressSubmodules`](#cdktfprovidertfeworkspacevcsrepooutputreferenceresetingresssubmodules) | *No description.* |

---

##### `resetBranch` <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.resetBranch" id="cdktfprovidertfeworkspacevcsrepooutputreferenceresetbranch"></a>

```typescript
public resetBranch()
```

##### `resetIngressSubmodules` <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.resetIngressSubmodules" id="cdktfprovidertfeworkspacevcsrepooutputreferenceresetingresssubmodules"></a>

```typescript
public resetIngressSubmodules()
```


#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`branchInput`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertybranchinput) | `string` | *No description.* |
| [`identifierInput`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertyidentifierinput) | `string` | *No description.* |
| [`ingressSubmodulesInput`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertyingresssubmodulesinput) | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`oauthTokenIdInput`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertyoauthtokenidinput) | `string` | *No description.* |
| [`branch`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertybranch)<span title="Required">*</span> | `string` | *No description.* |
| [`identifier`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertyidentifier)<span title="Required">*</span> | `string` | *No description.* |
| [`ingressSubmodules`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertyingresssubmodules)<span title="Required">*</span> | `boolean` \| [`cdktf.IResolvable`](#cdktf.IResolvable) | *No description.* |
| [`oauthTokenId`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertyoauthtokenid)<span title="Required">*</span> | `string` | *No description.* |
| [`internalValue`](#cdktfprovidertfeworkspacevcsrepooutputreferencepropertyinternalvalue) | [`@cdktf/provider-tfe.WorkspaceVcsRepo`](#@cdktf/provider-tfe.WorkspaceVcsRepo) | *No description.* |

---

##### `branchInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.branchInput" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertybranchinput"></a>

```typescript
public readonly branchInput: string;
```

- *Type:* `string`

---

##### `identifierInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.identifierInput" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertyidentifierinput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* `string`

---

##### `ingressSubmodulesInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.ingressSubmodulesInput" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertyingresssubmodulesinput"></a>

```typescript
public readonly ingressSubmodulesInput: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `oauthTokenIdInput`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.oauthTokenIdInput" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertyoauthtokenidinput"></a>

```typescript
public readonly oauthTokenIdInput: string;
```

- *Type:* `string`

---

##### `branch`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.branch" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertybranch"></a>

```typescript
public readonly branch: string;
```

- *Type:* `string`

---

##### `identifier`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.identifier" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertyidentifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* `string`

---

##### `ingressSubmodules`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.ingressSubmodules" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertyingresssubmodules"></a>

```typescript
public readonly ingressSubmodules: boolean | IResolvable;
```

- *Type:* `boolean` | [`cdktf.IResolvable`](#cdktf.IResolvable)

---

##### `oauthTokenId`<sup>Required</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.oauthTokenId" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertyoauthtokenid"></a>

```typescript
public readonly oauthTokenId: string;
```

- *Type:* `string`

---

##### `internalValue`<sup>Optional</sup> <a name="@cdktf/provider-tfe.WorkspaceVcsRepoOutputReference.property.internalValue" id="cdktfprovidertfeworkspacevcsrepooutputreferencepropertyinternalvalue"></a>

```typescript
public readonly internalValue: WorkspaceVcsRepo;
```

- *Type:* [`@cdktf/provider-tfe.WorkspaceVcsRepo`](#@cdktf/provider-tfe.WorkspaceVcsRepo)

---



