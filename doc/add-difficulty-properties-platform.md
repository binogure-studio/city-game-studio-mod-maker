## platform Type

`object` ([Details](add-difficulty-properties-platform.md))

# platform Properties

| Property                                                                   | Type      | Required | Nullable       | Defined by                                                                                                                                                                                     |
| :------------------------------------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [max\_return\_rate](#max_return_rate)                                      | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-max_return_rate.md "add-difficulty.json#/properties/platform/properties/max_return_rate")                                     |
| [min\_capacities](#min_capacities)                                         | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-min_capacities.md "add-difficulty.json#/properties/platform/properties/min_capacities")                                       |
| [making\_cost\_ratio](#making_cost_ratio)                                  | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-making_cost_ratio.md "add-difficulty.json#/properties/platform/properties/making_cost_ratio")                                 |
| [quality\_ratio](#quality_ratio)                                           | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-quality_ratio.md "add-difficulty.json#/properties/platform/properties/quality_ratio")                                         |
| [negotiation](#negotiation)                                                | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-negotiation.md "add-difficulty.json#/properties/platform/properties/negotiation")                                             |
| [manufacturer\_loyalty](#manufacturer_loyalty)                             | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-manufacturer_loyalty.md "add-difficulty.json#/properties/platform/properties/manufacturer_loyalty")                           |
| [game\_score](#game_score)                                                 | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-game_score.md "add-difficulty.json#/properties/platform/properties/game_score")                                               |
| [new\_game\_bonus](#new_game_bonus)                                        | `integer` | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-new_game_bonus.md "add-difficulty.json#/properties/platform/properties/new_game_bonus")                                       |
| [game\_catalog\_bonus](#game_catalog_bonus)                                | `integer` | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-game_catalog_bonus.md "add-difficulty.json#/properties/platform/properties/game_catalog_bonus")                               |
| [fanbase\_ratio](#fanbase_ratio)                                           | `number`  | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-fanbase_ratio.md "add-difficulty.json#/properties/platform/properties/fanbase_ratio")                                         |
| [loyalty](#loyalty)                                                        | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-loyalty.md "add-difficulty.json#/properties/platform/properties/loyalty")                                                     |
| [crash\_1983](#crash_1983)                                                 | `boolean` | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-crash_1983.md "add-difficulty.json#/properties/platform/properties/crash_1983")                                               |
| [backward\_compatibility\_cost\_ratio](#backward_compatibility_cost_ratio) | `number`  | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-backward_compatibility_cost_ratio.md "add-difficulty.json#/properties/platform/properties/backward_compatibility_cost_ratio") |
| [capacities\_pow](#capacities_pow)                                         | `number`  | Optional | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-capacities_pow.md "add-difficulty.json#/properties/platform/properties/capacities_pow")                                       |

## max\_return\_rate

Units return rate for a custom-platformustomplatform.

`max_return_rate`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-max_return_rate.md "add-difficulty.json#/properties/platform/properties/max_return_rate")

### max\_return\_rate Type

`number`

### max\_return\_rate Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.5`

**minimum**: the value of this number must greater than or equal to: `0.05`

### max\_return\_rate Default Value

The default value is:

```json
0.25
```

## min\_capacities

Min value of the paltform's capacities. ( platform capacities / generation expectation )

`min_capacities`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-min_capacities.md "add-difficulty.json#/properties/platform/properties/min_capacities")

### min\_capacities Type

`number`

### min\_capacities Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.5`

### min\_capacities Default Value

The default value is:

```json
0.7
```

## making\_cost\_ratio

Custom platform manufacturing costs ratio.

`making_cost_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-making_cost_ratio.md "add-difficulty.json#/properties/platform/properties/making_cost_ratio")

### making\_cost\_ratio Type

`number`

### making\_cost\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0.5`

### making\_cost\_ratio Default Value

The default value is:

```json
1.34
```

## quality\_ratio

Custom platform refund rate ratio (based on console quality).

`quality_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-quality_ratio.md "add-difficulty.json#/properties/platform/properties/quality_ratio")

### quality\_ratio Type

`number`

### quality\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `6`

**minimum**: the value of this number must greater than or equal to: `1`

### quality\_ratio Default Value

The default value is:

```json
3
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

## manufacturer\_loyalty

Loyalty ratio when you publish a game on another platform or you refuse a manufacturer proposal.

`manufacturer_loyalty`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-manufacturer_loyalty.md "add-difficulty.json#/properties/platform/properties/manufacturer_loyalty")

### manufacturer\_loyalty Type

`number`

### manufacturer\_loyalty Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0`

### manufacturer\_loyalty Default Value

The default value is:

```json
-2
```

## game\_score

Minimum score to get an offer from a manufacturer.

`game_score`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-game_score.md "add-difficulty.json#/properties/platform/properties/game_score")

### game\_score Type

`number`

### game\_score Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `125`

**minimum**: the value of this number must greater than or equal to: `25`

### game\_score Default Value

The default value is:

```json
50
```

## new\_game\_bonus

When releasing a new game on your console, number of sales that your console get.

`new_game_bonus`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-new_game_bonus.md "add-difficulty.json#/properties/platform/properties/new_game_bonus")

### new\_game\_bonus Type

`integer`

### new\_game\_bonus Constraints

**multiple of**: the value of this number must be a multiple of: `1000`

**maximum**: the value of this number must smaller than or equal to: `100000`

**minimum**: the value of this number must greater than or equal to: `1000`

### new\_game\_bonus Default Value

The default value is:

```json
50000
```

## game\_catalog\_bonus

New sales driven by your existing catalog.

`game_catalog_bonus`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-game_catalog_bonus.md "add-difficulty.json#/properties/platform/properties/game_catalog_bonus")

### game\_catalog\_bonus Type

`integer`

### game\_catalog\_bonus Constraints

**multiple of**: the value of this number must be a multiple of: `100`

**maximum**: the value of this number must smaller than or equal to: `25000`

**minimum**: the value of this number must greater than or equal to: `100`

### game\_catalog\_bonus Default Value

The default value is:

```json
1000
```

## fanbase\_ratio

Ratio fanbase / console sales

`fanbase_ratio`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-fanbase_ratio.md "add-difficulty.json#/properties/platform/properties/fanbase_ratio")

### fanbase\_ratio Type

`number`

### fanbase\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### fanbase\_ratio Default Value

The default value is:

```json
0.5
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

## crash\_1983

To enable the 1983 crash for custom platforms.

`crash_1983`

*   is optional

*   Type: `boolean`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-crash_1983.md "add-difficulty.json#/properties/platform/properties/crash_1983")

### crash\_1983 Type

`boolean`

## backward\_compatibility\_cost\_ratio

Cost of the backward compatibility for custom-platforms.

`backward_compatibility_cost_ratio`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-backward_compatibility_cost_ratio.md "add-difficulty.json#/properties/platform/properties/backward_compatibility_cost_ratio")

### backward\_compatibility\_cost\_ratio Type

`number`

### backward\_compatibility\_cost\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `1`

### backward\_compatibility\_cost\_ratio Default Value

The default value is:

```json
1
```

## capacities\_pow

exponential ratio for number of sales of the console (higher means less sales).

`capacities_pow`

*   is optional

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-capacities_pow.md "add-difficulty.json#/properties/platform/properties/capacities_pow")

### capacities\_pow Type

`number`

### capacities\_pow Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `2`

### capacities\_pow Default Value

The default value is:

```json
5
```
