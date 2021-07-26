## 0 Type

`object` ([Details](add-event-anyof-random-event-properties-conditions-items-anyof-0.md))

# 0 Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                             |
| :-------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-0-properties-type.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/0/properties/type")   |
| [value](#value) | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-0-properties-value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/0/properties/value") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-0-properties-type.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/0/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"studio"` |             |

### type Default Value

The default value is:

```json
"studio"
```

## value



`value`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-0-properties-value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/0/properties/value")

### value Type

`integer`

### value Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

### value Default Value

The default value is:

```json
1
```
