## currency Type

`object` ([Details](add-difficulty-properties-currency.md))

# currency Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                 |
| :------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------- |
| [current](#current) | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-currency-properties-current.md "add-difficulty.json#/properties/currency/properties/current") |
| [limit](#limit)     | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-currency-properties-limit.md "add-difficulty.json#/properties/currency/properties/limit")     |

## current

Starting currency.

`current`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-currency-properties-current.md "add-difficulty.json#/properties/currency/properties/current")

### current Type

`integer`

### current Constraints

**multiple of**: the value of this number must be a multiple of: `1000`

**minimum**: the value of this number must greater than or equal to: `50000`

### current Default Value

The default value is:

```json
65000
```

## limit

Default credits limit (adjusted automatically in game).

`limit`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-currency-properties-limit.md "add-difficulty.json#/properties/currency/properties/limit")

### limit Type

`integer`

### limit Constraints

**multiple of**: the value of this number must be a multiple of: `500`

**maximum**: the value of this number must smaller than or equal to: `0`

**minimum**: the value of this number must greater than or equal to: `-500000`

### limit Default Value

The default value is:

```json
-32500
```
