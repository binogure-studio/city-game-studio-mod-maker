## Add a Concurrent's Game Type

`object` ([Add a Concurrent's Game](add-concurrent-game.md))

# Add a Concurrent's Game Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                          |
| :------------------------------------ | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                             | `string`  | Required | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-id.md "add-concurrent-game.json#/properties/id")                           |
| [name](#name)                         | `string`  | Required | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-name.md "add-concurrent-game.json#/properties/name")                       |
| [concurrent\_id](#concurrent_id)      | `string`  | Required | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-concurrent_id.md "add-concurrent-game.json#/properties/concurrent_id")     |
| [game\_type](#game_type)              | `string`  | Required | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-game_type.md "add-concurrent-game.json#/properties/game_type")             |
| [theme](#theme)                       | `string`  | Required | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-theme.md "add-concurrent-game.json#/properties/theme")                     |
| [year\_of\_release](#year_of_release) | `integer` | Optional | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-year_of_release.md "add-concurrent-game.json#/properties/year_of_release") |
| [score](#score)                       | `integer` | Optional | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-score.md "add-concurrent-game.json#/properties/score")                     |
| [unit\_sold](#unit_sold)              | `integer` | Optional | cannot be null | [Add a Concurrent's Game](add-concurrent-game-properties-unit_sold.md "add-concurrent-game.json#/properties/unit_sold")             |

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one)

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-id.md "add-concurrent-game.json#/properties/id")

### id Type

`string`

## name

Game's name (Ubisoft, Bethesda...)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-name.md "add-concurrent-game.json#/properties/name")

### name Type

`string`

## concurrent\_id

Id of the competitor. 0: Rocksun, 1: Usual, 2: Ubihard, 3: Rustine, 4: Eastforest, 5: Digital Arts, 6: Snowstorm, 7: Circle enix, 8: Tamcom, 9: Mecaware, 10: 4K Games, 11: UID Hardware, 12: Minis, 13: Epic Fails, 14: Nandai Bamco, 15: Naughty Cat, 16: Majong, 17: Hypersomniac Games inc, 18: Game House, 19: Rito Games, 20: ZeniMin, 21: GreenByte, 22: Warner Sis, 23: Kanomi

`concurrent_id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-concurrent_id.md "add-concurrent-game.json#/properties/concurrent_id")

### concurrent\_id Type

`string`

### concurrent\_id Default Value

The default value is:

```json
"0"
```

### concurrent\_id Examples

```json
"0"
```

```json
"1"
```

```json
"2"
```

```json
"3"
```

```json
"4"
```

```json
"5"
```

```json
"6"
```

```json
"7"
```

```json
"8"
```

```json
"9"
```

```json
"10"
```

```json
"11"
```

```json
"12"
```

```json
"13"
```

```json
"14"
```

```json
"15"
```

```json
"16"
```

```json
"17"
```

```json
"18"
```

```json
"19"
```

```json
"20"
```

```json
"21"
```

```json
"22"
```

```json
"23"
```

## game\_type

Game's genre

`game_type`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-game_type.md "add-concurrent-game.json#/properties/game_type")

### game\_type Type

`string`

### game\_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"4X"`                  |             |
| `"action"`              |             |
| `"action-adventure"`    |             |
| `"action-rpg"`          |             |
| `"animaux"`             |             |
| `"artillerie"`          |             |
| `"aventure"`            |             |
| `"beat-them-all"`       |             |
| `"bishojo"`             |             |
| `"casse-brique"`        |             |
| `"casual"`              |             |
| `"city-builder"`        |             |
| `"clicker-game"`        |             |
| `"combat"`              |             |
| `"crook-like"`          |             |
| `"drague"`              |             |
| `"drive"`               |             |
| `"dungeon"`             |             |
| `"dungeon-crawler"`     |             |
| `"economie"`            |             |
| `"elevage"`             |             |
| `"eroge"`               |             |
| `"fiction-interactive"` |             |
| `"film-interactif"`     |             |
| `"fly"`                 |             |
| `"fps"`                 |             |
| `"gestion"`             |             |
| `"god-game"`            |             |
| `"gouvernement"`        |             |
| `"hack-n-slash"`        |             |
| `"horreur"`             |             |
| `"hta-like"`            |             |
| `"infiltration"`        |             |
| `"maze"`                |             |
| `"moba-like"`           |             |
| `"mystery-like"`        |             |
| `"objet-cache"`         |             |
| `"open-world"`          |             |
| `"organisme-vivant"`    |             |
| `"otome"`               |             |
| `"plates-formes"`       |             |
| `"puzzle"`              |             |
| `"racing"`              |             |
| `"reflexion"`           |             |
| `"rpg"`                 |             |
| `"rts"`                 |             |
| `"rtt"`                 |             |
| `"rythme"`              |             |
| `"shoot-em-up"`         |             |
| `"simulation"`          |             |
| `"sous-marin"`          |             |
| `"space"`               |             |
| `"sport"`               |             |
| `"strategy"`            |             |
| `"survie"`              |             |
| `"tactical-rpg"`        |             |
| `"tir"`                 |             |
| `"tower-defense"`       |             |
| `"tps"`                 |             |
| `"train"`               |             |
| `"turn-based"`          |             |
| `"vehicule"`            |             |
| `"visual-novel"`        |             |

## theme

Game's theme

`theme`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-theme.md "add-concurrent-game.json#/properties/theme")

### theme Type

`string`

### theme Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"Adaptation de film"`   |             |
| `"Prehistoire"`          |             |
| `"Archéologie"`          |             |
| `"Post apocalyptique"`   |             |
| `"Atlantide"`            |             |
| `"Religieux"`            |             |
| `"Crime organisé"`       |             |
| `"Crossover"`            |             |
| `"Désert"`               |             |
| `"Comédie"`              |             |
| `"Dragon"`               |             |
| `"Erotique"`             |             |
| `"Espionnage"`           |             |
| `"Fantasy"`              |             |
| `"Fantôme"`              |             |
| `"Histoire"`             |             |
| `"Horreur"`              |             |
| `"Médical"`              |             |
| `"Océan"`                |             |
| `"Mille et une nuits"`   |             |
| `"Mythologie"`           |             |
| `"Ninja"`                |             |
| `"Parcs de loisirs"`     |             |
| `"Pirates"`              |             |
| `"Science fiction"`      |             |
| `"Super-héros"`          |             |
| `"Vampire"`              |             |
| `"Voyage dans le temps"` |             |
| `"Western"`              |             |
| `"Zombie"`               |             |
| `"Medieval"`             |             |
| `"Gamedev"`              |             |
| `"Hack"`                 |             |
| `"Chasse"`               |             |
| `"Anime"`                |             |
| `"Militaire"`            |             |
| `"Industrialisation"`    |             |
| `"Animal"`               |             |
| `"Football"`             |             |
| `"Cartoon"`              |             |
| `"Cuisine"`              |             |
| `"Urban"`                |             |
| `"Kaiju"`                |             |
| `"Evolution"`            |             |
| `"Cyberpunk"`            |             |
| `"Steampunk"`            |             |
| `"Transportation"`       |             |
| `"Music"`                |             |

## year\_of\_release

Year of release

`year_of_release`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-year_of_release.md "add-concurrent-game.json#/properties/year_of_release")

### year\_of\_release Type

`integer`

### year\_of\_release Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1976`

### year\_of\_release Default Value

The default value is:

```json
2000
```

## score

Score of the game

`score`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-score.md "add-concurrent-game.json#/properties/score")

### score Type

`integer`

### score Constraints

**maximum**: the value of this number must smaller than or equal to: `125`

**minimum**: the value of this number must greater than or equal to: `1`

### score Default Value

The default value is:

```json
50
```

## unit\_sold

Number of unit sold of the game (total)

`unit_sold`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Add a Concurrent's Game](add-concurrent-game-properties-unit_sold.md "add-concurrent-game.json#/properties/unit_sold")

### unit\_sold Type

`integer`

### unit\_sold Constraints

**maximum**: the value of this number must smaller than or equal to: `500000000`

**minimum**: the value of this number must greater than or equal to: `10000`

### unit\_sold Default Value

The default value is:

```json
100000
```
