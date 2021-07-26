## Add a Concurrent Type

`object` ([Add a Concurrent](add-concurrent.md))

# Add a Concurrent Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                           |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------- |
| [id](#id)               | `string` | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-id.md "add-concurrent.json#/properties/id")                             |
| [name](#name)           | `string` | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-name.md "add-concurrent.json#/properties/name")                         |
| [logo](#logo)           | `image`  | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-logo.md "add-concurrent.json#/properties/logo")                         |
| [specialty](#specialty) | `string` | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-specialty.md "add-concurrent.json#/properties/specialty")               |
| [engine](#engine)       | `object` | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-add-competitor-game-engine.md "add-concurrent.json#/properties/engine") |

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one)

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent](add-concurrent-properties-id.md "add-concurrent.json#/properties/id")

### id Type

`string`

## name

Concurrent's name (Ubisoft, Bethesda...)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent](add-concurrent-properties-name.md "add-concurrent.json#/properties/name")

### name Type

`string`

## logo

Concurrent logo's (Size: 128x128, Format: PNG/JPEG)

`logo`

*   is required

*   Type: `image`

*   cannot be null

*   defined in: [Add a Concurrent](add-concurrent-properties-logo.md "add-concurrent.json#/properties/logo")

### logo Type

`image`

## specialty

Concurrent specialty (action, aventure, casual, reflexion, strategy, simulation, rpg)

`specialty`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a Concurrent](add-concurrent-properties-specialty.md "add-concurrent.json#/properties/specialty")

### specialty Type

`string`

### specialty Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value          | Explanation |
| :------------- | :---------- |
| `"action"`     |             |
| `"aventure"`   |             |
| `"casual"`     |             |
| `"reflexion"`  |             |
| `"strategy"`   |             |
| `"simulation"` |             |
| `"rpg"`        |             |

**pattern**: the string must match the following regular expression: 

```regexp
(action|aventure|casual|reflexion|strategy|simulation|rpg)
```

[try pattern](https://regexr.com/?expression=\(action%7Caventure%7Ccasual%7Creflexion%7Cstrategy%7Csimulation%7Crpg\) "try regular expression with regexr.com")

### specialty Default Value

The default value is:

```json
"action"
```

## engine



`engine`

*   is required

*   Type: `object` ([Add Competitor: Game engine](add-concurrent-properties-add-competitor-game-engine.md))

*   cannot be null

*   defined in: [Add a Concurrent](add-concurrent-properties-add-competitor-game-engine.md "add-concurrent.json#/properties/engine")

### engine Type

`object` ([Add Competitor: Game engine](add-concurrent-properties-add-competitor-game-engine.md))
