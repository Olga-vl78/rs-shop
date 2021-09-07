export interface IGoodsItem {
    id: string;
    name: string;
    imageUrls: [string];
    rating: number;
    availableAmount: number;
    price: number;
    description: string;
    isInCart: boolean;
    isFavorite: boolean;
}
