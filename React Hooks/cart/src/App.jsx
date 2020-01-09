import React,{useEffect,useContext} from 'react'
// 引入子组件
import List from './component/List'
import Footer from './component/Footer'
import StoreContext from './context/StoreContext'


export default ()=>{
    const store = useContext(StoreContext);
    const {cart} = store;
    useEffect(async ()=>{
        await cart.initialList([{
            id: 1,
            name: '西红柿',
            num: 100,
            price: 50
        },{
            id: 2,
            name: '苹果',
            num: 100,
            price: 50
        },{
            id: 3,
            name: '香蕉',
            num: 100,
            price: 50
        },{
            id: 4,
            name: '橘子',
            num: 100,
            price: 50
        },{
            id: 5,
            name: '车厘子',
            num: 100,
            price: 50
        }]);
    }, []);

    return (<>
        <List/>
        <Footer/>
    </>)
}