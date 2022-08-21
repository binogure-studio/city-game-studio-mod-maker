## concurrent Type

`object` ([Details](add-difficulty-properties-concurrent.md))

# concurrent Properties

| Property                                      | Type      | Required | Nullable       | Defined by                                                                                                                                                             |
| :-------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [fanbase](#fanbase)                           | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase.md "add-difficulty.json#/properties/concurrent/properties/fanbase")                         |
| [currency](#currency)                         | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-currency.md "add-difficulty.json#/properties/concurrent/properties/currency")                       |
| [hack\_max](#hack_max)                        | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-hack_max.md "add-difficulty.json#/properties/concurrent/properties/hack_max")                       |
| [note](#note)                                 | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-note.md "add-difficulty.json#/properties/concurrent/properties/note")                               |
| [penalty](#penalty)                           | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty.md "add-difficulty.json#/properties/concurrent/properties/penalty")                         |
| [income\_ratio](#income_ratio)                | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio.md "add-difficulty.json#/properties/concurrent/properties/income_ratio")               |
| [penalty\_ratio](#penalty_ratio)              | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty_ratio.md "add-difficulty.json#/properties/concurrent/properties/penalty_ratio")             |
| [ds\_min\_odds](#ds_min_odds)                 | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-ds_min_odds.md "add-difficulty.json#/properties/concurrent/properties/ds_min_odds")                 |
| [fanbase\_price\_ratio](#fanbase_price_ratio) | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase_price_ratio.md "add-difficulty.json#/properties/concurrent/properties/fanbase_price_ratio") |
| [studio\_spare](#studio_spare)                | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-studio_spare.md "add-difficulty.json#/properties/concurrent/properties/studio_spare")               |
| [engine\_ratio](#engine_ratio)                | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-engine_ratio.md "add-difficulty.json#/properties/concurrent/properties/engine_ratio")               |
| [engine\_pow\_factor](#engine_pow_factor)     | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-engine_pow_factor.md "add-difficulty.json#/properties/concurrent/properties/engine_pow_factor")     |

## fanbase

\[Range] Fans gained per game published

`fanbase`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase.md "add-difficulty.json#/properties/concurrent/properties/fanbase")

### fanbase Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-1.md "check type definition")

### fanbase Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## currency

\[Range] Money made when a competitor makes a game.

`currency`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-currency-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-currency-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-currency.md "add-difficulty.json#/properties/concurrent/properties/currency")

### currency Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-currency-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-currency-items-1.md "check type definition")

### currency Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

### currency Default Value

The default value is:

```json
[
  50000000,
  125000000
]
```

## hack\_max

Used by the AI when they are cracking your game (default values easiest to hardest: 90, 90, 80, 75, 50).

`hack_max`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-hack_max.md "add-difficulty.json#/properties/concurrent/properties/hack_max")

### hack\_max Type

`integer`

### hack\_max Constraints

**multiple of**: the value of this number must be a multiple of: `5`

**minimum**: the value of this number must greater than or equal to: `40`

### hack\_max Default Value

The default value is:

```json
50
```

## note

\[Range] Games scores for trade-publishing games.

`note`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-0.md "check type definition")

    2.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-note.md "add-difficulty.json#/properties/concurrent/properties/note")

### note Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-0.md "check type definition")

2.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-1.md "check type definition")

### note Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## penalty

\[Range] Penality of trade-publishing games (if you fail to meet the expectations)

`penalty`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty.md "add-difficulty.json#/properties/concurrent/properties/penalty")

### penalty Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-1.md "check type definition")

### penalty Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## income\_ratio

\[Range] Used to compute the prepayment of a trade-publishing deal `prepayment = note * income_ratio`.

`income_ratio`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio.md "add-difficulty.json#/properties/concurrent/properties/income_ratio")

### income\_ratio Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-1.md "check type definition")

### income\_ratio Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## penalty\_ratio

Used to compute the penality ratio.

`penalty_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty_ratio.md "add-difficulty.json#/properties/concurrent/properties/penalty_ratio")

### penalty\_ratio Type

`number`

### penalty\_ratio Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### penalty\_ratio Default Value

The default value is:

```json
6
```

## ds\_min\_odds

Probability for a competitor to publisha game on your digital store.

`ds_min_odds`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-ds_min_odds.md "add-difficulty.json#/properties/concurrent/properties/ds_min_odds")

### ds\_min\_odds Type

`number`

### ds\_min\_odds Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0.01`

### ds\_min\_odds Default Value

The default value is:

```json
0.05
```

## fanbase\_price\_ratio

Used to compute the value of a competitor (based on its fanbase).

`fanbase_price_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase_price_ratio.md "add-difficulty.json#/properties/concurrent/properties/fanbase_price_ratio")

### fanbase\_price\_ratio Type

`number`

### fanbase\_price\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.25`

**minimum**: the value of this number must greater than or equal to: `50`

### fanbase\_price\_ratio Default Value

The default value is:

```json
120.25
```

## studio\_spare

Number of studio concurrent will spare for the player.

`studio_spare`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-studio_spare.md "add-difficulty.json#/properties/concurrent/properties/studio_spare")

### studio\_spare Type

`number`

### studio\_spare Constraints

**minimum**: the value of this number must greater than or equal to: `0`

### studio\_spare Default Value

The default value is:

```json
1
```

## engine\_ratio

Used to compute the value of a competitor (based on its engine).

`engine_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-engine_ratio.md "add-difficulty.json#/properties/concurrent/properties/engine_ratio")

### engine\_ratio Type

`number`

### engine\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `1`

### engine\_ratio Default Value

The default value is:

```json
1.14
```

## engine\_pow\_factor

Used to adjust the revenu of an engine (higher ratio = lower revenue).

`engine_pow_factor`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-engine_pow_factor.md "add-difficulty.json#/properties/concurrent/properties/engine_pow_factor")

### engine\_pow\_factor Type

`number`

### engine\_pow\_factor Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**minimum**: the value of this number must greater than or equal to: `1`

### engine\_pow\_factor Default Value

The default value is:

```json
2
```
