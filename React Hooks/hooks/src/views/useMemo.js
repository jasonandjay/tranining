import React, {memo, useState, useMemo, useCallback} from 'react';


const MemoComp = memo(Child);

export default ()=>{
    const [count, setCount] = useState(0);
    const [name, setName] = useState('Child子组件')

    return <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>+</button>
        {/* <Child/> */}
        <MemoComp name={useMemo(()=>{return {name}}, [name])} onClick={useCallback(name=>setName(name), [])}/>
        {/* <MemoComp name={useMemo(()=>{return {name}}, [name])} onClick={useCallback(name=>setName(name), [])}/> */}
    </div>
}

// function Child(){
//     return <div>
//         <p>{Date.now()}</p>
//     </div>
// }

function Child(props){
    return <div>
        <p>{Date.now()}</p>
        <p>父组件传过来的name：{props.name.name}</p>
        <button onClick={()=>props.onClick('没错，我是子组件')}>重置name</button>
    </div>
}