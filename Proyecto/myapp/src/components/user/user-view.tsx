import React from 'react';
import Modal from 'react-modal';
import User from '../../interfaces/users/user';
//import Avatar from '@material-ui/core/Avatar';

type Props={
    user:User,
    show:boolean
};

type State ={
    showModal:boolean
};


class UserView extends React.Component<Props, State> {
  constructor (props:Props) {
    super(props);
    this.state = {
      showModal: props.show
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal () {
    this.setState({ showModal: true });
  }

  handleCloseModal () {
    this.setState({ showModal: false });
  }

  public modalState () {
    const stateRef = this.state;
    return stateRef["showModal"];
  }

  render () {
      const {user,show}=this.props;
      console.log('info. modal',user, show,this.state.showModal);
    return (
      <div>
        {/* <button onClick={this.handleOpenModal}>Trigger Modal</button> */}
        <Modal
          isOpen={show}
          contentLabel="Minimal Modal Example"
        >
            <label>Id: {user.id}</label>
            <label>Nombre: {user.id}</label>
            <label>Apellido: {user.id}`</label>
            <label>Email: {user.id}</label>
            <label>Avatar:<img src={user.avatar}/></label>
            <button onClick={this.handleCloseModal}>Aceptar</button>
        </Modal>
      </div>
    );
  }
}

export default UserView;