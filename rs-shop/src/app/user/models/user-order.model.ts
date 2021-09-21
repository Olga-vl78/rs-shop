import { IUserOrderItem } from "./user-order-item.model";

export interface IUserOrder {
    items: IUserOrderItem[],
    details: {
        name: string,
        address: string,
        phone: string,
        timeToDeliver: string,
        comment: string
    }
    id?: string
}

