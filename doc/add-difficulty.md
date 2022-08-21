## Add a difficulty Type

`object` ([Add a difficulty](add-difficulty.md))

# Add a difficulty Properties

| Property                                            | Type      | Required | Nullable       | Defined by                                                                                                                       |
| :-------------------------------------------------- | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------- |
| [difficulty](#difficulty)                           | `string`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-difficulty.md "add-difficulty.json#/properties/difficulty")                         |
| [postmortem\_ratio](#postmortem_ratio)              | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-postmortem_ratio.md "add-difficulty.json#/properties/postmortem_ratio")             |
| [perfect\_employee\_ratio](#perfect_employee_ratio) | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-perfect_employee_ratio.md "add-difficulty.json#/properties/perfect_employee_ratio") |
| [admin\_cost](#admin_cost)                          | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-admin_cost.md "add-difficulty.json#/properties/admin_cost")                         |
| [remake](#remake)                                   | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-remake.md "add-difficulty.json#/properties/remake")                                 |
| [engine](#engine)                                   | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-engine.md "add-difficulty.json#/properties/engine")                                 |
| [iap](#iap)                                         | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-iap.md "add-difficulty.json#/properties/iap")                                       |
| [perfect\_employee\_cost](#perfect_employee_cost)   | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-perfect_employee_cost.md "add-difficulty.json#/properties/perfect_employee_cost")   |
| [show\_percent](#show_percent)                      | `boolean` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-show_percent.md "add-difficulty.json#/properties/show_percent")                     |
| [label](#label)                                     | `string`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-label.md "add-difficulty.json#/properties/label")                                   |
| [wage](#wage)                                       | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-wage.md "add-difficulty.json#/properties/wage")                                     |
| [ccu\_cost](#ccu_cost)                              | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-ccu_cost.md "add-difficulty.json#/properties/ccu_cost")                             |
| [digital\_store](#digital_store)                    | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-digital_store.md "add-difficulty.json#/properties/digital_store")                   |
| [game\_sales](#game_sales)                          | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_sales.md "add-difficulty.json#/properties/game_sales")                         |
| [postmortem](#postmortem)                           | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-postmortem.md "add-difficulty.json#/properties/postmortem")                         |
| [game\_of\_the\_year](#game_of_the_year)            | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-game_of_the_year.md "add-difficulty.json#/properties/game_of_the_year")             |
| [platform](#platform)                               | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-platform.md "add-difficulty.json#/properties/platform")                             |
| [contract](#contract)                               | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-contract.md "add-difficulty.json#/properties/contract")                             |
| [happiness](#happiness)                             | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-happiness.md "add-difficulty.json#/properties/happiness")                           |
| [notation](#notation)                               | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-notation.md "add-difficulty.json#/properties/notation")                             |
| [mortgage](#mortgage)                               | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-mortgage.md "add-difficulty.json#/properties/mortgage")                             |
| [currency](#currency)                               | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-currency.md "add-difficulty.json#/properties/currency")                             |
| [taxes](#taxes)                                     | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-taxes.md "add-difficulty.json#/properties/taxes")                                   |
| [publishing](#publishing)                           | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-publishing.md "add-difficulty.json#/properties/publishing")                         |
| [concurrent](#concurrent)                           | `object`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-concurrent.md "add-difficulty.json#/properties/concurrent")                         |

## difficulty

Difficulty name (has to be unique)

`difficulty`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-difficulty.md "add-difficulty.json#/properties/difficulty")

### difficulty Type

`string`

### difficulty Default Value

The default value is:

```json
"Insane"
```

## postmortem\_ratio

Probability to get intel from a game report (higher the better).

`postmortem_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-postmortem_ratio.md "add-difficulty.json#/properties/postmortem_ratio")

### postmortem\_ratio Type

`number`

### postmortem\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.05`

### postmortem\_ratio Default Value

The default value is:

```json
0.3
```

## perfect\_employee\_ratio

Probability to get a spontaneous application (lower the better.

`perfect_employee_ratio`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-perfect_employee_ratio.md "add-difficulty.json#/properties/perfect_employee_ratio")

### perfect\_employee\_ratio Type

`number`

### perfect\_employee\_ratio Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.05`

### perfect\_employee\_ratio Default Value

The default value is:

```json
0.95
```

## admin\_cost

Your starting salary.

`admin_cost`

*   is required

*   Type: `integer`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-admin_cost.md "add-difficulty.json#/properties/admin_cost")

### admin\_cost Type

`integer`

### admin\_cost Constraints

**multiple of**: the value of this number must be a multiple of: `100`

**minimum**: the value of this number must greater than or equal to: `100`

### admin\_cost Default Value

The default value is:

```json
1500
```

## remake

Adjust difficulty to make a remake of a game.

`remake`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-remake.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-remake.md "add-difficulty.json#/properties/remake")

### remake Type

`object` ([Details](add-difficulty-properties-remake.md))

## engine

Adjust difficulty to make an engine.

`engine`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-engine.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-engine.md "add-difficulty.json#/properties/engine")

### engine Type

`object` ([Details](add-difficulty-properties-engine.md))

## iap

In-App purchase rate.

`iap`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-iap.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-iap.md "add-difficulty.json#/properties/iap")

### iap Type

`object` ([Details](add-difficulty-properties-iap.md))

## perfect\_employee\_cost

Salary range of a perfect employee (lower/higher).

`perfect_employee_cost`

*   is required

*   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled integer in Add a difficulty](add-difficulty-properties-perfect_employee_cost-items-0.md "check type definition")

    2.  [Untitled integer in Add a difficulty](add-difficulty-properties-perfect_employee_cost-items-1.md "check type definition")

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-perfect_employee_cost.md "add-difficulty.json#/properties/perfect_employee_cost")

### perfect\_employee\_cost Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled integer in Add a difficulty](add-difficulty-properties-perfect_employee_cost-items-0.md "check type definition")

2.  [Untitled integer in Add a difficulty](add-difficulty-properties-perfect_employee_cost-items-1.md "check type definition")

### perfect\_employee\_cost Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`

## show\_percent

Show the percentage on gauges while making games

`show_percent`

*   is required

*   Type: `boolean`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-show_percent.md "add-difficulty.json#/properties/show_percent")

### show\_percent Type

`boolean`

## label

Label of the difficulty, used for localization.

`label`

*   is required

*   Type: `string`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-label.md "add-difficulty.json#/properties/label")

### label Type

`string`

### label Default Value

The default value is:

```json
"LABEL_DIFFICULTY_CUSTOM"
```

## wage

Wage percent when an employee levels up (lower cheaper).

`wage`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-wage.md "add-difficulty.json#/properties/wage")

### wage Type

`number`

### wage Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**minimum**: the value of this number must greater than or equal to: `0.01`

### wage Default Value

The default value is:

```json
0.196
```

## ccu\_cost

Server rent costs per user (lower cheaper).

`ccu_cost`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-ccu_cost.md "add-difficulty.json#/properties/ccu_cost")

### ccu\_cost Type

`number`

### ccu\_cost Constraints

**multiple of**: the value of this number must be a multiple of: `0.001`

**minimum**: the value of this number must greater than or equal to: `0.01`

### ccu\_cost Default Value

The default value is:

```json
0.186
```

## digital\_store

Digital stores configuration.

`digital_store`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-digital_store.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-digital_store.md "add-difficulty.json#/properties/digital_store")

### digital\_store Type

`object` ([Details](add-difficulty-properties-digital_store.md))

## game\_sales

Game sales configuration.

`game_sales`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-game_sales.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-game_sales.md "add-difficulty.json#/properties/game_sales")

### game\_sales Type

`object` ([Details](add-difficulty-properties-game_sales.md))

## postmortem

Post-mortem configuration (game report).

`postmortem`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-postmortem.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-postmortem.md "add-difficulty.json#/properties/postmortem")

### postmortem Type

`object` ([Details](add-difficulty-properties-postmortem.md))

## game\_of\_the\_year

Game of the year configuration.

`game_of_the_year`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-game_of_the_year.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-game_of_the_year.md "add-difficulty.json#/properties/game_of_the_year")

### game\_of\_the\_year Type

`object` ([Details](add-difficulty-properties-game_of_the_year.md))

## platform

Platforms configuration.

`platform`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-platform.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-platform.md "add-difficulty.json#/properties/platform")

### platform Type

`object` ([Details](add-difficulty-properties-platform.md))

## contract

Contracts configuration.

`contract`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-contract.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-contract.md "add-difficulty.json#/properties/contract")

### contract Type

`object` ([Details](add-difficulty-properties-contract.md))

## happiness

Employee happiness configuration.

`happiness`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-happiness.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-happiness.md "add-difficulty.json#/properties/happiness")

### happiness Type

`object` ([Details](add-difficulty-properties-happiness.md))

## notation

Score configuration.

`notation`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-notation.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-notation.md "add-difficulty.json#/properties/notation")

### notation Type

`object` ([Details](add-difficulty-properties-notation.md))

## mortgage

Mortgage configuration.

`mortgage`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-mortgage.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-mortgage.md "add-difficulty.json#/properties/mortgage")

### mortgage Type

`object` ([Details](add-difficulty-properties-mortgage.md))

## currency

Currency configuration.

`currency`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-currency.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-currency.md "add-difficulty.json#/properties/currency")

### currency Type

`object` ([Details](add-difficulty-properties-currency.md))

## taxes

Taxes applied to the sales (the lower the better.

`taxes`

*   is required

*   Type: `number`

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-taxes.md "add-difficulty.json#/properties/taxes")

### taxes Type

`number`

### taxes Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.05`

### taxes Default Value

The default value is:

```json
0.55
```

## publishing

Publishing offers configuration.

`publishing`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-publishing.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-publishing.md "add-difficulty.json#/properties/publishing")

### publishing Type

`object` ([Details](add-difficulty-properties-publishing.md))

## concurrent

Competitors configuration.

`concurrent`

*   is required

*   Type: `object` ([Details](add-difficulty-properties-concurrent.md))

*   cannot be null

*   defined in: [Add a difficulty](add-difficulty-properties-concurrent.md "add-difficulty.json#/properties/concurrent")

### concurrent Type

`object` ([Details](add-difficulty-properties-concurrent.md))
