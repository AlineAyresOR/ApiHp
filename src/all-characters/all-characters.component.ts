import { Character } from './../models/characters.models';
import { HpService } from './../services/hp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-characters',
  templateUrl: './all-characters.component.html',
  styleUrls: ['./all-characters.component.css']
})
export class AllCharactersComponent implements OnInit {
  characters: any[] = [];

  constructor( private service:HpService) { }

  ngOnInit() {
    this.service.all().subscribe((characters:Character[]) => {
      console.log(characters);
      this.characters = characters;
    });
  }

}
