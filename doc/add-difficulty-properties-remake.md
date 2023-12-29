## remake Type

`object` ([Details](add-difficulty-properties-remake.md))

# remake Properties

| Property                                             | Type     | Required | Nullable       | Defined by                                                                                                                                                           |
| :--------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [point\_to\_produce\_ratio](#point_to_produce_ratio) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-remake-properties-point_to_produce_ratio.md "add-difficulty.json#/properties/remake/properties/point_to_produce_ratio") |

## point\_to\_produce\_ratio

Change the number of points to produce for a remake (default values: 0.4, 0.55, 0.7, 0.85, 1.0)

`point_to_produce_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-remake-properties-point_to_produce_ratio.md "add-difficulty.json#/properties/remake/properties/point_to_produce_ratio")

### point\_to\_produce\_ratio Type

`number`

### point\_to\_produce\_ratio Constraints

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `0.1`

### point\_to\_produce\_ratio Default Value

The default value is:

```json
5
```
