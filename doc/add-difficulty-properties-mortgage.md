## mortgage Type

`object` ([Details](add-difficulty-properties-mortgage.md))

# mortgage Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                     |
| :---------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------- |
| [duration](#duration)   | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-mortgage-properties-duration.md "add-difficulty.json#/properties/mortgage/properties/duration")   |
| [interests](#interests) | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-mortgage-properties-interests.md "add-difficulty.json#/properties/mortgage/properties/interests") |
| [minimum](#minimum)     | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-mortgage-properties-minimum.md "add-difficulty.json#/properties/mortgage/properties/minimum")     |

## duration

Mortgage duration in years (minimum / maximum).

`duration`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-duration-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-duration-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-mortgage-properties-duration.md "add-difficulty.json#/properties/mortgage/properties/duration")

### duration Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-duration-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-duration-items-1.md "check type definition")

### duration Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## interests

Mortgage interests (in percent).

`interests`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-interests-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-interests-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-mortgage-properties-interests.md "add-difficulty.json#/properties/mortgage/properties/interests")

### interests Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-interests-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-mortgage-properties-interests-items-1.md "check type definition")

### interests Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## minimum

Minimum mortgage value.

`minimum`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-mortgage-properties-minimum.md "add-difficulty.json#/properties/mortgage/properties/minimum")

### minimum Type

`integer`

### minimum Constraints

**multiple of**: the value of this number must be a multiple of: `10000`

**minimum**: the value of this number must greater than or equal to: `10000`

### minimum Default Value

The default value is:

```json
50000
```
