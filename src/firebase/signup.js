import { firebaseAuth, firebaseDb } from './firebase';
import * as firebase from 'firebase';

export function userSignupRequest(datos, cb){
  return firebaseAuth.createUserWithEmailAndPassword(datos.email, datos.password)
    .then(function(cliente){
      console.log(cliente);
      firebaseDb.ref('clientes').child(cliente.uid).set({
        regCliente: cliente.uid,
        nombre: datos.nombre,
        apellido: datos.apellido,
        email: datos.email,
        date: firebase.database.ServerValue.TIMESTAMP,
        status: 1
      })

      var usu = 'bienvenido';
      return cb(usu);
    })
    .catch(function(error) {
      var mensaje = '';
      var errorCode = error.code;
      var errorMessage = error.message;

      switch (errorMessage) {
        case 'Password should be at least 6 characters':
          mensaje = 'El password debe tener al menos 6 digitos';
          break;
        case 'The email address is already in use by another account.':
          mensaje = 'El email se encuentra en uso.';
          break;
        default:
          mensaje = 'Error desconocido.';
      }

      //console.log(errorMessage);

      return cb(mensaje);
    });

}
