import {useSelector} from "react-redux";
import {useEffect} from "react";

const Selector = () => {

    const { count } = useSelector((state) => {
        console.log(state)
    })

    useEffect(() => {
        console.log(count)
    })

    return (
        <>
            UseSelector
        </>
    );
}

export default Selector;
