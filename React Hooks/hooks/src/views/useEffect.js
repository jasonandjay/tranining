import React, {useState, useEffect, useLayoutEffect} from 'react';


export default ()=>{
    let [count, setCount] = useState(0);
    
    useEffect(()=>{
        document.title = `点击了${count}次`;

        let inter = setInterval(()=>{
            console.log('count...', count);
        }, 1000);

        return ()=>{
            window.clearInterval(inter);
        }
    }, [count]);

    // useMutationEffect(()=>{
    //     console.log('mutation effect...');
    //     // alert(1);
    // }, [])

    useLayoutEffect(()=>{
        console.log('layout effect...');
        alert(2);
    }, [])


    // count点击事件
    let changeCount = type=>{
        // 函数形式，把上一个状态当参数注入
        // type=='+'?setCount(count=>count+1): setCount(count=>count-1);
        type=='+'?setCount(count+1): setCount(count-1);
    }


    return <div>
        <button onClick={()=>changeCount('+')}>+</button>
        <p>{count}</p>
        <button onClick={()=>changeCount('-')}>-</button>
    </div>
}