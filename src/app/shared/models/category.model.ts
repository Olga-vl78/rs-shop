import { ISubcategory } from './subcategory.model';

export interface ICategory {
  id: string;
  name: string;
  src?: string;
  subCategories: ISubcategory[];
}
