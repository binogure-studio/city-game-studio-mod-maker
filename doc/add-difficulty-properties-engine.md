## engine Type

`object` ([Details](add-difficulty-properties-engine.md))

# engine Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [feature\_costs\_ratio](#feature_costs_ratio) | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-engine-properties-feature_costs_ratio.md "add-difficulty.json#/properties/engine/properties/feature_costs_ratio") |

## feature\_costs\_ratio

Change the cost of each engine feature (implementation cost, not the CPU/GPU costs)

`feature_costs_ratio`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-engine-properties-feature_costs_ratio.md "add-difficulty.json#/properties/engine/properties/feature_costs_ratio")

### feature\_costs\_ratio Type

`integer`

### feature\_costs\_ratio Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

### feature\_costs\_ratio Default Value

The default value is:

```json
13
```
