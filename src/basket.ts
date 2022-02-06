import { Product } from "./product";

export class Basket {
    productPrices: any = {};
    constructor(
        private promotionalRules: any,
        private products: Product[]
    ) {
        this.productPrices = this.productsWithPrices(this.products);
    }

    public total(order: any) {
        return Number(this.applyDiscounts(this.sumWithoutDiscounts(order), order).toFixed(2));
    }

    private sumWithoutDiscounts(order: any) {
        return Object.keys(order).reduce((total, key: any) => {
            return total + this.costFor(key, order[key]);
        }, 0);
    }

    private applyDiscounts(costBeforeDiscounts: number, order: any) {
        return this.promotionalRules.reduce((currentTotal: any, rule: any) => {
            return rule.apply(currentTotal, order, this.productPrices);
        }, costBeforeDiscounts);
    }

    private costFor(code: string, quantity: number) {
        return this.productPrices[code] * quantity;
    }

    private productsWithPrices(products: Product[]) {
        return products.reduce((productsWithPrices: any, product) => {
            productsWithPrices[product.code] = product.price;
            return productsWithPrices;
        }, {});
    }
}