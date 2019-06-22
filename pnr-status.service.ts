import {Observable } from 'rxjs/internal/Observable';
import {HttpClient } from '@angular/common/http';
import { PNR } from 'src/app/pnr';
import { Injectable } from '@angular/core';
@Injectable()
export class PNRStatusService{

    
   /* */
   //injecting the HttpClient object required for making ajax/REST calls
   constructor(private http: HttpClient) {

   }
   fetchPNRStatus(pnrNo: number) :Observable<PNR> {
       let url="http://localhost:8181/rest-intro/rest/pnr/status?pnrNo="+pnrNo;
       return this.http.get<PNR>(url);
     
        
    }
}
