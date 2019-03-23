import React from 'react';
import { Input, Row, Icon, Button } from 'react-materialize';
import { connect } from 'react-redux';
import * as commentsActions from '../../actions/commentsActions';
import { CAMBIO_TITULO, CAMBIO_CONTENIDO } from '../../types/Commentypes';
import Loader  from '../loader/Loader'

const Guardar = (props) =>{

const localCambioInput =(event, caso)=> {
    props.cambioInput(caso, event.target.value);
}
const localGuardar =(event)=>{
  const { titulo, contenido } = props;
  const cuerpo = {
    title: props.titulo,
    body: props.contenido
  }
  props.agregar(cuerpo); 
};

  return (
    <div>
      <Row>
         <Input 
              s={12} 
              m={6} 
              label="Title" 
              value={props.titulo} 
              onChange={ 
                (event)=> localCambioInput(event, CAMBIO_TITULO)
              
              }
          >
             <Icon>input</Icon>
         </Input>
      </Row>
      <Row>
         <Input 
              s={12} 
              m={12} 
              label="Contenido" 
              type="textarea" 
              value={props.contenido}
              onChange={ 
                (event)=> localCambioInput(event, CAMBIO_CONTENIDO)
              
              }
              >
             <Icon>input</Icon>
            
         </Input>

      </Row>
      {props.mensaje}
      <Row className="center-align">
          <Button 
          className= {(props.loading) ? 'disabled' : '' }
          waves='light'
          onClick={ localGuardar }
          >
          Guardar
          <Icon left>save</Icon>
          </Button>
      </Row>

      {(props.loading) ? <Loader /> : '' }
    

    </div>
  )
};

const mapStateToProps = ({ commentsReducers }) => commentsReducers;


export default connect(mapStateToProps, commentsActions)(Guardar);