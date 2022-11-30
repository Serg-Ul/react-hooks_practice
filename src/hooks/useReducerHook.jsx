import {useEffect, useReducer, useState} from "react";
import {reducer, initialState} from "../redux/reducers";

const Reducer = () => {


    const [state, dispatch] = useReducer(reducer, initialState)

    const [number, setNumber] = useState(2);

    useEffect(() => {
        console.log(state)
    }, [state])

    return (
        <>
            <button onClick={() => dispatch({type: 'increase_width_dynamic_value', value: number})}>Increase</button>
            <button onClick={() => dispatch({type: 'decrease_width_dynamic_value', value: number})}>Decrease</button>
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </>
    );
}

export default Reducer;
