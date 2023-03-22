import {reactive } from 'vue'

const store=({
    state:reactive({
        message:'' as string,
        showMessage:false as boolean,
    }),
    mutations:{
        showMessage(messag:string){
            store.state.message=messag;
            store.state.showMessage=true;
        },
        hideMessage(){
            store.state.showMessage=false;
        }
    }
})

export default store;