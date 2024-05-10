# `samlSettings` Submodule <a name="`samlSettings` Submodule" id="@cdktf/provider-tfe.samlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SamlSettings <a name="SamlSettings" id="@cdktf/provider-tfe.samlSettings.SamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer"></a>

```typescript
import { samlSettings } from '@cdktf/provider-tfe'

new samlSettings.SamlSettings(scope: Construct, id: string, config: SamlSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig">SamlSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.samlSettings.SamlSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig">SamlSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups">resetAttrGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin">resetAttrSiteAdmin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername">resetAttrUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned">resetAuthnRequestsSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug">resetDebug</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod">resetSignatureDigestMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod">resetSignatureSigningMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole">resetSiteAdminRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout">resetSsoApiTokenSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled">resetTeamManagementEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned">resetWantAssertionsSigned</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.samlSettings.SamlSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.samlSettings.SamlSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.samlSettings.SamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetAttrGroups` <a name="resetAttrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrGroups"></a>

```typescript
public resetAttrGroups(): void
```

##### `resetAttrSiteAdmin` <a name="resetAttrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrSiteAdmin"></a>

```typescript
public resetAttrSiteAdmin(): void
```

##### `resetAttrUsername` <a name="resetAttrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAttrUsername"></a>

```typescript
public resetAttrUsername(): void
```

##### `resetAuthnRequestsSigned` <a name="resetAuthnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetAuthnRequestsSigned"></a>

```typescript
public resetAuthnRequestsSigned(): void
```

##### `resetCertificate` <a name="resetCertificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetDebug` <a name="resetDebug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetDebug"></a>

```typescript
public resetDebug(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetSignatureDigestMethod` <a name="resetSignatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureDigestMethod"></a>

```typescript
public resetSignatureDigestMethod(): void
```

##### `resetSignatureSigningMethod` <a name="resetSignatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSignatureSigningMethod"></a>

```typescript
public resetSignatureSigningMethod(): void
```

##### `resetSiteAdminRole` <a name="resetSiteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSiteAdminRole"></a>

```typescript
public resetSiteAdminRole(): void
```

##### `resetSsoApiTokenSessionTimeout` <a name="resetSsoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetSsoApiTokenSessionTimeout"></a>

```typescript
public resetSsoApiTokenSessionTimeout(): void
```

##### `resetTeamManagementEnabled` <a name="resetTeamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetTeamManagementEnabled"></a>

```typescript
public resetTeamManagementEnabled(): void
```

##### `resetWantAssertionsSigned` <a name="resetWantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.resetWantAssertionsSigned"></a>

```typescript
public resetWantAssertionsSigned(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct"></a>

```typescript
import { samlSettings } from '@cdktf/provider-tfe'

samlSettings.SamlSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement"></a>

```typescript
import { samlSettings } from '@cdktf/provider-tfe'

samlSettings.SamlSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource"></a>

```typescript
import { samlSettings } from '@cdktf/provider-tfe'

samlSettings.SamlSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.samlSettings.SamlSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport"></a>

```typescript
import { samlSettings } from '@cdktf/provider-tfe'

samlSettings.SamlSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SamlSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SamlSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SamlSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SamlSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl">acsConsumerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl">metadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert">oldIdpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput">attrGroupsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput">attrSiteAdminInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput">attrUsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput">authnRequestsSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput">debugInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput">idpCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput">signatureDigestMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput">signatureSigningMethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput">siteAdminRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput">sloEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput">ssoApiTokenSessionTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput">ssoEndpointUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput">teamManagementEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput">wantAssertionsSignedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups">attrGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin">attrSiteAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername">attrUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned">authnRequestsSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug">debug</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert">idpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod">signatureDigestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod">signatureSigningMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole">siteAdminRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl">sloEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout">ssoApiTokenSessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl">ssoEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled">teamManagementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned">wantAssertionsSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `acsConsumerUrl`<sup>Required</sup> <a name="acsConsumerUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.acsConsumerUrl"></a>

```typescript
public readonly acsConsumerUrl: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.metadataUrl"></a>

