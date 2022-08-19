import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car/car.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-car-creator-view',
  templateUrl: './car-creator-view.component.html',
  styleUrls: ['./car-creator-view.component.css']
})
export class CarCreatorViewComponent implements OnInit {
  
  public carForm!: FormGroup;

  constructor(public carService: CarService, public fb: FormBuilder, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.carForm;
  }

  /**
   * Form requirement
   */
  formCar(){
    this.carForm= this.fb.group({
      name: ['', [Validators.required]],
    });
  }

  /**
   * Reset form
   */
  ResetForm(){
    this.carForm.reset();
  }

  /**
   * Form submission
   */
  submitCarData(){
    this.carService.AddCar(this.carForm.value);
    this.toastr.success(
      this.carForm.controls['name'].value + 'a été ajouté avec succés !!!'
    );
    this.ResetForm();
  }

}
