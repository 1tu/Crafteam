import { FilteredPageEntity } from '../../../shared/types/filteredPage.entity';

export interface FilteredPageStoreState {
  list: FilteredPageEntity[];
  item: FilteredPageEntity;
}
