import { Cart } from "../../domain/cart/cart";
import { CartItem } from "../../domain/cart/cartitem";

export class CartMapper {
  static toCreatePrisma(cart: Cart) {
    return {
      user_id: cart.userId,
      cart_items: {
        create: cart.items.map(i => ({
          product_id: i.productId,
          quantity: i.quantity,
        })),
      },
    };
  }

  static toUpdatePrisma(cart: Cart) {
    return {
      cart_items: {
        deleteMany: {}, // chỉ dùng trong update
        create: cart.items.map(i => ({
          product_id: i.productId,
          quantity: i.quantity,
        })),
      },
    };
  }

  static toDomain(raw: any): Cart {
    return new Cart(
      raw.id,
      raw.user_id,
      raw.cart_items.map(ci => new CartItem(ci.product_id, ci.quantity))
    );
  }
}
