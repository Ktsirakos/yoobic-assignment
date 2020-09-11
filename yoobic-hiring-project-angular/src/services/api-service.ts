import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiSerivce {
    constructor(private http: HttpClient) {

    }

    //Helper function for making request easily
    makeRequest(type, url, payload = {}) {
        switch (type.toLowerCase()) {
            case "post": {
                return this.http.post(url, payload).toPromise()
            }
            case "get": {
                return this.http.get(url).toPromise()
            }
            default: {
                console.error("[API SERVICE]", type, "Not implemeted yet")
                throw new Error(`[API CLIENT] ${type} not implemented yet`);
            }
        }
    }


    getPeople() {
        return new Promise((resolve, reject) => {
            this.makeRequest("GET", "https://swapi.dev/api/people")
                .then((value) => resolve(value))
                .catch((err) => reject(err))
        });
    }

}