import {defineStore} from 'pinia'

export const messageStore=defineStore('messag',{
    state:() =>{
        return {
            message:'',
        }
    },
    actions:{
        showMessage(message:string){
            this.message=message;
            console.log('------message____')
            console.log(message);
        }
    }
})