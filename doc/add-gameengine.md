## Add a game engine feature Type

`object` ([Add a game engine feature](add-gameengine.md))

# Add a game engine feature Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                  |
| :---------------------------------- | --------- | -------- | -------------- | :-------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                       | `string`  | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-type.md "add-gameengine.json#/properties/type")                       |
| [id](#id)                           | `string`  | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-id.md "add-gameengine.json#/properties/id")                           |
| [label](#label)                     | `string`  | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-label.md "add-gameengine.json#/properties/label")                     |
| [generation](#generation)           | `integer` | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-generation.md "add-gameengine.json#/properties/generation")           |
| [availability](#availability)       | `object`  | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-availability.md "add-gameengine.json#/properties/availability")       |
| [required_points](#required_points) | `integer` | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-required_points.md "add-gameengine.json#/properties/required_points") |
| [cost](#cost)                       | `object`  | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-cost.md "add-gameengine.json#/properties/cost")                       |
| [parent](#parent)                   | `string`  | Optional | cannot be null | [Add a game engine feature](add-gameengine-properties-parent.md "add-gameengine.json#/properties/parent")                   |
| [mandatory](#mandatory)             | `boolean` | Required | cannot be null | [Add a game engine feature](add-gameengine-properties-mandatory.md "add-gameengine.json#/properties/mandatory")             |

## type

Feature type (design, development or polish)


`type`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-type.md "add-gameengine.json#/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | ----------- |
| `"design"`      |             |
| `"development"` |             |
| `"polish"`      |             |

### type Default Value

The default value is:

```json
"design"
```

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one).


`id`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-id.md "add-gameengine.json#/properties/id")

### id Type

`string`

## label

Engine name (used for i18n).


`label`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-label.md "add-gameengine.json#/properties/label")

### label Type

`string`

### label Default Value

The default value is:

```json
"LABEL_GAME_ENGINE_FEATURE_NAME_0"
```

## generation

Features generation (has to matches with consoles generation minus 3)


`generation`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-generation.md "add-gameengine.json#/properties/generation")

### generation Type

`integer`

### generation Constraints

**maximum**: the value of this number must smaller than or equal to: `7`

**minimum**: the value of this number must greater than or equal to: `1`

### generation Default Value

The default value is:

```json
1
```

## availability

Date where the feature is available.


`availability`

-   is required
-   Type: `object` ([Details](add-gameengine-properties-availability.md))
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-availability.md "add-gameengine.json#/properties/availability")

### availability Type

`object` ([Details](add-gameengine-properties-availability.md))

## required_points

Number of required point to develop the feature.


`required_points`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-required_points.md "add-gameengine.json#/properties/required_points")

### required_points Type

`integer`

### required_points Constraints

**maximum**: the value of this number must smaller than or equal to: `9999`

**minimum**: the value of this number must greater than or equal to: `1`

### required_points Default Value

The default value is:

```json
10
```

## cost

Costs of the feature.


`cost`

-   is required
-   Type: `object` ([Details](add-gameengine-properties-cost.md))
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-cost.md "add-gameengine.json#/properties/cost")

### cost Type

`object` ([Details](add-gameengine-properties-cost.md))

## parent

ID of the parent feature, if there is no parent feature, leave it empty.==========
Design features
'2D graphics Monochrome': '9c7c16b0-16d2-11ea-8d71-362b9e155667'
'2D graphics 8Bits colors': '9c7c191c-16d2-11ea-8d71-362b9e155667'
'2D graphics 16Bits colors': '9c7c1e12-16d2-11ea-8d71-362b9e155667'
'2D graphics 24Bits colors': '9c7c1f48-16d2-11ea-8d71-362b9e155667'
'2D graphics 32Bits colors': '9c7c207e-16d2-11ea-8d71-362b9e155667'
'3D graphics Monochrome color': '9c7c21aa-16d2-11ea-8d71-362b9e155667'
'3D graphics 8Bits colors': '9c7c22cc-16d2-11ea-8d71-362b9e155667'
'3D graphics 16Bits colors': '9c7c2402-16d2-11ea-8d71-362b9e155667'
'3D graphics 24Bits colors': '9c7c26c8-16d2-11ea-8d71-362b9e155667'
'3D graphics 32Bits colors': '9c7c2934-16d2-11ea-8d71-362b9e155667'
'VR graphics': '9c7c2a56-16d2-11ea-8d71-362b9e155667'
'Voxel graphics': '9c7c2b82-16d2-11ea-8d71-362b9e155667'
'Basic dialog': '9c7c2ca4-16d2-11ea-8d71-362b9e155667'
'Interactive dialog': '9c7c30b4-16d2-11ea-8d71-362b9e155667'
'AI generated dialog': '9c7c3208-16d2-11ea-8d71-362b9e155667'
'Joystick support': '9c7c3460-16d2-11ea-8d71-362b9e155667'
'Gamepad support': '9c7c35be-16d2-11ea-8d71-362b9e155667'
'Mouse support': '9c7c36ea-16d2-11ea-8d71-362b9e155667'
'Prebuilt characters': '9c7c3816-16d2-11ea-8d71-362b9e155667'
'Customizable characters': '9c7c3c44-16d2-11ea-8d71-362b9e155667'
'Difficulty': '9c7c3dca-16d2-11ea-8d71-362b9e155667'

# 'Dynamic difficulty': '9c7c3f0a-16d2-11ea-8d71-362b9e155667'

Development features
'Map editor': '9c7c4036-16d2-11ea-8d71-362b9e155667'
'Mod support': '9c7c4158-16d2-11ea-8d71-362b9e155667'
'Mono sound': '9c7c4284-16d2-11ea-8d71-362b9e155667'
'Midi sound': '9c7c4586-16d2-11ea-8d71-362b9e155667'
'Stereo sound': '9c7c46d0-16d2-11ea-8d71-362b9e155667'
'Surround sound': '9c7c4806-16d2-11ea-8d71-362b9e155667'
'Basic music': '9c7c493c-16d2-11ea-8d71-362b9e155667'
'Orchestral music': '9c7c4a72-16d2-11ea-8d71-362b9e155667'
'Interactive music': '9c7c4b9e-16d2-11ea-8d71-362b9e155667'
'Password based saves': '9c7c4e64-16d2-11ea-8d71-362b9e155667'
'Basic saves': '9c7c4fc2-16d2-11ea-8d71-362b9e155667'
'Cloud saves': '9c7c50f8-16d2-11ea-8d71-362b9e155667'
'Basic physics': '9c7c521a-16d2-11ea-8d71-362b9e155667'
'Advanced physics': '9c7c5346-16d2-11ea-8d71-362b9e155667'
'Realistic physics': '9c7c54f4-16d2-11ea-8d71-362b9e155667'

# 'Dedicated server': '9c7c57e2-16d2-11ea-8d71-362b9e155667'

Polish features
'Social network integration': '9c7c594a-16d2-11ea-8d71-362b9e155667'
'Simple animation': '9c7c5a80-16d2-11ea-8d71-362b9e155667'
'Dynamic animation': '9c7c5bac-16d2-11ea-8d71-362b9e155667'
'AI based animation': '9c7c5cd8-16d2-11ea-8d71-362b9e155667'
'Basic tutorial': '9c7c5fda-16d2-11ea-8d71-362b9e155667'
'Interactive tutorial': '9c7c6142-16d2-11ea-8d71-362b9e155667'
'Loading screen': '9c7c6278-16d2-11ea-8d71-362b9e155667'
'Background loading': '9c7c639a-16d2-11ea-8d71-362b9e155667'
'Simple cinematics': '9c7c64c6-16d2-11ea-8d71-362b9e155667'
'Advanced cinematics': '9c7c662e-16d2-11ea-8d71-362b9e155667'
'Realistic cinematics': '9c7c696c-16d2-11ea-8d71-362b9e155667'
'Leaderboards': '9c7c6ad4-16d2-11ea-8d71-362b9e155667'
'Cloud leaderboards': '9c7c6c0a-16d2-11ea-8d71-362b9e155667'
'Ad module': '9c7c7756-43f2-4195-a10d-1e05c4a7a3bd'
'Microtransactions module': '9c7c8a28-b1ee-45e2-90d9-0c2e8da05489'


`parent`

-   is optional
-   Type: `string`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-parent.md "add-gameengine.json#/properties/parent")

