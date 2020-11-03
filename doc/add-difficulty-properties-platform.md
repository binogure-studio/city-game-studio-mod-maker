## platform Type

`object` ([Details](add-difficulty-properties-platform.md))

# undefined Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                           |
| :-------------------------------------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [negotiation](#negotiation)                   | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-negotiation.md "add-difficulty.json#/properties/platform/properties/negotiation")                   |
| [manufacturer_loyalty](#manufacturer_loyalty) | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-manufacturer_loyalty.md "add-difficulty.json#/properties/platform/properties/manufacturer_loyalty") |
| [game_score](#game_score)                     | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-game_score.md "add-difficulty.json#/properties/platform/properties/game_score")                     |
| [loyalty](#loyalty)                           | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform-properties-loyalty.md "add-difficulty.json#/properties/platform/properties/loyalty")                           |

## negotiation

Licence costs while negotiating with a manufacturer (lower th cheaper).


`negotiation`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-negotiation.md "add-difficulty.json#/properties/platform/properties/negotiation")

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

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-manufacturer_loyalty.md "add-difficulty.json#/properties/platform/properties/manufacturer_loyalty")

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

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-game_score.md "add-difficulty.json#/properties/platform/properties/game_score")

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

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-platform-properties-loyalty.md "add-difficulty.json#/properties/platform/properties/loyalty")

### loyalty Type

`integer`

### loyalty Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `-25`

**minimum**: the value of this number must greater than or equal to: `25`
