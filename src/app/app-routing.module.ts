import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Views
import { AuthViewComponent } from './views/auth-view/auth-view.component';
import { SignUpViewComponent } from './views/sign-up-view/sign-up-view.component';
import { CarsViewComponent } from './views/cars-view/cars-view.component';
import { CarViewComponent } from './views/car-view/car-view.component';
import { ErrorViewComponent } from './views/error-view/error-view.component';
import { ForgotPasswordViewComponent } from './views/forgot-password-view/forgot-password-view.component';
import { VerifyEmailViewComponent } from './views/verify-email-view/verify-email-view.component';
import { BrandsViewComponent } from './views/brands-view/brands-view.component';
import { BrandCreatorViewComponent } from './views/brand-creator-view/brand-creator-view.component';
import { BrandEditorViewComponent} from './views/brand-editor-view/brand-editor-view.component';
import { CarCreatorViewComponent } from './views/car-creator-view/car-creator-view.component';

// Services
import { AuthGuard } from './services/guard/auth/auth-guard.service';

// Paths
const routes: Routes = [
  { path: 'auth', component: AuthViewComponent },
  { path: 'signup', component: SignUpViewComponent },
  { path: 'forgot-pass', component: ForgotPasswordViewComponent },
  { path: 'verify-email', component: VerifyEmailViewComponent },
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  { path: 'cars', canActivate: [AuthGuard], component: CarsViewComponent },
  { path: 'car/:id', canActivate: [AuthGuard], component: CarViewComponent },
  { path: 'brands', canActivate: [AuthGuard], component: BrandsViewComponent},
  { path: 'brand/new', canActivate: [AuthGuard], component: BrandCreatorViewComponent },
  { path: 'brand/edit/:id', canActivate: [AuthGuard], component: BrandEditorViewComponent },
  { path: 'car-new', canActivate: [AuthGuard], component: CarCreatorViewComponent },
  { path: 'not-found', component: ErrorViewComponent },
  { path: '**', redirectTo: 'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
