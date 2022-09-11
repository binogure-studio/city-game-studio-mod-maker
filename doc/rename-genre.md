## Rename a game genre Type

`object` ([Rename a game genre](rename-genre.md))

# Rename a game genre Properties

| Property                         | Type     | Required | Nullable       | Defined by                                                                                                    |
| :------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------ |
| [name](#name)                    | `string` | Required | cannot be null | [Rename a game genre](rename-genre-properties-name.md "rename-genre.json#/properties/name")                   |
| [original\_name](#original_name) | `string` | Required | cannot be null | [Rename a game genre](rename-genre-properties-original_name.md "rename-genre.json#/properties/original_name") |

## name

New genre name

`name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Rename a game genre](rename-genre-properties-name.md "rename-genre.json#/properties/name")

### name Type

`string`

## original\_name

Original genre name

`original_name`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Rename a game genre](rename-genre-properties-original_name.md "rename-genre.json#/properties/original_name")

### original\_name Type

`string`

### original\_name Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                   | Explanation |
| :---------------------- | :---------- |
| `"action"`              |             |
| `"beat-them-all"`       |             |
| `"combat"`              |             |
| `"plates-formes"`       |             |
| `"tir"`                 |             |
| `"shoot-em-up"`         |             |
| `"fps"`                 |             |
| `"tps"`                 |             |
| `"hack-n-slash"`        |             |
| `"open-world"`          |             |
| `"hta-like"`            |             |
| `"infiltration"`        |             |
| `"survie"`              |             |
| `"horreur"`             |             |
| `"aventure"`            |             |
| `"fiction-interactive"` |             |
| `"film-interactif"`     |             |
| `"drague"`              |             |
| `"bishojo"`             |             |
| `"eroge"`               |             |
| `"otome"`               |             |
| `"visual-novel"`        |             |
| `"mystery-like"`        |             |
| `"rpg"`                 |             |
| `"action-rpg"`          |             |
| `"dungeon-crawler"`     |             |
| `"dungeon"`             |             |
| `"crook-like"`          |             |
| `"tactical-rpg"`        |             |
| `"reflexion"`           |             |
| `"maze"`                |             |
| `"objet-cache"`         |             |
| `"puzzle"`              |             |
| `"simulation"`          |             |
| `"animaux"`             |             |
| `"god-game"`            |             |
| `"elevage"`             |             |
| `"organisme-vivant"`    |             |
| `"sport"`               |             |
| `"gestion"`             |             |
| `"economie"`            |             |
| `"city-builder"`        |             |
| `"gouvernement"`        |             |
| `"vehicule"`            |             |
| `"racing"`              |             |
| `"drive"`               |             |
| `"fly"`                 |             |
| `"space"`               |             |
| `"sous-marin"`          |             |
| `"train"`               |             |
| `"strategy"`            |             |
| `"rts"`                 |             |
| `"moba-like"`           |             |
| `"tower-defense"`       |             |
| `"turn-based"`          |             |
| `"artillerie"`          |             |
| `"casual"`              |             |
| `"casse-brique"`        |             |
| `"rythme"`              |             |
| `"clicker-game"`        |             |
| `"action-adventure"`    |             |
| `"rtt"`                 |             |
| `"4X"`                  |             |

### original\_name Default Value

The default value is:

```json
"LABEL_TYPE_ACTION"
```
