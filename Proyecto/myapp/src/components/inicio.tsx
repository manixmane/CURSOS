import React from 'react';
import PaisCanal from '../interfaces/paisesCanales/PaisCanal';
import PaisesCanlesServices from '../services/PaisesCanalesServices';
import PaisCanalControl from './pais-canal-control';
import Puesto from '../interfaces/puestos/Puesto';
import PuestosServices from '../services/PuestosServices';
import Users from './user/users';

  type Props={

  };

  type State ={
      paisesCanales: PaisCanal[];
      puestos: Puesto[];
      paisIdSeleccionado: number;
      canalIdSeleccionado:number;
      puestoIdSeleccionado?: number;

  }

  const puestoTodos : Puesto={
      id:0,
      nombre:"Todos",
      activo:true,
      jefeId:0
  }

  class Inicio extends React.Component<Props, State>{
      constructor(props:Props){
          super(props);
          this.state = {
              paisesCanales:[],
              puestos:[puestoTodos],
              paisIdSeleccionado:0,
              canalIdSeleccionado:0,
              puestoIdSeleccionado:0
          };
      }

      componentDidMount(){
          this.obtenerPaisesCanales();
      }

      render(){
          const {
              paisesCanales,
              puestos
          } = this.state;
          console.log(paisesCanales.length);
          return(
              <div>
                  <Users/>
              </div>
            //   paisesCanales.length >0 && (
            //       <div>
            //           <PaisCanalControl paisesCanales={paisesCanales} puestos={puestos} onChangePaisCanal={this.onChangePaisCanal} onChangePuestos={this.onChangePuestos} />
            //       </div>
            //   )
          );
      }

      obtenerPaisesCanales = async()=>{
          const paisesCanalesServices = PaisesCanlesServices.obtenerInstacia();
          const response = await paisesCanalesServices.obternPaisescanles();
          if(response.operacionExitosa && response.operacionContenido.length > 0){
              this.setState({
                  paisesCanales:response.operacionContenido,
                  paisIdSeleccionado: response.operacionContenido[0].paisId,
                  canalIdSeleccionado: response.operacionContenido[0].canalId
              },
              ()=>{
                  this.obtenerPuestosPorPaisCanal(
                      response.operacionContenido[0].paisId,
                      response.operacionContenido[0].canalId
                  );
              });
          }
      }

      obtenerPuestosPorPaisCanal = async (
          paisId:number, 
          canalId:number, 
          solicitudId?:number
          )=>{
              const puestosServices = PuestosServices.obtenerinstancia();
              const response = await puestosServices.obtenerPuestosPorPaisCanal(paisId, canalId, solicitudId);
              if(response.operacionExitosa && response.operacionContenido.length>0){
                  this.setState({
                      puestos:[...this.state.puestos].concat(response.operacionContenido),
                      puestoIdSeleccionado:undefined
                  });
                  console.log(this.state.puestos);
              }else{
                  this.setState({
                      puestos:[puestoTodos]
                  });
              }
          };

      onChangePaisCanal = (paisCanal:PaisCanal)=>{
          console.log(paisCanal);
          this.setState({
              paisIdSeleccionado:paisCanal.paisId,
              canalIdSeleccionado:paisCanal.canalId
          });
      }

      onChangePuestos = (puesto:Puesto)=>{
          console.log(puesto);
          const puestoId = puesto.id === 0 ? undefined:puesto.id;
          const {paisIdSeleccionado, canalIdSeleccionado} = this.state;

          this.setState({
              puestoIdSeleccionado:puestoId
          });
      }
  }

  export default Inicio;