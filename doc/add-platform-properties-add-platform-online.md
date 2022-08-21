## online Type

`object` ([Add platform: Online](add-platform-properties-add-platform-online.md))

# online Properties

| Property                   | Type      | Required | Nullable       | Defined by                                                                                                                                              |
| :------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [compatible](#compatible)  | `boolean` | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-online-properties-compatible.md "add-platform.json#/properties/online/properties/compatible") |
| [sell\_ratio](#sell_ratio) | `number`  | Required | cannot be null | [Add a new platform](add-platform-properties-add-platform-online-properties-sell_ratio.md "add-platform.json#/properties/online/properties/sell_ratio") |

## compatible

True if the platform is online, false otherwise

`compatible`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Add a new platform](add-platform-properties-add-platform-online-properties-compatible.md "add-platform.json#/properties/online/properties/compatible")

### compatible Type

`boolean`

## sell\_ratio

Sell ratio of the platform (never above 1)

`sell_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a new platform](add-platform-properties-add-platform-online-properties-sell_ratio.md "add-platform.json#/properties/online/properties/sell_ratio")

### sell\_ratio Type

`number`

### sell\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `1`

**minimum**: the value of this number must greater than or equal to: `0`

### sell\_ratio Default Value

The default value is:

```json
0.125
```
