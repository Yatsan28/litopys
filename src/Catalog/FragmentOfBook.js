
import React, {Component } from 'react'
import {
Link
} from 'react-router-dom'
import ReactModal from 'react-modal';
import { Document, Page } from 'react-pdf';
import zmist from './pdf_files/kaku_zmist.pdf'
//import PDF from 'react-pdf-js';

import PDF_file from './PDF_File'

import "./book.css" 


class FragmentOfBook extends Component {

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
   
  render() {
    return (
    <div className="FragmentOfBook">
      <div className="button-content" onClick={this.handleOpenModal}>
        Зміст
      </div>
      <div className="button-fragment" onClick={this.handleOpenModal2}>
        Фрагмент книжки
      </div>
      <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Modal #1 Global Style Override Example"
           onRequestClose={this.handleCloseModal}
        >

         <PDF_file/>
          <button onClick={this.handleCloseModal}>Close Modal</button>
        </ReactModal>
        <ReactModal 
           isOpen={this.state.showModal2}
           contentLabel="Modal #2 Global Style Override Example"
           onRequestClose={this.handleCloseModal2}
        >
          
          <button onClick={this.handleCloseModal2}>Close Modal</button>
        </ReactModal>
    </div>
    );
  }
}

export default FragmentOfBook