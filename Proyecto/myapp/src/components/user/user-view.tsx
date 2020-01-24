import React from 'react';
// import Modal from 'react-modal';
import User from '../../interfaces/users/user';
import ListAltIcon from '@material-ui/icons/ListAlt';
import {IconButton} from '@material-ui/core';
import Rodal from 'rodal';

type Props={
    user:User
};

type State ={
    showModal:boolean
};

const StyleModal = {
  overlay: {
    backgroundColor: 'papayawhip'
  },
  content: {
    color: 'lightsteelblue'
  }
}


class UserView extends React.Component<Props, State> {
  constructor (props:Props) {
    super(props);
    this.state = {
      showModal: false
    };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({showModal:false});
  }

  public modalState () {
    const stateRef = this.state;
    return stateRef["showModal"];
  }

  render () {
      const {user}=this.props;
      console.log('info. modal',user);
    return (
      <div>
        <IconButton 
        aria-label="Consultar" 
        onClick={this.handleOpenModal}>
          <ListAltIcon fontSize="large"/>
        </IconButton>
        {/* <Modal style={StyleModal}
          isOpen={this.modalState()}
          contentLabel="Minimal Modal Example"
          onRequestClose={this.handleCloseModal}
        >
            <label>Id: {user.id}</label>
            <label>Nombre: {user.first_name}</label>
            <label>Apellido: {user.last_name}</label>
            <label>Email: {user.email}</label>
            <label>Avatar:<img src={user.avatar}/></label>
            <button onClick={this.handleCloseModal}>Aceptar</button>
        </Modal> */}
        <Rodal visible={this.modalState()} onClose={this.handleCloseModal}>
          <div>Hola mundo</div>
        </Rodal>
      </div>
    );
  }
}

export default UserView;
