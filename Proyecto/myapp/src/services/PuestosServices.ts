import axios from 'axios';
import ResponseData from '../interfaces/ResponseData';
import Puesto from '../interfaces/puestos/Puesto';

class PuestosServices{
    
    private static instancia : PuestosServices;

    private constructor(){}

    static obtenerinstancia():PuestosServices{
        if(!PuestosServices.instancia){
            PuestosServices.instancia = new PuestosServices();
        }

        return PuestosServices.instancia;
    }

    obtenerPuestosPorPaisCanal = async (paisId:number, canalId:number, solicitudId?:number):Promise<ResponseData<Puesto>>=>{
        const url = solicitudId!==undefined ? 
        `paisId=${paisId}&canalId=${canalId}&solicitudId=${solicitudId}`:
        `paisId=${paisId}&canalId=${canalId}`;

        const response = await axios.get(`/puestos/porPaisYCanal?${url}`);
        return response.data;
    }
}

export default PuestosServices;
