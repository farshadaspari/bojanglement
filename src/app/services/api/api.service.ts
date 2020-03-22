import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private _http: HttpClient) { }

    ////getting data for home component
    //getHomeData()
    //{
    //  return this._http.get(config.url + config.bucket_slug + "/object-type/homes", {
    //    params: {
    //      read_key: config.read_key,
    //    }
    //  })
    //}

    // get data of services
    getValues(): Promise<any> {
        return this._http.get("http://10.0.0.130/api/" + "values", {}).toPromise();
    }

    ////about us data
    //getAboutUsData()
    //{
    //  return this._http.get(config.url + config.bucket_slug + "/object-type/abouts", {
    //    params: {
    //      read_key: config.read_key,
    //    }
    //  })
    //}

    ////send message
    //sendMessage(data: any)
    //{
    //  return this._http.post(config.url + config.bucket_slug + "/add-object/",{
    //    title: data.email, content: data.message, slug: data.name, type_slug: 'clients', write_key: config.write_key,

    //    metafields: [
    //      {
    //        key: "name",
    //        type: "text",
    //        value: data.name
    //      },
    //      {
    //        key: "email",
    //        type: "text",
    //        value: data.email
    //      }
    //    ]

    //  })
    //}


}
