import { RouterModule, Routes } from '@angular/router';

import { TestComponent } from './test/test.component';
import { SubTestComponent } from './sub-test/sub-test.component';
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'sub-test', component: SubTestComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];
export const routing = RouterModule.forRoot(appRoutes);
