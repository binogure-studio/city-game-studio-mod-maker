## type Type

`string`

## type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | ----------- |
| `"accessory"` |             |
| `"pc"`        |             |
| `"os"`        |             |
| `"home"`      |             |
| `"handled"`   |             |

**pattern**: the string must match the following regular expression: 

```regexp
(accessory|pc|os|home|handled)
```

[try pattern](https://regexr.com/?expression=(accessory%7Cpc%7Cos%7Chome%7Chandled) "try regular expression with regexr.com")

## type Default Value

The default value is:

```json
"os"
```
