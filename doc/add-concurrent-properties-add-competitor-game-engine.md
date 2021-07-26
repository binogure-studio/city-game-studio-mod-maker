## engine Type

`object` ([Add Competitor: Game engine](add-concurrent-properties-add-competitor-game-engine.md))

# engine Properties

| Property                | Type      | Required | Nullable       | Defined by                                                                                                                                                                                |
| :---------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [interval](#interval)   | `integer` | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-interval.md "add-concurrent.json#/properties/engine/properties/interval")                              |
| [royalties](#royalties) | `array`   | Required | cannot be null | [Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-add-competitor-game-engine-royalties.md "add-concurrent.json#/properties/engine/properties/royalties") |

## interval

Interval between concurrent's engine update (week)

`interval`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-interval.md "add-concurrent.json#/properties/engine/properties/interval")

### interval Type

`integer`

### interval Constraints

**maximum**: the value of this number must smaller than or equal to: `512`

**minimum**: the value of this number must greater than or equal to: `128`

### interval Default Value

The default value is:

```json
256
```

## royalties

Range for the concurrent engine royalties

`royalties`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-add-competitor-game-engine-royalties-items-0.md "check type definition")

    2.  [Untitled integer in Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-add-competitor-game-engine-royalties-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-add-competitor-game-engine-royalties.md "add-concurrent.json#/properties/engine/properties/royalties")

### royalties Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-add-competitor-game-engine-royalties-items-0.md "check type definition")

2.  [Untitled integer in Add a Concurrent](add-concurrent-properties-add-competitor-game-engine-properties-add-competitor-game-engine-royalties-items-1.md "check type definition")

### royalties Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`
