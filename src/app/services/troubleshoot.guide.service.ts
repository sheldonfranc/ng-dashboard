import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { User } from "app/users";

@Injectable()
export class TroubleshootingGuideService {
  issues: User[];
  constructor(protected httpClient: HttpClient) {}

  makeIssueRestCall() {
    return this.httpClient.get("https://reqres.in/api/users");
  }
  setIssuesObjet(issueObj: User[]) {
    this.issues = issueObj;
  }
  getIssues() {
    return this.issues;
  }
}
