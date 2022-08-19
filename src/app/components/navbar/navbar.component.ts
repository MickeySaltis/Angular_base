import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  // Type
  Username: string;
  RechercheActiv: string;
  isDisabled: boolean;

  disconnect: any;

  @Input() title!: string;

  constructor(public authService: AuthService) { 

    // Value
    this.Username = 'Toto';
    this.isDisabled = true;
    this.RechercheActiv = 'Activer';

    // Button disconnect
    if (localStorage['user'] != 'null'){
      this.disconnect = true;
    } else {
      this.disconnect = null;
    }
  }

  ngOnInit(): void {
    
  }

  // Method

  /**
   * Activate / deactivate the search bar
   */
  onClickButton() {
    this.isDisabled = !this.isDisabled;
    if (this.isDisabled==true) {
      this.RechercheActiv = 'Activer';
    } else {
      this.RechercheActiv = 'Désactiver';
    }
  }

}
