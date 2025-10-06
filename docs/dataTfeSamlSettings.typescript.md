# `dataTfeSamlSettings` Submodule <a name="`dataTfeSamlSettings` Submodule" id="@cdktf/provider-tfe.dataTfeSamlSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeSamlSettings <a name="DataTfeSamlSettings" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/saml_settings tfe_saml_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer"></a>

```typescript
import { dataTfeSamlSettings } from '@cdktf/provider-tfe'

new dataTfeSamlSettings.DataTfeSamlSettings(scope: Construct, id: string, config?: DataTfeSamlSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig">DataTfeSamlSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig">DataTfeSamlSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeSamlSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct"></a>

```typescript
import { dataTfeSamlSettings } from '@cdktf/provider-tfe'

dataTfeSamlSettings.DataTfeSamlSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement"></a>

```typescript
import { dataTfeSamlSettings } from '@cdktf/provider-tfe'

dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource"></a>

```typescript
import { dataTfeSamlSettings } from '@cdktf/provider-tfe'

dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport"></a>

```typescript
import { dataTfeSamlSettings } from '@cdktf/provider-tfe'

dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeSamlSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeSamlSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeSamlSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/data-sources/saml_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeSamlSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.acsConsumerUrl">acsConsumerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrGroups">attrGroups</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrSiteAdmin">attrSiteAdmin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrUsername">attrUsername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.authnRequestsSigned">authnRequestsSigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.debug">debug</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.idpCert">idpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.metadataUrl">metadataUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.oldIdpCert">oldIdpCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureDigestMethod">signatureDigestMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureSigningMethod">signatureSigningMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.siteAdminRole">siteAdminRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.sloEndpointUrl">sloEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoApiTokenSessionTimeout">ssoApiTokenSessionTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoEndpointUrl">ssoEndpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.teamManagementEnabled">teamManagementEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.wantAssertionsSigned">wantAssertionsSigned</a></code> | <code>cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `acsConsumerUrl`<sup>Required</sup> <a name="acsConsumerUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.acsConsumerUrl"></a>

```typescript
public readonly acsConsumerUrl: string;
```

- *Type:* string

---

##### `attrGroups`<sup>Required</sup> <a name="attrGroups" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrGroups"></a>

```typescript
public readonly attrGroups: string;
```

- *Type:* string

---

##### `attrSiteAdmin`<sup>Required</sup> <a name="attrSiteAdmin" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrSiteAdmin"></a>

```typescript
public readonly attrSiteAdmin: string;
```

- *Type:* string

---

##### `attrUsername`<sup>Required</sup> <a name="attrUsername" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.attrUsername"></a>

```typescript
public readonly attrUsername: string;
```

- *Type:* string

---

##### `authnRequestsSigned`<sup>Required</sup> <a name="authnRequestsSigned" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.authnRequestsSigned"></a>

```typescript
public readonly authnRequestsSigned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `debug`<sup>Required</sup> <a name="debug" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.debug"></a>

```typescript
public readonly debug: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `idpCert`<sup>Required</sup> <a name="idpCert" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.idpCert"></a>

```typescript
public readonly idpCert: string;
```

- *Type:* string

---

##### `metadataUrl`<sup>Required</sup> <a name="metadataUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.metadataUrl"></a>

```typescript
public readonly metadataUrl: string;
```

- *Type:* string

---

##### `oldIdpCert`<sup>Required</sup> <a name="oldIdpCert" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.oldIdpCert"></a>

```typescript
public readonly oldIdpCert: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `signatureDigestMethod`<sup>Required</sup> <a name="signatureDigestMethod" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureDigestMethod"></a>

```typescript
public readonly signatureDigestMethod: string;
```

- *Type:* string

---

##### `signatureSigningMethod`<sup>Required</sup> <a name="signatureSigningMethod" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.signatureSigningMethod"></a>

```typescript
public readonly signatureSigningMethod: string;
```

- *Type:* string

---

##### `siteAdminRole`<sup>Required</sup> <a name="siteAdminRole" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.siteAdminRole"></a>

```typescript
public readonly siteAdminRole: string;
```

- *Type:* string

---

##### `sloEndpointUrl`<sup>Required</sup> <a name="sloEndpointUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.sloEndpointUrl"></a>

```typescript
public readonly sloEndpointUrl: string;
```

- *Type:* string

---

##### `ssoApiTokenSessionTimeout`<sup>Required</sup> <a name="ssoApiTokenSessionTimeout" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoApiTokenSessionTimeout"></a>

```typescript
public readonly ssoApiTokenSessionTimeout: number;
```

- *Type:* number

---

##### `ssoEndpointUrl`<sup>Required</sup> <a name="ssoEndpointUrl" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.ssoEndpointUrl"></a>

```typescript
public readonly ssoEndpointUrl: string;
```

- *Type:* string

---

##### `teamManagementEnabled`<sup>Required</sup> <a name="teamManagementEnabled" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.teamManagementEnabled"></a>

```typescript
public readonly teamManagementEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `wantAssertionsSigned`<sup>Required</sup> <a name="wantAssertionsSigned" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.wantAssertionsSigned"></a>

```typescript
public readonly wantAssertionsSigned: IResolvable;
```

- *Type:* cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeSamlSettingsConfig <a name="DataTfeSamlSettingsConfig" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.Initializer"></a>

```typescript
import { dataTfeSamlSettings } from '@cdktf/provider-tfe'

const dataTfeSamlSettingsConfig: dataTfeSamlSettings.DataTfeSamlSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeSamlSettings.DataTfeSamlSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---



