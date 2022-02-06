export class PercentDiscount {
    constructor(
        private percentDiscount: number,
        private threshold: number
    ) { }

    public apply(currentTotal: number, order: any, productPrices: any): number {
        if (this.shouldDiscountBeApplied(currentTotal)) {
             return currentTotal - this.applyDiscount(currentTotal);
        }
        return currentTotal;
    }

    private shouldDiscountBeApplied(currentTotal: number): boolean {
        return currentTotal > this.threshold;
    }

    private applyDiscount(currentTotal: number): number {
        return currentTotal * this.percentDiscount / 100;
    }
}