import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';
import { DetailsPageComponent } from './details-page/details-page.component';
import { TestComponent } from './test/test.component';
import { SubTestComponent } from './sub-test/sub-test.component';


const appRoutes: Routes = [
	{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
	{ path: 'login', component: LoginComponent },
	{ path: 'register', component: RegisterComponent },
	{ path: 'test', component: TestComponent },
	{ path: 'sub-test', component: SubTestComponent },
  { path: 'details-page', component: DetailsPageComponent }
];
export const routing = RouterModule.forRoot(appRoutes);
