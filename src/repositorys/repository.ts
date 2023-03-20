import IRequest from "@/models/base_models/request_model";
//import {messageStore } from "@/store/message_store"

abstract class Repository{
    //private store=messageStore()
    excetionHandler<T>(model:IRequest<T>):T{
        //this.store.showMessage(model.page.toFixed(1));
        return model.data;
    }
}
export default Repository;