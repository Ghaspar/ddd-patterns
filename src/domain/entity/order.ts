import { validate } from 'uuid';
import { OrderItem } from './order_item';

export class Order {

    constructor(
        private readonly id: number,
        private readonly customerId: number,
        private readonly items: OrderItem[] = [],
        private total: number = 0
    ) {

        this.validate();
    }
    

    validate(): void {
        if (!this.id) {
            throw new Error('ID é requerido');
        }
        if (!this.customerId) {
            throw new Error('customerID é requerido');
        }
        
    }

    setTotal(): number {
        return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }
}