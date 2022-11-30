import {useEffect, useReducer, useState} from "react";
import {createAction, configureStore} from "@reduxjs/toolkit";
import {Provider, useDispatch} from "react-redux";
import logger from 'redux-logger'

// const TEST_ACTION = 'TEST_ACTION'
//
// const testAction = createAction(TEST_ACTION);
//
// const testReducer = (state, action) => {
//     switch (action.type) {
//         case TEST_ACTION:
//             return {
//                 count: state.count + 1
//             }
//         default:
//             return {
//                 count: 0
//             }
//     }
// }
//
// const reducer = {
//     test: testReducer,
// }
//
// const preloadedState = {
//     test: {
//         count: 0
//     }
// }
//
// const store = configureStore({
//     reducer,
//     // preloadedState: {
//     //     test: {
//     //         count: 0
//     //     }
//     // }
// })

const Dispatch = (props) => {

    const dispatch = useDispatch();

    return (
        <>

        </>
    );
}

export default Dispatch;