```typescript
public readonly metadataUrl: string;
```

- *Type:* string

---

##### `oldIdpCert`<sup>Required</sup> <a name="oldIdpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.oldIdpCert"></a>

```typescript
public readonly oldIdpCert: string;
```

- *Type:* string

---

##### `attrGroupsInput`<sup>Optional</sup> <a name="attrGroupsInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroupsInput"></a>

```typescript
public readonly attrGroupsInput: string;
```

- *Type:* string

---

##### `attrSiteAdminInput`<sup>Optional</sup> <a name="attrSiteAdminInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdminInput"></a>

```typescript
public readonly attrSiteAdminInput: string;
```

- *Type:* string

---

##### `attrUsernameInput`<sup>Optional</sup> <a name="attrUsernameInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsernameInput"></a>

```typescript
public readonly attrUsernameInput: string;
```

- *Type:* string

---

##### `authnRequestsSignedInput`<sup>Optional</sup> <a name="authnRequestsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSignedInput"></a>

```typescript
public readonly authnRequestsSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `debugInput`<sup>Optional</sup> <a name="debugInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debugInput"></a>

```typescript
public readonly debugInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpCertInput`<sup>Optional</sup> <a name="idpCertInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCertInput"></a>

```typescript
public readonly idpCertInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `signatureDigestMethodInput`<sup>Optional</sup> <a name="signatureDigestMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethodInput"></a>

```typescript
public readonly signatureDigestMethodInput: string;
```

- *Type:* string

---

##### `signatureSigningMethodInput`<sup>Optional</sup> <a name="signatureSigningMethodInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethodInput"></a>

```typescript
public readonly signatureSigningMethodInput: string;
```

- *Type:* string

---

##### `siteAdminRoleInput`<sup>Optional</sup> <a name="siteAdminRoleInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRoleInput"></a>

```typescript
public readonly siteAdminRoleInput: string;
```

- *Type:* string

---

##### `sloEndpointUrlInput`<sup>Optional</sup> <a name="sloEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrlInput"></a>

```typescript
public readonly sloEndpointUrlInput: string;
```

- *Type:* string

---

##### `ssoApiTokenSessionTimeoutInput`<sup>Optional</sup> <a name="ssoApiTokenSessionTimeoutInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeoutInput"></a>

```typescript
public readonly ssoApiTokenSessionTimeoutInput: number;
```

- *Type:* number

---

##### `ssoEndpointUrlInput`<sup>Optional</sup> <a name="ssoEndpointUrlInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrlInput"></a>

```typescript
public readonly ssoEndpointUrlInput: string;
```

- *Type:* string

---

##### `teamManagementEnabledInput`<sup>Optional</sup> <a name="teamManagementEnabledInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabledInput"></a>

```typescript
public readonly teamManagementEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `wantAssertionsSignedInput`<sup>Optional</sup> <a name="wantAssertionsSignedInput" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSignedInput"></a>

```typescript
public readonly wantAssertionsSignedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `attrGroups`<sup>Required</sup> <a name="attrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrGroups"></a>

```typescript
public readonly attrGroups: string;
```

- *Type:* string

---

##### `attrSiteAdmin`<sup>Required</sup> <a name="attrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrSiteAdmin"></a>

```typescript
public readonly attrSiteAdmin: string;
```

- *Type:* string

---

##### `attrUsername`<sup>Required</sup> <a name="attrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.attrUsername"></a>

```typescript
public readonly attrUsername: string;
```

- *Type:* string

---

##### `authnRequestsSigned`<sup>Required</sup> <a name="authnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.authnRequestsSigned"></a>

```typescript
public readonly authnRequestsSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `debug`<sup>Required</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.debug"></a>

```typescript
public readonly debug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.idpCert"></a>

