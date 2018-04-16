import { FilteredPageFilters } from '../types/filteredPage.entity';
import { CatalogFilters } from '../types/category.entity';

interface FilterQuery {
  categoryIdList: string[];
  propertyKeyValueList: string;
  page: string;
  perPage: string;
}

export function filtersFromQuery(query: FilterQuery): CatalogFilters {
  return {
    categoryIdList: Array.isArray(query.categoryIdList)
      ? query.categoryIdList.map(id => parseInt(id))
      : query.categoryIdList ? [parseInt(query.categoryIdList)] : [],
    propertyKeyValueList: query.propertyKeyValueList ? JSON.parse(query.propertyKeyValueList) : [],
    page: parseInt(query.page) || 1,
    perPage: parseInt(query.perPage) || 12
  };
}
