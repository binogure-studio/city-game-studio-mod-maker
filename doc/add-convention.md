## Add a convention Type

`object` ([Add a convention](add-convention.md))

# Add a convention Properties

| Property              | Type      | Required | Nullable       | Defined by                                                                                           |
| :-------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------- |
| [id](#id)             | `string`  | Required | cannot be null | [Add a convention](add-convention-properties-id.md "add-convention.json#/properties/id")             |
| [name](#name)         | `string`  | Required | cannot be null | [Add a convention](add-convention-properties-name.md "add-convention.json#/properties/name")         |
| [date](#date)         | `object`  | Required | cannot be null | [Add a convention](add-convention-properties-date.md "add-convention.json#/properties/date")         |
| [visitors](#visitors) | `integer` | Required | cannot be null | [Add a convention](add-convention-properties-visitors.md "add-convention.json#/properties/visitors") |
| [size](#size)         | `array`   | Required | cannot be null | [Add a convention](add-convention-properties-size.md "add-convention.json#/properties/size")         |
| [area](#area)         | `integer` | Required | cannot be null | [Add a convention](add-convention-properties-area.md "add-convention.json#/properties/area")         |

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one).

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-id.md "add-convention.json#/properties/id")

### id Type

`string`

## name

Name of the convention (no translations needed).

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-name.md "add-convention.json#/properties/name")

### name Type

`string`

### name Default Value

The default value is:

```json
"Convention name"
```

## date

Date of the convention.

`date`

*   is required

*   Type: `object` ([Details](add-convention-properties-date.md))

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-date.md "add-convention.json#/properties/date")

### date Type

`object` ([Details](add-convention-properties-date.md))

## visitors

Number of visitors of the convention.

`visitors`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-visitors.md "add-convention.json#/properties/visitors")

### visitors Type

`integer`

### visitors Constraints

**maximum**: the value of this number must smaller than or equal to: `2000000`

**minimum**: the value of this number must greater than or equal to: `500`

### visitors Default Value

The default value is:

```json
500
```

## size

Game size to boost (Selected game sizes will get extra visitors).

`size`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-size.md "add-convention.json#/properties/size")

### size Type

`string[]`

### size Constraints

**unique items**: all items in this array must be unique. Duplicates are not allowed.

## area

Area of the convention center.

`area`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-area.md "add-convention.json#/properties/area")

### area Type

`integer`

### area Constraints

**maximum**: the value of this number must smaller than or equal to: `2000000`

**minimum**: the value of this number must greater than or equal to: `500`

### area Default Value

The default value is:

```json
1500
```
