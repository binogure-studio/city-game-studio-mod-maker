## Add a Training type Type

`object` ([Add a Training type](add-university.md))

# Add a Training type Properties

| Property                                  | Type      | Required | Nullable       | Defined by                                                                                                                  |
| :---------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                 | `string`  | Required | cannot be null | [Add a Training type](add-university-properties-id.md "add-university.json#/properties/id")                                 |
| [label](#label)                           | `string`  | Required | cannot be null | [Add a Training type](add-university-properties-label.md "add-university.json#/properties/label")                           |
| [description](#description)               | `string`  | Required | cannot be null | [Add a Training type](add-university-properties-description.md "add-university.json#/properties/description")               |
| [capacities](#capacities)                 | `array`   | Required | cannot be null | [Add a Training type](add-university-properties-capacities.md "add-university.json#/properties/capacities")                 |
| [increment_per_week](#increment_per_week) | `number`  | Required | cannot be null | [Add a Training type](add-university-properties-increment_per_week.md "add-university.json#/properties/increment_per_week") |
| [cost_per_week](#cost_per_week)           | `integer` | Required | cannot be null | [Add a Training type](add-university-properties-cost_per_week.md "add-university.json#/properties/cost_per_week")           |

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one)

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Training type](add-university-properties-id.md "add-university.json#/properties/id")

### id Type

`string`

## label

Training label, it's better to use a label to translate it with a mod

`label`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Training type](add-university-properties-label.md "add-university.json#/properties/label")

### label Type

`string`

## description

Training description, it's better to use a label to translate it with a mod

`description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Training type](add-university-properties-description.md "add-university.json#/properties/description")

### description Type

`string`

## capacities

Capacities to train

`capacities`

*   is required

*   Type: `string[]`

*   cannot be null

*   defined in: [Add a Training type](add-university-properties-capacities.md "add-university.json#/properties/capacities")

### capacities Type

`string[]`

## increment_per_week

Amount of knowledge an employees get per week. Default 1 for one capacity, 0.5 for 2, and 0.3 for 3 capacities.

`increment_per_week`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a Training type](add-university-properties-increment_per_week.md "add-university.json#/properties/increment_per_week")

### increment_per_week Type

`number`

### increment_per_week Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `5`

**minimum**: the value of this number must greater than or equal to: `0.1`

## cost_per_week

Cost per week

`cost_per_week`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a Training type](add-university-properties-cost_per_week.md "add-university.json#/properties/cost_per_week")

### cost_per_week Type

`integer`

### cost_per_week Constraints

**multiple of**: the value of this number must be a multiple of: `10`

**maximum**: the value of this number must smaller than or equal to: `9999990`

**minimum**: the value of this number must greater than or equal to: `100`
