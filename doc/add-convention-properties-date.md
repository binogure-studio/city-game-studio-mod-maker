## date Type

`object` ([Details](add-convention-properties-date.md))

# date Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                     |
| :-------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------- |
| [month](#month) | `integer` | Required | cannot be null | [Add a convention](add-convention-properties-date-properties-month.md "add-convention.json#/properties/date/properties/month") |
| [year](#year)   | `integer` | Required | cannot be null | [Add a convention](add-convention-properties-date-properties-year.md "add-convention.json#/properties/date/properties/year")   |

## month

Month of the convention (1 - 12).

`month`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-date-properties-month.md "add-convention.json#/properties/date/properties/month")

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

## year

Year of the convention.

`year`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a convention](add-convention-properties-date-properties-year.md "add-convention.json#/properties/date/properties/year")

### year Type

`integer`

### year Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1976`

### year Default Value

The default value is:

```json
1976
```
