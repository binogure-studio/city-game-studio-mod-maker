## items Type

`object` ([Details](add-digitalstore-properties-effects-items.md))

# undefined Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                            |
| :-------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | `string` | Required | cannot be null | [Add a new digital store's feature](add-digitalstore-properties-effects-items-properties-type.md "add-digitalstore.json#/properties/effects/items/properties/type")   |
| [value](#value) | `number` | Required | cannot be null | [Add a new digital store's feature](add-digitalstore-properties-effects-items-properties-value.md "add-digitalstore.json#/properties/effects/items/properties/value") |

## type

Property type that will be changed.


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new digital store's feature](add-digitalstore-properties-effects-items-properties-type.md "add-digitalstore.json#/properties/effects/items/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | ----------- |
| `"server_load"`      |             |
| `"sales"`            |             |
| `"visibility_boost"` |             |

### type Default Value

The default value is:

```json
"server_load"
```

## value

CGS will add 1 to that percent and multiply the property 'type' (negative value to invert effect)


`value`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a new digital store's feature](add-digitalstore-properties-effects-items-properties-value.md "add-digitalstore.json#/properties/effects/items/properties/value")

### value Type

`number`

### value Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `-0.95`

### value Default Value

The default value is:

```json
1
```
