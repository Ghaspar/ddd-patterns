import { Address } from "../value_objects/address";
export class Customer{
    constructor(
        private id: string,
        private name: string,
        private email?: string,
        private phone?: string,
        private address?: Address,
        private active: boolean = true
    ) {
        this.validate();
    }
    
    validate(): void {
        if (!this.id) {
            throw new Error("ID é requerido");
        }
        if (!this.name) {
            throw new Error("Nome é requerido");
        }
    }

    getID(): string {
        return this.id;
    }
    getName(): string {
        return this.name;
    }
    getEmail(): string {
        return this.email ?? "";
    }
    getPhone(): string {
        return this.phone ?? "";
    }

    setName(name: string): void {
        this.name = name;
    }
    setEmail(email: string): void {
        this.email = email;
    }

    setAddress(address: Address) {
        this.address = address;
    }

    setActivate(): void {
        if (this.address === undefined) {
            throw new Error("Address is mandatory to activate a customer");
          }
          this.active = true;
    }
    setDeactivate(): void {
          this.active = false;
    }

    isActive(): boolean {
        return this.active;
    }
}