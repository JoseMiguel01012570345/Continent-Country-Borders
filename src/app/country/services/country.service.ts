import { Injectable } from '@angular/core';
import { region, SmallCountry } from '../interfaces/coutries.interfaces';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class coutryService {
    constructor(
        private http: HttpClient

    ) { }

    private baseURL: string = 'https://restcountries.com/v3.1'

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

    getCountriesByRegion(region: region ): Observable<SmallCountry[]>{
     
        if(!region) return of([])
        
        const url: string = `${this.baseURL}/region/${region}?fields=cca3,name,borders`

        return this.http.get<SmallCountry[]>(url).pipe(
            tap(response => console.log({response}))
        )
    }

}