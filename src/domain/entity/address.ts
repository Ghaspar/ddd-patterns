export class Address {
  constructor(
    public readonly street: string,
    public readonly city: string,
    public readonly state: string,
    public readonly zipCode: string
  ) {}

  validate(): void {
    if (!this.street || !this.city || !this.state || !this.zipCode) {
      throw new Error("All address fields must be provided.");
    }
    if (!/^\d{5}(-\d{4})?$/.test(this.zipCode)) {
      throw new Error("Invalid zip code format. Use '12345' or '12345-6789'.");
    }
    if (!/^[a-zA-Z\s]+$/.test(this.city) || !/^[a-zA-Z\s]+$/.test(this.state)) {
      throw new Error("City and state must contain only letters and spaces.");
    }
    if (!/^[a-zA-Z0-9\s,.'-]+$/.test(this.street)) {
      throw new Error("Street must contain only letters, numbers, spaces, and common punctuation.");
    }
  }

  toString(): string {
    return `${this.street}, ${this.city}, ${this.state} ${this.zipCode}`;
  }
}