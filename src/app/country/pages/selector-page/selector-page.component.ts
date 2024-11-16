import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { coutryService } from '../../services/country.service';
import { region } from '../../interfaces/coutries.interfaces';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
 
})
export class SelectorPageComponent { 

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

  get regions(): region[]{
    return this.coutryService.regions
  }


}
