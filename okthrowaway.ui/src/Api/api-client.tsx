import { ShoppingList } from "../types/ShoppingList";
import { Product } from "../types/Product";
import { get, post } from "./make-request";

export async function getProducts(): Promise<Product[]> {
    return await get<Product>('products/list');
}

export async function getShoppingLists(userId: number): Promise<Product[]> {
    return await get<ShoppingList>(`shoppinglist/${userId}`);
}

export async function addProductToList(product: string, listId: number, isBarcode: boolean) {
    return await post('shoppinglist/addproduct', {
        product: product.toString(),
        listId: Number(listId),
        isBarcode: isBarcode
    });
}
