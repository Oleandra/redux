import {
  PULL_COMMENTS, ERROR, CARGANDO, CAMBIO_TITULO, CAMBIO_CONTENIDO, AGREGADO
} from '../types/Commentypes';

const INITIAL_STATE = {
  comments: [],
  loading: false,
  error: '',
  titulo: '',
  contenido: ''
};

export default (state= INITIAL_STATE, action) => {
  switch (action.type) {
        case PULL_COMMENTS:
          return { ...state, comments: action.payload, loading: false };
        case ERROR:
          return {...state, error: action.payload, loading: false };
        case CARGANDO:
          return {...state, loading: true};
        case CAMBIO_TITULO:
          return {...state, titulo:action.payload};
        case CAMBIO_CONTENIDO:
          return {...state, contenido:action.payload}; 
        case AGREGADO:
           return {...state, titulo:'', contenido:'', loading: false, comments:
          [] };
    default: return state;
  }
}