## Add a new game speed Type

`object` ([Add a new game speed](add-speed.md))

# Add a new game speed Properties

| Property                        | Type      | Required | Nullable       | Defined by                                                                                               |
| :------------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------- |
| [label](#label)                 | `string`  | Required | cannot be null | [Add a new game speed](add-speed-properties-label.md "add-speed.json#/properties/label")                 |
| [week_in_month](#week_in_month) | `integer` | Required | cannot be null | [Add a new game speed](add-speed-properties-week_in_month.md "add-speed.json#/properties/week_in_month") |

## label

Label of the speed (used for localization)


`label`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new game speed](add-speed-properties-label.md "add-speed.json#/properties/label")

### label Type

`string`

### label Default Value

The default value is:

```json
"LABEL_SPEED_CUSTOM"
```

## week_in_month

Number of week per months.


`week_in_month`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new game speed](add-speed-properties-week_in_month.md "add-speed.json#/properties/week_in_month")

### week_in_month Type

`integer`

### week_in_month Constraints

**maximum**: the value of this number must smaller than or equal to: `32`

**minimum**: the value of this number must greater than or equal to: `2`

### week_in_month Default Value

The default value is:

```json
4
```
