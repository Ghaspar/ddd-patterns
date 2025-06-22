export class OrderItem {
    constructor(
        public readonly productId: number,
        public readonly quantity: number,
        public readonly price: number,
        public readonly name: string,
    ) {}

    validate(): void {
        if (!this.productId || this.quantity <= 0 || this.price <= 0) {
            throw new Error("Invalid order item data.");
        }
    }

    getTotalPrice(): number {
        return this.quantity * this.price;
    }

    toString(): string {
        return `Product ID: ${this.productId}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
}