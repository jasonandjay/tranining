import React, { useState, useEffect, useLayoutEffect } from 'react';

// import React from 'react'
// import hooks from '../utils/mockHooks'
// let {useState, useEffect} = hooks; 


export default () => {
    let [count, setCount] = useState(0);

    let [obj, setObj] = useState({a: +new Date});


    useEffect(() => {
        console.log('执行了useEffect')
        obj.a = +new Date;
        setObj(obj);
        console.log('obj...', obj);
    }, [count, obj]);

    useEffect(() => {
        console.log('执行了useEffect,依赖为空')
    }, [obj]);

    useEffect(() => {
        console.log('执行了useEffect,没有依赖')
    }, [obj.a]);


    
    useLayoutEffect(() => {
        console.log('layout effect...');
        alert(2);
    }, [])


    // count点击事件
    let changeCount = type => {
        type === '+' ? setCount(count + 1) : setCount(count - 1);
    }


    return <div>
        <button onClick={() => changeCount('+')}>+</button>
        <p>{count}</p>
        <button onClick={() => changeCount('-')}>-</button>
    </div>
}