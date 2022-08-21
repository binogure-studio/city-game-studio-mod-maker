## game\_sales Type

`object` ([Details](add-difficulty-properties-game_sales.md))

# game\_sales Properties

| Property                             | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :----------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [sales\_threshold](#sales_threshold) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_sales-properties-sales_threshold.md "add-difficulty.json#/properties/game_sales/properties/sales_threshold") |
| [retention\_ratio](#retention_ratio) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_sales-properties-retention_ratio.md "add-difficulty.json#/properties/game_sales/properties/retention_ratio") |
| [sales\_ratio](#sales_ratio)         | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_sales-properties-sales_ratio.md "add-difficulty.json#/properties/game_sales/properties/sales_ratio")         |

## sales\_threshold

Set the minimum note to get a sales boost (the lower the easier).

`sales_threshold`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-game_sales-properties-sales_threshold.md "add-difficulty.json#/properties/game_sales/properties/sales_threshold")

### sales\_threshold Type

`number`

### sales\_threshold Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### sales\_threshold Default Value

The default value is:

```json
1
```

## retention\_ratio

User retention (higher the better).

`retention_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-game_sales-properties-retention_ratio.md "add-difficulty.json#/properties/game_sales/properties/retention_ratio")

### retention\_ratio Type

`number`

### retention\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.01`

### retention\_ratio Default Value

The default value is:

```json
0.875
```

## sales\_ratio

Percentage of user who actual buys your game (higher the better).

`sales_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-game_sales-properties-sales_ratio.md "add-difficulty.json#/properties/game_sales/properties/sales_ratio")

### sales\_ratio Type

`number`

### sales\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `3`

**minimum**: the value of this number must greater than or equal to: `0.001`

### sales\_ratio Default Value

The default value is:

```json
2.667
```
