import { CartItem } from "./cartitem";

export class Cart {
  constructor(
    public readonly id: number,
    public readonly userId: string,
    public items: CartItem[] = [],
  ) {}

  addProduct(productId: number, quantity = 1) {
    const existing = this.items.find(i => i.productId === productId);

    if (existing) {
      existing.increase(quantity);
    } else {
      this.items.push(new CartItem(productId, quantity));
    }
  }

  removeProduct(productId: number) {
    this.items = this.items.filter(i => i.productId !== productId);
  }
}
