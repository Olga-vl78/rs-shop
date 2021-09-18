import { Pipe, PipeTransform } from '@angular/core';
import { SortOrder, SortParam } from 'src/app/core/services/pages-data.service';
import { IGoodsItem } from 'src/app/shared/models/goods-item.model';



@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(
    array: IGoodsItem[] | null,
    sortingMode: SortOrder | null,
    param: SortParam | null,
  ): IGoodsItem[] {
    if (array && sortingMode && param) {
      return array.sort((a: IGoodsItem, b: IGoodsItem) => {
        const ac = a[param as keyof IGoodsItem] as number;
        const bc = b[param as keyof IGoodsItem] as number;
        return sortingMode === SortOrder.Asc ? ac - bc : bc - ac;
      });
    }
    if (array) {
      return array;
    }
    return [];
  }
}
