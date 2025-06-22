import { Address } from "./domain/value_objects/address";
import { Customer } from "./domain/entity/customer";
import { Order } from "./domain/entity/order";
import { OrderItem } from "./domain/entity/order_item";

let customer = new Customer(1,"teste");
const address = new Address("123 Main St", "Springfield", "IL", "62701");

customer.setAddress(address);

const item1 = new OrderItem(101, 2, 19.99, "Widget A");
const item2 = new OrderItem(102, 1, 29.99, "Widget B");
const item3 = new OrderItem(103, 3, 9.99, "Widget C");

const order = new Order(1, customer.getID(), [item1, item2, item3]);