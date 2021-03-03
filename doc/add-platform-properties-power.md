## power Type

`object` ([Details](add-platform-properties-power.md))

# undefined Properties

| Property    | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :---------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [cpu](#cpu) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-power-properties-cpu.md "add-platform.json#/properties/power/properties/cpu") |
| [gpu](#gpu) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-power-properties-gpu.md "add-platform.json#/properties/power/properties/gpu") |

## cpu

Platform's CPU power


`cpu`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-power-properties-cpu.md "add-platform.json#/properties/power/properties/cpu")

### cpu Type

`integer`

### cpu Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `2`

### cpu Default Value

The default value is:

```json
12
```

## gpu

Platform's GPU power


`gpu`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-power-properties-gpu.md "add-platform.json#/properties/power/properties/gpu")

### gpu Type

`integer`

### gpu Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `0`

### gpu Default Value

The default value is:

```json
1
```