```typescript
public readonly idpCert: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `signatureDigestMethod`<sup>Required</sup> <a name="signatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureDigestMethod"></a>

```typescript
public readonly signatureDigestMethod: string;
```

- *Type:* string

---

##### `signatureSigningMethod`<sup>Required</sup> <a name="signatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.signatureSigningMethod"></a>

```typescript
public readonly signatureSigningMethod: string;
```

- *Type:* string

---

##### `siteAdminRole`<sup>Required</sup> <a name="siteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.siteAdminRole"></a>

```typescript
public readonly siteAdminRole: string;
```

- *Type:* string

---

##### `sloEndpointUrl`<sup>Required</sup> <a name="sloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.sloEndpointUrl"></a>

```typescript
public readonly sloEndpointUrl: string;
```

- *Type:* string

---

##### `ssoApiTokenSessionTimeout`<sup>Required</sup> <a name="ssoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoApiTokenSessionTimeout"></a>

```typescript
public readonly ssoApiTokenSessionTimeout: number;
```

- *Type:* number

---

##### `ssoEndpointUrl`<sup>Required</sup> <a name="ssoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.ssoEndpointUrl"></a>

```typescript
public readonly ssoEndpointUrl: string;
```

- *Type:* string

---

##### `teamManagementEnabled`<sup>Required</sup> <a name="teamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.teamManagementEnabled"></a>

```typescript
public readonly teamManagementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `wantAssertionsSigned`<sup>Required</sup> <a name="wantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.wantAssertionsSigned"></a>

```typescript
public readonly wantAssertionsSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.samlSettings.SamlSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SamlSettingsConfig <a name="SamlSettingsConfig" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.Initializer"></a>

```typescript
import { samlSettings } from '@cdktf/provider-tfe'

const samlSettingsConfig: samlSettings.SamlSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert">idpCert</a></code> | <code>string</code> | Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl">sloEndpointUrl</a></code> | <code>string</code> | Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl">ssoEndpointUrl</a></code> | <code>string</code> | Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups">attrGroups</a></code> | <code>string</code> | Team Attribute Name specifies the name of the SAML attribute that determines team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin">attrSiteAdmin</a></code> | <code>string</code> | Specifies the role for site admin access. Overrides the "Site Admin Role" method. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername">attrUsername</a></code> | <code>string</code> | Username Attribute Name specifies the name of the SAML attribute that determines the user's username. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned">authnRequestsSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ensure that <samlp:AuthnRequest> messages are signed. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate">certificate</a></code> | <code>string</code> | The certificate used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug">debug</a></code> | <code>boolean \| cdktf.IResolvable</code> | When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey">privateKey</a></code> | <code>string</code> | The private key used for request and assertion signing. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod">signatureDigestMethod</a></code> | <code>string</code> | Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod">signatureSigningMethod</a></code> | <code>string</code> | Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole">siteAdminRole</a></code> | <code>string</code> | Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout">ssoApiTokenSessionTimeout</a></code> | <code>number</code> | Specifies the Single Sign On session timeout in seconds. Defaults to 14 days. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled">teamManagementEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Set it to false if you would rather use Terraform Enterprise to manage team membership. |
| <code><a href="#@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned">wantAssertionsSigned</a></code> | <code>boolean \| cdktf.IResolvable</code> | Ensure that <saml:Assertion> elements are signed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.idpCert"></a>

```typescript
public readonly idpCert: string;
```

- *Type:* string

Identity Provider Certificate specifies the PEM encoded X.509 Certificate as provided by the IdP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#idp_cert SamlSettings#idp_cert}

---

##### `sloEndpointUrl`<sup>Required</sup> <a name="sloEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.sloEndpointUrl"></a>

```typescript
public readonly sloEndpointUrl: string;
```

- *Type:* string

Single Log Out URL specifies the HTTPS endpoint on your IdP for single logout requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#slo_endpoint_url SamlSettings#slo_endpoint_url}

---

##### `ssoEndpointUrl`<sup>Required</sup> <a name="ssoEndpointUrl" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoEndpointUrl"></a>

```typescript
public readonly ssoEndpointUrl: string;
```

- *Type:* string

