import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const MultiSelect = ({options, handleSelectChange, removeSelected, value}) => {

  return (
    <Select
      className="welcome-input"
      name="form-field-name"
      removeSelected={removeSelected}
      onChange={handleSelectChange}
      options={options}
      value={value}
      multi
      matchPos="start"
    />
  );
};

export default MultiSelect;
