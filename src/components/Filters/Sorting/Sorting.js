import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import './Sorting.css';
import SelectFiltering from '../../SelectFiltering/SelectFiltering';

const sorting = [
  { value: 'created_at', label: 'Last created' },
  { value: 'updated_at', label: 'Latest updated' },
  { value: 'homepage', label: 'Live project' },
];

const SortDropdownIndicator = ({ innerProps }) => {
  return (
    <div {...innerProps} className="sort-icon">
      <FontAwesomeIcon icon={faSort} />
    </div>
  );
};

const Sorting = ({ onChangeSelect }) => {
  return (
    <SelectFiltering
      options={sorting}
      placeholder="Sort by"
      dropdownIndicator={SortDropdownIndicator}
      onChangeSelect={onChangeSelect}
      isSearchable={false}
    />
  );
};

export default Sorting;
