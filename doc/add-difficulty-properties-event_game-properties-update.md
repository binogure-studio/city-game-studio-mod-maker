## update Type

`object` ([Details](add-difficulty-properties-event_game-properties-update.md))

# update Properties

| Property                                                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                   |
| :---------------------------------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [delay\_before\_cancel\_in\_month](#delay_before_cancel_in_month) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-event_game-properties-update-properties-delay_before_cancel_in_month.md "add-difficulty.json#/properties/event_game/properties/update/properties/delay_before_cancel_in_month") |

## delay\_before\_cancel\_in\_month

Delay in months between the event about asking for an update, and the update itself

`delay_before_cancel_in_month`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-event_game-properties-update-properties-delay_before_cancel_in_month.md "add-difficulty.json#/properties/event_game/properties/update/properties/delay_before_cancel_in_month")

### delay\_before\_cancel\_in\_month Type

`number`

### delay\_before\_cancel\_in\_month Constraints

**multiple of**: the value of this number must be a multiple of: `1`

**maximum**: the value of this number must smaller than or equal to: `12`

**minimum**: the value of this number must greater than or equal to: `1`

### delay\_before\_cancel\_in\_month Default Value

The default value is:

```json
12
```
