import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { CarService } from '../../services/car/car.service';
import { CarModel } from '../../models/car.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.css']
})
export class CarsViewComponent implements OnInit {

  // Type
  cars!: Array<any>;

  Car!: CarModel[];

  hideWhenNoCar: boolean = false;
  noData: boolean = false;
  preLoader: boolean = true;

  constructor(private carService: CarService, public authService: AuthService, toastr: ToastrService) {

  }


  // Initialization
  ngOnInit(): void {

    // Value
    this.cars = this.carService.cars;

    this.dataState();
    let c = this.carService.GetCarsList();
    c.snapshotChanges().subscribe(data=>{
      this.Car = [];
      data.forEach(item =>{
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Car.push(a as CarModel);
      })
    })
  }

  // Methods

  /**
   * Switch status all cars
   * @param newStatus 
   */
  onClickSwitchAllCarsStatus(newStatus:string) {
    this.carService.switchAllCarsStatus(newStatus);
  }

  /**
   * Display list of vehicles
   */
  dataState(){
    this.carService.GetCarsList().valueChanges().subscribe(data=>{
      this.preLoader = false;
      if(data.length <= 0){
        this.hideWhenNoCar = false;
        this.noData = true;
      }else{
        this.hideWhenNoCar = true;
        this.noData = false;
      }
    })
  }

}
