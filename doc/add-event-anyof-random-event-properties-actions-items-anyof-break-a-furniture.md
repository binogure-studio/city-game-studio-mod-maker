## 1 Type

`object` ([Break a furniture](add-event-anyof-random-event-properties-actions-items-anyof-break-a-furniture.md))

# Break a furniture Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                               |
| :---------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [button](#button)       | `string` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-break-a-furniture-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/1/properties/button")       |
| [furniture](#furniture) | `string` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-break-a-furniture-properties-furniture.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/1/properties/furniture") |
| [type](#type)           | `string` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-break-a-furniture-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/1/properties/type")           |

## button

Label of the button.


`button`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-break-a-furniture-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/1/properties/button")

### button Type

`string`

### button Default Value

The default value is:

```json
"BUTTON_EVENT_CUSTOM_0"
```

## furniture

Furniture to break.


`furniture`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-break-a-furniture-properties-furniture.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/1/properties/furniture")

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

### furniture Default Value

The default value is:

```json
"coffeemachine"
```

## type

Event type (instant).


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-break-a-furniture-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/1/properties/type")

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
