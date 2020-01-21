import React from 'react';
import User from '../interfaces/users/user';
import UsersServices from '../services/UsersServices';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

type Props={}

type State ={
    users:User[];
    userIdSeleccionado:number;
}

class UserControl extends React.Component<Props, State>{

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
            <TableContainer component={Paper}>
              <Table style={{minWidth:"650"}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Apellido</TableCell>
                    <TableCell align="right">Correo</TableCell>
                    <TableCell align="right">Avatar</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {users.map(row => (
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row">{row.id}</TableCell>
                      <TableCell align="right">{row.first_name}</TableCell>
                      <TableCell align="right">{row.last_name}</TableCell>
                      <TableCell align="right">{row.email}</TableCell>
                      <TableCell align="right">{row.avatar}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          );
        // return(
        //      <div>
        //      </div>
        // );
    }

    obtenerUsuarios =async ()=>{
        const usersServices = UsersServices.obtenerinstancia();
        const response = await usersServices.obtenerUsuarios();
        console.log(response.data);
        if(response.data.length>0){
            this.setState({
                users:response.data
            });
        }
    }
}

export default UserControl;