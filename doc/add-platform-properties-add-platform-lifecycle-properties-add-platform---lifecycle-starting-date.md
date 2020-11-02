## start Type

`object` ([Add platform - lifecycle: Starting date](add-platform-properties-add-platform-lifecycle-properties-add-platform---lifecycle-starting-date.md))

# Add platform - lifecycle: Starting date Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                            |
| :-------------- | --------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [year](#year)   | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-lifecycle-properties-add-platform---lifecycle-starting-date-properties-year.md "add-platform.json#/properties/duration/properties/start/properties/year")   |
| [month](#month) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-lifecycle-properties-add-platform---lifecycle-starting-date-properties-month.md "add-platform.json#/properties/duration/properties/start/properties/month") |

## year

Year


`year`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-lifecycle-properties-add-platform---lifecycle-starting-date-properties-year.md "add-platform.json#/properties/duration/properties/start/properties/year")

### year Type

`integer`

### year Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1970`

### year Default Value

The default value is:

```json
1970
```

## month

Month


`month`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-lifecycle-properties-add-platform---lifecycle-starting-date-properties-month.md "add-platform.json#/properties/duration/properties/start/properties/month")

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
