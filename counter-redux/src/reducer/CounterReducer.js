const initialState = {
    count: 5
}

const CounterReducer = (state = initialState, action) => {
    switch(action.type){
        case 'INCREMENT_COUNT':
            return {...state, ...action}
        case 'DECREMENT_COUNT':
            return {...state, ...action}
        default:
            return state
    }
}

export default CounterReducer;