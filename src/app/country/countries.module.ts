import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { countryRoutingModule } from './country-router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectorPageComponent } from './pages/selector-page/selector-page.component';



@NgModule({
  declarations: [ SelectorPageComponent ],
  imports: [
    CommonModule ,
    countryRoutingModule ,
    ReactiveFormsModule ,
  ]
})
export class CountriesModule { }
