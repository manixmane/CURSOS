interface ResposeData<T>{
    operacionExitosa:boolean,
    operacionDetalle:string,
    operacionContenido:T[]
}

export default ResposeData;