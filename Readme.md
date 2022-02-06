
## Wunder Mobility Test: A Checkout System

A checkout system that can scan items in any order and apply certain promotional
campaigns to give discounts. The system needs to be flexible regarding the promotional rules


## Authors

- [@Shah Tahir](https://github.com/smstahir)


## Features

- Add Products
- Add Percentage Discounts
- Add Individual Product Discounts
- Scan Products
- Apply Promotions
- Print Final Bill
- Clear Cart


## Usage/Examples

```typescript
    // first create products catalogue
    const product = new Product('001', 'Curry Sauce', 1.95);
    const product2 = new Product('002', 'Pizza', 5.99);
    const product3 = new Product('003', 'Men’s T-Shirt', 25.00);
    const products = [product, product2, product3];

    // create your own promotional rules
    const tenPercentDiscount = new PercentDiscount(10, 30);
    const pizzaDiscount = new ProductDiscount(product2.code, 2, 33.38);
    const promotionalRules = [tenPercentDiscount, pizzaDiscount];

    // create a checkout object and pass promotional rules and products 
    // array as a constructor argument
    const checkout = new Checkout(promotionalRules, products);
    // scan products you wanna order
    checkout.scan(product.code)
    checkout.scan(product2.code)
    checkout.scan(product2.code)
    checkout.scan(product3.code)
    // returns the final price
    checkout.total()
```
# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- install project packages by running npm i in CLI

## Running Program
To run program, run the following command

```bash
  npm run start
```


## Running Tests

To run tests, run the following command

```bash
  npm run test
```