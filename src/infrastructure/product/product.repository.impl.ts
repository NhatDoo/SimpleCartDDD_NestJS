import { IProductRepository } from "../../domain/products/productrepo";
import { PrismaService } from "../prisma/prisma.service";
import { Product } from "../../domain/products/product";
import { Injectable } from "@nestjs/common";



@Injectable()
export class ProductRepositoryImpl implements IProductRepository {
  constructor(private prisma: PrismaService) {}

  async findById(id: number): Promise<Product | null> {
    const raw = await this.prisma.products.findUnique({ where: { id } });
    if (!raw) return null;

    return new Product(raw.id, raw.name, raw.price.toNumber(), raw.stock ?? 0);
  }

  async updateStock(id: number, newStock: number): Promise<Product> {
    const raw = await this.prisma.products.update({
      where: { id },
      data: { stock: newStock },
    });

    // Map Prisma object về domain Product
    return new Product(raw.id, raw.name, raw.price.toNumber(), raw.stock ?? 0);
  }
}
