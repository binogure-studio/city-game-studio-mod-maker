## Add a new map size Type

`object` ([Add a new map size](add-mapsize.md))

# Add a new map size Properties

| Property                                 | Type      | Required | Nullable       | Defined by                                                                                                         |
| :--------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------- |
| [label](#label)                          | `string`  | Required | cannot be null | [Add a new map size](add-mapsize-properties-label.md "add-mapsize.json#/properties/label")                         |
| [size](#size)                            | `integer` | Required | cannot be null | [Add a new map size](add-mapsize-properties-size.md "add-mapsize.json#/properties/size")                           |
| [concurrent\_amount](#concurrent_amount) | `integer` | Required | cannot be null | [Add a new map size](add-mapsize-properties-concurrent_amount.md "add-mapsize.json#/properties/concurrent_amount") |

## label

Used for localization.

`label`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new map size](add-mapsize-properties-label.md "add-mapsize.json#/properties/label")

### label Type

`string`

### label Default Value

The default value is:

```json
"LABEL_MAP_SIZE_CUSTOM"
```

## size

Actual map size (above 200 = laggy).

`size`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new map size](add-mapsize-properties-size.md "add-mapsize.json#/properties/size")

### size Type

`integer`

### size Constraints

**maximum**: the value of this number must smaller than or equal to: `500`

**minimum**: the value of this number must greater than or equal to: `20`

### size Default Value

The default value is:

```json
25
```

## concurrent\_amount

Number of competitor on the map.

`concurrent_amount`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new map size](add-mapsize-properties-concurrent_amount.md "add-mapsize.json#/properties/concurrent_amount")

### concurrent\_amount Type

`integer`

### concurrent\_amount Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### concurrent\_amount Default Value

The default value is:

```json
1
```
