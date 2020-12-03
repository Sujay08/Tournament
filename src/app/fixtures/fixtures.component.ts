import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/http/api.service";
import { ApiConfiguration } from "../services/http/api-configuration";

@Component({
  selector: 'app-fixtures',
  templateUrl: './fixtures.component.html',
  styleUrls: ['./fixtures.component.css']
})
export class FixturesComponent implements OnInit {

  formData: any = {};
  fixtureDetails: any = [];
  profileDetails: any = [];
  constructor(
    private apiService: ApiService,
    private apiConfig: ApiConfiguration
  ) { }

  ngOnInit(): void {
    this.getFifaFixtureDetails();
  }

  getFifaFixtureDetails(){
    let url = this.apiConfig.baseUrl + this.apiConfig.fixturesFifa;
    this.apiService.get(url)
    .subscribe((res:any)=>{
      this.fixtureDetails = res.data;
      console.log(res)
      this.getProfileDetails();
    },err=>{
      console.log(err);
    })
  }

  getProfileDetails(){
    let url = this.apiConfig.baseUrl + this.apiConfig.allUsers;
    this.apiService.get(url)
    .subscribe((res:any)=>{
      this.profileDetails = res.data;
      console.log(res);
    },err=>{
      console.log(err);
    })
  }

  enterMatchScore(){
    console.log(this.formData);
    let url = this.apiConfig.baseUrl + this.apiConfig.fifaScore;
    this.apiService.post(url, this.formData)
    .subscribe((res:any)=>{
      console.log(res)
    },err=>{
      console.log(err);
    })
  }

}
