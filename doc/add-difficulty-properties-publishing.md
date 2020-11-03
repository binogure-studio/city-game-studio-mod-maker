## publishing Type

`object` ([Details](add-difficulty-properties-publishing.md))

# undefined Properties

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                           |
| :------------------------ | --------- | -------- | -------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- |
| [prepayment](#prepayment) | `number`  | Required | cannot be null | [Add a difficulty](add-difficulty-properties-publishing-properties-prepayment.md "add-difficulty.json#/properties/publishing/properties/prepayment") |
| [payment](#payment)       | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-publishing-properties-payment.md "add-difficulty.json#/properties/publishing/properties/payment")       |
| [royalties](#royalties)   | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-publishing-properties-royalties.md "add-difficulty.json#/properties/publishing/properties/royalties")   |
| [proposals](#proposals)   | `integer` | Required | cannot be null | [Add a difficulty](add-difficulty-properties-publishing-properties-proposals.md "add-difficulty.json#/properties/publishing/properties/proposals")   |
| [ratios](#ratios)         | `array`   | Required | cannot be null | [Add a difficulty](add-difficulty-properties-publishing-properties-ratios.md "add-difficulty.json#/properties/publishing/properties/ratios")         |

## prepayment

Percent of the publishing offer to pay in advance.


`prepayment`

-   is required
-   Type: `number`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-publishing-properties-prepayment.md "add-difficulty.json#/properties/publishing/properties/prepayment")

### prepayment Type

`number`

### prepayment Constraints

**multiple of**: the value of this number must be a multiple of: `0.01`

**maximum**: the value of this number must smaller than or equal to: `0.95`

**minimum**: the value of this number must greater than or equal to: `0.05`

### prepayment Default Value

The default value is:

```json
0.25
```

## payment

Maximum publishing offer value.


`payment`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-publishing-properties-payment.md "add-difficulty.json#/properties/publishing/properties/payment")

### payment Type

`integer`

### payment Constraints

**multiple of**: the value of this number must be a multiple of: `10000`

**maximum**: the value of this number must smaller than or equal to: `999999999`

**minimum**: the value of this number must greater than or equal to: `500000`

### payment Default Value

The default value is:

```json
1000000
```

## royalties

Publishing offer royalties (in percent).


`royalties`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-publishing-properties-royalties.md "add-difficulty.json#/properties/publishing/properties/royalties")

### royalties Type

`integer`

### royalties Constraints

**maximum**: the value of this number must smaller than or equal to: `99`

**minimum**: the value of this number must greater than or equal to: `1`

### royalties Default Value

The default value is:

```json
25
```

## proposals

Number of indie companies who are willing to respond.


`proposals`

-   is required
-   Type: `integer`
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-publishing-properties-proposals.md "add-difficulty.json#/properties/publishing/properties/proposals")

### proposals Type

`integer`

### proposals Constraints

**maximum**: the value of this number must smaller than or equal to: `15`

**minimum**: the value of this number must greater than or equal to: `1`

### proposals Default Value

The default value is:

```json
4
```

## ratios

Efficiency of the previous parameters (the higher the better).


`ratios`

-   is required
-   Type: an array where each item follows the corresponding schema in the following list:

    1.  [Untitled number in Add a difficulty](add-difficulty-properties-publishing-properties-ratios-items-0.md "check type definition")
    2.  [Untitled number in Add a difficulty](add-difficulty-properties-publishing-properties-ratios-items-1.md "check type definition")
-   cannot be null
-   defined in: [Add a difficulty](add-difficulty-properties-publishing-properties-ratios.md "add-difficulty.json#/properties/publishing/properties/ratios")

### ratios Type

an array where each item follows the corresponding schema in the following list:

1.  [Untitled number in Add a difficulty](add-difficulty-properties-publishing-properties-ratios-items-0.md "check type definition")
2.  [Untitled number in Add a difficulty](add-difficulty-properties-publishing-properties-ratios-items-1.md "check type definition")

### ratios Constraints

**maximum number of items**: the maximum number of items for this array is: `2`

**minimum number of items**: the minimum number of items for this array is: `2`
