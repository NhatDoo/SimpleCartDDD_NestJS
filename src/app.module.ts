import { Module } from "@nestjs/common";
import { PrismaService } from "./infrastructure/prisma/prisma.service";
import { CartRepositoryImpl } from "./infrastructure/cart/cart.repository.impl";
import { AddProductToCartUseCase } from "./application/cart/usecase/add";
import { GetCartUseCase } from "./application/cart/usecase/get";
import { CartController } from "./api/cart/cart.controller";
import { ProductRepositoryImpl } from "./infrastructure/product/product.repository.impl";

@Module({
  controllers: [CartController],
  providers: [
    PrismaService,

    { provide: "CartRepository", useClass: CartRepositoryImpl },
    { provide: "ProductRepository", useClass: ProductRepositoryImpl },

    {
      provide: AddProductToCartUseCase,
      useFactory: (cartRepo, productRepo) =>
        new AddProductToCartUseCase(cartRepo, productRepo),
      inject: ["CartRepository", "ProductRepository"],
    },

    {
      provide: GetCartUseCase,
      useFactory: (cartRepo) => new GetCartUseCase(cartRepo),
      inject: ["CartRepository"],
    },
  ],
})
export class AppModule {}

