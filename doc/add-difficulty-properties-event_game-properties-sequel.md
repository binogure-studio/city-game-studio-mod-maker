## sequel Type

`object` ([Details](add-difficulty-properties-event_game-properties-sequel.md))

# sequel Properties

| Property                                                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                               |
| :------------------------------------------------------------ | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [minimum\_score](#minimum_score)                              | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-event_game-properties-sequel-properties-minimum_score.md "add-difficulty.json#/properties/event_game/properties/sequel/properties/minimum_score")                           |
| [delay\_before\_event\_in\_year](#delay_before_event_in_year) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-event_game-properties-sequel-properties-delay_before_event_in_year.md "add-difficulty.json#/properties/event_game/properties/sequel/properties/delay_before_event_in_year") |

## minimum\_score

Minimum score for fans to ask for a sequel

`minimum_score`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-event_game-properties-sequel-properties-minimum_score.md "add-difficulty.json#/properties/event_game/properties/sequel/properties/minimum_score")

### minimum\_score Type

`number`

### minimum\_score Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `50`

### minimum\_score Default Value

The default value is:

```json
75
```

## delay\_before\_event\_in\_year

Delay between the release of the game and the in-game event

`delay_before_event_in_year`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-event_game-properties-sequel-properties-delay_before_event_in_year.md "add-difficulty.json#/properties/event_game/properties/sequel/properties/delay_before_event_in_year")

### delay\_before\_event\_in\_year Type

`number`

### delay\_before\_event\_in\_year Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `10`

**minimum**: the value of this number must greater than or equal to: `1`

### delay\_before\_event\_in\_year Default Value

The default value is:

```json
2
```
