import {defineStore} from'pinia'

export const  counterStore=defineStore('counter',{
    state:() =>{
        return {
            count:0
        }
    },
    getters:{
        double(state){
            return state.count*2;
        }
    },
    actions:{
        increment() {
            this.count++;
        },
        discrement() {
            this.count--;
        },
    }
})