## 1 Type

unknown ([Scheduled event](add-event-anyof-scheduled-event.md))

# Scheduled event Properties

| Property                    | Type      | Required | Nullable       | Defined by                                                                                                                    |
| :-------------------------- | --------- | -------- | -------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| [description](#description) | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-description.md "add-event.json#/anyOf/1/properties/description") |
| [id](#id)                   | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-id.md "add-event.json#/anyOf/1/properties/id")                   |
| [date](#date)               | `object`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-date.md "add-event.json#/anyOf/1/properties/date")               |
| [type](#type)               | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-type.md "add-event.json#/anyOf/1/properties/type")               |
| [event_color](#event_color) | `string`  | Optional | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-event_color.md "add-event.json#/anyOf/1/properties/event_color") |
| [name](#name)               | `string`  | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-name.md "add-event.json#/anyOf/1/properties/name")               |
| [show](#show)               | `boolean` | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-show.md "add-event.json#/anyOf/1/properties/show")               |
| [conditions](#conditions)   | `array`   | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-conditions.md "add-event.json#/anyOf/1/properties/conditions")   |
| [actions](#actions)         | `array`   | Required | cannot be null | [Add a new event](add-event-anyof-scheduled-event-properties-actions.md "add-event.json#/anyOf/1/properties/actions")         |

## description

Event's description (used for i18n).


`description`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-description.md "add-event.json#/anyOf/1/properties/description")

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
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-id.md "add-event.json#/anyOf/1/properties/id")

### id Type

`string`

## date




`date`

-   is required
-   Type: `object` ([Details](add-event-anyof-scheduled-event-properties-date.md))
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-date.md "add-event.json#/anyOf/1/properties/date")

### date Type

`object` ([Details](add-event-anyof-scheduled-event-properties-date.md))

## type

Event type (uniq-range: randomly during the specified year)


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-type.md "add-event.json#/anyOf/1/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | ----------- |
| `"uniq"`       |             |
| `"uniq-range"` |             |

### type Default Value

The default value is:

```json
"uniq"
```

## event_color

Color of the notification


`event_color`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-event_color.md "add-event.json#/anyOf/1/properties/event_color")

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

## name

Event's title (used for i18n).


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-name.md "add-event.json#/anyOf/1/properties/name")

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
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-show.md "add-event.json#/anyOf/1/properties/show")

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
-   Type: an array of merged types ([Details](add-event-anyof-scheduled-event-properties-conditions-items.md))
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-conditions.md "add-event.json#/anyOf/1/properties/conditions")

### conditions Type

an array of merged types ([Details](add-event-anyof-scheduled-event-properties-conditions-items.md))

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
-   Type: an array of merged types ([Details](add-event-anyof-scheduled-event-properties-actions-items.md))
-   cannot be null
-   defined in: [Add a new event](add-event-anyof-scheduled-event-properties-actions.md "add-event.json#/anyOf/1/properties/actions")

### actions Type

an array of merged types ([Details](add-event-anyof-scheduled-event-properties-actions-items.md))

### actions Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `1`

**unique items**: all items in this array must be unique. Duplicates are not allowed.
