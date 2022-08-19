import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Router + Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { TableRowComponent } from './components/table-row/table-row.component';

// Services
import { CarService } from './services/car/car.service';
import { AuthService } from './services/auth/auth.service';
import { BrandService } from './services/brand/brand.service';

// Views
import { CarsViewComponent } from './views/cars-view/cars-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { CarViewComponent } from './views/car-view/car-view.component';
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { ForgotPasswordViewComponent } from './views/forgot-password-view/forgot-password-view.component';
import { VerifyEmailViewComponent } from './views/verify-email-view/verify-email-view.component';
import { BrandCreatorViewComponent } from './views/brand-creator-view/brand-creator-view.component';
import { BrandEditorViewComponent } from './views/brand-editor-view/brand-editor-view.component';
import { BrandsViewComponent } from './views/brands-view/brands-view.component';
import { CarCreatorViewComponent } from './views/car-creator-view/car-creator-view.component';

// Firebase services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// NGX Toastr 
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Modals
import { ModalConfirmDeleteComponent } from './modals/modal-confirm-delete/modal-confirm-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TableRowComponent,
    CarsViewComponent,
    ErrorViewComponent,
    CarViewComponent,
    AuthViewComponent,
    SignUpViewComponent,
    ForgotPasswordViewComponent,
    VerifyEmailViewComponent,
    BrandCreatorViewComponent,
    BrandEditorViewComponent,
    BrandsViewComponent,
    ModalConfirmDeleteComponent,
    CarCreatorViewComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],

  providers: [CarService, AuthService, BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
