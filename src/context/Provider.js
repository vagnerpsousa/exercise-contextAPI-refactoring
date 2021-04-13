import React from 'react';
import Context from './Context';

class Provider extends React.Component {
    constructor(){
        super();
        this.state = {
            cars: {
                red: false,
                blue: false,
                yellow: false,
            },
            color: 'red',
        }
        this.moveCar = this.moveCar.bind(this);
        this.changeSignal = this.changeSignal.bind(this);
    }

    moveCar(car, side) {
        this.setState({
            cars: {
                ...this.state.cars,
                [car]: side,
            }
        })
    }

    changeSignal(signalColor) {
        this.setState({
            color: signalColor,
        })
    }
    render() {
        const context = { 
            ...this.state,
            moveCar: this.moveCar,
            changeSignal: this.changeSignal,
        };
        const { children } = this.props;
        return (
            <Context.Provider
            value={ context }
            >
                { children }
            </Context.Provider>

        );
    }
}

export default Provider;