import React,{useContext} from 'react'
import {useObserver} from 'mobx-react-lite'
import StoreContext from '../context/StoreContext'

export default () => {
    const store = useContext(StoreContext);
    let { cart } = store
    console.log('store...', store, cart.list);

    return useObserver(()=>
        <footer>
            <span>总价:{cart.totalPrice}</span>
            <span>总量:{cart.totalNum}</span>
        </footer>
    )
}