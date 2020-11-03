## digital_store Type

`object` ([Details](add-difficulty-properties-digital_store.md))

# undefined Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                   |
| :-------------------------- | -------- | -------- | -------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [server_load](#server_load) | `number` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-digital_store-properties-server_load.md "add-difficulty.json#/properties/digital_store/properties/server_load") |

## server_load

Server load adjustement variable (lower = lower server usage).


`server_load`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-digital_store-properties-server_load.md "add-difficulty.json#/properties/digital_store/properties/server_load")

### server_load Type

`number`

### server_load Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**minimum**: the value of this number must greater than or equal to: `0.01`

### server_load Default Value

The default value is:

```json
0.24753
```
