import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.css']
})

export class AuthViewComponent implements OnInit {

  // Type
  auth: any;

  constructor(public authService: AuthService, public router: Router,) { }

  ngOnInit(): void {
    
    // Redirect to the cars view if a User session is active
    if (localStorage['user'] != 'null') {
      this.router.navigate(['cars']);
    }
  }

}
