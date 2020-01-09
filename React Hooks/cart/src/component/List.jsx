import React, { useContext } from 'react'
import StoreContext from '../context/StoreContext'
import {useObserver} from 'mobx-react-lite'

export default () => {
    const store = useContext(StoreContext);
    let { cart } = store
    console.log('store...', store, cart.list);

    return useObserver(()=><>{
        cart.list.map((item) => {
            return <li key={item.id}>
                <input type="checkbox" name="" id="" />
                <span>{item.name}</span>
                <span>{item.price}</span>
                <div>
                    <button>+</button>
                    <span>{item.num}</span>
                    <button>-</button>
                </div>
            </li>
        })
    }</>)
}