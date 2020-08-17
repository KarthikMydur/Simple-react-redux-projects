import React from 'react';
import Button from '../components/Button';
import { incrementCount, decrementCount } from '../action';
import { connect } from 'react-redux';

class CounterComponet extends React.Component {

    handleIncrement = () => {
        console.log('+');
        this.props.onIncrement(this.props.count)
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.count)
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <h1>Count: {this.props.count} </h1>
                <button onClick={this.handleIncrement}>incrementCount</button>
                <button onClick={this.handleDecrement}>decrementCount</button>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        count: state.counter.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: (count) => dispatch(incrementCount(count)),
        onDecrement: (Count) => dispatch(decrementCount(Count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CounterComponet);