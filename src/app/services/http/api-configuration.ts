import { Injectable } from '@angular/core';
/** * Global configuration for Api services */
@Injectable({  
    providedIn: 'root',
})

export class ApiConfiguration {
    baseUrl ='http://localhost:3000/api/';
    allUsers = "users/all";     
    fifaTable = "table/fifa"; 
    nbaTable = "table/nba"; 
}

// export interface ApiConfigurationInterface {    } 