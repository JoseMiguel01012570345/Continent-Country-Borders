import { Injectable } from '@angular/core';
import { CountriesInterface, region, SmallCountry } from '../interfaces/coutries.interfaces';
import { map, Observable, of, tap } from 'rxjs';
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

        return this.http.get<CountriesInterface[]>(url).pipe(
            map( (countries:Array<CountriesInterface>) => countries.map(
                country =>
            ({
                name:country.name.common ,
                cca3: country.cca3 ,
                borders: country.borders ?? []

            }
         )  ) 
        ),)
    }

    CountryByAphaCode( aplhaCode:string ):Observable<SmallCountry>{

        console.log({aplhaCode:aplhaCode})

        const url = `${this.baseURL}/alpha/${aplhaCode}?fields=cca3,name,borders`
        return this.http.get<CountriesInterface>(url).pipe(
            map(country => ({
                name:country.name.common ,
                cca3: country.cca3 ,
                borders: country.borders ?? []

            }
         ) ) ,
        )
    }
}