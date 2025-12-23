## items Type

`object` ([Edit/rename a Platform](generic-properties-root-addrename--edit-platform-properties-rename--edit-platform-editrename-a-platform.md))

# items Properties

| Property                                                                | Type      | Required | Nullable       | Defined by                                                                                                                                                 |
| :---------------------------------------------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)                                                           | `string`  | Required | cannot be null | [Edit/rename a Platform](rename-platform-properties-name.md "rename-platform.json#/properties/name")                                                       |
| [id](#id)                                                               | `integer` | Required | cannot be null | [Edit/rename a Platform](rename-platform-properties-id.md "rename-platform.json#/properties/id")                                                           |
| [total\_amount\_of\_published\_games](#total_amount_of_published_games) | `integer` | Optional | cannot be null | [Edit/rename a Platform](rename-platform-properties-total_amount_of_published_games.md "rename-platform.json#/properties/total_amount_of_published_games") |
| [backward\_compatibility](#backward_compatibility)                      | `string`  | Optional | cannot be null | [Edit/rename a Platform](rename-platform-properties-backward_compatibility.md "rename-platform.json#/properties/backward_compatibility")                   |
| [total\_unit\_sold](#total_unit_sold)                                   | `integer` | Optional | cannot be null | [Edit/rename a Platform](rename-platform-properties-total_unit_sold.md "rename-platform.json#/properties/total_unit_sold")                                 |

## name

Platform's name

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Edit/rename a Platform](rename-platform-properties-name.md "rename-platform.json#/properties/name")

### name Type

`string`

## id

Platform's id to rename (integer)'

`id`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Edit/rename a Platform](rename-platform-properties-id.md "rename-platform.json#/properties/id")

### id Type

`integer`

### id Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value | Explanation |
| :---- | :---------- |
| `1`   |             |
| `2`   |             |
| `3`   |             |
| `4`   |             |
| `5`   |             |
| `6`   |             |
| `7`   |             |
| `8`   |             |
| `9`   |             |
| `10`  |             |
| `11`  |             |
| `12`  |             |
| `13`  |             |
| `14`  |             |
| `15`  |             |
| `16`  |             |
| `17`  |             |
| `18`  |             |
| `19`  |             |
| `20`  |             |
| `22`  |             |
| `23`  |             |
| `24`  |             |
| `25`  |             |
| `26`  |             |
| `27`  |             |
| `28`  |             |
| `29`  |             |
| `30`  |             |
| `31`  |             |
| `32`  |             |
| `33`  |             |
| `34`  |             |
| `35`  |             |
| `36`  |             |
| `37`  |             |
| `38`  |             |
| `39`  |             |
| `40`  |             |
| `41`  |             |
| `42`  |             |
| `43`  |             |
| `44`  |             |
| `45`  |             |
| `46`  |             |
| `47`  |             |
| `48`  |             |
| `49`  |             |
| `50`  |             |
| `51`  |             |
| `52`  |             |
| `53`  |             |
| `54`  |             |
| `55`  |             |
| `56`  |             |
| `57`  |             |
| `58`  |             |
| `59`  |             |
| `60`  |             |
| `61`  |             |
| `62`  |             |
| `63`  |             |
| `64`  |             |
| `65`  |             |
| `66`  |             |
| `67`  |             |
| `68`  |             |
| `69`  |             |
| `70`  |             |
| `71`  |             |
| `72`  |             |
| `73`  |             |
| `74`  |             |
| `75`  |             |
| `76`  |             |
| `77`  |             |
| `78`  |             |
| `79`  |             |
| `80`  |             |
| `81`  |             |
| `84`  |             |

**minimum**: the value of this number must greater than or equal to: `1`

### id Default Value

The default value is:

```json
1
```

## total\_amount\_of\_published\_games

Total number of published game

`total_amount_of_published_games`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Edit/rename a Platform](rename-platform-properties-total_amount_of_published_games.md "rename-platform.json#/properties/total_amount_of_published_games")

### total\_amount\_of\_published\_games Type

`integer`

### total\_amount\_of\_published\_games Constraints

**minimum**: the value of this number must greater than or equal to: `25`

## backward\_compatibility

UUID of the previously released console that this console is backward compatible with

`backward_compatibility`

*   is optional

*   Type: `string`

*   cannot be null

*   defined in: [Edit/rename a Platform](rename-platform-properties-backward_compatibility.md "rename-platform.json#/properties/backward_compatibility")

### backward\_compatibility Type

`string`

## total\_unit\_sold

Total number of unit sold (platform)

`total_unit_sold`

*   is optional

*   Type: `integer`

*   cannot be null

*   defined in: [Edit/rename a Platform](rename-platform-properties-total_unit_sold.md "rename-platform.json#/properties/total_unit_sold")

### total\_unit\_sold Type

`integer`

### total\_unit\_sold Constraints

**maximum**: the value of this number must smaller than or equal to: `600000000`

**minimum**: the value of this number must greater than or equal to: `50000`
