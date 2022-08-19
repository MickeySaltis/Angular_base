import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

import { CarService } from '../../services/car/car.service';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.component.html',
  styleUrls: ['./car-view.component.css']
})
export class CarViewComponent implements OnInit {

  // Type
  car: any;
  carsUrl!: string;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  // Initialization
  ngOnInit(): void {

    // Var = id Url
    const id = this.route.snapshot.params.id;

    this.carsUrl = "/cars";

    /**
     * Method for get detail car
     */
    this.car = this.carService.getElementById(+id);

  }

}
