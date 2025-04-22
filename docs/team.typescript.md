# `team` Submodule <a name="`team` Submodule" id="@cdktf/provider-tfe.team"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Team <a name="Team" id="@cdktf/provider-tfe.team.Team"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team tfe_team}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.Team.Initializer"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

new team.Team(scope: Construct, id: string, config: TeamConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamConfig">TeamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.team.Team.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamConfig">TeamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.team.Team.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.team.Team.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.team.Team.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.team.Team.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.team.Team.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.team.Team.putOrganizationAccess">putOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetAllowMemberTokenManagement">resetAllowMemberTokenManagement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganization">resetOrganization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetOrganizationAccess">resetOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetSsoTeamId">resetSsoTeamId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.resetVisibility">resetVisibility</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.team.Team.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.team.Team.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.team.Team.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.team.Team.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.team.Team.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.team.Team.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.team.Team.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.team.Team.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.team.Team.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.team.Team.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.team.Team.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.team.Team.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.team.Team.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.team.Team.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.Team.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.Team.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.team.Team.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.team.Team.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.team.Team.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.team.Team.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.team.Team.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOrganizationAccess` <a name="putOrganizationAccess" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess"></a>

```typescript
public putOrganizationAccess(value: TeamOrganizationAccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.team.Team.putOrganizationAccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---

##### `resetAllowMemberTokenManagement` <a name="resetAllowMemberTokenManagement" id="@cdktf/provider-tfe.team.Team.resetAllowMemberTokenManagement"></a>

```typescript
public resetAllowMemberTokenManagement(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-tfe.team.Team.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOrganization` <a name="resetOrganization" id="@cdktf/provider-tfe.team.Team.resetOrganization"></a>

```typescript
public resetOrganization(): void
```

##### `resetOrganizationAccess` <a name="resetOrganizationAccess" id="@cdktf/provider-tfe.team.Team.resetOrganizationAccess"></a>

```typescript
public resetOrganizationAccess(): void
```

##### `resetSsoTeamId` <a name="resetSsoTeamId" id="@cdktf/provider-tfe.team.Team.resetSsoTeamId"></a>

```typescript
public resetSsoTeamId(): void
```

##### `resetVisibility` <a name="resetVisibility" id="@cdktf/provider-tfe.team.Team.resetVisibility"></a>

```typescript
public resetVisibility(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.team.Team.isConstruct"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

team.Team.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.team.Team.isTerraformElement"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

team.Team.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.team.Team.isTerraformResource"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

team.Team.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.team.Team.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.team.Team.generateConfigForImport"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

team.Team.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Team resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Team to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Team that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.Team.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Team to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccess">organizationAccess</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagementInput">allowMemberTokenManagementInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationAccessInput">organizationAccessInput</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organizationInput">organizationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput">ssoTeamIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibilityInput">visibilityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagement">allowMemberTokenManagement</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.organization">organization</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.ssoTeamId">ssoTeamId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.visibility">visibility</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.team.Team.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.team.Team.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.team.Team.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.team.Team.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.team.Team.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.team.Team.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.team.Team.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.team.Team.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.team.Team.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.team.Team.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.team.Team.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.team.Team.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.Team.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.team.Team.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `organizationAccess`<sup>Required</sup> <a name="organizationAccess" id="@cdktf/provider-tfe.team.Team.property.organizationAccess"></a>

```typescript
public readonly organizationAccess: TeamOrganizationAccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference">TeamOrganizationAccessOutputReference</a>

---

##### `allowMemberTokenManagementInput`<sup>Optional</sup> <a name="allowMemberTokenManagementInput" id="@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagementInput"></a>

```typescript
public readonly allowMemberTokenManagementInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-tfe.team.Team.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-tfe.team.Team.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `organizationAccessInput`<sup>Optional</sup> <a name="organizationAccessInput" id="@cdktf/provider-tfe.team.Team.property.organizationAccessInput"></a>

```typescript
public readonly organizationAccessInput: TeamOrganizationAccess;
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---

##### `organizationInput`<sup>Optional</sup> <a name="organizationInput" id="@cdktf/provider-tfe.team.Team.property.organizationInput"></a>

```typescript
public readonly organizationInput: string;
```

- *Type:* string

---

##### `ssoTeamIdInput`<sup>Optional</sup> <a name="ssoTeamIdInput" id="@cdktf/provider-tfe.team.Team.property.ssoTeamIdInput"></a>

```typescript
public readonly ssoTeamIdInput: string;
```

- *Type:* string

---

##### `visibilityInput`<sup>Optional</sup> <a name="visibilityInput" id="@cdktf/provider-tfe.team.Team.property.visibilityInput"></a>

```typescript
public readonly visibilityInput: string;
```

- *Type:* string

---

##### `allowMemberTokenManagement`<sup>Required</sup> <a name="allowMemberTokenManagement" id="@cdktf/provider-tfe.team.Team.property.allowMemberTokenManagement"></a>

```typescript
public readonly allowMemberTokenManagement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.team.Team.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.team.Team.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `organization`<sup>Required</sup> <a name="organization" id="@cdktf/provider-tfe.team.Team.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

---

##### `ssoTeamId`<sup>Required</sup> <a name="ssoTeamId" id="@cdktf/provider-tfe.team.Team.property.ssoTeamId"></a>

```typescript
public readonly ssoTeamId: string;
```

- *Type:* string

---

##### `visibility`<sup>Required</sup> <a name="visibility" id="@cdktf/provider-tfe.team.Team.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.Team.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.team.Team.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TeamConfig <a name="TeamConfig" id="@cdktf/provider-tfe.team.TeamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamConfig.Initializer"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

const teamConfig: team.TeamConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#name Team#name}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.allowMemberTokenManagement">allowMemberTokenManagement</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#allow_member_token_management Team#allow_member_token_management}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#id Team#id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organization">organization</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#organization Team#organization}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess">organizationAccess</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | organization_access block. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId">ssoTeamId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#sso_team_id Team#sso_team_id}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamConfig.property.visibility">visibility</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#visibility Team#visibility}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.team.TeamConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.team.TeamConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.team.TeamConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.team.TeamConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.team.TeamConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.team.TeamConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.team.TeamConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-tfe.team.TeamConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#name Team#name}.

---

##### `allowMemberTokenManagement`<sup>Optional</sup> <a name="allowMemberTokenManagement" id="@cdktf/provider-tfe.team.TeamConfig.property.allowMemberTokenManagement"></a>

```typescript
public readonly allowMemberTokenManagement: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#allow_member_token_management Team#allow_member_token_management}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-tfe.team.TeamConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#id Team#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `organization`<sup>Optional</sup> <a name="organization" id="@cdktf/provider-tfe.team.TeamConfig.property.organization"></a>

```typescript
public readonly organization: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#organization Team#organization}.

---

##### `organizationAccess`<sup>Optional</sup> <a name="organizationAccess" id="@cdktf/provider-tfe.team.TeamConfig.property.organizationAccess"></a>

```typescript
public readonly organizationAccess: TeamOrganizationAccess;
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

organization_access block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#organization_access Team#organization_access}

---

##### `ssoTeamId`<sup>Optional</sup> <a name="ssoTeamId" id="@cdktf/provider-tfe.team.TeamConfig.property.ssoTeamId"></a>

```typescript
public readonly ssoTeamId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#sso_team_id Team#sso_team_id}.

---

##### `visibility`<sup>Optional</sup> <a name="visibility" id="@cdktf/provider-tfe.team.TeamConfig.property.visibility"></a>

```typescript
public readonly visibility: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#visibility Team#visibility}.

---

### TeamOrganizationAccess <a name="TeamOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.Initializer"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

const teamOrganizationAccess: team.TeamOrganizationAccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.accessSecretTeams">accessSecretTeams</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#access_secret_teams Team#access_secret_teams}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageAgentPools">manageAgentPools</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_agent_pools Team#manage_agent_pools}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership">manageMembership</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_membership Team#manage_membership}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules">manageModules</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_modules Team#manage_modules}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageOrganizationAccess">manageOrganizationAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_organization_access Team#manage_organization_access}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies">managePolicies</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_policies Team#manage_policies}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides">managePolicyOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects">manageProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_projects Team#manage_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders">manageProviders</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_providers Team#manage_providers}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks">manageRunTasks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_run_tasks Team#manage_run_tasks}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageTeams">manageTeams</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_teams Team#manage_teams}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings">manageVcsSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces">manageWorkspaces</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_workspaces Team#manage_workspaces}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects">readProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#read_projects Team#read_projects}. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces">readWorkspaces</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#read_workspaces Team#read_workspaces}. |

---

##### `accessSecretTeams`<sup>Optional</sup> <a name="accessSecretTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.accessSecretTeams"></a>

```typescript
public readonly accessSecretTeams: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#access_secret_teams Team#access_secret_teams}.

---

##### `manageAgentPools`<sup>Optional</sup> <a name="manageAgentPools" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageAgentPools"></a>

```typescript
public readonly manageAgentPools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_agent_pools Team#manage_agent_pools}.

---

##### `manageMembership`<sup>Optional</sup> <a name="manageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageMembership"></a>

```typescript
public readonly manageMembership: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_membership Team#manage_membership}.

---

##### `manageModules`<sup>Optional</sup> <a name="manageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageModules"></a>

```typescript
public readonly manageModules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_modules Team#manage_modules}.

---

##### `manageOrganizationAccess`<sup>Optional</sup> <a name="manageOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageOrganizationAccess"></a>

```typescript
public readonly manageOrganizationAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_organization_access Team#manage_organization_access}.

---

##### `managePolicies`<sup>Optional</sup> <a name="managePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicies"></a>

```typescript
public readonly managePolicies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_policies Team#manage_policies}.

---

##### `managePolicyOverrides`<sup>Optional</sup> <a name="managePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.managePolicyOverrides"></a>

```typescript
public readonly managePolicyOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_policy_overrides Team#manage_policy_overrides}.

---

##### `manageProjects`<sup>Optional</sup> <a name="manageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProjects"></a>

```typescript
public readonly manageProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_projects Team#manage_projects}.

---

##### `manageProviders`<sup>Optional</sup> <a name="manageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageProviders"></a>

```typescript
public readonly manageProviders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_providers Team#manage_providers}.

---

##### `manageRunTasks`<sup>Optional</sup> <a name="manageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageRunTasks"></a>

```typescript
public readonly manageRunTasks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_run_tasks Team#manage_run_tasks}.

---

##### `manageTeams`<sup>Optional</sup> <a name="manageTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageTeams"></a>

```typescript
public readonly manageTeams: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_teams Team#manage_teams}.

---

##### `manageVcsSettings`<sup>Optional</sup> <a name="manageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageVcsSettings"></a>

```typescript
public readonly manageVcsSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_vcs_settings Team#manage_vcs_settings}.

---

##### `manageWorkspaces`<sup>Optional</sup> <a name="manageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.manageWorkspaces"></a>

```typescript
public readonly manageWorkspaces: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#manage_workspaces Team#manage_workspaces}.

---

##### `readProjects`<sup>Optional</sup> <a name="readProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readProjects"></a>

```typescript
public readonly readProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#read_projects Team#read_projects}.

---

##### `readWorkspaces`<sup>Optional</sup> <a name="readWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccess.property.readWorkspaces"></a>

```typescript
public readonly readWorkspaces: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.65.2/docs/resources/team#read_workspaces Team#read_workspaces}.

---

## Classes <a name="Classes" id="Classes"></a>

### TeamOrganizationAccessOutputReference <a name="TeamOrganizationAccessOutputReference" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer"></a>

```typescript
import { team } from '@cdktf/provider-tfe'

new team.TeamOrganizationAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetAccessSecretTeams">resetAccessSecretTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageAgentPools">resetManageAgentPools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership">resetManageMembership</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules">resetManageModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageOrganizationAccess">resetManageOrganizationAccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies">resetManagePolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides">resetManagePolicyOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects">resetManageProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders">resetManageProviders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks">resetManageRunTasks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageTeams">resetManageTeams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings">resetManageVcsSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces">resetManageWorkspaces</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects">resetReadProjects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces">resetReadWorkspaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessSecretTeams` <a name="resetAccessSecretTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetAccessSecretTeams"></a>

```typescript
public resetAccessSecretTeams(): void
```

##### `resetManageAgentPools` <a name="resetManageAgentPools" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageAgentPools"></a>

```typescript
public resetManageAgentPools(): void
```

##### `resetManageMembership` <a name="resetManageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageMembership"></a>

```typescript
public resetManageMembership(): void
```

##### `resetManageModules` <a name="resetManageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageModules"></a>

```typescript
public resetManageModules(): void
```

##### `resetManageOrganizationAccess` <a name="resetManageOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageOrganizationAccess"></a>

```typescript
public resetManageOrganizationAccess(): void
```

##### `resetManagePolicies` <a name="resetManagePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicies"></a>

```typescript
public resetManagePolicies(): void
```

##### `resetManagePolicyOverrides` <a name="resetManagePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManagePolicyOverrides"></a>

```typescript
public resetManagePolicyOverrides(): void
```

##### `resetManageProjects` <a name="resetManageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProjects"></a>

```typescript
public resetManageProjects(): void
```

##### `resetManageProviders` <a name="resetManageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageProviders"></a>

```typescript
public resetManageProviders(): void
```

##### `resetManageRunTasks` <a name="resetManageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageRunTasks"></a>

```typescript
public resetManageRunTasks(): void
```

##### `resetManageTeams` <a name="resetManageTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageTeams"></a>

```typescript
public resetManageTeams(): void
```

##### `resetManageVcsSettings` <a name="resetManageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageVcsSettings"></a>

```typescript
public resetManageVcsSettings(): void
```

##### `resetManageWorkspaces` <a name="resetManageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetManageWorkspaces"></a>

```typescript
public resetManageWorkspaces(): void
```

##### `resetReadProjects` <a name="resetReadProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadProjects"></a>

```typescript
public resetReadProjects(): void
```

##### `resetReadWorkspaces` <a name="resetReadWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.resetReadWorkspaces"></a>

```typescript
public resetReadWorkspaces(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeamsInput">accessSecretTeamsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPoolsInput">manageAgentPoolsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput">manageMembershipInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput">manageModulesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccessInput">manageOrganizationAccessInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput">managePoliciesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput">managePolicyOverridesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput">manageProjectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput">manageProvidersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput">manageRunTasksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeamsInput">manageTeamsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput">manageVcsSettingsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput">manageWorkspacesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput">readProjectsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput">readWorkspacesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeams">accessSecretTeams</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPools">manageAgentPools</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership">manageMembership</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules">manageModules</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccess">manageOrganizationAccess</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies">managePolicies</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides">managePolicyOverrides</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects">manageProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders">manageProviders</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks">manageRunTasks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeams">manageTeams</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings">manageVcsSettings</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces">manageWorkspaces</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects">readProjects</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces">readWorkspaces</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessSecretTeamsInput`<sup>Optional</sup> <a name="accessSecretTeamsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeamsInput"></a>

```typescript
public readonly accessSecretTeamsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageAgentPoolsInput`<sup>Optional</sup> <a name="manageAgentPoolsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPoolsInput"></a>

```typescript
public readonly manageAgentPoolsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageMembershipInput`<sup>Optional</sup> <a name="manageMembershipInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembershipInput"></a>

```typescript
public readonly manageMembershipInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageModulesInput`<sup>Optional</sup> <a name="manageModulesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModulesInput"></a>

```typescript
public readonly manageModulesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageOrganizationAccessInput`<sup>Optional</sup> <a name="manageOrganizationAccessInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccessInput"></a>

```typescript
public readonly manageOrganizationAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managePoliciesInput`<sup>Optional</sup> <a name="managePoliciesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePoliciesInput"></a>

```typescript
public readonly managePoliciesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managePolicyOverridesInput`<sup>Optional</sup> <a name="managePolicyOverridesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverridesInput"></a>

```typescript
public readonly managePolicyOverridesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageProjectsInput`<sup>Optional</sup> <a name="manageProjectsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjectsInput"></a>

```typescript
public readonly manageProjectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageProvidersInput`<sup>Optional</sup> <a name="manageProvidersInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProvidersInput"></a>

```typescript
public readonly manageProvidersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageRunTasksInput`<sup>Optional</sup> <a name="manageRunTasksInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasksInput"></a>

```typescript
public readonly manageRunTasksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageTeamsInput`<sup>Optional</sup> <a name="manageTeamsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeamsInput"></a>

```typescript
public readonly manageTeamsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageVcsSettingsInput`<sup>Optional</sup> <a name="manageVcsSettingsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettingsInput"></a>

```typescript
public readonly manageVcsSettingsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageWorkspacesInput`<sup>Optional</sup> <a name="manageWorkspacesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspacesInput"></a>

```typescript
public readonly manageWorkspacesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readProjectsInput`<sup>Optional</sup> <a name="readProjectsInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjectsInput"></a>

```typescript
public readonly readProjectsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readWorkspacesInput`<sup>Optional</sup> <a name="readWorkspacesInput" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspacesInput"></a>

```typescript
public readonly readWorkspacesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `accessSecretTeams`<sup>Required</sup> <a name="accessSecretTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.accessSecretTeams"></a>

```typescript
public readonly accessSecretTeams: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageAgentPools`<sup>Required</sup> <a name="manageAgentPools" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageAgentPools"></a>

```typescript
public readonly manageAgentPools: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageMembership`<sup>Required</sup> <a name="manageMembership" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageMembership"></a>

```typescript
public readonly manageMembership: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageModules`<sup>Required</sup> <a name="manageModules" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageModules"></a>

```typescript
public readonly manageModules: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageOrganizationAccess`<sup>Required</sup> <a name="manageOrganizationAccess" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageOrganizationAccess"></a>

```typescript
public readonly manageOrganizationAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managePolicies`<sup>Required</sup> <a name="managePolicies" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicies"></a>

```typescript
public readonly managePolicies: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managePolicyOverrides`<sup>Required</sup> <a name="managePolicyOverrides" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.managePolicyOverrides"></a>

```typescript
public readonly managePolicyOverrides: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageProjects`<sup>Required</sup> <a name="manageProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProjects"></a>

```typescript
public readonly manageProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageProviders`<sup>Required</sup> <a name="manageProviders" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageProviders"></a>

```typescript
public readonly manageProviders: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageRunTasks`<sup>Required</sup> <a name="manageRunTasks" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageRunTasks"></a>

```typescript
public readonly manageRunTasks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageTeams`<sup>Required</sup> <a name="manageTeams" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageTeams"></a>

```typescript
public readonly manageTeams: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageVcsSettings`<sup>Required</sup> <a name="manageVcsSettings" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageVcsSettings"></a>

```typescript
public readonly manageVcsSettings: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `manageWorkspaces`<sup>Required</sup> <a name="manageWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.manageWorkspaces"></a>

```typescript
public readonly manageWorkspaces: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readProjects`<sup>Required</sup> <a name="readProjects" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readProjects"></a>

```typescript
public readonly readProjects: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `readWorkspaces`<sup>Required</sup> <a name="readWorkspaces" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.readWorkspaces"></a>

```typescript
public readonly readWorkspaces: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-tfe.team.TeamOrganizationAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TeamOrganizationAccess;
```

- *Type:* <a href="#@cdktf/provider-tfe.team.TeamOrganizationAccess">TeamOrganizationAccess</a>

---



