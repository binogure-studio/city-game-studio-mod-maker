## 2 Type

`object` ([Does nothing](add-event-anyof-random-event-properties-actions-items-anyof-does-nothing.md))

# Does nothing Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :---------------- | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [button](#button) | `string` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-does-nothing-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/2/properties/button") |
| [type](#type)     | `string` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-does-nothing-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/2/properties/type")     |

## button

Label of the button.


`button`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-does-nothing-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/2/properties/button")

### button Type

`string`

### button Default Value

The default value is:

```json
"BUTTON_EVENT_CUSTOM_0"
```

## type

Event type (instant).


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-does-nothing-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/2/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | ----------- |
| `"instant"` |             |

### type Default Value

The default value is:

```json
"instant"
```
