import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Times } from "../model/times";
import { Observable } from "rxjs";

@Injectable()
export class TimesService {
    
    constructor(private http: HttpClient) { }
    
        getTimes() : Observable<Times[]>{
            return this.http.get<Times[]>(
                `http://www.mocky.io/v2/5c5b463d3900001300e056a1`);
        }
}