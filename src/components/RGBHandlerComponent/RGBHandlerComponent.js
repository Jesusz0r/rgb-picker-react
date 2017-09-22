import React from 'react';
import PropTypes from 'prop-types';

const Handler = ({type, colors, handleValueChange }) => {
    return (
        <div className="input-container">
            <div>
                <label>Red</label>
                <input type={type} value={colors.red} min="0" max="255" onChange={(e) => handleValueChange('red', e)} />
            </div>
            <div>
                <label>Green</label>
                <input type={type} value={colors.green} min="0" max="255" onChange={(e) => handleValueChange('green', e)} />
            </div>
            <div>
                <label>Blue</label>
                <input type={type} value={colors.blue} min="0" max="255" onChange={(e) => handleValueChange('blue', e)} />
            </div>
        </div>
    );
}

Handler.propTypes = {
    type: PropTypes.string,
    colors: PropTypes.object,
    handleValueChange: PropTypes.func
};

export default Handler;