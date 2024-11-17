import { CommonModule, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coutryService } from '../../services/country.service';
import { region, SmallCountry } from '../../interfaces/coutries.interfaces';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
 
})
export class SelectorPageComponent implements OnInit { 

  public myForm: FormGroup 

  constructor( 
    private fb:FormBuilder ,
    private coutryService: coutryService ,
  ){

    this.myForm = this.fb.group({
  
      region: ['',[Validators.required]],
      country: ['',[Validators.required]],
      border: ['',[Validators.required]],
   
    }
    
    )
  }
  ngOnInit(): void {
    this.onRegionChange()
    this.onCountryChange()
  }
  
  get regions(): region[]{
    return this.coutryService.regions
  }
  
  coutriesByRegion: SmallCountry[] = []
  borders: string[] = []
  
  onRegionChange():void{
    
    this.myForm.get('region')!.valueChanges.pipe(
      switchMap( region => this.coutryService.getCountriesByRegion( region ) )
    )
    .subscribe( region => {
      this.coutriesByRegion = region
    } )
  }
  
  onCountryChange(): void{
    
    this.myForm.get('country')!.valueChanges.pipe(
      switchMap( ( alphaCode ) =>
         this.coutryService.CountryByAphaCode( alphaCode ) )
    )
    .subscribe( country => {
      console.log({country:country})
        this.borders = country.borders
    } )


  }

}
