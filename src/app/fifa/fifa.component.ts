import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/http/api.service";
import { ApiConfiguration } from "../services/http/api-configuration";

@Component({
  selector: 'app-fifa',
  templateUrl: './fifa.component.html',
  styleUrls: ['./fifa.component.css']
})
export class FIFAComponent implements OnInit {

  fifaDetails: any = [];

  constructor(
    private apiService: ApiService,
    private apiConfig: ApiConfiguration
  ) { }

  ngOnInit(): void {
    this.getTableDetails();
  }

  getTableDetails(){
    let url = this.apiConfig.baseUrl + this.apiConfig.fifaTable;
    this.apiService.get(url)
    .subscribe((res:any)=>{
      this.fifaDetails = res.data;
      console.log(this.fifaDetails)
    },err=>{
      console.log(err);
    })
  }

}
