## 0 Type

`object` ([Studio happiness/productivity](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity.md))

# 0 Properties

| Property                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                  |
| :------------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [button](#button)               | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/button")               |
| [productivity](#productivity)   | `number`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-productivity.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/productivity")   |
| [happiness](#happiness)         | `number`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-happiness.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/happiness")         |
| [duration](#duration)           | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-duration.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/duration")           |
| [item_type](#item_type)         | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-item_type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/item_type")         |
| [trigger_event](#trigger_event) | `string`  | Optional | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-trigger_event.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/trigger_event") |
| [type](#type)                   | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/type")                   |

## button

Label of the button.

`button`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/button")

### button Type

`string`

### button Default Value

The default value is:

```json
"BUTTON_EVENT_CUSTOM_0"
```

## productivity

Update the staff productivity (1.0 = neutral, 2.0 = positive, 0.5 = negative).

`productivity`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-productivity.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/productivity")

### productivity Type

`number`

### productivity Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.1`

## happiness

Update the staff happiness (1.0 = neutral, 2.0 = positive, 0.5 = negative).

`happiness`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-happiness.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/happiness")

### happiness Type

`number`

### happiness Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.1`

## duration

Duration of this event in weeks.

`duration`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-duration.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/duration")

### duration Type

`integer`

### duration Constraints

**maximum**: the value of this number must smaller than or equal to: `48`

**minimum**: the value of this number must greater than or equal to: `1`

## item_type

Virus animation (computer screen), Cat to the studio, or nothing visible.

`item_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-item_type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/item_type")

### item_type Type

`string`

### item_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"internal"` |             |
| `"virus"`    |             |
| `"cat"`      |             |

## trigger_event

Event id to trigger, has to be an existing uuid

`trigger_event`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-trigger_event.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/trigger_event")

### trigger_event Type

`string`

## type

Event type (durable).

`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-studio-happinessproductivity-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/0/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"durable"` |             |

### type Default Value

The default value is:

```json
"durable"
```
