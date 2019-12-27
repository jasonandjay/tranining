import React, {useState, useEffect, useRef} from 'react';

let input = null,
    create = null;
export default ()=>{
    const [count, setCount] = useState(0);
    
    /** 
     * useRef 返回的 ref 对象在组件的整个生命周期内保持不变，
     * 也就是说每次重新渲染函数组件时，返回的ref对象都是同一个,current是可以变的
     * 使用React.createRef, 每次重新渲染组件都会重新创建ref
    */
    const inputRef = useRef();
    const createRef = React.createRef();
    
    useEffect(()=>{
        inputRef.current = setInterval(()=>{
            setCount(count=>count+1)
        }, 1000)

        return ()=>{
            window.clearInterval(inputRef.current);
        }
    }, []);

    console.log('input===inputRef', input === inputRef, create === createRef);
    input = inputRef;
    create = createRef;
    function getFocus() {
        inputRef.current.focus();
    }

    return <div>
        <input type="text" ref={inputRef} />
        <button onClick={getFocus}>获得焦点</button>
    </div>
}