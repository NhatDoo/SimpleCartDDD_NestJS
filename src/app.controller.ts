// import { Controller, Get, Param, Post, Body, Delete, Put } from "@nestjs/common";
// import { AppService } from "./app.service";

// @Controller("cart")
// export class AppController {
//   constructor(private readonly appService: AppService) {}

//   // Lấy giỏ hàng theo user
//   @Get(":userId")
//   async getCart(@Param("userId") userId: string) {
//     return this.appService.getCartByUserId(userId);
//   }

//   // Thêm hoặc cập nhật 1 item vào giỏ hàng
//   @Post("item")
//   async addItem(@Body() body: any) {
//     return this.appService.addItemToCart(body.userId, body.productId, body.quantity);
//   }

//   // Xóa 1 item khỏi giỏ hàng
//   @Delete("item/:id")
//   async deleteItem(@Param("id") id: number) {
//     return this.appService.deleteCartItem(id);
//   }

//   // Xóa toàn bộ giỏ hàng
//   @Delete(":cartId/clear")
//   async clearCart(@Param("cartId") cartId: number) {
//     return this.appService.clearCart(cartId);
//   }
// }
