import React, { Component } from 'react';
class Counter extends Component {
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
    }
    componentWillUnmount() {
        console.log('Counter - Unmount');
    }
    render() {
        return (
            <div className='row'>
                <div className="col-1">
                    <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                </div>
                <div className="col mx-3">
                    <button onClick={this.props.onIncrement} className='btn btn-secondary m-2'>Increment</button>
                    <button onClick={this.props.onDecrement} className='btn btn-secondary m-2 btn-sm' disabled={(this.props.counter.value <= 0) ? 'disabled' : ''} >Decrement</button>
                    <button onClick={this.props.onDelete} className='btn btn-danger btn-sm'>Delete</button>
                </div>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = 'badge m-2 bg-';
        return classes += (this.props.counter.value === 0) ? 'warning' : 'primary';
    }
    formatCount() {
        const { value: count } = this.props.counter;
        return (count === 0) ? 'Zero' : count;
    }
}

export default Counter;