### parent Type

`string`

### parent Examples

```json
"9c7c16b0-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c191c-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c1e12-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c1f48-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c207e-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c21aa-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c22cc-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c2402-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c26c8-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c2934-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c2a56-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c2b82-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c2ca4-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c30b4-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c3208-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c3460-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c35be-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c36ea-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c3816-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c3c44-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c3dca-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c3f0a-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4036-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4158-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4284-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4586-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c46d0-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4806-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c493c-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4a72-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4b9e-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4e64-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c4fc2-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c50f8-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c521a-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c5346-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c54f4-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c57e2-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c594a-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c5a80-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c5bac-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c5cd8-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c5fda-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c6142-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c6278-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c639a-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c64c6-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c662e-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c696c-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c6ad4-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c6c0a-16d2-11ea-8d71-362b9e155667"
```

```json
"9c7c7756-43f2-4195-a10d-1e05c4a7a3bd"
```

```json
"9c7c8a28-b1ee-45e2-90d9-0c2e8da05489"
```

## mandatory

'true' when the feature has to be implemented, 'false' otherwise.


`mandatory`

-   is required
-   Type: `boolean`
-   cannot be null
-   defined in: [Add a game engine feature](add-gameengine-properties-mandatory.md "add-gameengine.json#/properties/mandatory")

### mandatory Type

`boolean`
