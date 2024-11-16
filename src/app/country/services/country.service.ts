import { Injectable } from '@angular/core';
import { region } from '../interfaces/coutries.interfaces';

@Injectable({providedIn: 'root'})
export class coutryService {
    constructor() { }

    private region: region[] = 
    [ 
        region.Africa , 
        region.America ,
        region.Asia ,
        region.Europe ,
        region.Ocean 
    ]

    get regions(): region[]{
        
        return [ ...this.region ]
    }

}