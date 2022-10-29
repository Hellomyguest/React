import { useContext } from 'react';
import { Filters } from './Filters';
import { FilterContext } from '../../../../store/filterContext';

export function FiltersContainer() {
  const { filters } = useContext(FilterContext);
  return <Filters filters={filters} />;
}
