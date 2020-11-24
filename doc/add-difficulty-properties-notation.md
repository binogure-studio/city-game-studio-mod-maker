## notation Type

`object` ([Details](add-difficulty-properties-notation.md))

# undefined Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                               |
| :------------------------------------------------ | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [capacity_ratio](#capacity_ratio)                 | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-capacity_ratio.md "add-difficulty.json#/properties/notation/properties/capacity_ratio")                 |
| [point_to_produce_ratio](#point_to_produce_ratio) | `number`  | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-point_to_produce_ratio.md "add-difficulty.json#/properties/notation/properties/point_to_produce_ratio") |
| [game_combo_ratio](#game_combo_ratio)             | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-game_combo_ratio.md "add-difficulty.json#/properties/notation/properties/game_combo_ratio")             |
| [max_bonus](#max_bonus)                           | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-max_bonus.md "add-difficulty.json#/properties/notation/properties/max_bonus")                           |
| [min_delay](#min_delay)                           | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-min_delay.md "add-difficulty.json#/properties/notation/properties/min_delay")                           |
| [capacity_delta_time](#capacity_delta_time)       | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-capacity_delta_time.md "add-difficulty.json#/properties/notation/properties/capacity_delta_time")       |

## capacity_ratio

Adjusts the number of produced points (the higher the better).


`capacity_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-capacity_ratio.md "add-difficulty.json#/properties/notation/properties/capacity_ratio")

### capacity_ratio Type

`number`

### capacity_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.05`

**maximum**: the value of this number must smaller than or equal to: `5`

**minimum**: the value of this number must greater than or equal to: `0.5`

### capacity_ratio Default Value

The default value is:

```json
1.25
```

## point_to_produce_ratio

Ratio of the number of points to produce per game (design, development and polish).


`point_to_produce_ratio`

-   is optional
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-point_to_produce_ratio.md "add-difficulty.json#/properties/notation/properties/point_to_produce_ratio")

### point_to_produce_ratio Type

`number`

### point_to_produce_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.2`

### point_to_produce_ratio Default Value

The default value is:

```json
0.5
```

## game_combo_ratio

Malus when making the same combination twice `score * game_combo_ratio`.


`game_combo_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-game_combo_ratio.md "add-difficulty.json#/properties/notation/properties/game_combo_ratio")

### game_combo_ratio Type

`number`

### game_combo_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.05`

### game_combo_ratio Default Value

The default value is:

```json
0.4
```

## max_bonus

Maximum bonus applicable for a game `bonus = min(bonus, max_bonus)`.


`max_bonus`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-max_bonus.md "add-difficulty.json#/properties/notation/properties/max_bonus")

### max_bonus Type

`number`

### max_bonus Constraints

**multiple of**: the value of this number must be a multiple of: `0.05`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.5`

### max_bonus Default Value

The default value is:

```json
1
```

## min_delay

Interval in weeks before canceling the game_combo_ratio malus.


`min_delay`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-min_delay.md "add-difficulty.json#/properties/notation/properties/min_delay")

### min_delay Type

`integer`

### min_delay Constraints

**multiple of**: the value of this number must be a multiple of: `6`

**maximum**: the value of this number must smaller than or equal to: `128`

**minimum**: the value of this number must greater than or equal to: `12`

### min_delay Default Value

The default value is:

```json
36
```

## capacity_delta_time

Number of capacities point (design/development/polish) to be produced `expected_points *= capacity_delta_time`.


`capacity_delta_time`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-capacity_delta_time.md "add-difficulty.json#/properties/notation/properties/capacity_delta_time")

### capacity_delta_time Type

`number`

### capacity_delta_time Constraints

**multiple of**: the value of this number must be a multiple of: `0.25`

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `1`

### capacity_delta_time Default Value

The default value is:

```json
3
```
