import {IUser} from '@/models/user_models/user_model'
import api from '@/api/index'
class UserRepository{
    async getUsers():Promise<IUser[]>{
        const response= await api.get('users');
        return response.data as IUser[];
    }
    async getAllUser(id:number):Promise<IUser>{
        const response= await api.get('users/'+id);
        return response.data as IUser;
    }    
}

export default new UserRepository();