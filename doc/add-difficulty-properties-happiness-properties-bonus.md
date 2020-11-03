## bonus Type

`object` ([Details](add-difficulty-properties-happiness-properties-bonus.md))

# undefined Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                   |
| :---------------- | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [amount](#amount) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-amount.md "add-difficulty.json#/properties/happiness/properties/bonus/properties/amount") |
| [ratios](#ratios) | `array`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-ratios.md "add-difficulty.json#/properties/happiness/properties/bonus/properties/ratios") |

## amount

Percentage of its salary to give as a bonus.


`amount`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-amount.md "add-difficulty.json#/properties/happiness/properties/bonus/properties/amount")

### amount Type

`number`

### amount Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `0.05`

### amount Default Value

The default value is:

```json
0.25
```

## ratios

Amount of happiness restored by the bonus


`ratios`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-ratios-items-0.md "check type definition")
    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-ratios-items-1.md "check type definition")
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-ratios.md "add-difficulty.json#/properties/happiness/properties/bonus/properties/ratios")

### ratios Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-ratios-items-0.md "check type definition")
2.  [Untitled integer in Add a difficulty](add-difficulty-properties-happiness-properties-bonus-properties-ratios-items-1.md "check type definition")

### ratios Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`
