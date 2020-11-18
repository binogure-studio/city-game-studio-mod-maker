## cost Type

`object` ([Details](add-gameengine-properties-cost.md))

# undefined Properties

| Property    | Type      | Required | Nullable       | Defined by                                                                                                                          |
| :---------- | --------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu) | `integer` | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-cost-properties-cpu.md "add-gameengine.json#/properties/cost/properties/cpu") |
| [gpu](#gpu) | `integer` | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-cost-properties-gpu.md "add-gameengine.json#/properties/cost/properties/gpu") |

## cpu

Compute costs (CPU).


`cpu`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-cost-properties-cpu.md "add-gameengine.json#/properties/cost/properties/cpu")

### cpu Type

`integer`

### cpu Constraints

**maximum**: the value of this number must smaller than or equal to: `99`

**minimum**: the value of this number must greater than or equal to: `0`

## gpu

Graphic compute costs (GPU).


`gpu`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-cost-properties-gpu.md "add-gameengine.json#/properties/cost/properties/gpu")

### gpu Type

`integer`

### gpu Constraints

**maximum**: the value of this number must smaller than or equal to: `99`

**minimum**: the value of this number must greater than or equal to: `0`
