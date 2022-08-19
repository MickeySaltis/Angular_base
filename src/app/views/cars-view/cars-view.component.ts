import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';
import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-cars-view',
  templateUrl: './cars-view.component.html',
  styleUrls: ['./cars-view.component.css']
})
export class CarsViewComponent implements OnInit {

  // Type
  cars!: Array<any>;

  constructor(private carService: CarService, public authService: AuthService) {

   }


  // Initialization
  ngOnInit(): void {

    // Value
    this.cars = this.carService.cars;
  }

  // Methods

  /**
   * Switch status all cars
   * @param newStatus 
   */
  onClickSwitchAllCarsStatus(newStatus:string) {
    this.carService.switchAllCarsStatus(newStatus);
  }
}
