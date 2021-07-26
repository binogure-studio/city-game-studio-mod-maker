## happiness Type

`object` ([Details](add-difficulty-properties-happiness.md))

# happiness Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                   |
| :---------------------------------- | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [crunchtime](#crunchtime)           | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-crunchtime.md "add-difficulty.json#/properties/happiness/properties/crunchtime")           |
| [fire_employee](#fire_employee)     | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-fire_employee.md "add-difficulty.json#/properties/happiness/properties/fire_employee")     |
| [same_genre](#same_genre)           | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre.md "add-difficulty.json#/properties/happiness/properties/same_genre")           |
| [trash_game](#trash_game)           | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-trash_game.md "add-difficulty.json#/properties/happiness/properties/trash_game")           |
| [new_genre](#new_genre)             | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-new_genre.md "add-difficulty.json#/properties/happiness/properties/new_genre")             |
| [leave_threshold](#leave_threshold) | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-leave_threshold.md "add-difficulty.json#/properties/happiness/properties/leave_threshold") |
| [leave_active](#leave_active)       | `boolean` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-leave_active.md "add-difficulty.json#/properties/happiness/properties/leave_active")       |
| [bonus](#bonus)                     | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness-properties-bonus.md "add-difficulty.json#/properties/happiness/properties/bonus")                     |

## crunchtime

Lower the happiness when the employee is working while tired (crunch time, the higher the better).

`crunchtime`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-crunchtime.md "add-difficulty.json#/properties/happiness/properties/crunchtime")

### crunchtime Type

`number`

### crunchtime Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `0.99`

**minimum**: the value of this number must greater than or equal to: `0.01`

### crunchtime Default Value

The default value is:

```json
0.975
```

## fire_employee

Lower the happiness when you fire an employee (the higher the better).

`fire_employee`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-fire_employee.md "add-difficulty.json#/properties/happiness/properties/fire_employee")

### fire_employee Type

`number`

### fire_employee Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**maximum**: the value of this number must smaller than or equal to: `0.99`

**minimum**: the value of this number must greater than or equal to: `0.01`

### fire_employee Default Value

The default value is:

```json
0.965
```

## same_genre

Genre repetition.

`same_genre`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-happiness-properties-same_genre.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-same_genre.md "add-difficulty.json#/properties/happiness/properties/same_genre")

### same_genre Type

`object` ([Details](add-difficulty-properties-happiness-properties-same_genre.md))

## trash_game

When trashing a game, impact the happiness. (the higher the better)

`trash_game`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-trash_game.md "add-difficulty.json#/properties/happiness/properties/trash_game")

### trash_game Type

`number`

### trash_game Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.99`

**minimum**: the value of this number must greater than or equal to: `0.01`

### trash_game Default Value

The default value is:

```json
0.92
```

## new_genre

When using a new game genre, impact the happiness (the higher the better).

`new_genre`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-new_genre.md "add-difficulty.json#/properties/happiness/properties/new_genre")

### new_genre Type

`number`

### new_genre Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `5`

**minimum**: the value of this number must greater than or equal to: `1.01`

### new_genre Default Value

The default value is:

```json
1.05
```

## leave_threshold

Threshold (in percent) before the employee quits (0%: never quit, 100%: will always try to quit).

`leave_threshold`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-leave_threshold.md "add-difficulty.json#/properties/happiness/properties/leave_threshold")

### leave_threshold Type

`number`

### leave_threshold Constraints

**multiple of**: the value of this number must be a multiple of: `0.1`

**maximum**: the value of this number must smaller than or equal to: `100`

**minimum**: the value of this number must greater than or equal to: `0`

### leave_threshold Default Value

The default value is:

```json
30
```

## leave_active

To disable the leaving feature.

`leave_active`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-leave_active.md "add-difficulty.json#/properties/happiness/properties/leave_active")

### leave_active Type

`boolean`

### leave_active Default Value

The default value is:

```json
true
```

## bonus

Employee happiness bonus (Not implemented yet).

`bonus`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-happiness-properties-bonus.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness-properties-bonus.md "add-difficulty.json#/properties/happiness/properties/bonus")

### bonus Type

`object` ([Details](add-difficulty-properties-happiness-properties-bonus.md))
