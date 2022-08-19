import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireDatabase,AngularFireList,AngularFireObject } from '@angular/fire/compat/database';
import { Brand } from '../../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  //brandRef: AngularFireObject<any>;
  brandsRef!: AngularFireList<any>;

  constructor(private afs: AngularFirestore, private db: AngularFireDatabase) { }

  // Methods

  getAll(){}

  getById(){}

  /**
   * Create Brand
   * @param brand 
   */
  AddBrand(brand: Brand){
    this.brandsRef.push({
      name: brand.name,
    });
  }

  /**
   * Method for add a new brand on the BDD
   * @param brand 
   */
  add(brand: Brand){
    return new Promise<void>(
      (res, rej)=>{
        this.afs
          .collection('brand')
          .add(brand.toPlainObj())
          .then(()=>res())
          .catch(err=>rej(err));
      }
    )
  }

  edit(){}

  delete(){} // 37.20
}
