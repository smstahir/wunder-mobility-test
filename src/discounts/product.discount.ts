export class ProductDiscount {
    constructor(
        private productCode: string,
        private minimumItems: number,
        private discount: number
    ) { }

    public apply(currentTotal: number, order: any, productPrices: any): number {
        if (this.shouldDiscountBeApplied(order)) {
            return currentTotal - this.applyDiscount(order, productPrices);
        }
        return currentTotal;
    }

    private shouldDiscountBeApplied(order: any): boolean {
        return order[this.productCode] >= this.minimumItems;
    }

    private applyDiscount(order: any, productPrices: any): number {
        return productPrices[this.productCode] * this.discount / 100 * order[this.productCode];
    }
}