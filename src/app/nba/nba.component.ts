import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/http/api.service";
import { ApiConfiguration } from "../services/http/api-configuration";

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.css']
})
export class NBAComponent implements OnInit {

  nbaDetails: any = [];

  constructor(
    private apiService: ApiService,
    private apiConfig: ApiConfiguration
  ) { }

  ngOnInit(): void {
    this.getTableDetails();
  }

  getTableDetails(){
    let url = this.apiConfig.baseUrl + this.apiConfig.nbaTable;
    this.apiService.get(url)
    .subscribe((res:any)=>{
      this.nbaDetails = res.data;
    },err=>{
      console.log(err);
    })
  }

}
