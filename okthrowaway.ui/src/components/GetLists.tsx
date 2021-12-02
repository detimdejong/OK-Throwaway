import { List } from "../types/List";

export default function GetLists(): Promise<List[]> {
    return fetch('https://localhost:5001/api/shoppinglist/1')
            .then(res => res.json())
            .then(res => {
                    return res as List[]
            })
}