import IUser from '@/models/user_models/user_model'
import IRequest from '@/models/base_models/request_model'
import api from '@/api/index'
import Repository from './repository';

class UserRepository extends Repository {
    async getUsers():Promise<IUser[]>{
        const response= await api.get<IRequest<IUser[]>>('users');
        return this.excetionHandler<IUser[]>(response.data);
    }
    async getAllUser(id:number):Promise<IUser>{
        const response= await api.get('users/'+id);
        return response.data as IUser;
    }    
}

export default new UserRepository();