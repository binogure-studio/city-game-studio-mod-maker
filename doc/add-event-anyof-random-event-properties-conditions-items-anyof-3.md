## 3 Type

`object` ([Details](add-event-anyof-random-event-properties-conditions-items-anyof-3.md))

# 3 Properties

| Property                 | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :----------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)            | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-3-properties-type.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/3/properties/type")           |
| [min\_value](#min_value) | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-3-properties-min_value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/3/properties/min_value") |
| [max\_value](#max_value) | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-3-properties-max_value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/3/properties/max_value") |

## type



`type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-3-properties-type.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/3/properties/type")

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

## min\_value



`min_value`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-3-properties-min_value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/3/properties/min_value")

### min\_value Type

`integer`

### min\_value Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `124`

**minimum**: the value of this number must greater than or equal to: `10`

### min\_value Default Value

The default value is:

```json
50
```

## max\_value



`max_value`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions-items-anyof-3-properties-max_value.md "add-event.json#/anyOf/0/properties/conditions/items/anyOf/3/properties/max_value")

### max\_value Type

`integer`

### max\_value Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `125`

**minimum**: the value of this number must greater than or equal to: `11`

### max\_value Default Value

The default value is:

```json
51
```
