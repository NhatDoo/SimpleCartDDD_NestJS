import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ICartRepository } from "../../domain/cart/cartrepo";
import { CartMapper } from "./cartmapper";
import { Cart } from "../../domain/cart/cart";

@Injectable()
export class CartRepositoryImpl implements ICartRepository {
  constructor(private prisma: PrismaService) {}

async findByUserId(userId: string): Promise<Cart | null> {
  const raw = await this.prisma.carts.findUnique({
    where: { user_id: userId },
    include: { cart_items: true },
  });

  if (!raw) return null;

  return CartMapper.toDomain(raw);
}


async save(cart: Cart) {
  if (cart.id) {
    // UPDATE
    await this.prisma.carts.update({
      where: { id: cart.id },
      data: CartMapper.toUpdatePrisma(cart),
    });
  } else {
    await this.prisma.carts.create({
      data: CartMapper.toCreatePrisma(cart),
    });
  }}
}
