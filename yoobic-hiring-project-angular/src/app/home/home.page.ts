import { Component } from '@angular/core';
import { ApiSerivce } from 'src/services/api-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  starwars: any[];
  constructor(
    private apiService: ApiSerivce
  ) {
  }

  ngOnInit() {

    /**
     * On initializing the component we retieve people and map
     * them to get certain values.
     */
    this.apiService.getPeople().then((value: any) => {
      this.starwars = value.results.map(elem => {
        return {
          "Name": elem.name,
          "Height": elem.height,
          "Mass": elem.mass,
          "Gender": elem.gender,
          "Hair Color": elem.hair_color,
          "Eye Color": elem.eye_color,
          "#Films": elem.films.length,
        }
      });
    })
  }

}
