import { IGoodsItem } from "./goods-item.model";

export interface ISubcategory {
    id: string;
    name: string;
    items?: IGoodsItem[];
}
