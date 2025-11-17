import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { AddProductToCartUseCase } from "../../application/cart/usecase/add";
import { GetCartUseCase } from "../../application/cart/usecase/get";

@Controller("cart")
export class CartController {
  constructor(
    private readonly addProduct: AddProductToCartUseCase,
    private readonly getCart: GetCartUseCase,
  ) {}

  @Post("add")
  add(@Body() body: { userId: string; productId: number; quantity: number }) {
    return this.addProduct.execute(body);
  }

  @Get()
  get(@Query("userId") userId: string) {
    return this.getCart.execute(userId);
  }
}
