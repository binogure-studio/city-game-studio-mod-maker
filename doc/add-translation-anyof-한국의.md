## 11 Type

unknown ([한국의](add-translation-anyof-한국의.md))

# 11 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                          |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Required | cannot be null | [Add a translation](add-translation-anyof-한국의-properties-name.md "add-translation.json#/anyOf/11/properties/name")                                  |
| [locale](#locale)     | `string` | Required | cannot be null | [Add a translation](add-translation-anyof-한국의-properties-locale.md "add-translation.json#/anyOf/11/properties/locale")                              |
| [messages](#messages) | `object` | Required | cannot be null | [Add a translation](add-translation-anyof-한국의-properties-add-translation-translations-list.md "add-translation.json#/anyOf/11/properties/messages") |

## name

Locale names (shown onto the main menu)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-한국의-properties-name.md "add-translation.json#/anyOf/11/properties/name")

### name Type

`string`

### name Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value   | Explanation |
| :------ | :---------- |
| `"한국의"` |             |

### name Default Value

The default value is:

```json
"한국의"
```

## locale

Locale code (en, es, fr, zh, ru, pt...)

`locale`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-한국의-properties-locale.md "add-translation.json#/anyOf/11/properties/locale")

### locale Type

`string`

### locale Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"ko"` |             |

### locale Default Value

The default value is:

```json
"ko"
```

## messages

KEY: VALUE. Example: LABEL_THEME_SCHOOL: School

`messages`

*   is required

*   Type: `object` ([Add translation: Translations list](add-translation-anyof-한국의-properties-add-translation-translations-list.md))

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-한국의-properties-add-translation-translations-list.md "add-translation.json#/anyOf/11/properties/messages")

### messages Type

`object` ([Add translation: Translations list](add-translation-anyof-한국의-properties-add-translation-translations-list.md))
