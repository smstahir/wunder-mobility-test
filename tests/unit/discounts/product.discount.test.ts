import { ProductDiscount } from "../../../src/discounts/product.discount";

describe("Product Discount Tests", () => {
    const fiftyPercentDiscount = new ProductDiscount("A", 3, 50);
    test("should be defined", () => {
        expect(fiftyPercentDiscount).toBeDefined();
    })
    test("should apply the discount on orders which contains more than the number of products and returns the final discounted price", () => {
        expect(fiftyPercentDiscount.apply(20, { A: 4 }, { A: 5 })).toBe(10);
    });
    test("should apply no discount on orders which contains less than the number of products and returns the original price", () => {
        expect(fiftyPercentDiscount.apply(10, { A: 2 }, { A: 5 })).toBe(10);
    });
});