import { Checkout } from "./checkout";
import { ProductDiscount } from "./discounts/product.discount";
import { PercentDiscount } from "./discounts/percent.discount";
import { Product } from "./product";

(function () {
    const product = new Product('001', 'Curry Sauce', 1.95);
    const product2 = new Product('002', 'Pizza', 5.99);
    const product3 = new Product('003', 'Men’s T-Shirt', 25.00);
    const products = [product, product2, product3];

    const tenPercentDiscount = new PercentDiscount(10, 30);
    const pizzaDiscount = new ProductDiscount(product2.code, 2, 33.38);

    const promotionalRules = [tenPercentDiscount, pizzaDiscount];

    const checkout = new Checkout(promotionalRules, products);
    checkout.scan(product.code)
    checkout.scan(product2.code)
    checkout.scan(product2.code)
    checkout.scan(product3.code)
    checkout.total()
})()