export class CartItem {
  constructor(
    public readonly productId: number,
    public quantity: number,
  ) {}

  increase(qty = 1) {
    this.quantity += qty;
  }

  decrease(qty = 1) {
    this.quantity -= qty;
    if (this.quantity < 0) this.quantity = 0;
  }
}
