import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-verify-email-view',
  templateUrl: './verify-email-view.component.html',
  styleUrls: ['./verify-email-view.component.css']
})
export class VerifyEmailViewComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
