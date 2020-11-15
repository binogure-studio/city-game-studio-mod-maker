## 1 Type

`object` ([Generic action](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action.md))

# Generic action Properties

| Property                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :------------------------------ | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [button](#button)               | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-button.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/button")               |
| [cost](#cost)                   | `integer` | Optional | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-cost.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/cost")                   |
| [fan_ratio](#fan_ratio)         | `number`  | Optional | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-fan_ratio.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/fan_ratio")         |
| [campaign_type](#campaign_type) | `string`  | Optional | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-campaign_type.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/campaign_type") |
| [furniture](#furniture)         | `string`  | Optional | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-furniture.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/furniture")         |
| [type](#type)                   | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-type.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/type")                   |

## button

Label of the button.


`button`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-button.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/button")

### button Type

`string`

### button Default Value

The default value is:

```json
"BUTTON_EVENT_CUSTOM_0"
```

## cost

Money spent/given (negative = give money, positive = cost money).


`cost`

-   is optional
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-cost.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/cost")

### cost Type

`integer`

### cost Constraints

**maximum**: the value of this number must smaller than or equal to: `999999999`

**minimum**: the value of this number must greater than or equal to: `-999999999`

## fan_ratio

Below 1 remove fanbase, above 1 add fanbase (its a ratio).


`fan_ratio`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-fan_ratio.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/fan_ratio")

### fan_ratio Type

`number`

### fan_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.05`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.05`

### fan_ratio Default Value

The default value is:

```json
1
```

## campaign_type

Type of campaign (boost the hype of one of your game randomly).


`campaign_type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-campaign_type.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/campaign_type")

### campaign_type Type

`string`

### campaign_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | ----------- |
| `"streamer"` |             |

## furniture

Furniture to break.


`furniture`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-furniture.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/furniture")

### furniture Type

`string`

### furniture Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | ----------- |
| `"armchair"`      |             |
| `"bookshelf"`     |             |
| `"coffeemachine"` |             |
| `"computer"`      |             |
| `"couch"`         |             |
| `"desk"`          |             |
| `"plant"`         |             |
| `"printer"`       |             |
| `"server"`        |             |
| `"tableplant"`    |             |
| `"wastebasket"`   |             |
| `"watertank"`     |             |
| `"whiteboard"`    |             |

## type

Event type (instant).


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-actions-items-anyof-generic-action-properties-type.md "add-event.json#/anyOf/1/properties/actions/items/anyOf/1/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | ----------- |
| `"instant"` |             |

### type Default Value

The default value is:

```json
"instant"
```
