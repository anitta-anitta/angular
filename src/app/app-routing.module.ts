import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';
import { TranscationHistoryComponent } from './transcation-history/transcation-history.component';


const routes: Routes = [ 
  { path:'', component: LoginComponent},
  { path:'home', component: HomeComponent},
  { path:'transcation-history', component: TranscationHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
