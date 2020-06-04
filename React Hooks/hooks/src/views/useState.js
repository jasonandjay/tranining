// import React, { useState } from 'react';

import React from 'react'
import hooks from '../utils/mockHooks'
let {useState} = hooks;

export default () => {
    const [count, setCount] = useState(100);

    const [obj, setObj] = useState({})
    let changeCount = type => {
        // type === '+' ? setCount(count + 1) : setCount(count - 1);
        type?setCount(count=>count+1): setCount(count=>count-1);

        setObj((obj2)=>{
            console.log(obj === obj2);
            return {time: +new Date()};
        })
    }

    return <div>
        <button onClick={() => changeCount('+')}>+</button>
        <p>{count}</p>
        <button onClick={() => changeCount('-')}>-</button>
    </div>
}