import { Product } from "./product";

export interface IProductRepository {
  findById(id: number): Promise<any>;
  updateStock(id: number, newStock: number): Promise<Product>;
}
