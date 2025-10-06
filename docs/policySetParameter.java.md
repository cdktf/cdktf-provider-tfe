# `policySetParameter` Submodule <a name="`policySetParameter` Submodule" id="@cdktf/provider-tfe.policySetParameter"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PolicySetParameter <a name="PolicySetParameter" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter tfe_policy_set_parameter}.

#### Initializers <a name="Initializers" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set_parameter.PolicySetParameter;

PolicySetParameter.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .policySetId(java.lang.String)
//  .sensitive(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
//  .valueWo(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.key">key</a></code> | <code>java.lang.String</code> | Name of the parameter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.policySetId">policySetId</a></code> | <code>java.lang.String</code> | The ID of the policy set that owns the parameter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.sensitive">sensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the value is sensitive. If true then the parameter is written once and not visible thereafter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Value of the parameter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.valueWo">valueWo</a></code> | <code>java.lang.String</code> | Value of the parameter in write-only mode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.key"></a>

- *Type:* java.lang.String

Name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#key PolicySetParameter#key}

---

##### `policySetId`<sup>Required</sup> <a name="policySetId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.policySetId"></a>

- *Type:* java.lang.String

The ID of the policy set that owns the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#policy_set_id PolicySetParameter#policy_set_id}

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.sensitive"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the value is sensitive. If true then the parameter is written once and not visible thereafter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#sensitive PolicySetParameter#sensitive}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#value PolicySetParameter#value}

---

##### `valueWo`<sup>Optional</sup> <a name="valueWo" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.Initializer.parameter.valueWo"></a>

- *Type:* java.lang.String

Value of the parameter in write-only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#value_wo PolicySetParameter#value_wo}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetSensitive">resetSensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetValueWo">resetValueWo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetSensitive` <a name="resetSensitive" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetSensitive"></a>

```java
public void resetSensitive()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueWo` <a name="resetValueWo" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.resetValueWo"></a>

```java
public void resetValueWo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a PolicySetParameter resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set_parameter.PolicySetParameter;

PolicySetParameter.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set_parameter.PolicySetParameter;

PolicySetParameter.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set_parameter.PolicySetParameter;

PolicySetParameter.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set_parameter.PolicySetParameter;

PolicySetParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PolicySetParameter.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a PolicySetParameter resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PolicySetParameter to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PolicySetParameter that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the PolicySetParameter to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.policySetIdInput">policySetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.sensitiveInput">sensitiveInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.valueWoInput">valueWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.policySetId">policySetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.valueWo">valueWo</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `policySetIdInput`<sup>Optional</sup> <a name="policySetIdInput" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.policySetIdInput"></a>

```java
public java.lang.String getPolicySetIdInput();
```

- *Type:* java.lang.String

---

##### `sensitiveInput`<sup>Optional</sup> <a name="sensitiveInput" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.sensitiveInput"></a>

```java
public java.lang.Boolean|IResolvable getSensitiveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `valueWoInput`<sup>Optional</sup> <a name="valueWoInput" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.valueWoInput"></a>

```java
public java.lang.String getValueWoInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `policySetId`<sup>Required</sup> <a name="policySetId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.policySetId"></a>

```java
public java.lang.String getPolicySetId();
```

- *Type:* java.lang.String

---

##### `sensitive`<sup>Required</sup> <a name="sensitive" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.sensitive"></a>

```java
public java.lang.Boolean|IResolvable getSensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueWo`<sup>Required</sup> <a name="valueWo" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.valueWo"></a>

```java
public java.lang.String getValueWo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameter.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PolicySetParameterConfig <a name="PolicySetParameterConfig" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.tfe.policy_set_parameter.PolicySetParameterConfig;

PolicySetParameterConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .key(java.lang.String)
    .policySetId(java.lang.String)
//  .sensitive(java.lang.Boolean|IResolvable)
//  .value(java.lang.String)
//  .valueWo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.key">key</a></code> | <code>java.lang.String</code> | Name of the parameter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.policySetId">policySetId</a></code> | <code>java.lang.String</code> | The ID of the policy set that owns the parameter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.sensitive">sensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Whether the value is sensitive. If true then the parameter is written once and not visible thereafter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.value">value</a></code> | <code>java.lang.String</code> | Value of the parameter. |
| <code><a href="#@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.valueWo">valueWo</a></code> | <code>java.lang.String</code> | Value of the parameter in write-only mode. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#key PolicySetParameter#key}

---

##### `policySetId`<sup>Required</sup> <a name="policySetId" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.policySetId"></a>

```java
public java.lang.String getPolicySetId();
```

- *Type:* java.lang.String

The ID of the policy set that owns the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#policy_set_id PolicySetParameter#policy_set_id}

---

##### `sensitive`<sup>Optional</sup> <a name="sensitive" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.sensitive"></a>

```java
public java.lang.Boolean|IResolvable getSensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Whether the value is sensitive. If true then the parameter is written once and not visible thereafter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#sensitive PolicySetParameter#sensitive}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#value PolicySetParameter#value}

---

##### `valueWo`<sup>Optional</sup> <a name="valueWo" id="@cdktf/provider-tfe.policySetParameter.PolicySetParameterConfig.property.valueWo"></a>

```java
public java.lang.String getValueWo();
```

- *Type:* java.lang.String

Value of the parameter in write-only mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/tfe/0.70.0/docs/resources/policy_set_parameter#value_wo PolicySetParameter#value_wo}

---



