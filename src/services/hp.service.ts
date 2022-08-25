import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from 'src/models/characters.models';

@Injectable({
  providedIn: 'root'
})
export class HpService {
  [x: string]: any;
  private allcharacters: any[];
  private ApiUrl = 'http://hp-api.herokuapp.com/api/characters'

constructor( private httpClient:HttpClient) {
  this.allcharacters = [];
}

get characters(){
  return this.allcharacters;
}

all():Observable<Character[]>{
  return this.httpClient.get<Character[]>(this.ApiUrl);
}

}
