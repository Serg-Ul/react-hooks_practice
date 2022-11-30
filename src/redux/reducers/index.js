export const initialState = {
    count: 0
}

export const reducer = (state, {type, value}) => {
    switch (type) {
        case 'increase_width_dynamic_value':
            return {
                ...state,
                count: state.count + value
            }
        case 'decrease_width_dynamic_value':
            return {
                ...state,
                count: state.count - value
            }
        case 'increment':
            return {
                ...state,
                count: state.count + 1
            }
        case 'decrement':
            return {
                ...state,
                count: state.count - 1
            }
        default:
            throw new Error();
    }
}