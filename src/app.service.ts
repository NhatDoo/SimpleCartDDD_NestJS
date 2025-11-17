// import { Injectable } from "@nestjs/common";
// import { CartPrismaRepository } from "./infastructure/repository/cartrepo";
// import { CartItemPrismaRepository } from "./infastructure/repository/cartitemrepo";
// import { Cart } from "./domain/cart/cart.domain";
// import { CartItem } from "./domain/cartitem/cartitem.domain";

// @Injectable()
// export class AppService {
//   constructor(
//     private readonly cartRepo: CartPrismaRepository,
//     private readonly cartItemRepo: CartItemPrismaRepository
//   ) {}

//   async getCartByUserId(userId: string) {
//     return await this.cartRepo.findByUserId(userId);
//   }

//   async addItemToCart(userId: string, productId: number, quantity: number) {
//     let cart = await this.cartRepo.findByUserId(userId);

//     // Nếu chưa có cart → tạo cart mới
//     if (!cart) {
//       cart = new Cart(null, userId, []);
//       await this.cartRepo.save(cart);
//     }

//     // Kiểm tra item đã tồn tại chưa
//     let item = await this.cartItemRepo.findByCartIdAndProductId(cart.id!, productId);

//     if (item) {
//       item.quantity += quantity;
//     } else {
//       item = new CartItem(null , productId, quantity, cart.id!);
//     }

//     // Lưu item
//     await this.cartItemRepo.save(item);

//     return this.cartRepo.findByUserId(userId); // Trả lại giỏ hàng mới nhất
//   }

//   async deleteCartItem(id: number) {
//     await this.cartItemRepo.delete(id);
//     return { message: "Item deleted" };
//   }

//   async clearCart(cartId: number) {
//     await this.cartRepo.clearCart(cartId);
//     return { message: "Cart cleared" };
//   }
// }
