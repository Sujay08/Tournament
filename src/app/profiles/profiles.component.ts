import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/http/api.service";
import { ApiConfiguration } from "../services/http/api-configuration";
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.css']
})
export class ProfilesComponent implements OnInit {

  profileDetails: any =[];

  constructor(
    private apiService: ApiService,
    private apiConfig: ApiConfiguration
  ) { }

  ngOnInit(): void {
    this.getProfileDetails();
  }

  getProfileDetails(){
    let url = this.apiConfig.baseUrl + this.apiConfig.allUsers;
    this.apiService.get(url)
    .subscribe((res:any)=>{
      this.profileDetails = res.data;
      // console.log(res)
    },err=>{
      console.log(err);
    })
  }

}
