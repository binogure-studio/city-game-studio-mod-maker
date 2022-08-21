## 10 Type

unknown ([Türkçe](add-translation-anyof-türkçe.md))

# 10 Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                             |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [name](#name)         | `string` | Required | cannot be null | [Add a translation](add-translation-anyof-türkçe-properties-name.md "add-translation.json#/anyOf/10/properties/name")                                  |
| [locale](#locale)     | `string` | Required | cannot be null | [Add a translation](add-translation-anyof-türkçe-properties-locale.md "add-translation.json#/anyOf/10/properties/locale")                              |
| [messages](#messages) | `object` | Required | cannot be null | [Add a translation](add-translation-anyof-türkçe-properties-add-translation-translations-list.md "add-translation.json#/anyOf/10/properties/messages") |

## name

Locale names (shown onto the main menu)

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-türkçe-properties-name.md "add-translation.json#/anyOf/10/properties/name")

### name Type

`string`

### name Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"Türkçe"` |             |

### name Default Value

The default value is:

```json
"Türkçe"
```

## locale

Locale code (en, es, fr, zh, ru, pt...)

`locale`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-türkçe-properties-locale.md "add-translation.json#/anyOf/10/properties/locale")

### locale Type

`string`

### locale Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value  | Explanation |
| :----- | :---------- |
| `"tr"` |             |

### locale Default Value

The default value is:

```json
"tr"
```

## messages

KEY: VALUE. Example: LABEL\_THEME\_SCHOOL: School

`messages`

*   is required

*   Type: `object` ([Add translation: Translations list](add-translation-anyof-türkçe-properties-add-translation-translations-list.md))

*   cannot be null

*   defined in: [Add a translation](add-translation-anyof-türkçe-properties-add-translation-translations-list.md "add-translation.json#/anyOf/10/properties/messages")

### messages Type

`object` ([Add translation: Translations list](add-translation-anyof-türkçe-properties-add-translation-translations-list.md))
