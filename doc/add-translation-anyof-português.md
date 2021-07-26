## 6 Type

unknown ([Português](add-translation-anyof-português.md))

# 6 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                               |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Required | cannot be null | [Add a translation](add-translation-anyof-português-properties-name.md "add-translation.json#/anyOf/6/properties/name")                                  |
| [locale](#locale)     | `string` | Required | cannot be null | [Add a translation](add-translation-anyof-português-properties-locale.md "add-translation.json#/anyOf/6/properties/locale")                              |
| [messages](#messages) | `object` | Required | cannot be null | [Add a translation](add-translation-anyof-português-properties-add-translation-translations-list.md "add-translation.json#/anyOf/6/properties/messages") |

## name

Locale names (shown onto the main menu)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-português-properties-name.md "add-translation.json#/anyOf/6/properties/name")

### name Type

`string`

### name Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"Português"` |             |

### name Default Value

The default value is:

```json
"Português"
```

## locale

Locale code (en, es, fr, zh, ru, pt...)

`locale`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-português-properties-locale.md "add-translation.json#/anyOf/6/properties/locale")

### locale Type

`string`

### locale Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"pt"` |             |

### locale Default Value

The default value is:

```json
"pt"
```

## messages

KEY: VALUE. Example: LABEL_THEME_SCHOOL: School

`messages`

*   is required

*   Type: `object` ([Add translation: Translations list](add-translation-anyof-português-properties-add-translation-translations-list.md))

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-português-properties-add-translation-translations-list.md "add-translation.json#/anyOf/6/properties/messages")

### messages Type

`object` ([Add translation: Translations list](add-translation-anyof-português-properties-add-translation-translations-list.md))
