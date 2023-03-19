import {defineStore} from'pinia'
import user_repository from '@/repositorys/user_repository';
import { IUser } from '@/models/user_models/user_model';

export const  counterStore=defineStore('counter',{
    state:() =>{
        return {
            count:0,
            userListLoading:false,
            users:[] as IUser[],
        }
    },
    getters:{
        double(state):number{
            return state.count*2;
        }
    },
    actions:{
        increment():void{
            this.count++;
        },
        discrement():void{
            this.count--;
        },
        getUsers(){
            this.userListLoading=true;
            user_repository.getUsers().then((value)=>{
                this.users=value;
                this.userListLoading=false;
            })
            console.log("user cal");
        }
    }
})