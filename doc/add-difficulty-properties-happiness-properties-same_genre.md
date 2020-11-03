## same_genre Type

`object` ([Details](add-difficulty-properties-happiness-properties-same_genre.md))

# undefined Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :------------------------------------ | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [duration_in_week](#duration_in_week) | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-duration_in_week.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/duration_in_week") |
| [per_month](#per_month)               | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-per_month.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/per_month")               |

## duration_in_week

Number of week before an employee is bored about a genre.


`duration_in_week`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-duration_in_week.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/duration_in_week")

### duration_in_week Type

`integer`

### duration_in_week Constraints

**maximum**: the value of this number must smaller than or equal to: `1000`

**minimum**: the value of this number must greater than or equal to: `50`

### duration_in_week Default Value

The default value is:

```json
100
```

## per_month

Once bored, this ratio will reduce its happiness by x (the higher the better).


`per_month`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre-properties-per_month.md "add-difficulty.json#/properties/happiness/properties/same_genre/properties/per_month")

### per_month Type

`number`

### per_month Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.99`

**minimum**: the value of this number must greater than or equal to: `0.01`

### per_month Default Value

The default value is:

```json
0.99
```
