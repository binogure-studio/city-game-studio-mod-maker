## Add a new theme Type

`object` ([Add a new theme](add-theme.md))

# Add a new theme Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                    |
| :------------------------ | -------- | -------- | -------------- | :-------------------------------------------------------------------------------------------- |
| [icon](#icon)             | `image`  | Required | cannot be null | [Add a new theme](add-theme-properties-icon.md "add-theme.json#/properties/icon")             |
| [icon-white](#icon-white) | `image`  | Required | cannot be null | [Add a new theme](add-theme-properties-icon-white.md "add-theme.json#/properties/icon-white") |
| [name](#name)             | `string` | Required | cannot be null | [Add a new theme](add-theme-properties-name.md "add-theme.json#/properties/name")             |
| [label](#label)           | `string` | Required | cannot be null | [Add a new theme](add-theme-properties-label.md "add-theme.json#/properties/label")           |
| [match](#match)           | `object` | Required | cannot be null | [Add a new theme](add-theme-properties-add-theme-genre.md "add-theme.json#/properties/match") |

## icon

Theme icon with transparent background (Size: 512x512, Format: PNG/JPEG)


`icon`

-   is required
-   Type: `image`
-   cannot be null
-   defined in: [Add a new theme](add-theme-properties-icon.md "add-theme.json#/properties/icon")

### icon Type

`image`

## icon-white

Theme icon with black background (Size: 512x512, Format: PNG/JPEG)


`icon-white`

-   is required
-   Type: `image`
-   cannot be null
-   defined in: [Add a new theme](add-theme-properties-icon-white.md "add-theme.json#/properties/icon-white")

### icon-white Type

`image`

## name

Theme name (must be unique, used to match with new genre)


`name`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new theme](add-theme-properties-name.md "add-theme.json#/properties/name")

### name Type

`string`

## label

Theme label (localized, used for translations)


`label`

-   is required
-   Type: `string`
-   cannot be null
-   defined in: [Add a new theme](add-theme-properties-label.md "add-theme.json#/properties/label")

### label Type

`string`

## match

Theme/genre matches


`match`

-   is required
-   Type: `object` ([Add theme: Genre](add-theme-properties-add-theme-genre.md))
-   cannot be null
-   defined in: [Add a new theme](add-theme-properties-add-theme-genre.md "add-theme.json#/properties/match")

### match Type

`object` ([Add theme: Genre](add-theme-properties-add-theme-genre.md))
