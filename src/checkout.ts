import { Basket } from "./basket";
import { Product } from "./product";
export class Checkout {
    order: any = {};
    productsMap: Map<string, Product>;
    basket: Basket;
    constructor(
        private promotionalRules: any,
        private products: Product[]
    ) {
        this.productsMap = new Map(this.products.map(product => [product.code, product]));
        this.basket = new Basket(promotionalRules, products);
    }

    public scan(code: string, productCounts: number = 1) {
        if (this.itemInProducts(code) && productCounts > 0) {
            this.order[code] = this.order && this.order[code] ? this.order[code] + productCounts : productCounts;
        } else {
            console.error(`Product with code ${code} not found`);
        }
    }

    public total() {
        console.log('Total:', new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(this.basket.total(this.order)))
    }

    public clearCart() {
        this.order = {};
    }

    private itemInProducts(code: string): Product | undefined {
        return this.productsMap.get(code);
    }
}