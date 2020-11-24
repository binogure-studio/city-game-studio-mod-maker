## 0 Type

unknown ([Random event](add-event-anyof-random-event.md))

# Random event Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                 |
| :-------------------------- | --------- | -------- | -------------- | :------------------------------------------------------------------------------------------------------------------------- |
| [description](#description) | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-description.md "add-event.json#/anyOf/0/properties/description") |
| [id](#id)                   | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-id.md "add-event.json#/anyOf/0/properties/id")                   |
| [probability](#probability) | `number`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-probability.md "add-event.json#/anyOf/0/properties/probability") |
| [event_color](#event_color) | `string`  | Optional | cannot be null | [Add a new event](add-event-anyof-random-event-properties-event_color.md "add-event.json#/anyOf/0/properties/event_color") |
| [type](#type)               | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-type.md "add-event.json#/anyOf/0/properties/type")               |
| [name](#name)               | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-name.md "add-event.json#/anyOf/0/properties/name")               |
| [show](#show)               | `boolean` | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-show.md "add-event.json#/anyOf/0/properties/show")               |
| [conditions](#conditions)   | `array`   | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-conditions.md "add-event.json#/anyOf/0/properties/conditions")   |
| [actions](#actions)         | `array`   | Required | cannot be null | [Add a new event](add-event-anyof-random-event-properties-actions.md "add-event.json#/anyOf/0/properties/actions")         |

## description

Event's description (used for i18n).


`description`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-description.md "add-event.json#/anyOf/0/properties/description")

### description Type

`string`

### description Default Value

The default value is:

```json
"LABEL_EVENT_DESCRIPTION"
```

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one).


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-id.md "add-event.json#/anyOf/0/properties/id")

### id Type

`string`

## probability

Event odds.


`probability`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-probability.md "add-event.json#/anyOf/0/properties/probability")

### probability Type

`number`

### probability Constraints

**multiple of**: the value of this number must be a multiple of: `0.00001`

**maximum**: the value of this number must smaller than or equal to: `0.009`

**minimum**: the value of this number must greater than or equal to: `0.001`

## event_color

Color of the notification


`event_color`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-event_color.md "add-event.json#/anyOf/0/properties/event_color")

### event_color Type

`string`

### event_color Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | ----------- |
| `"BLACK_COLOR"`  |             |
| `"BLUE_COLOR"`   |             |
| `"GREEN_COLOR"`  |             |
| `"RED_COLOR"`    |             |
| `"YELLOW_COLOR"` |             |

### event_color Default Value

The default value is:

```json
"BLUE_COLOR"
```

## type

Event type


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-type.md "add-event.json#/anyOf/0/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | ----------- |
| `"random"` |             |

### type Default Value

The default value is:

```json
"random"
```

## name

Event's title (used for i18n).


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-name.md "add-event.json#/anyOf/0/properties/name")

### name Type

`string`

### name Default Value

The default value is:

```json
"LABEL_EVENT_NAME"
```

## show

If 'true' it shows the action buttons in the mail box.


`show`

-   is required
-   Type: `boolean`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-show.md "add-event.json#/anyOf/0/properties/show")

### show Type

`boolean`

### show Default Value

The default value is:

```json
true
```

## conditions

List of conditions before activating this event.


`conditions`

-   is required
-   Type: an array of merged types ([Details](add-event-anyof-random-event-properties-conditions-items.md))
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-conditions.md "add-event.json#/anyOf/0/properties/conditions")

### conditions Type

an array of merged types ([Details](add-event-anyof-random-event-properties-conditions-items.md))

### conditions Constraints

**minimum number of items**: the minimum number of items for this array is: `0`

**unique items**: all items in this array must be unique. Duplicates are not allowed.

### conditions Default Value

The default value is:

```json
[]
```

## actions

List of available actions.


`actions`

-   is required
-   Type: an array of merged types ([Details](add-event-anyof-random-event-properties-actions-items.md))
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-random-event-properties-actions.md "add-event.json#/anyOf/0/properties/actions")

### actions Type

an array of merged types ([Details](add-event-anyof-random-event-properties-actions-items.md))

### actions Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
