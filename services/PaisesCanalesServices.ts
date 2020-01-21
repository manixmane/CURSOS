import axios from 'axios';
import ResponseData from '../interfaces/ResponseData';
import PaisCanal from '../interfaces/paisesCanales/PaisCanal';

class PaisesCanlesServices{
    private static instancia: PaisesCanlesServices;

    private constructor(){}

    static obtenerInstacia():PaisesCanlesServices{
        if(!PaisesCanlesServices.instancia){
            PaisesCanlesServices.instancia= new PaisesCanlesServices();
        }

        return PaisesCanlesServices.instancia;
    }

    obternPaisescanles =  async():Promise<ResponseData<PaisCanal>> =>{
        const respose = await axios.get(`/paisesCanales`);
        return respose.data;
    }
}

export default PaisesCanlesServices;