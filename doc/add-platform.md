## Add a new platform Type

`object` ([Add a new platform](add-platform.md))

# Add a new platform Properties

| Property                                                            | Type      | Required | Nullable       | Defined by                                                                                                                                       |
| :------------------------------------------------------------------ | --------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------- |
| [generation](#generation)                                           | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-generation.md "add-platform.json#/properties/generation")                                           |
| [power](#power)                                                     | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-power.md "add-platform.json#/properties/power")                                        |
| [online](#online)                                                   | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-online.md "add-platform.json#/properties/online")                                      |
| [type](#type)                                                       | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-type.md "add-platform.json#/properties/type")                                                       |
| [fabriquant](#fabriquant)                                           | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-fabriquant.md "add-platform.json#/properties/fabriquant")                                           |
| [total_amount_of_published_games](#total_amount_of_published_games) | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-total_amount_of_published_games.md "add-platform.json#/properties/total_amount_of_published_games") |
| [id](#id)                                                           | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-id.md "add-platform.json#/properties/id")                                                           |
| [name](#name)                                                       | `string`  | Required | cannot be null | [Add a new platform](add-platform-properties-name.md "add-platform.json#/properties/name")                                                       |
| [duration](#duration)                                               | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-lifecycle.md "add-platform.json#/properties/duration")                                 |
| [total_unit_sold](#total_unit_sold)                                 | `integer` | Required | cannot be null | [Add a new platform](add-platform-properties-total_unit_sold.md "add-platform.json#/properties/total_unit_sold")                                 |
| [cost](#cost)                                                       | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-costs.md "add-platform.json#/properties/cost")                                         |
| [age](#age)                                                         | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-target-audience.md "add-platform.json#/properties/age")                                |
| [texture](#texture)                                                 | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-textures.md "add-platform.json#/properties/texture")                                   |
| [genre](#genre)                                                     | `object`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-genre.md "add-platform.json#/properties/genre")                                        |

## generation

Platform's generation (Please use: <https://en.wikipedia.org/wiki/Home_video_game_console> )


`generation`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-generation.md "add-platform.json#/properties/generation")

### generation Type

`integer`

### generation Constraints

**maximum**: the value of this number must smaller than or equal to: `9`

**minimum**: the value of this number must greater than or equal to: `1`

### generation Default Value

The default value is:

```json
1
```

## power




`power`

-   is required
-   Type: `object` ([Add platform: Power](add-platform-properties-add-platform-power.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-power.md "add-platform.json#/properties/power")

### power Type

`object` ([Add platform: Power](add-platform-properties-add-platform-power.md))

## online




`online`

-   is required
-   Type: `object` ([Add platform: Online](add-platform-properties-add-platform-online.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-online.md "add-platform.json#/properties/online")

### online Type

`object` ([Add platform: Online](add-platform-properties-add-platform-online.md))

## type

platform type (accessory, pc, os, home, handled)


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-type.md "add-platform.json#/properties/type")

### type Type

`string`

### type Constraints

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

### type Default Value

The default value is:

```json
"os"
```

## fabriquant

100e33bc-6a97-4570-a2e1-36602a7faa86 Gouda inc., f715642a-0cb2-4963-80af-4d12ddddc58e Magmabox, 319dbde8-d792-4a7a-a05f-9931c963d086 PEC, 042d6979-04b5-4901-ac10-de014297eab6 Sinfonce, 15bcf760-5ceb-4680-b40b-185f207fbd7f Wataggi, a28f218a-514b-48dd-b96f-a13386df34c6 Grantendo, 169b9492-391f-4951-a1b3-7e7575d348a6 Roberto industries, 6f763033-65b7-448a-84ef-664919fa3209 Plastics Electronics, 88f8606b-f83e-45b2-b945-29e8ab9ae9fd Commandor, fa99dbc4-ec16-469b-a312-6cfbd3b3b9bc Minisoft, 3ab91fad-4052-4d22-ab72-65e8d8b277c6 Amsterdam, f456c09b-eea6-4f56-b1f6-41fd9110d77b Saga, 37fe729f-752f-4307-91cf-731fb6fb749f BNC, 86416499-cdff-4082-8dd2-1894caa0522c Moris, 57c3ac73-9132-4bae-8dd0-db163402856b Panarapid, 1e367d42-3c90-4cd4-aba6-fa86916d1553 Deny, 0efbe7e0-e2d9-4610-ba21-560126f1837a Rokia, 6a424864-b8aa-4073-9937-6e7080d4d387 Worldwide, 88f179e7-f1a7-4479-bdcf-5367b820aeb8 Robinet software


`fabriquant`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-fabriquant.md "add-platform.json#/properties/fabriquant")

### fabriquant Type

`string`

### fabriquant Examples

```json
"100e33bc-6a97-4570-a2e1-36602a7faa86"
```

```json
"f715642a-0cb2-4963-80af-4d12ddddc58e"
```

```json
"319dbde8-d792-4a7a-a05f-9931c963d086"
```

```json
"042d6979-04b5-4901-ac10-de014297eab6"
```

```json
"15bcf760-5ceb-4680-b40b-185f207fbd7f"
```

```json
"a28f218a-514b-48dd-b96f-a13386df34c6"
```

```json
"169b9492-391f-4951-a1b3-7e7575d348a6"
```

```json
"6f763033-65b7-448a-84ef-664919fa3209"
```

```json
"88f8606b-f83e-45b2-b945-29e8ab9ae9fd"
```

```json
"fa99dbc4-ec16-469b-a312-6cfbd3b3b9bc"
```

```json
"3ab91fad-4052-4d22-ab72-65e8d8b277c6"
```

```json
"f456c09b-eea6-4f56-b1f6-41fd9110d77b"
```

```json
"37fe729f-752f-4307-91cf-731fb6fb749f"
```

```json
"86416499-cdff-4082-8dd2-1894caa0522c"
```

```json
"57c3ac73-9132-4bae-8dd0-db163402856b"
```

```json
"1e367d42-3c90-4cd4-aba6-fa86916d1553"
```

```json
"0efbe7e0-e2d9-4610-ba21-560126f1837a"
```

```json
"6a424864-b8aa-4073-9937-6e7080d4d387"
```

```json
"88f179e7-f1a7-4479-bdcf-5367b820aeb8"
```

## total_amount_of_published_games

Total number of published game


`total_amount_of_published_games`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-total_amount_of_published_games.md "add-platform.json#/properties/total_amount_of_published_games")

### total_amount_of_published_games Type

`integer`

### total_amount_of_published_games Constraints

**minimum**: the value of this number must greater than or equal to: `25`

### total_amount_of_published_games Default Value

The default value is:

```json
50
```

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one)


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-id.md "add-platform.json#/properties/id")

### id Type

`string`

## name

Platform's name


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-name.md "add-platform.json#/properties/name")

### name Type

`string`

## duration




`duration`

-   is required
-   Type: `object` ([Add platform: Lifecycle](add-platform-properties-add-platform-lifecycle.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-lifecycle.md "add-platform.json#/properties/duration")

### duration Type

`object` ([Add platform: Lifecycle](add-platform-properties-add-platform-lifecycle.md))

## total_unit_sold

Total number of unit sold (platform)


`total_unit_sold`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-total_unit_sold.md "add-platform.json#/properties/total_unit_sold")

### total_unit_sold Type

`integer`

### total_unit_sold Constraints

**maximum**: the value of this number must smaller than or equal to: `9999999`

**minimum**: the value of this number must greater than or equal to: `50000`

### total_unit_sold Default Value

The default value is:

```json
120000
```

## cost

Development and license costs


`cost`

-   is required
-   Type: `object` ([Add platform: Costs](add-platform-properties-add-platform-costs.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-costs.md "add-platform.json#/properties/cost")

### cost Type

`object` ([Add platform: Costs](add-platform-properties-add-platform-costs.md))

## age




`age`

-   is required
-   Type: `object` ([Add platform: Target audience](add-platform-properties-add-platform-target-audience.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-target-audience.md "add-platform.json#/properties/age")

### age Type

`object` ([Add platform: Target audience](add-platform-properties-add-platform-target-audience.md))

## texture

Platform's textures


`texture`

-   is required
-   Type: `object` ([Add platform: Textures](add-platform-properties-add-platform-textures.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-textures.md "add-platform.json#/properties/texture")

### texture Type

`object` ([Add platform: Textures](add-platform-properties-add-platform-textures.md))

## genre

Platform/genre matches


`genre`

-   is required
-   Type: `object` ([Add platform: Genre](add-platform-properties-add-platform-genre.md))
-   cannot be null
-   defined in: [Add a new platform](add-platform-properties-add-platform-genre.md "add-platform.json#/properties/genre")

### genre Type

`object` ([Add platform: Genre](add-platform-properties-add-platform-genre.md))
