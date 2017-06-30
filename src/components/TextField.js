import React from 'react';

const TextField = ({ field, value, place, error, type, onChange, icon}) => {
  return(
    <div>
      <div className="input-field">
        <i className="material-icons prefix">{icon}</i>
        <input
          value={value}
          onChange={onChange}
          id={field}
          type={type}
          name={field}
          placeholder={place}
        />
      </div>
      {error && <span className="errors">{error}</span>}
    </div>
  );
}

TextField.propTypes = {
  icon: React.PropTypes.string.isRequired,
  field: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  place: React.PropTypes.string.isRequired,
  error: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
  onChange: React.PropTypes.func.isRequired
}

TextField.defaultProps = {
  type: 'text'
}

export default TextField;