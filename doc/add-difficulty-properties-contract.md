## contract Type

`object` ([Details](add-difficulty-properties-contract.md))

# contract Properties

| Property                                        | Type     | Required | Nullable       | Defined by                                                                                                                                                           |
| :---------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [penality](#penality)                           | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-contract-properties-penality.md "add-difficulty.json#/properties/contract/properties/penality")                         |
| [required\_point\_ratio](#required_point_ratio) | `number` | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-contract-properties-required_point_ratio.md "add-difficulty.json#/properties/contract/properties/required_point_ratio") |

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
