## postmortem Type

`object` ([Details](add-difficulty-properties-postmortem.md))

# postmortem Properties

| Property                              | Type      | Required | Nullable       | Defined by                                                                                                                                                       |
| :------------------------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [tips_when_unlock](#tips_when_unlock) | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-postmortem-properties-tips_when_unlock.md "add-difficulty.json#/properties/postmortem/properties/tips_when_unlock") |

## tips_when_unlock

Number of tips unlocked when making a game report

`tips_when_unlock`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-postmortem-properties-tips_when_unlock.md "add-difficulty.json#/properties/postmortem/properties/tips_when_unlock")

### tips_when_unlock Type

`integer`

### tips_when_unlock Constraints

**maximum**: the value of this number must smaller than or equal to: `12`

**minimum**: the value of this number must greater than or equal to: `1`

### tips_when_unlock Default Value

The default value is:

```json
4
```
