## notation Type

`object` ([Details](add-difficulty-properties-notation.md))

# notation Properties

| Property                                             | Type      | Required | Nullable       | Defined by                                                                                                                                                               |
| :--------------------------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [capacity\_min\_ratio](#capacity_min_ratio)          | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-capacity_min_ratio.md "add-difficulty.json#/properties/notation/properties/capacity_min_ratio")         |
| [capacity\_ratio](#capacity_ratio)                   | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-capacity_ratio.md "add-difficulty.json#/properties/notation/properties/capacity_ratio")                 |
| [point\_to\_produce\_ratio](#point_to_produce_ratio) | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-point_to_produce_ratio.md "add-difficulty.json#/properties/notation/properties/point_to_produce_ratio") |
| [game\_combo\_ratio](#game_combo_ratio)              | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-game_combo_ratio.md "add-difficulty.json#/properties/notation/properties/game_combo_ratio")             |
| [max\_bonus](#max_bonus)                             | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-max_bonus.md "add-difficulty.json#/properties/notation/properties/max_bonus")                           |
| [min\_delay](#min_delay)                             | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-min_delay.md "add-difficulty.json#/properties/notation/properties/min_delay")                           |
| [capacity\_delta\_time](#capacity_delta_time)        | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation-properties-capacity_delta_time.md "add-difficulty.json#/properties/notation/properties/capacity_delta_time")       |

## capacity\_min\_ratio

Set the minimal ratio when a game doesn't produce enough capacities point.

`capacity_min_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-capacity_min_ratio.md "add-difficulty.json#/properties/notation/properties/capacity_min_ratio")

### capacity\_min\_ratio Type

`number`

### capacity\_min\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.99`

**minimum**: the value of this number must greater than or equal to: `0`

### capacity\_min\_ratio Default Value

The default value is:

```json
0.2
```

## capacity\_ratio

Adjusts the number of produced points (the higher the better).

`capacity_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-capacity_ratio.md "add-difficulty.json#/properties/notation/properties/capacity_ratio")

### capacity\_ratio Type

`number`

### capacity\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.05`

**maximum**: the value of this number must smaller than or equal to: `5`

**minimum**: the value of this number must greater than or equal to: `0.5`

### capacity\_ratio Default Value

The default value is:

```json
1.25
```

## point\_to\_produce\_ratio

Ratio of the number of points to produce per game (design, development and polish).

`point_to_produce_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-point_to_produce_ratio.md "add-difficulty.json#/properties/notation/properties/point_to_produce_ratio")

### point\_to\_produce\_ratio Type

`number`

### point\_to\_produce\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.2`

### point\_to\_produce\_ratio Default Value

The default value is:

```json
0.55
```

## game\_combo\_ratio

Malus when making the same combination twice `score * game_combo_ratio`.

`game_combo_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-game_combo_ratio.md "add-difficulty.json#/properties/notation/properties/game_combo_ratio")

### game\_combo\_ratio Type

`number`

### game\_combo\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.05`

### game\_combo\_ratio Default Value

The default value is:

```json
0.5
```

## max\_bonus

Maximum bonus applicable for a game `bonus = min(bonus, max_bonus)`.

`max_bonus`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-max_bonus.md "add-difficulty.json#/properties/notation/properties/max_bonus")

### max\_bonus Type

`number`

### max\_bonus Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.5`

### max\_bonus Default Value

The default value is:

```json
1.01
```

## min\_delay

Interval in weeks before canceling the game\_combo\_ratio malus.

`min_delay`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-min_delay.md "add-difficulty.json#/properties/notation/properties/min_delay")

### min\_delay Type

`integer`

### min\_delay Constraints

**multiple of**: the value of this number must be a multiple of: `6`

**maximum**: the value of this number must smaller than or equal to: `128`

**minimum**: the value of this number must greater than or equal to: `12`

### min\_delay Default Value

The default value is:

```json
36
```

## capacity\_delta\_time

Number of capacities point (design/development/polish) to be produced `expected_points *= capacity_delta_time`.

`capacity_delta_time`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation-properties-capacity_delta_time.md "add-difficulty.json#/properties/notation/properties/capacity_delta_time")

### capacity\_delta\_time Type

`number`

### capacity\_delta\_time Constraints

**multiple of**: the value of this number must be a multiple of: `0.25`

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `1`

### capacity\_delta\_time Default Value

The default value is:

```json
2
```
