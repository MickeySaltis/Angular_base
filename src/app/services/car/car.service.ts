import { Injectable } from '@angular/core';
import { CarModel } from '../../models/car.model';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  // Type
  cars: Array<any>;

  carsRef!: AngularFireList<any>;
  carRef!: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) {

    //Valeur
    this.cars = [];

    for (let i = 1; i<=5; i++){
      this.cars.push({
        id: i,
        mark: 'Citröen',
        model: 'C' + i,
        year: 2000 + i,
        price: 500 * i,
        miles: 80 * i - i,
        status: 'Disponible'
      });
    }

   }

   // Functions
   
   /**
    * Switch status all cars
    * @param newStatus 
    */
   switchAllCarsStatus(newStatus: string) {
    for(const car of this.cars){
      car.status = newStatus;
    }
   }

   /**
    * Switch status car
    * @param newStatus 
    */
  switchCarStatus(carId: number, newStatus: string) {
    for (const car of this.cars) {
      if(car.id === carId){
        car.status = newStatus;
        break;
      }
    }
  }

  /**
   * Retrieved one car by this Id
   * @param carId 
   * @returns 
   */
  getElementById(carId: number) {
    for (const car of this.cars) {
      if (car.id === carId) {
        return car;
      }
    }
    return null;
  }

  AddCar(car: CarModel){
    this.carsRef.push({
      name: car.name,
    });
  }

  
}
