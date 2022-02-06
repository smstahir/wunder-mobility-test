import { Product } from '../../src/product'

describe("Product Tests", () => {
    const product = new Product('001', 'Curry Sauce', 1.95);
    test("should be defined", () => {
        expect(product).toBeDefined();
    })
    test("should return the price of the product", () => {
        expect(product.price).toBe(1.95);
    });
    test("should return the code of the product", () => {
        expect(product.code).toBe('001');
    });
});
