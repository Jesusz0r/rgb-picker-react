import React, { Component } from 'react';
import RGBHandlerComponent from '../../components/RGBHandlerComponent/RGBHandlerComponent';
import RGBShowComponent from '../../components/RGBShowComponent/RGBShowComponent';

class RGBComponentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colors: {
                red: "0",
                blue: "0",
                green: "0"
            }
        };

        this._handleValueChange = this._handleValueChange.bind(this);
    }

    render() {
        const red = this.state.colors.red ? this.state.colors.red : 0;
        const green = this.state.colors.green ? this.state.colors.green : 0;
        const blue = this.state.colors.blue ? this.state.colors.blue : 0;
        const colors = {
            red,
            green,
            blue
        };

        return (
            <div className="rgb-container">
                <h1>RGB Picker:</h1>

                <RGBHandlerComponent type="range" colors={colors} handleValueChange={this._handleValueChange} />
            
                <RGBShowComponent colors={colors} />
            
                <RGBHandlerComponent type="number" colors={colors} handleValueChange={this._handleValueChange} />
            </div>
        );
    }

    _handleValueChange(color, e) {
        const newColors = Object.assign(this.state, {
            [color]: (e.target.value > 255) ? 255 : e.target.value
        });

        this.setState({
            colors: newColors
        });
    }
}

export default RGBComponentContainer;