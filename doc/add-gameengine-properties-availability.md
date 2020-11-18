## availability Type

`object` ([Details](add-gameengine-properties-availability.md))

# undefined Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                              |
| :-------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [year](#year)   | `integer` | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-availability-properties-year.md "add-gameengine.json#/properties/availability/properties/year")   |
| [month](#month) | `integer` | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-availability-properties-month.md "add-gameengine.json#/properties/availability/properties/month") |

## year




`year`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-availability-properties-year.md "add-gameengine.json#/properties/availability/properties/year")

### year Type

`integer`

### year Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1970`

### year Default Value

The default value is:

```json
1990
```

## month




`month`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-availability-properties-month.md "add-gameengine.json#/properties/availability/properties/month")

### month Type

`integer`

### month Constraints

**maximum**: the value of this number must smaller than or equal to: `12`

**minimum**: the value of this number must greater than or equal to: `1`

### month Default Value

The default value is:

```json
1
```
