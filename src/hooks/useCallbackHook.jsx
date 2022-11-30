import {memo, useCallback, useEffect, useMemo, useState} from "react";

const HelloButton = memo(({clickHelloButton}) => {
    console.log('Hello button rerender')
    return <button onClick={clickHelloButton}>Say hello</button>
})

const CounterButton = ({counterChange, counter}) => <button onClick={() => counterChange(counter + 1)}>Click me</button>

const Callback = () => {

    const [counter, setCounter] = useState(0);

    // const clickHelloButton = () => {
    //     console.log('Hello')
    // }

    const clickHelloButton = useCallback(() => {
        console.log('Hello')
    }, [])

    return (
        <>
            <CounterButton counter={counter} counterChange={setCounter}/>
            <HelloButton clickHelloButton={clickHelloButton}></HelloButton>
        </>
    );
}

export default Callback;
