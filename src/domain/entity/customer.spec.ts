import { Address } from "../value_objects/address";
import { Customer } from "./customer";

describe('customer entity | unity test', () => {

    it("Deve dar erro quando id for vazio", () =>{
        expect(() => {
            new Customer("", "John Doe");
        }).toThrow("ID é requerido");
    })

    it("Deve dar erro quando nome for vazio", () =>{
        expect(() => {
            new Customer("123", "");
        }).toThrow("Nome é requerido");
    });

    it("Deve mudar o nome", () =>{
        const customer = new Customer("123", "John Doe");

        customer.setName("Jane Doe");
        
        expect(customer.getName()).toBe("Jane Doe");
    });

    it("Usuário deve ser ativo", () =>{
        const customer = new Customer("1", "John Doe");
        const address = new Address("123 Main St", "Springfield", "IL", "62701");

        customer.setAddress(address);
        customer.setActivate();
        
        expect(customer.isActive()).toBe(true);
    });

    it("Deve disparar erro quando endereço for undefined quando ativar um customer", () =>{

        expect(() => {
            const customer = new Customer("1", "John Doe");
            customer.setActivate();
        }).toThrow("Address is mandatory to activate a customer");
       
    });

    it("Usuário desativar", () =>{
        const customer = new Customer("1", "John Doe");

        customer.setDeactivate();
        
        expect(customer.isActive()).toBe(false);
    });

});