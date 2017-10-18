import React, { Component } from 'react'
import  { Link } from 'react-router-dom'
import ReactModal from 'react-modal';

import "./signInUp.css" 


class SignInUp extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      showModal2: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleOpenModal2 () {
    this.setState({ showModal2: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  handleCloseModal2 () {
    this.setState({ showModal2: false });
  }
  
  render () {
    return (
      <div className="signInUp">
        <button className="signButton"onClick={this.handleOpenModal}>Реєстрація</button>
        <button className="signButton" onClick={this.handleOpenModal2}>Увійти</button>
        <ReactModal 
          isOpen={this.state.showModal}
          contentLabel="SignUp"
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="login-box">
            <button className="closeButton" onClick={this.handleCloseModal}> x </button>
            <div className="left">
              <h1 className="signTittle">Реєстрація</h1>
              <input className="signText" type="text" name="username" placeholder="Логін" />
              <input className="signText" type="text" name="email" placeholder="E-mail" />
              <input className="signPassword" type="password" name="password" placeholder="Пароль" />
              <input className="signPassword" type="password" name="password2" placeholder="Повторіть пароль" />
              <input className="signSubmit" type="submit" name="signup_submit" value="реєстрація" />
            </div>
            <div className="right">
              <span className="loginwith">Вхід через<br />соціальні мережі</span>
              <button className="social-signin facebook">Вхід через facebook</button>
              <button className="social-signin twitter">Вхід через Twitter</button>
              <button className="social-signin google">Вхід через Google+</button>
            </div>
            <div className="or">АБО</div>
          </div>
        </ReactModal>
        <ReactModal 
          isOpen={this.state.showModal2}
          contentLabel="SignIn"
          onRequestClose={this.handleCloseModal}
          className="modal"
          overlayClassName="overlay"
        >
          <div className="login-box">
            <button className="closeButton" onClick={this.handleCloseModal2}> x </button>
              <div className="left">
              <h1 className="signTittle">Вхід</h1>
              <input className="signText" type="text" name="username" placeholder="Логін" />
              <input className="signPassword" type="password" name="password" placeholder="Пароль" /><br />
              <Link className="lostPassword" to="/lostPassword">Забули пароль</Link>
              <input className="signSubmit" type="submit" name="signup_submit" value="Вхід" />
            </div>
            <div className="right">
              <span className="loginwith">Вхід через<br />соціальні мережі</span>
              <button className="social-signin facebook">Вхід через facebook</button>
              <button className="social-signin twitter">Вхід через Twitter</button>
              <button className="social-signin google">Вхід через Google+</button>
            </div>
            <div className="or">АБО</div>
          </div>
        </ReactModal>
      </div>
    );
  }
}

const props = {};

export default SignInUp