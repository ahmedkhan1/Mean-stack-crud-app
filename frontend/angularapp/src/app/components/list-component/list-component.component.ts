import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../shared/country.service';
import { Country } from '../../country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.scss']
})
export class ListComponentComponent implements OnInit {
  private countries: Country[];
  constructor(private _countryService: CountryService, private router: Router) { }

  ngOnInit() {
    this.readCountries();
  }

  readCountries(){
    this._countryService.readCountry().subscribe((data)=>{
      this.countries = data['country'];
    },err => {
      console.log(err);
    });
  }

  handleDelete(id: any){
    this._countryService.deleteCountry(id).subscribe((data)=>{
      console.log(data);
      this.countries.splice(this.countries.indexOf(id),1);
    },err =>{
      console.log(err);
    })
  }

  handleUpdate(countries: any){
    this._countryService.setter(countries);
    this.router.navigate(['/create']);
  }
}
