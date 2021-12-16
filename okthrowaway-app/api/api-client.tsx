import { Product } from "../types/Product";
import { ShoppingList } from "../types/ShoppingList";
import { get, post } from "./make-request";

export async function getShoppingLists(userId: number) {
    return await get<ShoppingList>(`shoppinglist/${userId}`);
}

export async function getProducts(listId: number){
    return await get<Product>(`products/${listId}`);
}


export async function getAllProducts(){
    return await get<Product>(`products/list`);
}


export async function addShoppingList(userId: number, listName: string){
    return await post(`shoppinglist/add`, {
        userId: userId,
        name: listName
    });
}