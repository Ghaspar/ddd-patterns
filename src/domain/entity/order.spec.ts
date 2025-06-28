import { Order } from "./order";
import { OrderItem } from "./order_item";

describe('Order entity | unity test', () => {

    it("Deve criar um pedido com ID válido", () => {
        
        expect(()=>{
            const order = new Order(undefined as any, 123, [], 0);

        }).toThrow('ID é requerido');
    });

    it("Deve criar um pedido com customerID válido", () => {
        
        expect(()=>{
            const order = new Order(1, undefined as any, [], 0);

        }).toThrow('customerID é requerido');
    });

    // it("Deve validar a quantidade de item maior que zero", () =>{

    //     expect(() => {
    //         const order = new Order(1, 123, [], 0);
    //         order.setTotal();
    //     }).toThrow("Quantidade de itens deve ser maior que zero");
       
    // });

    it("Deve calcular o total com base nos OrderItems", () => {
        const items = [
          new OrderItem(1, 2, 100, "Produto A"), // 200
          new OrderItem(2, 3, 50, "Produto B"),  // 150
          new OrderItem(3, 1, 10, "Produto C"),  // 10
        ];
    
        const order = new Order(1, 123, items);
        const total = order.setTotal();
    
        expect(total).toBe(360);
      });
    
    
      it("Deve calcular corretamente mesmo com itens com quantidade ou preço mínimo válido", () => {
        const items = [
          new OrderItem(1, 1, 0.01, "Produto simbólico"), 
        ];
    
        const order = new Order(1, 123, items);
        const total = order.setTotal();
    
        expect(total).toBeCloseTo(0.01);
      });
   
});