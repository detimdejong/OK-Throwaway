import { Product } from "../types/Product";

export default function GetProducts(): Promise<Product[]> {
    return fetch('https://localhost:5001/api/products/list')
            .then(res => res.json())
            .then(res => {
                    return res as Product[]
            })
}

