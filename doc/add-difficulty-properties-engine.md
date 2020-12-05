## engine Type

`object` ([Details](add-difficulty-properties-engine.md))

# undefined Properties

| Property                                    | Type      | Required | Nullable       | Defined by                                                                                                                                                     |
| :------------------------------------------ | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [feature_costs_ratio](#feature_costs_ratio) | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-engine-properties-feature_costs_ratio.md "add-difficulty.json#/properties/engine/properties/feature_costs_ratio") |

## feature_costs_ratio

Change the cost of each engine feature (implementation cost, not the CPU/GPU costs)


`feature_costs_ratio`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-engine-properties-feature_costs_ratio.md "add-difficulty.json#/properties/engine/properties/feature_costs_ratio")

### feature_costs_ratio Type

`integer`

### feature_costs_ratio Constraints

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `1`

### feature_costs_ratio Default Value

The default value is:

```json
1
```
