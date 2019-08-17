import { Component, OnInit } from '@angular/core';
import {Country } from '../../country';
import {CountryService } from '../../shared/country.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar-component',
  templateUrl: './navbar-component.component.html',
  styleUrls: ['./navbar-component.component.scss']
})
export class NavbarComponentComponent implements OnInit {

  constructor(private router: Router, private countryService: CountryService) { }

  ngOnInit() {
  }
  handleNewCountry(event :any){
    event.preventDefault();
    this.countryService.setter(new Country());
    this.router.navigate(['/create-or-edit']);

  }
}
