## age Type

`object` ([Add platform: Target audience](add-platform-properties-add-platform-target-audience.md))

# age Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :---------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [all](#all)       | `string` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-target-audience-properties-all.md "add-platform.json#/properties/age/properties/all")       |
| [mature](#mature) | `string` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-target-audience-properties-mature.md "add-platform.json#/properties/age/properties/mature") |
| [young](#young)   | `string` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-target-audience-properties-young.md "add-platform.json#/properties/age/properties/young")   |

## all

Match the platform with the targetted consumers

`all`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new platform](add-platform-properties-add-platform-target-audience-properties-all.md "add-platform.json#/properties/age/properties/all")

### all Type

`string`

### all Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"excellent"` |             |
| `"good"`      |             |
| `"ok"`        |             |
| `"poor"`      |             |

**pattern**: the string must match the following regular expression:&#x20;

```regexp
(excellent|good|ok|poor)
```

[try pattern](https://regexr.com/?expression=\(excellent%7Cgood%7Cok%7Cpoor\) "try regular expression with regexr.com")

### all Default Value

The default value is:

```json
"ok"
```

## mature

Match the platform with the targetted consumers

`mature`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new platform](add-platform-properties-add-platform-target-audience-properties-mature.md "add-platform.json#/properties/age/properties/mature")

### mature Type

`string`

### mature Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"excellent"` |             |
| `"good"`      |             |
| `"ok"`        |             |
| `"poor"`      |             |

**pattern**: the string must match the following regular expression:&#x20;

```regexp
(excellent|good|ok|poor)
```

[try pattern](https://regexr.com/?expression=\(excellent%7Cgood%7Cok%7Cpoor\) "try regular expression with regexr.com")

### mature Default Value

The default value is:

```json
"ok"
```

## young

Match the platform with the targetted consumers

`young`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new platform](add-platform-properties-add-platform-target-audience-properties-young.md "add-platform.json#/properties/age/properties/young")

### young Type

`string`

### young Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"excellent"` |             |
| `"good"`      |             |
| `"ok"`        |             |
| `"poor"`      |             |

**pattern**: the string must match the following regular expression:&#x20;

```regexp
(excellent|good|ok|poor)
```

[try pattern](https://regexr.com/?expression=\(excellent%7Cgood%7Cok%7Cpoor\) "try regular expression with regexr.com")

### young Default Value

The default value is:

```json
"ok"
```
