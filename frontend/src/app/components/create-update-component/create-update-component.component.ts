import { Component, OnInit } from '@angular/core';
import {Country } from '../../country';
import {CountryService } from '../../shared/country.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-update-component',
  templateUrl: './create-update-component.component.html',
  styleUrls: ['./create-update-component.component.scss']
})
export class CreateUpdateComponentComponent implements OnInit {

  private country: Country;
  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
    this.country = this.countryService.getter();
  }
  
  createUpdate(){
    if(this.country._id === undefined){
      this.countryService.createCountry(this.country)
      .subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/'])
      },err=>{
        console.log(err);
      });
    }else{
      this.countryService.updateCountry(this.country)
      .subscribe((data)=>{
        console.log(data);
        this.router.navigate(['/'])
      },err=>{
        console.log(err);
      });
    }
  }


}
