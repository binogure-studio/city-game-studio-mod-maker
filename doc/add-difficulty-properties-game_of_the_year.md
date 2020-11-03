## game_of_the_year Type

`object` ([Details](add-difficulty-properties-game_of_the_year.md))

# undefined Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                               |
| :---------------- | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [indie](#indie)   | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-indie.md "add-difficulty.json#/properties/game_of_the_year/properties/indie")   |
| [normal](#normal) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-normal.md "add-difficulty.json#/properties/game_of_the_year/properties/normal") |
| [big](#big)       | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-big.md "add-difficulty.json#/properties/game_of_the_year/properties/big")       |
| [aaa](#aaa)       | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-aaa.md "add-difficulty.json#/properties/game_of_the_year/properties/aaa")       |

## indie

Indie games: Adjustement variable to select the GOTY (the higher the better).


`indie`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-indie.md "add-difficulty.json#/properties/game_of_the_year/properties/indie")

### indie Type

`number`

### indie Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

### indie Default Value

The default value is:

```json
0.7
```

## normal

Normal games: Adjustement variable to select the GOTY (the higher the better).


`normal`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-normal.md "add-difficulty.json#/properties/game_of_the_year/properties/normal")

### normal Type

`number`

### normal Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0.1`

### normal Default Value

The default value is:

```json
0.8
```

## big

Big games: Adjustement variable to select the GOTY (the higher the better).


`big`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-big.md "add-difficulty.json#/properties/game_of_the_year/properties/big")

### big Type

`number`

### big Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `1.5`

**minimum**: the value of this number must greater than or equal to: `0.5`

### big Default Value

The default value is:

```json
0.9
```

## aaa

AAA games: Adjustement variable to select the GOTY (the higher the better).


`aaa`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-game_of_the_year-properties-aaa.md "add-difficulty.json#/properties/game_of_the_year/properties/aaa")

### aaa Type

`number`

### aaa Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.5`

### aaa Default Value

The default value is:

```json
1
```
