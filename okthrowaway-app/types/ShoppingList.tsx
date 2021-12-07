import { Product } from "./Product";

export interface ShoppingList {
    name: string;
    products?: Product[];
}