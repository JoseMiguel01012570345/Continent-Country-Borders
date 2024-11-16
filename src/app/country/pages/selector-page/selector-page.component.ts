import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coutryService } from '../../services/country.service';
import { region } from '../../interfaces/coutries.interfaces';
import { switchMap } from 'rxjs';

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
  }
  
  get regions(): region[]{
    return this.coutryService.regions
  }
  
  onRegionChange():void{
    
    this.myForm.get('region')!.valueChanges.pipe(
      switchMap( region => this.coutryService.getCountriesByRegion( region ) )
    )
    .subscribe(region => console.log({region}))

  }


}
