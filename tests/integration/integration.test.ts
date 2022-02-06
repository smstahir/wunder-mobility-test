import { Checkout } from '../../src/checkout'
import { Product } from '../../src/product'
import { ProductDiscount } from '../../src/discounts/product.discount'
import { PercentDiscount } from '../../src/discounts/percent.discount'

describe('Application Integration Tests', () => {
    const product = new Product('001', 'Curry Sauce', 1.95);
    const product2 = new Product('002', 'Pizza', 5.99);
    const product3 = new Product('003', 'Men’s T-Shirt', 25.00);
    const products = [product, product2, product3];

    const tenPercentDiscount = new PercentDiscount(10, 30);
    const pizzaDiscount = new ProductDiscount(product2.code, 2, 33.38);

    const promotionalRules = [tenPercentDiscount, pizzaDiscount];

    const checkout = new Checkout(promotionalRules, products);

    afterEach(() => {
        checkout.clearCart()
    });

    test('10% discount should be applied on the orders above £30', () => {
        checkout.scan(product.code)
        checkout.scan(product2.code)
        checkout.scan(product3.code)
        expect(checkout.basket.total(checkout.order)).toBe(29.65);
    });
    test('discount should be applied on the orders when two pizzas are ordered', () => {
        checkout.scan(product.code)
        checkout.scan(product2.code)
        checkout.scan(product2.code)
        expect(checkout.basket.total(checkout.order)).toBe(9.93);
    });
    test('multiple discounts be applied on the order', () => {
        checkout.scan(product.code)
        checkout.scan(product2.code)
        checkout.scan(product2.code)
        checkout.scan(product3.code)
        expect(checkout.basket.total(checkout.order)).toBe(31.04);
    });
})