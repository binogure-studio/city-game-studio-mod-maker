## Add a new digital store's feature Type

`object` ([Add a new digital store's feature](add-digitalstore.md))

# Add a new digital store's feature Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                              |
| :---------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                           | `string`  | Required | cannot be null | [Add a new digital store's feature](add-digitalstore-properties-id.md "add-digitalstore.json#/properties/id")                           |
| [name](#name)                       | `string`  | Required | cannot be null | [Add a new digital store's feature](add-digitalstore-properties-name.md "add-digitalstore.json#/properties/name")                       |
| [description](#description)         | `string`  | Required | cannot be null | [Add a new digital store's feature](add-digitalstore-properties-description.md "add-digitalstore.json#/properties/description")         |
| [required_points](#required_points) | `integer` | Required | cannot be null | [Add a new digital store's feature](add-digitalstore-properties-required_points.md "add-digitalstore.json#/properties/required_points") |
| [effects](#effects)                 | `array`   | Required | cannot be null | [Add a new digital store's feature](add-digitalstore-properties-effects.md "add-digitalstore.json#/properties/effects")                 |

## id

UUID v4 (use <https://www.uuidgenerator.net/> to generate one)

`id`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new digital store's feature](add-digitalstore-properties-id.md "add-digitalstore.json#/properties/id")

### id Type

`string`

## name

Feature's title (used for i18n).

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new digital store's feature](add-digitalstore-properties-name.md "add-digitalstore.json#/properties/name")

### name Type

`string`

### name Default Value

The default value is:

```json
"LABEL_DS_FEATURE_TITLE_0"
```

## description

Feature's description (used for i18n).

`description`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a new digital store's feature](add-digitalstore-properties-description.md "add-digitalstore.json#/properties/description")

### description Type

`string`

### description Default Value

The default value is:

```json
"LABEL_DS_FEATURE_DESCRIPTION_0"
```

## required_points

Points required to implement the feature.

`required_points`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a new digital store's feature](add-digitalstore-properties-required_points.md "add-digitalstore.json#/properties/required_points")

### required_points Type

`integer`

### required_points Constraints

**multiple of**: the value of this number must be a multiple of: `100`

**maximum**: the value of this number must smaller than or equal to: `10000000000`

**minimum**: the value of this number must greater than or equal to: `500`

### required_points Default Value

The default value is:

```json
1500
```

## effects

Effect of this feature.

`effects`

*   is required

*   Type: `object[]` ([Details](add-digitalstore-properties-effects-items.md))

*   cannot be null

*   defined in: [Add a new digital store's feature](add-digitalstore-properties-effects.md "add-digitalstore.json#/properties/effects")

### effects Type

`object[]` ([Details](add-digitalstore-properties-effects-items.md))

### effects Constraints

**maximum number of items**: the maximum number of items for this array is: `3`

**minimum number of items**: the minimum number of items for this array is: `1`
