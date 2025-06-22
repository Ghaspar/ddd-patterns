import { Address } from "../value_objects/address";
export class Customer{
    constructor(
        public id: number,
        public name: string,
        public email?: string,
        public phone?: string,
        public address?: Address
    ) {}
    

    getID(): number {
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
}