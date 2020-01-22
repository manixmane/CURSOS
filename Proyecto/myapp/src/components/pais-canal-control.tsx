import React from 'react';
import PaisCanal from '../interfaces/paisesCanales/PaisCanal';
import PaisesCanalesServices from '../services/PaisesCanalesServices';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {TextField} from '@material-ui/core';
import Puesto from '../interfaces/puestos/Puesto';
import { render } from '@testing-library/react';

type Props ={
    paisesCanales: PaisCanal[];
    puestos: Puesto[];
    onChangePaisCanal:(paisCanal:PaisCanal) => void;
    onChangePuestos:(puesto:Puesto)=>void;
}

type State ={}

const PaisCanalControl = (props:Props) =>{
    const {
            paisesCanales, 
            puestos,
            onChangePaisCanal,
            onChangePuestos
        } = props;

    return(
        <div>
            <Autocomplete 
            size="small"
            options={paisesCanales}
            getOptionLabel={(option:PaisCanal)=> option.nombre}
            defaultValue={paisesCanales[0]}
            style={{width:"19%"}}
            renderInput={params=>(
                <TextField
                {...params}
                label="Pais - Canal"
                variant="outlined"
                fullWidth
                />
            )}
            onChange={(event, newValue)=>{
                if(newValue !== null){
                    onChangePaisCanal(newValue);
                }
            }}
            />
            <Autocomplete
            size="small"
            options={puestos}
            getOptionLabel={(option:Puesto)=> option.nombre}
            defaultValue={puestos[0]}
            style={{width:"19%"}}
            renderInput={params=>(
                <TextField
                {...params}
                label="Puesto"
                variant="outlined"
                fullWidth
                />
            )}
            onChange={(event, newValue)=>{
                if(newValue!== null){
                    onChangePuestos(newValue);
                }
            }}
            />
        </div>
    );
}

export default PaisCanalControl;