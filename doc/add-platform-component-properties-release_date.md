## release\_date Type

`object` ([Details](add-platform-component-properties-release_date.md))

# release\_date Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                                                |
| :-------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [year](#year)   | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-release_date-properties-year.md "add-platform-component.json#/properties/release_date/properties/year")   |
| [month](#month) | `integer` | Required | cannot be null | [Add a new platorm component](add-platform-component-properties-release_date-properties-month.md "add-platform-component.json#/properties/release_date/properties/month") |

## year

Year.

`year`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-release_date-properties-year.md "add-platform-component.json#/properties/release_date/properties/year")

### year Type

`integer`

### year Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1970`

### year Default Value

The default value is:

```json
1976
```

## month

Month.

`month`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new platorm component](add-platform-component-properties-release_date-properties-month.md "add-platform-component.json#/properties/release_date/properties/month")

### month Type

`integer`

### month Constraints

**maximum**: the value of this number must smaller than or equal to: `11`

**minimum**: the value of this number must greater than or equal to: `0`
