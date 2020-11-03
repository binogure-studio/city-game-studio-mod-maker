## contract Type

`object` ([Details](add-difficulty-properties-contract.md))

# undefined Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                   |
| :-------------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------- |
| [penality](#penality) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-contract-properties-penality.md "add-difficulty.json#/properties/contract/properties/penality") |

## penality

Penality ratio when you fail a contract (lower the cheaper).


`penality`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-contract-properties-penality.md "add-difficulty.json#/properties/contract/properties/penality")

### penality Type

`number`

### penality Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0.1`

### penality Default Value

The default value is:

```json
0.4
```