Single Sign On URL specifies the HTTPS endpoint on your IdP for single sign-on requests.

This value is provided by the IdP configuration

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#sso_endpoint_url SamlSettings#sso_endpoint_url}

---

##### `attrGroups`<sup>Optional</sup> <a name="attrGroups" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrGroups"></a>

```typescript
public readonly attrGroups: string;
```

- *Type:* string

Team Attribute Name specifies the name of the SAML attribute that determines team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#attr_groups SamlSettings#attr_groups}

---

##### `attrSiteAdmin`<sup>Optional</sup> <a name="attrSiteAdmin" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrSiteAdmin"></a>

```typescript
public readonly attrSiteAdmin: string;
```

- *Type:* string

Specifies the role for site admin access. Overrides the "Site Admin Role" method.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#attr_site_admin SamlSettings#attr_site_admin}

---

##### `attrUsername`<sup>Optional</sup> <a name="attrUsername" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.attrUsername"></a>

```typescript
public readonly attrUsername: string;
```

- *Type:* string

Username Attribute Name specifies the name of the SAML attribute that determines the user's username.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#attr_username SamlSettings#attr_username}

---

##### `authnRequestsSigned`<sup>Optional</sup> <a name="authnRequestsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.authnRequestsSigned"></a>

```typescript
public readonly authnRequestsSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ensure that <samlp:AuthnRequest> messages are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#authn_requests_signed SamlSettings#authn_requests_signed}

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

The certificate used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#certificate SamlSettings#certificate}

---

##### `debug`<sup>Optional</sup> <a name="debug" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.debug"></a>

```typescript
public readonly debug: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When sign-on fails and this is enabled, the SAMLResponse XML will be displayed on the login page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#debug SamlSettings#debug}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

The private key used for request and assertion signing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#private_key SamlSettings#private_key}

---

##### `signatureDigestMethod`<sup>Optional</sup> <a name="signatureDigestMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureDigestMethod"></a>

```typescript
public readonly signatureDigestMethod: string;
```

- *Type:* string

Signature Digest Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#signature_digest_method SamlSettings#signature_digest_method}

---

##### `signatureSigningMethod`<sup>Optional</sup> <a name="signatureSigningMethod" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.signatureSigningMethod"></a>

```typescript
public readonly signatureSigningMethod: string;
```

- *Type:* string

Signature Signing Method. Must be either `SHA1` or `SHA256`. Defaults to `SHA256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#signature_signing_method SamlSettings#signature_signing_method}

---

##### `siteAdminRole`<sup>Optional</sup> <a name="siteAdminRole" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.siteAdminRole"></a>

```typescript
public readonly siteAdminRole: string;
```

- *Type:* string

Specifies the role for site admin access, provided in the list of roles sent in the Team Attribute Name attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#site_admin_role SamlSettings#site_admin_role}

---

##### `ssoApiTokenSessionTimeout`<sup>Optional</sup> <a name="ssoApiTokenSessionTimeout" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.ssoApiTokenSessionTimeout"></a>

```typescript
public readonly ssoApiTokenSessionTimeout: number;
```

- *Type:* number

Specifies the Single Sign On session timeout in seconds. Defaults to 14 days.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#sso_api_token_session_timeout SamlSettings#sso_api_token_session_timeout}

---

##### `teamManagementEnabled`<sup>Optional</sup> <a name="teamManagementEnabled" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.teamManagementEnabled"></a>

```typescript
public readonly teamManagementEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Set it to false if you would rather use Terraform Enterprise to manage team membership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#team_management_enabled SamlSettings#team_management_enabled}

---

##### `wantAssertionsSigned`<sup>Optional</sup> <a name="wantAssertionsSigned" id="@cdktf/provider-tfe.samlSettings.SamlSettingsConfig.property.wantAssertionsSigned"></a>

```typescript
public readonly wantAssertionsSigned: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Ensure that <saml:Assertion> elements are signed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.55.0/docs/resources/saml_settings#want_assertions_signed SamlSettings#want_assertions_signed}

---



