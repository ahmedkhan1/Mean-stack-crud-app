import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Country } from '../country';
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl : string ='http://localhost:8000';
  private headers = new HttpHeaders().set('Content-Type','application/json');
  private country: Country;

  constructor(private http: HttpClient) { }
  
  createCountry(country: Country)
  {
    return this.http.post(`${this.baseUrl}/create`,country,{headers:this.headers});
  }

  readCountry()
  {
    return this.http.get(`${this.baseUrl}/read`,{headers:this.headers});
  }

  updateCountry(country: Country)
  {
    return this.http.put(`${this.baseUrl}/update/${country._id}`,country,{headers:this.headers});
  }

  deleteCountry(id: string)
  {
    return this.http.delete(`${this.baseUrl}/delete/${id}`,{headers:this.headers});
  }

  setter(country:Country){
    this.country = country;
  }
  getter(){
    return this.country;
  }

}
