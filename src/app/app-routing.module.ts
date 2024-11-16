import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectorPageComponent } from './country/pages/selector-page/selector-page.component';

const routes: Routes = [

  {
    path:'selector',
    loadChildren: () =>  import('./country/countries.module').then( m => m.CountriesModule ) ,

  },
  {
    path: '',
    pathMatch: 'full' ,
    redirectTo: 'selector'

  },
  {
    path: '**' ,
    redirectTo: 'selector'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
