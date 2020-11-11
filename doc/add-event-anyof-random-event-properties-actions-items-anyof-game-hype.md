## 3 Type

`object` ([Game hype](add-event-anyof-random-event-properties-actions-items-anyof-game-hype.md))

# Game hype Properties

| Property                        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                               |
| :------------------------------ | -------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [button](#button)               | `string` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-game-hype-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/3/properties/button")               |
| [campaign_type](#campaign_type) | `string` | Optional | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-game-hype-properties-campaign_type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/3/properties/campaign_type") |
| [type](#type)                   | `string` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-game-hype-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/3/properties/type")                   |

## button

Label of the button.


`button`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-game-hype-properties-button.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/3/properties/button")

### button Type

`string`

### button Default Value

The default value is:

```json
"BUTTON_EVENT_CUSTOM_0"
```

## campaign_type

Type pf campaign (streamer only).


`campaign_type`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-game-hype-properties-campaign_type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/3/properties/campaign_type")

### campaign_type Type

`string`

### campaign_type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | ----------- |
| `"streamer"` |             |

### campaign_type Default Value

The default value is:

```json
"streamer"
```

## type

Event type (instant).


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions-items-anyof-game-hype-properties-type.md "add-event.json#/anyOf/0/properties/actions/items/anyOf/3/properties/type")

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
