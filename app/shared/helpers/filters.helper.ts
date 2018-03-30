import { FilteredPageFilters } from '../types/filteredPage.entity';

interface FilterQuery {
  categoryIdList: string[];
  propertyKeyValueList: string;
}

export function filtersFromQuery(query: FilterQuery): FilteredPageFilters {
  return {
    categoryIdList: Array.isArray(query.categoryIdList)
      ? query.categoryIdList.map(id => parseInt(id))
      : query.categoryIdList ? [parseInt(query.categoryIdList)] : [],
    propertyKeyValueList: query.propertyKeyValueList ? JSON.parse(query.propertyKeyValueList) : []
  };
}
