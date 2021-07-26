## items Type

`object` ([Rename a concurrent](generic-properties-root-addrename-competitors-properties-rename-competitor-rename-a-concurrent.md))

# items Properties

| Property      | Type     | Required | Nullable       | Defined by                                                                                            |
| :------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------- |
| [id](#id)     | `string` | Required | cannot be null | [Rename a concurrent](rename-concurrent-properties-id.md "rename-concurrent.json#/properties/id")     |
| [name](#name) | `string` | Required | cannot be null | [Rename a concurrent](rename-concurrent-properties-name.md "rename-concurrent.json#/properties/name") |
| [logo](#logo) | `image`  | Optional | cannot be null | [Rename a concurrent](rename-concurrent-properties-logo.md "rename-concurrent.json#/properties/logo") |

## id

Concurrent's id to rename

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Rename a concurrent](rename-concurrent-properties-id.md "rename-concurrent.json#/properties/id")

### id Type

`string`

### id Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"0"`  |             |
| `"1"`  |             |
| `"2"`  |             |
| `"3"`  |             |
| `"4"`  |             |
| `"5"`  |             |
| `"6"`  |             |
| `"7"`  |             |
| `"8"`  |             |
| `"9"`  |             |
| `"10"` |             |
| `"11"` |             |
| `"12"` |             |

### id Default Value

The default value is:

```json
"0"
```

## name

Concurrent's name

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Rename a concurrent](rename-concurrent-properties-name.md "rename-concurrent.json#/properties/name")

### name Type

`string`

## logo

Conccurent logo's (Size: 128x128, Format: PNG/JPEG)

`logo`

*   is optional

*   Type: `image`

*   cannot be null

*   defined in: [Rename a concurrent](rename-concurrent-properties-logo.md "rename-concurrent.json#/properties/logo")

### logo Type

`image`
