import { PercentDiscount } from "../../../src/discounts/percent.discount";

describe("Percent Discount Tests", () => {
    const tenPercentDiscount = new PercentDiscount(15, 10);
    test("should be defined", () => {
        expect(tenPercentDiscount).toBeDefined();
    });
    test("should apply the percent discount on values over the minimum and returns the final price", () => {
        expect(tenPercentDiscount.apply(15, {}, {})).toBe(12.75);
    });
    test("should apply no discount on values below the minimum and returns the original price", () => {
        expect(tenPercentDiscount.apply(3, {}, {})).toBe(3);
    });
});