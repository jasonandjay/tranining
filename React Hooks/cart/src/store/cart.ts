import {observable, action, computed} from 'mobx'

export default class Cart{
    @observable
    list = [];

    @action 
    async initialList(list: []){
        this.list = list;
    }

    @computed
    get totalPrice(){
        return this.list.reduce((total, item:any)=>total+=item.num*item.price, 0);
    }

    @computed
    get totalNum(){
        return this.list.reduce((total, item:any)=>total+=item.num, 0);
    }
}