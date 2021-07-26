## specialty Type

`string`

## specialty Constraints

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

## specialty Default Value

The default value is:

```json
"action"
```
