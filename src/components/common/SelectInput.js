import React from 'react';
import PropTypes from 'prop-types';

const SelectInput = ({name, label, onChange, defaultOption, value, error, options, required}) => {
  return (
    <form className="form-group">
      { label && <label htmlFor={name}>{label}</label> }
      <div className="field">
        {/* Note value is set here rather than on the option */}
        <select
          name={name}
          value={value}
          onChange={onChange}
          className="form-control form-control-sm"
          required={required}>
          <option disabled={true} value="">{defaultOption}</option>
          {options.map((option) => {
            return <option key={option.value} value={option.value}>{option.text}</option>;
          })
          }
        </select>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </form>
  );
};

SelectInput.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  defaultOption: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default SelectInput;
