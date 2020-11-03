## game_sales Type

`object` ([Details](add-difficulty-properties-game_sales.md))

# undefined Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [retention_ratio](#retention_ratio) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_sales-properties-retention_ratio.md "add-difficulty.json#/properties/game_sales/properties/retention_ratio") |
| [sales_ratio](#sales_ratio)         | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_sales-properties-sales_ratio.md "add-difficulty.json#/properties/game_sales/properties/sales_ratio")         |

## retention_ratio

User retention (higher the better).


`retention_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-game_sales-properties-retention_ratio.md "add-difficulty.json#/properties/game_sales/properties/retention_ratio")

### retention_ratio Type

`number`

### retention_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.01`

### retention_ratio Default Value

The default value is:

```json
0.766396808787651
```

## sales_ratio

Percentage of user who actual buys your game (higher the better).


`sales_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-game_sales-properties-sales_ratio.md "add-difficulty.json#/properties/game_sales/properties/sales_ratio")

### sales_ratio Type

`number`

### sales_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.01`

### sales_ratio Default Value

The default value is:

```json
0.560954690135943
```
