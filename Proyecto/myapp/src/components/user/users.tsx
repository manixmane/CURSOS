import React from 'react';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import User from '../../interfaces/users/user';
import UsersServices from '../../services/UsersServices';
import {  
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead,
  TableRow, 
  Paper,
  Button,
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';

type Props={}

type State ={
    users:User[];
    userIdSeleccionado:number;
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class Users extends React.Component<Props, State>{

    constructor(props:Props){
        super(props);
        this.state={
            users:[],
            userIdSeleccionado:0
        };
    }

    componentDidMount(){
        this.obtenerUsuarios();
    }

    render(){
    
        const {users} = this.state;

        console.log(users);
        return (
          users.length> 0 &&(
            <TableContainer component={Paper}>
              <Table style={{minWidth:"650"}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Apellido</TableCell>
                    <TableCell align="right">Correo</TableCell>
                    <TableCell align="right">Avatar</TableCell>
                    <TableCell align="right">Opciones</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                      <TableCell align="right">{row.first_name}</TableCell>
                      <TableCell align="right">{row.last_name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right"><img src={row.avatar}></img></TableCell>
                      <TableCell align="right">
                        <IconButton aria-label="Editar" style={{margin:theme.spacing(1)}} onClick={()=>{
                          if(row!==null){
                            this.onClickEditar(row);
                          }
                        }}>
                          <EditIcon fontSize="large"/>
                        </IconButton>
                        </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )
          );
        // return(
        //      <div>
        //      </div>
        // );
    }

    obtenerUsuarios =async ()=>{
        try{
          console.log('Intancia servicio usuarios');
          const usersServices = UsersServices.obtenerinstancia();
        const response = await usersServices.obtenerUsuarios();
        console.log('resonse',response.data);
        if(response.data.length>0){
            this.setState({
                users:response.data
            });
        }
        }catch(error){
          console.log('error:',error);
        }
    }

    onClickEditar = (user:User)=>{
      console.log("Usuario seleccionado", user);
    }
}

export default Users;