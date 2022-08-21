## same\_genre Type

`object` ([Details](add-difficulty-properties-happiness-properties-same_genre.md))

# same\_genre Properties

| Property                                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :-------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [duration\_in\_week](#duration_in_week) | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-duration_in_week.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/duration_in_week") |
| [per\_month](#per_month)                | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-per_month.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/per_month")               |

## duration\_in\_week

Number of week before an employee is bored about a genre.

`duration_in_week`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-duration_in_week.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/duration_in_week")

### duration\_in\_week Type

`integer`

### duration\_in\_week Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `50`

### duration\_in\_week Default Value

The default value is:

```json
100
```

## per\_month

Once bored, this ratio will reduce its happiness by x (the higher the better).

`per_month`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-per_month.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/per_month")

### per\_month Type

`number`

### per\_month Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.99`

**minimum**: the value of this number must greater than or equal to: `0.01`

### per\_month Default Value

The default value is:

```json
0.99
```
