import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { DisplayPageComponent } from './components/display-page/display-page.component';

// Routes of the application
const routes: Routes = [
 
  {
    path: 'display',
    component: DisplayPageComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: '**',
    redirectTo: '/display',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
