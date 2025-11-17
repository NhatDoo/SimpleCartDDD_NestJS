import { ICartRepository } from "../../../domain/cart/cartrepo";

export class GetCartUseCase {
  constructor(private repo: ICartRepository) {}

  execute(userId: string) {
    return this.repo.findByUserId(userId);
  }
}
