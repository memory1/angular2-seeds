import { Injectable} from "@angular/core";
import { Http, Response,Headers,RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Employee } from "../models/employee.model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class FormPoster {
  constructor(private http:Http) {

  }

  getLanguages() : Observable<any> {
    return this.http.get('http://localhost:3100/get-languages')
                .map(this.extractLanguages)
                .catch(this.handleError);
  }

  private extractLanguages(res: Response){
    let body = res.json();
    console.log(body);
    return body.fields || {};
  }
  postEmployeeForm(employee: Employee):Observable<any>{
    console.log("posting employee:" + employee);
    let body = JSON.stringify(employee);
    let headers = new Headers({'Content-type':'applicatoin/json'});
    let options = new RequestOptions({headers:headers});
    return this.http.post("http://localhost:3100/postemployee", body, options)
                    .delay(5000)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
  handleError(err: any) {
    console.error("Post Error:" + err);
    console.error(err.statusText);
    return Observable.throw(err.statusText);
  }
  extractData(res: Response){
    let body = res.json();
    return body.fields || {};
  }

}
