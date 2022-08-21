## iap Type

`object` ([Details](add-difficulty-properties-iap.md))

# iap Properties

| Property                                  | Type     | Required | Nullable       | Defined by                                                                                                                                           |
| :---------------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [user\_spend\_dollar](#user_spend_dollar) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-iap-properties-user_spend_dollar.md "add-difficulty.json#/properties/iap/properties/user_spend_dollar") |

## user\_spend\_dollar

How much a user spend on InApp purchase.

`user_spend_dollar`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-iap-properties-user_spend_dollar.md "add-difficulty.json#/properties/iap/properties/user_spend_dollar")

### user\_spend\_dollar Type

`number`

### user\_spend\_dollar Constraints

**multiple of**: the value of this number must be a multiple of: `0.0001`

**maximum**: the value of this number must smaller than or equal to: `2`

**minimum**: the value of this number must greater than or equal to: `0.05`

### user\_spend\_dollar Default Value

The default value is:

```json
0.6036
```
