import { ProductCategory } from "./productCategory";

export interface Product {
    id: number;
    name: string;
    quantity?: number;
    barcode?: string;
    category?: ProductCategory;
}