import { Injectable } from '@angular/core';

//firebase 
import { AngularFirestore } from '@angular/fire/compat/firestore';

// model
import { Registro } from '../model/Registro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareasService {

  constructor( private _angularFirestore:AngularFirestore ) { }

  

  getPost(){
    return this._angularFirestore
            .collection('registros', ref => ref.orderBy('fecha','desc'))  //coleccion ordenada
            .snapshotChanges()
  }

  getPostPorId( id ){
    return this._angularFirestore
            .collection('registros')
            .doc(id)
            .valueChanges()
  }

  createPost( registro:Registro ){
    return new Promise<Registro>(( resolve, reject ) => {
      this._angularFirestore
        .collection('registros')
        .add( registro )
        .then( response =>{
          console.log( response )
        }),
        (error)=>{
          reject( error )
        }
    })
  }

  uppdatePost( registro:Registro, id ){
    return this._angularFirestore
              .collection('registros')
              .doc(id)
              .update({
                nombre:registro.nombre,
                empresa:registro.empresa,
                kilos:registro.kilos,
                precio:registro.precio,
                fecha:registro.fecha
              })
  }

  deletePost( registro:Registro ){
    return this._angularFirestore
              .collection('registros')
              .doc( registro.id )
              .delete()
  }
  
}
