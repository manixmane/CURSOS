import axios from 'axios';
import ResponseDataU from '../interfaces/ResponseDataU';
import Users from '../interfaces/users/user';

class UsersServices{
    
    private static instancia : UsersServices;

    private constructor(){}

    static obtenerinstancia():UsersServices{
        if(!UsersServices.instancia){
            UsersServices.instancia = new UsersServices();
        }

        return UsersServices.instancia;
    }

    obtenerUsuarios = async ():Promise<ResponseDataU<Users>>=>{
        const response = await axios.get(`https://reqres.in/api/users?page=2`);
        return response.data;
    }
}

export default UsersServices;
