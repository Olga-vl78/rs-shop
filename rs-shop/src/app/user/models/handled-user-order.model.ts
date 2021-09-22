import { IGoodsItem } from 'src/app/shared/models/goods-item.model';

export interface IHandledUserOrder {
  items: IGoodsItem[];
  details: {
    name: string;
    address: string;
    phone: string;
    timeToDeliver: string;
    comment: string;
  };
  id?: string;
}
