## Add a new platorm component Type

`object` ([Add a new platorm component](add-platform-component.md))

# Add a new platorm component Properties

| Property                                            | Type      | Required | Nullable       | Defined by                                                                                                                                                  |
| :-------------------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                           | `string`  | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-id.md "add-platform-component.json#/properties/id")                                         |
| [name](#name)                                       | `string`  | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-name.md "add-platform-component.json#/properties/name")                                     |
| [online](#online)                                   | `boolean` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-online.md "add-platform-component.json#/properties/online")                                 |
| [online\_attachment\_rate](#online_attachment_rate) | `number`  | Optional | cannot be null | [Add a new platorm component](add-platform-component-properties-online_attachment_rate.md "add-platform-component.json#/properties/online_attachment_rate") |
| [release\_date](#release_date)                      | `object`  | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-release_date.md "add-platform-component.json#/properties/release_date")                     |
| [unlock\_costs](#unlock_costs)                      | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-unlock_costs.md "add-platform-component.json#/properties/unlock_costs")                     |
| [making\_costs](#making_costs)                      | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-making_costs.md "add-platform-component.json#/properties/making_costs")                     |
| [required\_points](#required_points)                | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-required_points.md "add-platform-component.json#/properties/required_points")               |
| [gpu](#gpu)                                         | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-gpu.md "add-platform-component.json#/properties/gpu")                                       |
| [cpu](#cpu)                                         | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-cpu.md "add-platform-component.json#/properties/cpu")                                       |
| [generation](#generation)                           | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-generation.md "add-platform-component.json#/properties/generation")                         |
| [texture](#texture)                                 | `image`   | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-texture.md "add-platform-component.json#/properties/texture")                               |
| [compatibility](#compatibility)                     | `number`  | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-compatibility.md "add-platform-component.json#/properties/compatibility")                   |
| [type](#type)                                       | `number`  | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-type.md "add-platform-component.json#/properties/type")                                     |

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one).

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-id.md "add-platform-component.json#/properties/id")

### id Type

`string`

## name

Component's name.

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-name.md "add-platform-component.json#/properties/name")

### name Type

`string`

## online

Used only by CPU component. True when it is online compatible false otherwise.

`online`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-online.md "add-platform-component.json#/properties/online")

### online Type

`boolean`

## online\_attachment\_rate

Mandatory only when CPU component is selected. Ratio of users who are willing to play online using this CPU.

`online_attachment_rate`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-online_attachment_rate.md "add-platform-component.json#/properties/online_attachment_rate")

### online\_attachment\_rate Type

`number`

### online\_attachment\_rate Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.05`

### online\_attachment\_rate Default Value

The default value is:

```json
0.25
```

## release\_date

Release date of the component.

`release_date`

*   is required

*   Type: `object` ([Details](add-platform-component-properties-release_date.md))

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-release_date.md "add-platform-component.json#/properties/release_date")

### release\_date Type

`object` ([Details](add-platform-component-properties-release_date.md))

## unlock\_costs

Unlocking costs of the component ($).

`unlock_costs`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-unlock_costs.md "add-platform-component.json#/properties/unlock_costs")

### unlock\_costs Type

`integer`

### unlock\_costs Constraints

**maximum**: the value of this number must smaller than or equal to: `9999999`

**minimum**: the value of this number must greater than or equal to: `100`

### unlock\_costs Default Value

The default value is:

```json
150000
```

## making\_costs

Manufacturing costs of the component ($).

`making_costs`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-making_costs.md "add-platform-component.json#/properties/making_costs")

### making\_costs Type

`integer`

### making\_costs Constraints

**maximum**: the value of this number must smaller than or equal to: `500`

**minimum**: the value of this number must greater than or equal to: `1`

### making\_costs Default Value

The default value is:

```json
14
```

## required\_points

Required points to implment the API of the component.

`required_points`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-required_points.md "add-platform-component.json#/properties/required_points")

### required\_points Type

`integer`

### required\_points Constraints

**maximum**: the value of this number must smaller than or equal to: `999999`

**minimum**: the value of this number must greater than or equal to: `100`

### required\_points Default Value

The default value is:

```json
6000
```

## gpu

GPU capacity of the component.

`gpu`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-gpu.md "add-platform-component.json#/properties/gpu")

### gpu Type

`integer`

### gpu Constraints

**maximum**: the value of this number must smaller than or equal to: `999`

**minimum**: the value of this number must greater than or equal to: `0`

### gpu Default Value

The default value is:

```json
1
```

## cpu

CPU capacity of the component.

`cpu`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-cpu.md "add-platform-component.json#/properties/cpu")

### cpu Type

`integer`

### cpu Constraints

**maximum**: the value of this number must smaller than or equal to: `999`

**minimum**: the value of this number must greater than or equal to: `0`

### cpu Default Value

The default value is:

```json
1
```

## generation

Component generation (not used).

`generation`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-generation.md "add-platform-component.json#/properties/generation")

### generation Type

`integer`

### generation Constraints

**maximum**: the value of this number must smaller than or equal to: `9`

**minimum**: the value of this number must greater than or equal to: `0`

## texture

Component's texture (Size: 256x256, Format: PNG/JPG)

`texture`

*   is required

*   Type: `image`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-texture.md "add-platform-component.json#/properties/texture")

### texture Type

`image`

## compatibility

Component's compatibility

`compatibility`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-compatibility.md "add-platform-component.json#/properties/compatibility")

### compatibility Type

`number`

### compatibility Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `0`   |             |
| `1`   |             |
| `2`   |             |

## type

Component's type (Handled only: screen, Home only: controller).

`type`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-type.md "add-platform-component.json#/properties/type")

### type Type

`number`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `0`   |             |
| `1`   |             |
| `2`   |             |
| `3`   |             |
| `4`   |             |
| `5`   |             |
| `6`   |             |
| `7`   |             |
