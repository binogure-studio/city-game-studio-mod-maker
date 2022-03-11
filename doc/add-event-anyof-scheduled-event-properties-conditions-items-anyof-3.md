## 3 Type

`object` ([Details](add-event-anyof-scheduled-event-properties-conditions-items-anyof-3.md))

# 3 Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :---------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [type](#type)           | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-conditions-items-anyof-3-properties-type.md "add-event.json#/anyOf/1/properties/conditions/items/anyOf/3/properties/type")           |
| [min_value](#min_value) | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-conditions-items-anyof-3-properties-min_value.md "add-event.json#/anyOf/1/properties/conditions/items/anyOf/3/properties/min_value") |
| [max_value](#max_value) | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-conditions-items-anyof-3-properties-max_value.md "add-event.json#/anyOf/1/properties/conditions/items/anyOf/3/properties/max_value") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-conditions-items-anyof-3-properties-type.md "add-event.json#/anyOf/1/properties/conditions/items/anyOf/3/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"game-score"` |             |

### type Default Value

The default value is:

```json
"game-score"
```

## min_value



`min_value`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-conditions-items-anyof-3-properties-min_value.md "add-event.json#/anyOf/1/properties/conditions/items/anyOf/3/properties/min_value")

### min_value Type

`integer`

### min_value Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `124`

**minimum**: the value of this number must greater than or equal to: `10`

### min_value Default Value

The default value is:

```json
50
```

## max_value



`max_value`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-conditions-items-anyof-3-properties-max_value.md "add-event.json#/anyOf/1/properties/conditions/items/anyOf/3/properties/max_value")

### max_value Type

`integer`

### max_value Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `125`

**minimum**: the value of this number must greater than or equal to: `11`

### max_value Default Value

The default value is:

```json
51
```