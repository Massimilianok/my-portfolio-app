import React from 'react';
import Select from 'react-select';

const style = {
  control: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'var(--light-color)' : 'var(--dark-color)',
    borderColor: state.isFocused ? 'var(--dark-color)' : 'var(--dark-color)',
    boxShadow: state.isFocused ? 'none' : 'none',
    borderWidth: 'none',
    backgroundColor: state.isFocused
      ? 'var(--dark-color)'
      : 'var(--light-color)',
    ':hover': {
      borderColor: 'inherit',
    },
  }),
  placeholder: (provided, state) => ({
    ...provided,
    color: state.isFocused ? 'var(--light-color)' : 'var(--dark-color)',
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: 'inherit',
  }),
  menu: (provided, state) => ({
    ...provided,
    backgroundColor: 'var(--dark-color)',
    color: 'var(--light-color)',
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? 'var(--primary-color)' : 'transparent',
    ':hover': {
      backgroundColor: 'var(--secondary-color)',
    },
  }),
  input: (provided, state) => ({
    ...provided,
    color: 'var(--light-color)',
  }),
};

const SelectFiltering = ({
  options,
  placeholder,
  dropdownIndicator,
  onChangeSelect,
  isSearchable,
  formatGroupLabel,
}) => {
  return (
    <Select
      options={options}
      placeholder={placeholder}
      isSearchable={isSearchable}
      styles={style}
      components={{ DropdownIndicator: dropdownIndicator }}
      onChange={onChangeSelect}
      formatGroupLabel={formatGroupLabel}
    />
  );
};

export default SelectFiltering;
