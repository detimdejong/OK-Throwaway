import { ShoppingList } from "../types/ShoppingList";
import { get } from "./make-request";

export async function getShoppingLists(userId: number) {
    return await get<ShoppingList>(`shoppinglist/${userId}`);
}