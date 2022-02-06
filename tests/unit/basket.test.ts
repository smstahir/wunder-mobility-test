import { Basket } from '../../src/basket';
import { ProductDiscount } from '../../src/discounts/product.discount';
import { PercentDiscount } from '../../src/discounts/percent.discount';
import { Product } from '../../src/product';

describe("Basket Tests", () => {
    const product = new Product('001', 'Curry Sauce', 1.95);
    const product2 = new Product('002', 'Pizza', 5.99);
    const product3 = new Product('003', 'Men’s T-Shirt', 25.00);
    const products = [product, product2, product3];
    const tenPercentDiscount = new PercentDiscount(10, 30);
    const pizzaDiscount = new ProductDiscount(product2.code, 2, 33.38);
    const promotionalRules = [tenPercentDiscount, pizzaDiscount];

    const basket = new Basket(promotionalRules, products);

    test("should be defined", () => {
        expect(basket).toBeDefined();
    });
    test("should calculate the basket without any discounts", () => {
        expect(basket.total({ "001": 1, "002": 2 })).toBe(9.93);
    });
    test("should calculate the basket applying the given discounts", () => {
        expect(basket.total({ "001": 1, "002": 3 })).toBe(13.92);
    });
});