## date Type

`object` ([Details](add-event-anyof-scheduled-event-properties-date.md))

# undefined Properties

| Property        | Type      | Required | Nullable       | Defined by                                                                                                                                        |
| :-------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| [year](#year)   | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-date-properties-year.md "add-event.json#/anyOf/1/properties/date/properties/year")   |
| [month](#month) | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-date-properties-month.md "add-event.json#/anyOf/1/properties/date/properties/month") |
| [week](#week)   | `integer` | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-date-properties-week.md "add-event.json#/anyOf/1/properties/date/properties/week")   |

## year




`year`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-date-properties-year.md "add-event.json#/anyOf/1/properties/date/properties/year")

### year Type

`integer`

### year Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1976`

## month




`month`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-date-properties-month.md "add-event.json#/anyOf/1/properties/date/properties/month")

### month Type

`integer`

### month Constraints

**maximum**: the value of this number must smaller than or equal to: `12`

**minimum**: the value of this number must greater than or equal to: `1`

## week




`week`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-date-properties-week.md "add-event.json#/anyOf/1/properties/date/properties/week")

### week Type

`integer`

### week Constraints

**maximum**: the value of this number must smaller than or equal to: `4`

**minimum**: the value of this number must greater than or equal to: `1`
