import { Component, OnInit } from "@angular/core";
import { Login } from "./models/login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loginInfo: Login = {
    first_name: "Guest",
    last_name: "User",
    avatar: "avatar.png",
    title: "Guest"
  };
}
