import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authenticationService';
import { AppTestHelperService } from './services/appTestHelper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  username: string = '';
  password: string = '';
  loginState : string = this.authenticationService.state;
 
  constructor(private authenticationService: AuthenticationService, 
    private appTestHelperService: AppTestHelperService) {
     }

  ngOnDestroy(): void {
    this.appTestHelperService.ngOnDestroy();
  }
  ngOnInit(): void {
    this.appTestHelperService.ngOnInit();
  }

  public logoutUser() : void {
    this.authenticationService.logout(this.username);
    this.loginState = this.authenticationService.state;
    console.log(`app clicked logout button`)
  }

  public async loginUser() : Promise<void> {
    await this.authenticationService.login(this.username, this.password);
    this.loginState = this.authenticationService.state;
    console.log(`app clicked login button`)
  }
}
