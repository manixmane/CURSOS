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
  IconButton
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ListAltIcon from '@material-ui/icons/ListAlt';
import UserView from './user-view';

type Props={}

type State ={
    users:User[];
}

const userDefault:User={
  id:0,
  first_name:"",
  last_name:"",
  email:"",
  avatar:""
}

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

class Users extends React.Component<Props, State>{

    constructor(props:Props){
        super(props);
        this.state={
            users:[]
        };
    }

    componentDidMount(){
        this.obtenerUsuarios();
    }

    render(){
    
        const {users} = this.state;
        return (
          users.length > 0 && (
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
                              <IconButton aria-label="Eliminar" style={{margin:theme.spacing(1)}} onClick={()=>{
                                if(row!==null){
                                  this.onClickEditar(row);
                                }
                              }}>
                                <DeleteIcon fontSize="large"/>
                              </IconButton>
                              <UserView user={row}/>
                              </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
            )
        );
    }

    obtenerUsuarios =async ()=>{
      try{
        const usersServices = UsersServices.obtenerinstancia();
        const response = await usersServices.obtenerUsuarios();
        if(response.data.length>0){
            this.setState({
              users:response.data
            });
        }
      }catch(error){
        console.log(error);
      }
    }

    onClickEditar = (user:User)=>{
      //console.log("Usuario seleccionado", user);
    }
}

export default Users;
