export class Product {
  constructor(
    public readonly id: number,
    public name: string,
    public price: number,
    public stock: number
  ) {}

  decreaseStock(quantity: number) {
    if (this.stock < quantity) {
      throw new Error("Not enough stock");
    }
    this.stock -= quantity;
  }
}
