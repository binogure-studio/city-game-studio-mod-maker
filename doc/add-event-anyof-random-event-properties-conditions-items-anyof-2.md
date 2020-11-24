## 2 Type

`object` ([Details](add-event-anyof-random-event-properties-conditions-items-anyof-2.md))

# undefined Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                             |
| :-------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-2-properties-type.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/2/properties/type")   |
| [value](#value) | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-2-properties-value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/2/properties/value") |
| [item](#item)   | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-2-properties-item.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/2/properties/item")   |

## type




`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-2-properties-type.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/2/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | ----------- |
| `"furniture"` |             |

### type Default Value

The default value is:

```json
"furniture"
```

## value




`value`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-2-properties-value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/2/properties/value")

### value Type

`integer`

### value Constraints

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `1`

## item




`item`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-2-properties-item.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/2/properties/item")

### item Type

`string`

### item Constraints

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
