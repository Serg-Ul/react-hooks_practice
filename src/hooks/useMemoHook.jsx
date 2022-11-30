import {useEffect, useMemo, useState} from "react";

const Memo = () => {

    const [update, updateChange] = useState(false);
    const [list, updateList] = useState([1, 4, 3, 5, 8]);

    const sortList = () => {
        console.log('sorted')
        updateList(list.sort((a, b) => a - b));
    }

    console.log(update);

    useMemo(sortList, [list])

    useEffect(() => {
        console.log(list)
    }, [list])

    return (
        <>
            {
                list.map((item, index) => (<div key={index}>{item}</div>))
            }
            <button onClick={() => updateChange(!update)}>Update</button>
            <button onClick={() => {
                const newList = [...list]
                newList.push(2)
                updateList(newList);
            }}>Push</button>
        </>
    );
}

export default Memo;
