import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})

export class AuthenticationService {

  public state: string;
  constructor() {
  }

  public async login(user: string, password: string): Promise<void> {
    this.state = "loggedIn";
    console.log(`login to backend. user: ${user}, pass: ${password}`);
  }

  public async logout(user: string): Promise<void> {
    this.state = "loggedOut";
    console.log(`logout from backend. logout user: ${user}`);
  }
}
