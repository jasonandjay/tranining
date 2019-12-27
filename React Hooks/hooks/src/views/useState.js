import React,{useState} from 'react';


export default ()=>{
    const [count, setCount] = useState(100);

    let changeCount = type=>{
        type=='+'?setCount(count+1): setCount(count-1);
        // type?setCount(count=>count+1): setCount(count=>count-1);
    }

    return <div>
        <button onClick={()=>changeCount('+')}>+</button>
        <p>{count}</p>
        <button onClick={()=>changeCount('-')}>-</button>
    </div>
}