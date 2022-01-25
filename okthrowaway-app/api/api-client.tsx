import { Product } from "../types/Product";
import { ShoppingList } from "../types/ShoppingList";
import { get, post, httpDelete } from "./make-request";

export async function getShoppingLists(userId: number) {
    return await get<ShoppingList>(`shoppinglist/${userId}`);
}

export async function getProducts(listId: number){
    return await get<Product>(`shoppinglist/products/${listId}`);
}


export async function getAllProducts(){
    return await get<Product>(`products/list`);
}

export async function addProductToList(listId: number, product: number){
    return await post(`shoppinglist/addproduct`,
    {
        listId: listId,
        product: product,
        isBarcode: false
    });
}

export async function addShoppingList(userId: number, listName: string){
    return await post(`shoppinglist/add`, {
        userId: userId,
        name: listName
    });
}

export async function removeProductFromList(listId: number, productId: number, removeAll: boolean) {
    return await post(`shoppinglist/removeproduct`, {
        listId: listId,
        productId: productId,
        removeAll: removeAll
    });
}

export async function deleteList(listId: number){
    return await httpDelete(`shoppinglist/delete/${listId}`)
}