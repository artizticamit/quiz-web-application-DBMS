import React, { useState, useEffect } from 'react'

function Test() {
    const [count1, setCount1] = useState(0);

    const Count1 = () => {
        setCount1(count1 + 1);
    }

    const handleReset = () => {
        setCount1(0);
    }

    /*************************** */
    const [count2, setCount2] = useState(0);



    const Count2 = () => {
        setCount2(count2 + 1);
    }


    const handleReset2 = () => {
        setCount2(0);
    }

    return (
        <div>
            <h1>{count1}</h1>
            <button onClick={Count1}>Click Me</button>
            <button onClick={handleReset}>Reset</button>

            <br />
            <h1>{count2}</h1>
            <button onClick={Count2}>Click Me</button>
            <button onClick={handleReset2}>Reset</button>
        </div>
    )
}

export default Test;
