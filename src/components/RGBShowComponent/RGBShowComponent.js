import React from 'react';
import PropTypes from 'prop-types';

const Show = ({ colors }) => {
    const style = {
        "backgroundColor": `rgb(${colors.red}, ${colors.green}, ${colors.blue})`,
        "height": "200px",
        "width": "200px"
    };

    return (
        <div className="rgb-show" style={style}></div>
    );
};

Show.propTypes = {
    colors: PropTypes.object
};

export default Show;