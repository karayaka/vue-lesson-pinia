import IRequest from "@/models/base_models/request_model";
import store from "@/store/message_store"

abstract class Repository{
    excetionHandler<T>(model:IRequest<T>):T{
        store.mutations.showMessage("Mesaj La Bu")
        return model.data;
    }
}
export default Repository;