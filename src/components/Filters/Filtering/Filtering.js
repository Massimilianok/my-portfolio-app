import React from 'react';
import { filterOptionsFromPropRepoList } from '../../../utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import './Filtering.css';
import SelectFiltering from '../../SelectFiltering/SelectFiltering';

const FilterDropdownIndicator = ({ innerProps }) => {
  return (
    <div {...innerProps} className="filter-icon">
      <FontAwesomeIcon icon={faFilter} />
    </div>
  );
};

const FilterGroupLabel = (data) => (
  <div className="d-flex justify-content-between align-items-center">
    <span>{data.label}</span>
    <span className="filter-group-label">{data.options.length}</span>
  </div>
);

const Filtering = ({ repoList, onChangeSelect }) => {
  const filteringOptions = [
    {
      label: 'All repository',
      name: 'all',
    },
    {
      label: 'Tech',
      options: filterOptionsFromPropRepoList(repoList, 'languages'),
    },
    {
      label: 'Topics',
      options: filterOptionsFromPropRepoList(repoList, 'topics'),
    },
  ];

  return (
    <SelectFiltering
      options={filteringOptions}
      placeholder="Filter by"
      dropdownIndicator={FilterDropdownIndicator}
      isSearchable={true}
      formatGroupLabel={FilterGroupLabel}
      onChangeSelect={onChangeSelect}
    />
  );
};

export default Filtering;
