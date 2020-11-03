## concurrent Type

`object` ([Details](add-difficulty-properties-concurrent.md))

# undefined Properties

| Property                                    | Type     | Required | Nullable       | Defined by                                                                                                                                                             |
| :------------------------------------------ | -------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [fanbase](#fanbase)                         | `array`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase.md "add-difficulty.json#/properties/concurrent/properties/fanbase")                         |
| [currency](#currency)                       | `array`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-currency.md "add-difficulty.json#/properties/concurrent/properties/currency")                       |
| [note](#note)                               | `array`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-note.md "add-difficulty.json#/properties/concurrent/properties/note")                               |
| [penalty](#penalty)                         | `array`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty.md "add-difficulty.json#/properties/concurrent/properties/penalty")                         |
| [income_ratio](#income_ratio)               | `array`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio.md "add-difficulty.json#/properties/concurrent/properties/income_ratio")               |
| [penalty_ratio](#penalty_ratio)             | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty_ratio.md "add-difficulty.json#/properties/concurrent/properties/penalty_ratio")             |
| [ds_min_odds](#ds_min_odds)                 | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-ds_min_odds.md "add-difficulty.json#/properties/concurrent/properties/ds_min_odds")                 |
| [fanbase_price_ratio](#fanbase_price_ratio) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase_price_ratio.md "add-difficulty.json#/properties/concurrent/properties/fanbase_price_ratio") |
| [engine_ratio](#engine_ratio)               | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent-properties-engine_ratio.md "add-difficulty.json#/properties/concurrent/properties/engine_ratio")               |

## fanbase

[Range] Fans gained per game published


`fanbase`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-0.md "check type definition")
    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-1.md "check type definition")
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase.md "add-difficulty.json#/properties/concurrent/properties/fanbase")

### fanbase Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-0.md "check type definition")
2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase-items-1.md "check type definition")

### fanbase Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## currency

[Range] Money made when a competitor makes a game.


`currency`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-currency-items-0.md "check type definition")
    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-currency-items-1.md "check type definition")
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-currency.md "add-difficulty.json#/properties/concurrent/properties/currency")

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

## note

[Range] Games scores for trade-publishing games.


`note`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-0.md "check type definition")
    2.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-1.md "check type definition")
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-note.md "add-difficulty.json#/properties/concurrent/properties/note")

### note Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-0.md "check type definition")
2.  [Untitled number in Add a difficulty](add-difficulty-properties-concurrent-properties-note-items-1.md "check type definition")

### note Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## penalty

[Range] Penality of trade-publishing games (if you fail to meet the expectations)


`penalty`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-0.md "check type definition")
    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-1.md "check type definition")
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty.md "add-difficulty.json#/properties/concurrent/properties/penalty")

### penalty Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-0.md "check type definition")
2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-penalty-items-1.md "check type definition")

### penalty Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## income_ratio

[Range] Used to compute the prepayment of a trade-publishing deal `prepayment = note * income_ratio`.


`income_ratio`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-0.md "check type definition")
    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-1.md "check type definition")
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio.md "add-difficulty.json#/properties/concurrent/properties/income_ratio")

### income_ratio Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-0.md "check type definition")
2.  [Untitled integer in Add a difficulty](add-difficulty-properties-concurrent-properties-income_ratio-items-1.md "check type definition")

### income_ratio Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## penalty_ratio

Used to compute the penality ratio.


`penalty_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-penalty_ratio.md "add-difficulty.json#/properties/concurrent/properties/penalty_ratio")

### penalty_ratio Type

`number`

### penalty_ratio Constraints

**minimum**: the value of this number must greater than or equal to: `1`

### penalty_ratio Default Value

The default value is:

```json
6
```

## ds_min_odds

Probability for a competitor to publisha game on your digital store.


`ds_min_odds`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-ds_min_odds.md "add-difficulty.json#/properties/concurrent/properties/ds_min_odds")

### ds_min_odds Type

`number`

### ds_min_odds Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**minimum**: the value of this number must greater than or equal to: `0.01`

### ds_min_odds Default Value

The default value is:

```json
0.05
```

## fanbase_price_ratio

Used to compute the value of a competitor (based on its fanbase).


`fanbase_price_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-fanbase_price_ratio.md "add-difficulty.json#/properties/concurrent/properties/fanbase_price_ratio")

### fanbase_price_ratio Type

`number`

### fanbase_price_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.25`

**minimum**: the value of this number must greater than or equal to: `50`

### fanbase_price_ratio Default Value

The default value is:

```json
120.25
```

## engine_ratio

Used to compute the value of a competitor (based on its engine).


`engine_ratio`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-concurrent-properties-engine_ratio.md "add-difficulty.json#/properties/concurrent/properties/engine_ratio")

### engine_ratio Type

`number`

### engine_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**minimum**: the value of this number must greater than or equal to: `1`

### engine_ratio Default Value

The default value is:

```json
8
```
