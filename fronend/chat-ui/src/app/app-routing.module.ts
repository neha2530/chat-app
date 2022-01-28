import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { YComponent } from './y/y.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    pathMatch: "full"
  },
   {
     path: "register",
     component: RegisterComponent
   }, 
  {
    path:"y",
    component:YComponent,

  },
  {
    path:"welcome",
    component:WelcomeComponent,
  }
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
