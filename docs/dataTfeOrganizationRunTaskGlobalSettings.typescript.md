# `dataTfeOrganizationRunTaskGlobalSettings` Submodule <a name="`dataTfeOrganizationRunTaskGlobalSettings` Submodule" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataTfeOrganizationRunTaskGlobalSettings <a name="DataTfeOrganizationRunTaskGlobalSettings" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/organization_run_task_global_settings tfe_organization_run_task_global_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer"></a>

```typescript
import { dataTfeOrganizationRunTaskGlobalSettings } from '@cdktf/provider-tfe'

new dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings(scope: Construct, id: string, config: DataTfeOrganizationRunTaskGlobalSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig">DataTfeOrganizationRunTaskGlobalSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig">DataTfeOrganizationRunTaskGlobalSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnforcementLevel">resetEnforcementLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetStages">resetStages</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetEnforcementLevel` <a name="resetEnforcementLevel" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetEnforcementLevel"></a>

```typescript
public resetEnforcementLevel(): void
```

##### `resetStages` <a name="resetStages" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.resetStages"></a>

```typescript
public resetStages(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataTfeOrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isConstruct"></a>

```typescript
import { dataTfeOrganizationRunTaskGlobalSettings } from '@cdktf/provider-tfe'

dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformElement"></a>

```typescript
import { dataTfeOrganizationRunTaskGlobalSettings } from '@cdktf/provider-tfe'

dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformDataSource"></a>

```typescript
import { dataTfeOrganizationRunTaskGlobalSettings } from '@cdktf/provider-tfe'

dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport"></a>

```typescript
import { dataTfeOrganizationRunTaskGlobalSettings } from '@cdktf/provider-tfe'

dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataTfeOrganizationRunTaskGlobalSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataTfeOrganizationRunTaskGlobalSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataTfeOrganizationRunTaskGlobalSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/organization_run_task_global_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataTfeOrganizationRunTaskGlobalSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevelInput">enforcementLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stagesInput">stagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskIdInput">taskIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevel">enforcementLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stages">stages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskId">taskId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforcementLevelInput`<sup>Optional</sup> <a name="enforcementLevelInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevelInput"></a>

```typescript
public readonly enforcementLevelInput: string;
```

- *Type:* string

---

##### `stagesInput`<sup>Optional</sup> <a name="stagesInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stagesInput"></a>

```typescript
public readonly stagesInput: string[];
```

- *Type:* string[]

---

##### `taskIdInput`<sup>Optional</sup> <a name="taskIdInput" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskIdInput"></a>

```typescript
public readonly taskIdInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforcementLevel`<sup>Required</sup> <a name="enforcementLevel" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.enforcementLevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* string

---

##### `stages`<sup>Required</sup> <a name="stages" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataTfeOrganizationRunTaskGlobalSettingsConfig <a name="DataTfeOrganizationRunTaskGlobalSettingsConfig" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.Initializer"></a>

```typescript
import { dataTfeOrganizationRunTaskGlobalSettings } from '@cdktf/provider-tfe'

const dataTfeOrganizationRunTaskGlobalSettingsConfig: dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.taskId">taskId</a></code> | <code>string</code> | The id of the run task. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the run task will be applied globally. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel">enforcementLevel</a></code> | <code>string</code> | The enforcement level of the global task. |
| <code><a href="#@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.stages">stages</a></code> | <code>string[]</code> | Which stages the task will run in. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `taskId`<sup>Required</sup> <a name="taskId" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.taskId"></a>

```typescript
public readonly taskId: string;
```

- *Type:* string

The id of the run task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/organization_run_task_global_settings#task_id DataTfeOrganizationRunTaskGlobalSettings#task_id}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the run task will be applied globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/organization_run_task_global_settings#enabled DataTfeOrganizationRunTaskGlobalSettings#enabled}

---

##### `enforcementLevel`<sup>Optional</sup> <a name="enforcementLevel" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.enforcementLevel"></a>

```typescript
public readonly enforcementLevel: string;
```

- *Type:* string

The enforcement level of the global task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/organization_run_task_global_settings#enforcement_level DataTfeOrganizationRunTaskGlobalSettings#enforcement_level}

---

##### `stages`<sup>Optional</sup> <a name="stages" id="@cdktf/provider-tfe.dataTfeOrganizationRunTaskGlobalSettings.DataTfeOrganizationRunTaskGlobalSettingsConfig.property.stages"></a>

```typescript
public readonly stages: string[];
```

- *Type:* string[]

Which stages the task will run in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.64.0/docs/data-sources/organization_run_task_global_settings#stages DataTfeOrganizationRunTaskGlobalSettings#stages}

---



