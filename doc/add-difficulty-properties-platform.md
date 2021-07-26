## platform Type

`object` ([Details](add-difficulty-properties-platform.md))

# platform Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                           |
| :-------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [max_return_rate](#max_return_rate)           | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-max_return_rate.md "add-difficulty.json#/properties/platform/properties/max_return_rate")           |
| [min_capacities](#min_capacities)             | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-min_capacities.md "add-difficulty.json#/properties/platform/properties/min_capacities")             |
| [making_cost_ratio](#making_cost_ratio)       | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-making_cost_ratio.md "add-difficulty.json#/properties/platform/properties/making_cost_ratio")       |
| [quality_ratio](#quality_ratio)               | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-quality_ratio.md "add-difficulty.json#/properties/platform/properties/quality_ratio")               |
| [negotiation](#negotiation)                   | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-negotiation.md "add-difficulty.json#/properties/platform/properties/negotiation")                   |
| [manufacturer_loyalty](#manufacturer_loyalty) | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-manufacturer_loyalty.md "add-difficulty.json#/properties/platform/properties/manufacturer_loyalty") |
| [game_score](#game_score)                     | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-game_score.md "add-difficulty.json#/properties/platform/properties/game_score")                     |
| [loyalty](#loyalty)                           | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-loyalty.md "add-difficulty.json#/properties/platform/properties/loyalty")                           |

## max_return_rate

Units return rate for a custom-platformustomplatform.

`max_return_rate`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-max_return_rate.md "add-difficulty.json#/properties/platform/properties/max_return_rate")

### max_return_rate Type

`number`

### max_return_rate Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.5`

**minimum**: the value of this number must greater than or equal to: `0.05`

### max_return_rate Default Value

The default value is:

```json
0.2
```

## min_capacities

Min value of the paltform's capacities. ( platform capacities / generation expectation )

`min_capacities`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-min_capacities.md "add-difficulty.json#/properties/platform/properties/min_capacities")

### min_capacities Type

`number`

### min_capacities Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.5`

### min_capacities Default Value

The default value is:

```json
0.95
```

## making_cost_ratio

Custom platform manufacturing costs ratio.

`making_cost_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-making_cost_ratio.md "add-difficulty.json#/properties/platform/properties/making_cost_ratio")

### making_cost_ratio Type

`number`

### making_cost_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0.5`

### making_cost_ratio Default Value

The default value is:

```json
1.55
```

## quality_ratio

Custom platform refund rate ratio (based on console quality).

`quality_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-quality_ratio.md "add-difficulty.json#/properties/platform/properties/quality_ratio")

### quality_ratio Type

`number`

### quality_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `6`

**minimum**: the value of this number must greater than or equal to: `1`

### quality_ratio Default Value

The default value is:

```json
1.5
```

## negotiation

Licence costs while negotiating with a manufacturer (lower th cheaper).

`negotiation`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-negotiation.md "add-difficulty.json#/properties/platform/properties/negotiation")

### negotiation Type

`number`

### negotiation Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0.5`

### negotiation Default Value

The default value is:

```json
1.55
```

## manufacturer_loyalty

Loyalty ratio when you publish a game on another platform or you refuse a manufacturer proposal.

`manufacturer_loyalty`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-manufacturer_loyalty.md "add-difficulty.json#/properties/platform/properties/manufacturer_loyalty")

### manufacturer_loyalty Type

`number`

### manufacturer_loyalty Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0`

### manufacturer_loyalty Default Value

The default value is:

```json
-2
```

## game_score

Minimum score to get an offer from a manufacturer.

`game_score`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-game_score.md "add-difficulty.json#/properties/platform/properties/game_score")

### game_score Type

`number`

### game_score Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `125`

**minimum**: the value of this number must greater than or equal to: `25`

### game_score Default Value

The default value is:

```json
50
```

## loyalty

Default loyalty of a manufacturer.

`loyalty`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-loyalty.md "add-difficulty.json#/properties/platform/properties/loyalty")

### loyalty Type

`integer`

### loyalty Constraints

**maximum**: the value of this number must smaller than or equal to: `25`

**minimum**: the value of this number must greater than or equal to: `-25`
