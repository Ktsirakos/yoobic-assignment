import { Component } from '@angular/core';
import { ApiSerivce } from 'src/services/api-service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  array: any = [
    "Hello", "World"
  ]
  constructor(
    private apiService: ApiSerivce
  ) {

  }

  ngOnInit() {
    this.apiService.getPeople().then((value: any) => {
      this.array = value.results;
    })
  }

}
