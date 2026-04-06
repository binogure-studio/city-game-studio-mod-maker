## contract Type

`object` ([Details](add-difficulty-properties-contract.md))

# contract Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [penality](#penality)                           | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-contract-properties-penality.md "add-difficulty.json#/properties/contract/properties/penality")                         |
| [required\_point\_ratio](#required_point_ratio) | `number` | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-contract-properties-required_point_ratio.md "add-difficulty.json#/properties/contract/properties/required_point_ratio") |
| [number\_of\_contract](#number_of_contract)     | `array`  | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-contract-properties-number_of_contract.md "add-difficulty.json#/properties/contract/properties/number_of_contract")     |

## penality

Penality ratio when you fail a contract (lower the cheaper).

`penality`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-contract-properties-penality.md "add-difficulty.json#/properties/contract/properties/penality")

### penality Type

`number`

### penality Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0.1`

### penality Default Value

The default value is:

```json
0.52
```

## required\_point\_ratio

Balance the number of point to produce to complete a contract (higher is harder)

`required_point_ratio`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-contract-properties-required_point_ratio.md "add-difficulty.json#/properties/contract/properties/required_point_ratio")

### required\_point\_ratio Type

`number`

### required\_point\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.1`

### required\_point\_ratio Default Value

The default value is:

```json
1
```

## number\_of\_contract

To compute the number of contracts available at the same time (lower/higher).

`number_of_contract`

*   is optional

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-contract-properties-number_of_contract-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-contract-properties-number_of_contract-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-contract-properties-number_of_contract.md "add-difficulty.json#/properties/contract/properties/number_of_contract")

### number\_of\_contract Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-contract-properties-number_of_contract-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-contract-properties-number_of_contract-items-1.md "check type definition")

### number\_of\_contract Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`
