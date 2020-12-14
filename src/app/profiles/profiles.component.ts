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
  allGameDetails: any = [];
  winPrecentage = [];
  percentage;
  constructor(
    private apiService: ApiService,
    private apiConfig: ApiConfiguration
  ) { }

  ngOnInit(): void {
    this.getTableDetails()
  }

  getTableDetails(){
    let url = this.apiConfig.baseUrl + this.apiConfig.allGames;
    this.apiService.get(url)
    .subscribe((res:any)=>{
      this.allGameDetails = res.data;
      this.getProfileDetails();
      this.winPercentage();
    },err=>{
      console.log(err);
    })
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

  winPercentage(){
    this.allGameDetails.forEach(game => {
    this.percentage = ((game.nba_won + game.fifa_won)/(game.nba_played + game.fifa_played)) * 100  
      if(isNaN(this.percentage)){
        this.percentage = 0
      }
      this.winPrecentage.push(this.percentage);
    });
  }

}
