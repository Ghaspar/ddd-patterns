import { OrderItem } from './order_item';

export class Order {

    constructor(
        public readonly id: number,
        public readonly customerId: number,
        public readonly items: OrderItem[] = [],
    ) {}
    
    validate(): void {
        if (!this.id || !this.customerId || !this.items.length) {
        throw new Error("Invalid order data.");
        }
        this.items.forEach(item => {
        if (!item.productId || item.quantity <= 0) {
            throw new Error("Each item must have a valid product ID and quantity.");
        }
        });
    }
    
    toString(): string {
        return `Order ID: ${this.id}, Customer ID: ${this.customerId}`;
    }
}