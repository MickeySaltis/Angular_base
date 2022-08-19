import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Brand } from '../../models/brand.model';
import { BrandService } from '../../services/brand/brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-creator-view',
  templateUrl: './brand-creator-view.component.html',
  styleUrls: ['./brand-creator-view.component.css']
})
export class BrandCreatorViewComponent implements OnInit {

  // Type
  newBrandForm!: FormGroup;
  errorMessage!: string;
  brand: Brand;

  constructor(private formBuilder: FormBuilder, private brandService: BrandService, private router: Router) {

    // Value
    this.brand = new Brand('');
    
   }

  ngOnInit(): void {
    this._initForm();
  }

  /**
   * Method for init all the forms
   */
  _initForm() {
    this.newBrandForm = this.formBuilder.group({
      'name':['', Validators.required]
    })
  }

  /**
   * Method called when the user try to add a new brand
   */
  onSubmitNewBrandForm(){
    this.errorMessage = 'null';

    this.brandService.add(this.brand)
      .then(()=>this.router.navigate(['brands']))
      .catch(errorMessage=>this.errorMessage=errorMessage);

  }
}
