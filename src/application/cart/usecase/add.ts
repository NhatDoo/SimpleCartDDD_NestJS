import { ICartRepository } from "../../../domain/cart/cartrepo";
import { IProductRepository } from "../../../domain/products/productrepo";
import { Cart } from "../../../domain/cart/cart";

export class AddProductToCartUseCase {
  constructor(
    private readonly cartRepo: ICartRepository,
    private readonly productRepo: IProductRepository
  ) {}

  async execute(input: { userId: string; productId: number; quantity: number }) {
    const { userId, productId, quantity } = input;

    // 1. Lấy product từ DB
    const product = await this.productRepo.findById(productId);
    if (!product) throw new Error("Product not found");

    // 2. Kiểm tra tồn kho
    if (product.stock < quantity) {
      throw new Error("Not enough stock");
    }

    // 3. Giảm stock trong domain
    product.decreaseStock(quantity);

    // 4. Lưu stock vào DB
    await this.productRepo.updateStock(product.id, product.stock);

    // 5. Lấy cart hoặc tạo mới
    let cart = await this.cartRepo.findByUserId(userId);
    if (!cart) {
      cart = new Cart(0, userId, []);
    }

    // 6. Thêm product vào cart
    cart.addProduct(productId, quantity);

    // 7. Lưu cart
    await this.cartRepo.save(cart);

    return cart;
  }
}

